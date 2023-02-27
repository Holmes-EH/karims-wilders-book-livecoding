interface IButtonProps {
  handleClick: () => {};
}

const Button = ({ handleClick }: IButtonProps) => (
  <button onClick={handleClick}></button>
);

export default Button;

// conditionnal rendering
// type setState
