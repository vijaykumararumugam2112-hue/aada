import { useEffect, useMemo, useReducer, useRef } from "react";
import { steps } from "./aadavisData";
import { saveLead } from "../../services/lead.service";
import { sendLeadEmail } from "../../services/email.service";

const INTRO_COUNT = steps.filter(
  (step) => step.type === "bot"
).length;

// ------------------------------------
// Initial State
// ------------------------------------

const initialState = {
  messages: [],

  currentStep: INTRO_COUNT,

  isTyping: false,

  answers: {
  name: "",
  phone: "",
  email: "",
  service: "",
  budget: "",
  timeline: "",
  description: "",
},

isCompleted: false,
isSubmitted: false,

};

// ------------------------------------
// Reducer
// ------------------------------------

function reducer(state, action) {
  switch (action.type) {
    case "ADD_BOT_MESSAGE":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: crypto.randomUUID(),
            type: "bot",
            message: action.payload,
          },
        ],
      };

    case "ADD_USER_MESSAGE":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: crypto.randomUUID(),
            type: "user",
            message: action.payload,
          },
        ],
      };

    case "SET_ANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.field]: action.value,
        },
      };

    case "NEXT_STEP":
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };

      case "SET_TYPING":
  return {
    ...state,
    isTyping: action.payload,
  };

  case "SET_COMPLETED":
  return {
    ...state,
    isCompleted: action.payload,
  };

  case "SET_SUBMITTED":
  return {
    ...state,
    isSubmitted: action.payload,
  };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

// ------------------------------------
// Hook
// ------------------------------------

export default function useConversation() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const introStarted = useRef(false);

  // ------------------------------------
  // Intro Animation
  // ------------------------------------

  useEffect(() => {
    if (introStarted.current) return;

    introStarted.current = true;

    const introSteps = steps.filter(
      (step) => step.type === "bot"
    );

    let index = 0;

    const showNext = () => {
  if (index >= introSteps.length) {
    // Intro finished

    const firstQuestion = steps[INTRO_COUNT];

    if (firstQuestion) {
      dispatch({
        type: "ADD_BOT_MESSAGE",
        payload: firstQuestion.label,
      });
    }

    return;
  }

  dispatch({
    type: "ADD_BOT_MESSAGE",
    payload: introSteps[index].message,
  });

  index++;

  setTimeout(showNext, 900);
};

showNext();

}, []);

  // ------------------------------------
  // Current Question
  // ------------------------------------

  const currentQuestion = useMemo(() => {
    return steps[state.currentStep];
  }, [state.currentStep]);

    // ------------------------------------
  // Helper Functions
  // ------------------------------------

  const addBotMessage = (message) => {
    dispatch({
      type: "ADD_BOT_MESSAGE",
      payload: message,
    });
  };

  const addUserMessage = (message) => {
    dispatch({
      type: "ADD_USER_MESSAGE",
      payload: message,
    });
  };

  const saveAnswer = (field, value) => {
    dispatch({
      type: "SET_ANSWER",
      field,
      value,
    });
  };

  const nextStep = () => {
    dispatch({
      type: "NEXT_STEP",
    });
  };

 const setTyping = (typing) => {
  dispatch({
    type: "SET_TYPING",
    payload: typing,
  });
};
 const setCompleted = (completed) => {
  dispatch({
    type: "SET_COMPLETED",
    payload: completed,
  });
};

const setSubmitted = (submitted) => {
  dispatch({
    type: "SET_SUBMITTED",
    payload: submitted,
  });
};
  // ------------------------------------
  // Generic Submit Function
  // ------------------------------------

  const submitAnswer = (value) => {
  if (!currentQuestion) return;

  // Execute validation/business logic first
  let result = {
    botReply: "",
    nextStep: true,
  };

  if (currentQuestion.onSubmit) {
    result = currentQuestion.onSubmit({
      value,
      answers: state.answers,
    });
  }

  // Show user's message
  addUserMessage(value);

  // Show typing indicator
  setTyping(true);

  setTimeout(() => {
    setTyping(false);

    // Show bot reply
    if (result.botReply) {
      addBotMessage(result.botReply);
    }

    // ❌ Validation failed
    if (result.nextStep === false) {
  return;
}

    // ✅ Save answer only after validation succeeds
if (currentQuestion.field) {
  saveAnswer(currentQuestion.field, value);
}

if (result.completed) {
  setTimeout(() => {
    setCompleted(true);
  }, 0);

  return;
}

// Otherwise move to the next question
setTimeout(() => {
  nextStep();

  const nextQuestion = steps[state.currentStep + 1];

  if (nextQuestion?.label) {
    setTimeout(() => {
      addBotMessage(nextQuestion.label);
    }, 500);
  }
}, 700);

  }, 1000);
};

const submitLead = async () => {
  try {
    setSubmitted(true);

    addBotMessage("🚀 Submitting your request...");

    setTyping(true);

    // Save lead to Firestore
    const leadId = await saveLead(state.answers);

    // Send email (don't fail if email has an issue)
    try {
      await sendLeadEmail(state.answers);
    } catch (emailError) {
      console.error("Email failed:", emailError);
    }

    setTyping(false);

    addBotMessage(
      `✅ Your project request has been submitted successfully!\n\nReference ID: ${leadId}\n\nOur team will contact you shortly.`
    );
  } catch (error) {
    console.error("Lead save failed:", error);

    setTyping(false);
    setSubmitted(false);

    addBotMessage(
      "❌ Sorry! Something went wrong while submitting your request."
    );
  }
};

  // ------------------------------------
  // Return
  // ------------------------------------

  return {
  messages: state.messages,
  answers: state.answers,
  currentQuestion,
  isTyping: state.isTyping,
  isCompleted: state.isCompleted,
  isSubmitted: state.isSubmitted,
  submitAnswer,
  submitLead,
};
}