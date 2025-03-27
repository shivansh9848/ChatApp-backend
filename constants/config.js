const corsOptions = {
  origin: [process.env.CLIENT_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHAT_TOKEN = "chat-token";

export { corsOptions, CHAT_TOKEN };
