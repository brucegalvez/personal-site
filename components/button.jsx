import PropTypes from "prop-types";

const Button = ({ text, action }) => (
  <button
    className="py-2 px-6 rounded-md cursor-pointer border-2 text-pink-500 border-pink-500
    transition duration-200 hover:bg-pink-500 hover:text-gray-800"
    onClick={() => action()}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Button;
