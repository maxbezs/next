const Paragraph = ({ className, children }) => {
  return (
    <p className={className + " text-base md:text-lg lg:text-xl mb-4"}>
      {children}
    </p>
  );
};

export default Paragraph;
