import React, { memo } from "react";

const PrimaryBtn = memo(({ children, className, styles, onClick, disabled }) => {
  return <button disabled={disabled} className={`bg-green-700 hover:bg-green-500 transition-colors duration-500 disabled:bg-gray-300 ${className}`} style={styles} onClick={onClick}>{children}</button>;
});

export default PrimaryBtn;
