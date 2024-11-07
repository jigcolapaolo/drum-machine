interface Props {
    soundName: string;
    volume: string;
    handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePower: () => void;
    power: boolean;
}

export const DrumPanel: React.FC<Props> = ({
  soundName,
  volume,
  handleVolumeChange,
  handlePower,
  power,
}) => {
  return (
    <div id="drum-panel">
      <div className="drum-buttons">
        Power
        <div id="power" onClick={handlePower}>
          <div
            style={{
              background: power
                ? "radial-gradient(red, #222) padding-box"
                : "radial-gradient(#222, brown) padding-box",
              boxShadow: power ? "1px 1px 15px red" : "none",
            }}
          ></div>
        </div>
      </div>
      <p id="display">{soundName}</p>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
      <small>Drum Machine</small>
    </div>
  );
};
