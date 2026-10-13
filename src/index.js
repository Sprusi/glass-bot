import { Bot } from "node-telegram-bot-api";
import { run } from "node-telegram-bot-api/node";
import { getPlatformProxy } from "wrangler";
import { registerHandlers } from "./bot.js";
import { initDb } from "./db.js";

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error("BOT_TOKEN is not set. Create .env from .env.template");
  process.exit(1);
}

const { env, dispose } = await getPlatformProxy();
initDb(env.DB);

const bot = new Bot(token);

registerHandlers(bot);

try {
  await run(bot);
} catch (err) {
  console.error("bot crashed", err);
  process.exitCode = 1;
} finally {
  await dispose();
}
