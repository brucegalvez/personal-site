const Button = ({ text, action }) => (
  <button
    className="py-2 px-6 rounded-md cursor-pointer border-2 border-gray-200
    transition duration-200 hover:bg-gray-200 hover:text-gray-800"
    onClick={() => action()}
  >
    {text}
  </button>
);

export default Button;
