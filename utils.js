import { data } from "./data";
import { getElement, getRandomNumber } from "./helpers";

const getRandomDialogue = () => {
  return data[getRandomNumber(data.length)];
};

const applyDialogue = (dialogue) => {
  const randomBackground =
    dialogue.backgrounds[getRandomNumber(dialogue.backgrounds.length)];

  const actor = getElement(".actor-name");
  const wrapper = getElement(".wrapper");
  const text = getElement(".dialogue-text");

  actor.innerHTML = dialogue.actor;
  text.innerHTML = dialogue.line;

  wrapper.style.backgroundImage = `url("${randomBackground}")`;
};

export const renderDialogue = () => applyDialogue(getRandomDialogue());
