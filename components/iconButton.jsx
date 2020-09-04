import { cloneElement } from "react";
import PropTypes from "prop-types";

const IconButton = ({ children, href, size }) => {
  const icon = cloneElement(children, {
    className: `
      fill-current text-gray-600 hover:text-pink-500
      transform duration-400 w-${size}`,
  });
  return (
    <a href={href} target="_blank">
      {icon}
    </a>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IconButton;
