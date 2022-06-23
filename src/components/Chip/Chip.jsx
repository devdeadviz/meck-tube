import "./Chip.css";

const Chip = ({ chipText }) => {
  return (
    <div className="chip-wrapper">
      <p className="chip-text">{chipText}</p>
    </div>
  );
};

export { Chip };
