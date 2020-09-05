import { cloneElement } from "react";
import PropTypes from "prop-types";

const IconButton = ({ children, href, size }) => {
  const sizeClass = `w-${size}`;
  const icon = cloneElement(children, {
    className: `
      fill-current text-gray-600 hover:text-pink-500
      transform duration-400 ${sizeClass}`,
  });
  return (
    <a href={href} target="_blank">
      {icon}
    </a>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.node.isRequired,
  size: PropTypes.number.isRequired,
};

export default IconButton;
