const corsOptions = {
  origin: ["http://localhost:3000/",process.env.CLIENT_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHAT_TOKEN = "chat-token";

export { corsOptions, CHAT_TOKEN };
