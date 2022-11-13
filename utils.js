import { data } from "./data";
import { getRandomNumber, splitTextToLines } from "./helpers";

const getRandomDialogue = () => {
  return data[getRandomNumber(data.length)];
};

const applyDialogue = (dialogue) => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const background = new Image();

  background.src =
    dialogue.backgrounds[getRandomNumber(dialogue.backgrounds.length)];

  background.onload = () => {
    const ratio = canvas.height / background.height;

    ctx.drawImage(
      background,
      0,
      0,
      background.width,
      background.height,
      (canvas.width - background.width * ratio) / 2,
      0,
      background.width * ratio,
      background.height * ratio
    );

    const fontSize = 16;
    const lineHeight = fontSize * 1.75;

    const dialogBoxOffsetLeft = canvas.width * 0.15;
    const dialogBoxOffsetTop = fontSize * 2.5;
    const dialogBoxWidth = canvas.width - dialogBoxOffsetLeft * 2;

    const maxTextWidth = dialogBoxWidth - lineHeight * 2;
    const textOffsetTop = dialogBoxOffsetTop + lineHeight;

    ctx.font = `${fontSize}px Gothic2`;
    ctx.textAlign = "center";

    const lines = splitTextToLines(ctx, dialogue.line, maxTextWidth);

    ctx.fillStyle = "#00000077";
    ctx.fillRect(
      dialogBoxOffsetLeft,
      dialogBoxOffsetTop,
      dialogBoxWidth,
      lineHeight + fontSize + lines.length * lineHeight
    );

    ctx.fillStyle = "#e0e0e0";
    ctx.fillText(dialogue.actor, canvas.width / 2, textOffsetTop, canvas.width);

    ctx.fillStyle = "#e0e042";
    lines.forEach((line, i) => {
      ctx.fillText(
        line,
        canvas.width / 2,
        textOffsetTop + lineHeight * ++i,
        maxTextWidth
      );
    });
  };
};

export const renderDialogue = () => applyDialogue(getRandomDialogue());
