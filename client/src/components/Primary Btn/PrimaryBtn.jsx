import React, { memo } from "react";

const PrimaryBtn = memo(({ children, className, styles, onClick }) => {
  return <button className={`bg-green-500 hover:bg-green-300 ${className}`} style={styles} onClick={onClick}>{children}</button>;
});

export default PrimaryBtn;
