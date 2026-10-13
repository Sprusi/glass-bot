import { InlineKeyboardBuilder } from "node-telegram-bot-api";
import { BUTTONS_DATE, BUTTONS_TERM } from "./texts.js";

/** /new, шаг 1  */
export const startDateKeyboard = new InlineKeyboardBuilder()
  .text(BUTTONS_DATE.today, "date:today")
  .text(BUTTONS_DATE.yesterday, "date:yesterday")
  .row()
  .text(BUTTONS_DATE.customDate, "date:custom")
  .build();

/** /new, шаг 2  */
export const termKeyboard = new InlineKeyboardBuilder()
  .text(BUTTONS_TERM.twoWeeks, "term:14")
  .text(BUTTONS_TERM.month, "term:30")
  .row()
  .text(BUTTONS_TERM.threeMonths, "term:90")
  .text(BUTTONS_TERM.customTerm, "term:custom")
  .build();
