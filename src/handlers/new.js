// /new — диалог «новая пара линз»: дата начала → срок → итог
import {
  addDays,
  formatForUser,
  getToday,
  isFuture,
  parseUserDate,
} from "../dates.js";
import { startDateKeyboard, termKeyboard } from "../keyboards.js";
import { clearSession, setSession, STEP } from "../session.js";
import {
  ASK_START_DATE_INPUT_TEXT,
  ASK_START_DATE_TEXT,
  ASK_TERM_INPUT_TEXT,
  ASK_TERM_TEXT,
  doneText,
  FUTURE_DATE_TEXT,
  INVALID_DATE_TEXT,
  INVALID_TERM_TEXT,
} from "../texts.js";
import { parseTermDays } from "../utils/parse.js";

export const startNewDialog = async (ctx) => {
  await setSession(ctx.from.id, { step: STEP.START_DATE });
  await ctx.reply(ASK_START_DATE_TEXT, { reply_markup: startDateKeyboard });
};

export const handleNewDialogButton = async (ctx, type, value, session) => {
  if (type === "date" && session?.step === STEP.START_DATE) {
    return handleDateButton(ctx, value);
  }
  if (type === "term" && session?.step === STEP.TERM) {
    return handleTermButton(ctx, value, session);
  }
};

export const handleNewDialogText = async (ctx, text, session) => {
  if (session.step === STEP.START_DATE) return handleDateText(ctx, text);
  if (session.step === STEP.TERM) return handleTermText(ctx, text, session);
};

// Date
const handleDateButton = async (ctx, value) => {
  if (value === "today") return askTerm(ctx, getToday());
  if (value === "yesterday") return askTerm(ctx, addDays(getToday(), -1));
  if (value === "custom") return ctx.reply(ASK_START_DATE_INPUT_TEXT);
};

const handleDateText = async (ctx, text) => {
  const startDate = parseUserDate(text);
  if (!startDate) return ctx.reply(INVALID_DATE_TEXT);
  if (isFuture(startDate)) return ctx.reply(FUTURE_DATE_TEXT);

  return askTerm(ctx, startDate);
};

const askTerm = async (ctx, startDate) => {
  await setSession(ctx.from.id, { step: STEP.TERM, startDate });
  await ctx.reply(ASK_TERM_TEXT, { reply_markup: termKeyboard });
};

// Term
const handleTermButton = async (ctx, value, session) => {
  if (value === "custom") return ctx.reply(ASK_TERM_INPUT_TEXT);
  return finish(ctx, session.startDate, Number(value));
};

const handleTermText = async (ctx, text, session) => {
  const termDays = parseTermDays(text);
  if (!termDays) return ctx.reply(INVALID_TERM_TEXT);

  return finish(ctx, session.startDate, termDays);
};

const finish = async (ctx, startDate, termDays) => {
  const replaceDate = addDays(startDate, termDays);
  await clearSession(ctx.from.id);
  await ctx.reply(
    doneText(formatForUser(startDate), termDays, formatForUser(replaceDate)),
  );
};
