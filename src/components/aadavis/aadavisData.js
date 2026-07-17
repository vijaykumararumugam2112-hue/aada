export const steps = [
  // ----------------------------
  // Intro
  // ----------------------------
  {
    id: "intro1",
    type: "bot",
    message: "👋 Hi! I'm AADAvis.",
  },
  {
    id: "intro2",
    type: "bot",
    message: "I'm your Digital Project Assistant.",
  },
  {
    id: "intro3",
    type: "bot",
    message: "I'll help you get your project started in just a minute.",
  },

  // ----------------------------
  // Name
  // ----------------------------
  {
    id: "name",
    type: "input",
    field: "name",
    label: "What's your name?",
    placeholder: "Enter your name",

    onSubmit: ({ value }) => ({
      botReply: `😊 Nice to meet you, ${value}!`,
      nextStep: true,
    }),
  },

  // ----------------------------
  // Phone
  // ----------------------------
  {
    id: "phone",
    type: "input",
    field: "phone",
    label: "📱 What's your mobile number?",
    placeholder: "Enter your mobile number",

    onSubmit: ({ value }) => {
      const phone = value.replace(/\D/g, "");

      if (!/^[6-9]\d{9}$/.test(phone)) {
        return {
          botReply:
            "❌ Please enter a valid 10-digit Indian mobile number.",
          nextStep: false,
        };
      }

      return {
        botReply: "✅ Perfect! We'll use this number to contact you.",
        nextStep: true,
      };
    },
  },

  // ----------------------------
  // Email
  // ----------------------------
  {
    id: "email",
    type: "input",
    field: "email",
    label: "📧 What's your email address?",
    placeholder: "Enter your email",

    onSubmit: ({ value }) => {
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(value)) {
        return {
          botReply:
            "❌ Please enter a valid email address.",
          nextStep: false,
        };
      }

      return {
        botReply:
          "📩 Great! We'll also send updates to your email.",
        nextStep: true,
      };
    },
  },

  // ----------------------------
  // Service
  // ----------------------------
  {
    id: "service",
    type: "options",
    field: "service",
    label: "Which service do you need?",

    options: [
      "🌐 Website Development",
      "📱 App Development",
      "📢 Meta & Google Ads",
    ],

    onSubmit: ({ value }) => ({
      botReply: `🚀 Excellent choice! ${value.replace(
        /🌐|📱|📢/g,
        ""
      ).trim()} is one of our specialties.`,
      nextStep: true,
    }),
  },

  // ----------------------------
  // Budget
  // ----------------------------
  {
    id: "budget",
    type: "options",
    field: "budget",
    label: "What's your estimated budget?",

    options: [
      "💰 Below ₹25,000",
      "💰 ₹25,000 - ₹50,000",
      "💰 ₹50,000 - ₹1,00,000",
      "💰 Above ₹1,00,000",
    ],

    onSubmit: ({ value }) => ({
      botReply: `💡 Great! ${value} helps us recommend the right solution.`,
      nextStep: true,
    }),
  },

  // ----------------------------
  // Timeline
  // ----------------------------
  {
    id: "timeline",
    type: "options",
    field: "timeline",
    label: "When do you want to start?",

    options: [
      "⚡ Immediately",
      "📅 Within 1 Month",
      "🗓️ Within 3 Months",
      "🤔 Just Exploring",
    ],

    onSubmit: ({ value }) => ({
      botReply: `📅 Perfect! ${value} gives us a clear timeline.`,
      nextStep: true,
    }),
  },

  // ----------------------------
  // Description
  // ----------------------------
  {
    id: "description",
    type: "input",
    field: "description",
    label: "📝 Tell us a little about your project.",
    placeholder: "Describe your project...",

    onSubmit: ({ answers }) => ({
  botReply: `🎉 Thank you ${answers.name}! Please review your project details below before submitting.`,
   completed: true,
})
  },
];