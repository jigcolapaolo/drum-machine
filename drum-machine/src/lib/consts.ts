import { BankItem, Keys } from "./types";

export const defaultBank: BankItem[] = [
  {
    key: "Q",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    name: "Heater 1",
  },
  {
    key: "W",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    name: "Heater 2",
  },
  {
    key: "E",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    name: "Heater 3",
  },
  {
    key: "A",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    name: "Heater 4",
  },
  {
    key: "S",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    name: "Clap",
  },
  {
    key: "D",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    name: "Open-HH",
  },
  {
    key: "Z",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    name: "Kick-n'-Hat",
  },
  {
    key: "X",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    name: "Kick",
  },
  {
    key: "C",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    name: "Closed-HH",
  },
] as const;

export const drumKeys: Keys[] = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
