import imgBandits1 from "./assets/bandits-1.jpg";
import imgFCitizens1 from "./assets/f-citizens-1.jpg";
import imgFCitizens2 from "./assets/f-citizens-2.jpg";
import imgFCitizens3 from "./assets/f-citizens-3.jpg";
import imgFCitizens4 from "./assets/f-citizens-4.jpg";
import imgMercenaries1 from "./assets/mercenaries-1.jpg";
import imgNovices1 from "./assets/novices-1.jpg";
import { ACTOR } from "./constants";
import dialoguesBandits from "./data/dialogues/bandits.json";
import dialoguesFCitizens from "./data/dialogues/f-citizens.json";
import dialoguesMercenaries from "./data/dialogues/mercenaries.json";
import dialoguesNovices from "./data/dialogues/novices.json";
import "./style.css";

const backgrounds = new Map();

backgrounds.set(ACTOR.BANDIT, [imgBandits1]);
backgrounds.set(ACTOR.MERCENARY, [imgMercenaries1]);
backgrounds.set(ACTOR.NOVICE, [imgNovices1]);

backgrounds.set(ACTOR.F_CITIZEN, [
  imgFCitizens1,
  imgFCitizens2,
  imgFCitizens3,
  imgFCitizens4,
]);

const dialogues = new Map();

dialogues.set(ACTOR.BANDIT, dialoguesBandits);
dialogues.set(ACTOR.MERCENARY, dialoguesMercenaries);
dialogues.set(ACTOR.NOVICE, dialoguesNovices);
dialogues.set(ACTOR.F_CITIZEN, dialoguesFCitizens);

export const data = Object.values(ACTOR)
  .map((actor) =>
    dialogues.get(actor).map((line) => ({
      actor,
      backgrounds: backgrounds.get(actor),
      line,
    }))
  )
  .flat();
