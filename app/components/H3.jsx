const H3 = ({ styles, children }) => {
  return (
    <h3 className={styles + " text-xl md:text-2xl lg:text-3xl font-bold mb-4"}>
      {children}
    </h3>
  );
};

export default H3;
