// overly complicated destructuring but YOLO :poop:
const updateVariable = ({
  target: {
    name,
    value,
    dataset: { sizing: units = '' },
  },
}) => {
  const root = document.documentElement;
  root.style.setProperty(`--${name}`, `${value}${units}`);
};

const inputs = document.querySelectorAll('.controls input');
inputs.forEach((input) => {
  input.addEventListener('input', updateVariable);
});
