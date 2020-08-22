import PropTypes from "prop-types";

const Section = ({ children, centered }) => {
  return (
    <section
      className={`
        flex lg:p-24 p-12 lg:py-24 md:py-20 sm:py-16 items-center ${
          centered ? "justify-center" : ""
        } 
      `}
    >
      <div className="max-w-6xl">{children}</div>
    </section>
  );
};

Section.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node,
};

Section.defaultProps = {
  centered: false,
  children: null,
};

export default Section;
