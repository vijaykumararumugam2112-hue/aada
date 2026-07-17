export const initialConversationState = {
  currentStep: 0,

  messages: [],

  answers: {
    name: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
  },
};

export function addBotMessage(state, message) {
  return {
    ...state,

    messages: [
      ...state.messages,
      {
        id: Date.now() + Math.random(),
        type: "bot",
        message,
      },
    ],
  };
}

export function addUserMessage(state, message) {
  return {
    ...state,

    messages: [
      ...state.messages,
      {
        id: Date.now() + Math.random(),
        type: "user",
        message,
      },
    ],
  };
}

export function nextStep(state) {
  return {
    ...state,

    currentStep: state.currentStep + 1,
  };
}