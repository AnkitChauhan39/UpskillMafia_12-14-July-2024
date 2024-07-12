import React, { memo } from "react";

const PrimaryBtn = memo(({ children, className, styles, onClick }) => {
  return <button className={`bg-green-700 hover:bg-green-500 transition-colors duration-500 ${className}`} style={styles} onClick={onClick}>{children}</button>;
});

export default PrimaryBtn;
