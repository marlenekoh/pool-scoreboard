import { Audio } from "expo-av";

const initSounds = async () => {
  const Beep = new Audio.Sound();
  await Beep.loadAsync(require("../../../assets/sounds/beep.mp3"));
  await Beep.setVolumeAsync(1);

  const BeepLong = new Audio.Sound();
  await BeepLong.loadAsync(require("../../../assets/sounds/beep-long.mp3"));
  await BeepLong.setVolumeAsync(1);

  return { Beep, BeepLong };
};

export const Sound = initSounds();
