import "./style.css";
import { renderDialogue } from "./utils";

renderDialogue();

document.addEventListener(
  "keyup",
  (e) => e.code === "Space" && renderDialogue()
);

document.addEventListener("touchend", () => renderDialogue());

window.addEventListener("orientationchange", () =>
  setTimeout(renderDialogue, 50)
);
