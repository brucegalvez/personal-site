import PropTypes from "prop-types";

const IconButton = ({ children, href }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <div
      className="fill-current transform duration-200 
        text-gray-600 hover:text-pink-500 w-12"
    >
      {children}
    </div>
  </a>
);

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.node.isRequired,
};

export default IconButton;
