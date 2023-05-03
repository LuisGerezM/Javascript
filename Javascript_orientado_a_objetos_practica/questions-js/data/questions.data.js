import { Question } from "../models/question.models.js";
import { data } from "./data.js";

export const questions = data.map((item) => new Question(item.question, item.choices, item.answer));
