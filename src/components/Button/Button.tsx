import "./Button.scss";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="button disable-select">
      {text}
    </button>
  );
};

export default Button;