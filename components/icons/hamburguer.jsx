const HamburguerIcon = ({ open, setOpen, className }) => {
  return (
    <div
      className={`inline-block cursor-pointer ${className}`}
      onClick={() => {
        setOpen(!open);
      }}
    >
      {[
        "-rotate-45 -translate-x-2 translate-y-2",
        "bg-opacity-0",
        "rotate-45 -translate-x-2 -translate-y-2",
      ].map((line) => {
        return (
          <div
            key={line}
            className={`
            w-8 h-1 bg-white my-1 transform duration-400
            ${open ? line : ""}`}
          ></div>
        );
      })}
    </div>
  );
};
export default HamburguerIcon;
