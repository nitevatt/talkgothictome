import { data } from "./data";
import { getRandomNumber, splitTextToLines } from "./helpers";

const getRandomDialogue = () => {
  return data[getRandomNumber(data.length)];
};

const getImg = () => {
  let img = document.querySelector("img");

  if (!img) {
    img = document.createElement("img");

    img.alt = "Dialogue scene";

    document.querySelector("body").prepend(img);
  }

  return img;
};

const applyDialogue = (dialogue) => {
  const img = getImg();

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = img.width = window.innerWidth;
  canvas.height = img.height = window.innerHeight;

  const background = new Image();

  background.src =
    dialogue.backgrounds[getRandomNumber(dialogue.backgrounds.length)];

  background.onload = () => {
    const wRatio = canvas.width / background.width;
    const hRatio = canvas.height / background.height;

    const ratio = wRatio > hRatio ? wRatio : hRatio;

    ctx.drawImage(
      background,
      0,
      0,
      background.width,
      background.height,
      (canvas.width - background.width * ratio) / 2,
      (canvas.height - background.height * ratio) / 2,
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

    img.src = canvas.toDataURL();
  };
};

export const renderDialogue = () => applyDialogue(getRandomDialogue());
