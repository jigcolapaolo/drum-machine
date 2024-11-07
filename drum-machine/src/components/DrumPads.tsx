import { BankItem, Keys } from "../lib/types";

interface Props {
    keyPressed: Keys | null;
    bank: BankItem[];
    handleClick: (key: Keys) => void;
}

export const DrumPads: React.FC<Props> = ({ keyPressed, bank, handleClick }) => {
    return (
      <div id="drum-pads">
        {bank.map(sound => (
          <button 
            key={sound.key}
            id={sound.name}
            onClick={() => handleClick(sound.key)}
            className={`drum-pad ${keyPressed === sound.key? 'active' : ''}`}
          >
            {sound.key}
            <audio id={sound.key} className="clip" src={sound.src}>
              Audio format not supported.
            </audio>
          </button>
        ))}
      </div>
    )
}