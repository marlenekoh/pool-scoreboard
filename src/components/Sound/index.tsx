import { Audio } from "expo-av";

const initializeSound = async (sound: string) => {
  const mySound = new Audio.Sound();
  await mySound.loadAsync(require("../../../assets/sounds/beep.mp3"));
  await mySound.setVolumeAsync(1);
  return mySound;
};

const Beep = initializeSound("beep");

export const Sound = { Beep };
