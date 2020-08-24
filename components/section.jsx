import PropTypes from "prop-types";

const Section = ({ children, centered, id }) => {
  return (
    <section
      className={`
        flex lg:p-24 md:py-20 sm:py-16 sm:px-12 px-4 items-center ${
          centered ? "justify-center" : ""
        } 
      `}
      id={id}
    >
      <div className="max-w-6xl">{children}</div>
    </section>
  );
};

Section.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node,
  id: PropTypes.string,
};

Section.defaultProps = {
  centered: false,
  children: null,
};

export default Section;
