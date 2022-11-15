import "./style.css";
import { renderDialogue } from "./utils";

document.addEventListener("click", renderDialogue);
window.addEventListener("resize", renderDialogue);
document.fonts.load("1em Gothic2").then(renderDialogue);
