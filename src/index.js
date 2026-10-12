import { Bot } from "node-telegram-bot-api";
import { run } from "node-telegram-bot-api/node";
import { registerHandlers } from "./bot.js";

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error("BOT_TOKEN is not set. Create .env from .env.template");
  process.exit(1);
}

const bot = new Bot(token);

registerHandlers(bot);

run(bot).catch((err) => {
  console.error("bot crashed", err);
  process.exit(1);
});
