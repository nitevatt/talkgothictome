const BANDYTA = "Bandyta";
const NAJEMNIK = "Najemnik";
const NOWICJUSZ = "Nowicjusz";
const OBYWATELKA = "Obywatelka";

const actors = [BANDYTA, NAJEMNIK, NOWICJUSZ, OBYWATELKA];

const backgrounds = {
  [BANDYTA]: ["bandyci.jpg"],
  [NAJEMNIK]: ["najemnicy.jpg"],
  [NOWICJUSZ]: ["nowicjusze.jpg"],
  [OBYWATELKA]: [
    "obywatelki-1.jpg",
    "obywatelki-2.jpg",
    "obywatelki-3.jpg",
    "obywatelki-4.jpg",
  ],
};

const lines = {
  [BANDYTA]: [
    "Był w sztok pijany.",
    "Ciągle to samo.",
    "Co on wie o służbie.",
    "Dużo by mnie to kosztowało.",
    "Gdyby to zależało od nas, sprawy potoczyłyby się inaczej.",
    "Ja bym tego nie zrobił.",
    "Kto opowiada takie rzeczy.",
    "Mnie i tak nikt nie pyta.",
    "Mnie nie musisz o to pytać.",
    "Mogę ci powiedzieć o takich rzeczach.",
    "Musi po prostu więcej ćwiczyć.",
    "Naprawdę tak sądzisz?",
    "Nic się nie zmieni.",
    "Nie mam czasu na takie rzeczy.",
    "Nie można na tym polegać.",
    "Nie wiem, ty mi powiedz.",
    "Nie ze mną te numery.",
    "Nikt nie chce wiedzieć.",
    "On myśli, że to takie łatwie.",
    "Pouciekali jak zające, byłem całkiem sam.",
    "Powinen był wiedzieć lepiej.",
    "Przez to będzie jeszcze więcej kłopotów.",
    "Sam tak mówiłem.",
    "Tak jakby mnie to cokolwiek obchodziło.",
    "Tego jest więcej, wierz mi.",
    "To nie może być tak dalej.",
    "To tylko pogłoski.",
    "To wszystko tylko pogłoski.",
    "To żadna tajemnica.",
    "Trzymam się od tego z daleka.",
    "W końcu to była jego decyzja.",
    "Wcześniej czy później musiało się to zdarzyć.",
    "Widzi i słyszy się to i owo.",
    "Wiesz, mówi się o tym i o tamtym.",
    "Wszystko jest możliwe.",
    "Właściwie może być go tylko żal.",
    "Znasz już moje zdanie.",
  ],
  [NAJEMNIK]: [
    "Było dokładnie tak jak mówisz.",
    "Było tak jak mówisz.",
    "Czy coś się w końcu zmieni?",
    "I tak liczy się tylko siła, więc nie mów mi takich rzeczy.",
    "I to jest prawda.",
    "Inaczej bym się do tego zabrał.",
    "Jeżeli on tego nie widzi, to nie mogę mu pomagać wbrew jego woli.",
    "Kiepska sprawa.",
    "Mam swoje zdanie na ten temat.",
    "Mogę ci opowiedzieć o takich rzeczach.",
    "Moje zdanie i tak nikogo nie obchodzi.",
    "Myślisz, że ja mam lepiej?",
    "Mówią to i owo.",
    "Nic mnie już nie dziwi.",
    "Nie doszło do mnie nic na ten temat.",
    "Nie może tak dalej być.",
    "Nie można wierzyć we wszystko co się słyszy.",
    "Nie mów, że o tym nie wiesz.",
    "Nie mówię ci przecież nic nowego.",
    "Nie sądzę, żeby coś się zmieniło.",
    "Nie wiadomo już komu można ufać.",
    "Nie wiem czym on się tak denerwuje.",
    "Nie zasłużył sobie na to.",
    "Nie, ale on oczywiście wie wszystko lepiej.",
    "Nikt nie chce wiedzieć.",
    "Ode mnie nikt się niczego nie dowie.",
    "On nawet nie wie jak się trzyma miecz.",
    "Posłuchał niewłaściwych ludzi.",
    "Przecież wiedział o tym wcześniej.",
    "Przyszło mi to do głowy.",
    "Sam tak mówiłem.",
    "Skąd ty to znowu masz?",
    "Słyszę o tym po raz pierwszy.",
    "Tak, jakby mnie to cokolwiek obchodziło.",
    "To było oczywiste.",
    "To było wiadomo od dawna.",
    "To naprawdę nie mój problem.",
    "To tylko plotki.",
    "Trudno być tego pewnym.",
    "Trzeba po prostu słuchać.",
    "Trzeba silnie uderzyć w sam środek.",
    "Trzymam się od tego z daleka.",
    "Uciekał, jakby gonił go sam Beliar.",
    "W końcu i tak go oczywiście dorwaliśmy.",
    "W końcu to była jego decyzja.",
    "Zupełnie się z tobą zgadzam.",
    "Żadna wielka sprawa.",
  ],
  [NOWICJUSZ]: [
    "Biedakowi można tylko współczuć.",
    "Ciągle to samo.",
    "Czemu dowiaduję się o tym dopiero teraz?",
    "Dokładnie to samo powiedziałem.",
    "Dużo by mnie to kosztowało.",
    "Działam zawsze w imieniu Innosa.",
    "Innos karze sprawiedliwie.",
    "Krążą ostatnio różne plotki.",
    "Kto ci to powiedział?",
    "Mnie nie musisz o to pytać.",
    "Mogę ci opowiedzieć o takich rzeczach.",
    "Mogłeś powiedzieć wcześniej.",
    "Naprawdę myślisz?",
    "Nic tego nie zmieni.",
    "Nie mam czasu na takie rzeczy.",
    "Nie można na tym polegać.",
    "Nie mów, że to nie prawda.",
    "Nigdy by mi nie przyszło do głowy…",
    "Nikt nie chce wiedzieć.",
    "Nikt nie może występować przeciwko boskiemu porządkowi.",
    "On myśli, że to takie łatwie.",
    "Powinien być mądrzejszy.",
    "Tak dalej być nie może.",
    "Tak jest napisane w świętych pismach.",
    "Tak, jakby mnie to cokolwiek obchodziło.",
    "Tak, jakbym nie miał wystarczająco dużo problemów.",
    "To przecież oczywiste.",
    "To się nigdy nie zmieni.",
    "To żadna tajemnica.",
    "Trzeba uważać na to co się mówi.",
    "Trzymam się od tego z daleka.",
    "Tylko Innos wie co jest dobre, a co złe.",
    "W końcu to była jego decyzja.",
    "Wcześniej czy później musiało się to zdarzyć.",
    "Widzi i słyszy się to i owo.",
    "Wszystko jest możliwe.",
    "Z tego wyniknie tylko jeszcze więcej kłopotów.",
    "Ścieżka cnoty jest długa i kamienista.",
    "Żadna wielka sprawa.",
  ],
  [OBYWATELKA]: [
    "Lepiej by było gdyby się przymknął.",
    "Nie mów!",
    "Nikomu tego nie powtarzaj.",
    "To przecież okropne!",
    "Teraz każdy już o tym wie.",
    "Zawsze to powtarzałam.",
    "Ktoś musi pracować.",
    "Daj spokój, nie opowiadaj mi takich rzeczy.",
    "Słyszałam co innego.",
    "Nie wierzę w to!",
    "Tak, to bardzo typowe.",
    "Gdybym sama tego nie widziała…",
    "Naprawdę, sama widziałam.",
    "Przyszło nam żyć w niedobrych czasach.",
    "Kto to opowiada takie rzeczy.",
    "Tajemnica, o której wszyscy wiedzą.",
    "Mój mąż uważa inaczej.",
    "Nie mogę zajmować się wszystkim i wszystkimi.",
    "Doprawdy? To interesujące.",
  ],
};

const dialogues = actors
  .map((actor) =>
    lines[actor].map((line) => ({
      actor,
      backgrounds: backgrounds[actor],
      line,
    }))
  )
  .flat();

const getRandomDialogue = () => {
  return dialogues[Math.floor(Math.random() * dialogues.length)];
};

const applyDialogue = (dialogue) => {
  const randomBackground =
    dialogue.backgrounds[
      Math.floor(Math.random() * dialogue.backgrounds.length)
    ];

  const actor = document.querySelector(".actor-name");
  const body = document.querySelector("body");
  const text = document.querySelector(".dialogue-text");

  actor.innerHTML = dialogue.actor;
  body.style.backgroundImage = `url("./assets/images/${randomBackground}")`;
  text.innerHTML = dialogue.line;
};

applyDialogue(getRandomDialogue());

document.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    applyDialogue(getRandomDialogue());
  }
});

document.addEventListener("touchend", () => {
  applyDialogue(getRandomDialogue());
});
