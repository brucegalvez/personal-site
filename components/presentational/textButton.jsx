import PropTypes from "prop-types";

const TextButton = ({ text, action }) => (
  <button
    type="button"
    className="py-2 px-6 rounded-md cursor-pointer border-2 
    text-pink-500 border-pink-500
    transition duration-200 hover:bg-pink-500 hover:text-gray-900"
    onClick={action}
  >
    {text}
  </button>
);

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
};

TextButton.defaultProps = {
  action: null,
};

export default TextButton;
