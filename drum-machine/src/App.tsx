import "./styles/_app.scss";
import { defaultBank, drumKeys } from "./lib/consts";
import { useEffect, useState } from "react";
import { DrumPads } from "./components/DrumPads";
import { DrumPanel } from "./components/DrumPanel";
import { Keys } from "./lib/types";

export const App = () => {

  const [keyPressed, setKeyPressed] = useState<Keys | null>(null);
  const [bank] = useState(defaultBank);
  const [soundName, setSoundName] = useState("Welcome!");
  const [volume, setVolume] = useState("0.8");
  const [power, setPower] = useState(true);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  })

  
  const handlePower = () => {
    if (power) {
      setKeyPressed(null);
      setSoundName("OFF");
      setPower(false);
    } else {
      setSoundName("Welcome!");
      setPower(true);
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!power) return;
    const key = e.key.toUpperCase() as Keys;
    if (drumKeys.includes(key)) {
      setKeyPressed(key);
      playSong(key);
      setTimeout(() => {
        setKeyPressed(null);
      }, 100);
    }
  }
  
  const handleClick = (key: Keys) => {
    if (!power) return;
    setKeyPressed(key);
    playSong(key);
    setKeyPressed(null);
  }
  
  const playSong = (keyPressed: Keys) => {
    if (!power) return;
    const sound = bank.find(sound => sound.key === keyPressed);
    const audio: HTMLAudioElement | null = document.getElementById(keyPressed) as HTMLAudioElement;
    if (audio === null || !sound) return;
    setSoundName(sound.name);

    audio.currentTime = 0;
    audio.volume = parseFloat(volume);
	  audio.play();
  }
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!power) return;
    const { value } = e.target
    setVolume(value);
    setSoundName(`Volume ${Math.round(parseFloat(value) * 100)}%`);

    
    setTimeout(() => {
      setSoundName("");
    }, 5000);
  }
  

  return (
    <div id="drum-machine">
      <DrumPads
        keyPressed={keyPressed}
        bank={bank}
        handleClick={handleClick}
      />
      <DrumPanel
        soundName={soundName}
        volume={volume}
        handleVolumeChange={handleVolumeChange}
        handlePower={handlePower}
        power={power}
      />
    </div>
  );
};
