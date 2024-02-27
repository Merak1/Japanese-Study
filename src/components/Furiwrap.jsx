const FuriWrap = ({ children, color, bold }) => {
  //   return <span className="furi text-7xl bold">{children}</span>;
  return (
    <span
      className={`furi ${color ? color : ""}
       ${bold ? bold : ""} `}
    >
      {children}
    </span>
  );
};

export default FuriWrap;
