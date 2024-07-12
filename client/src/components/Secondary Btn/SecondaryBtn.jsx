import React, { memo } from "react";

const SecondaryBtn = memo(({ children, className, styles, onClick }) => {
  return <button className={`bg-transparent border-2 border-white hover:bg-white hover:text-black hover:text-opacity-50 transition-colors duration-500 ${className}`} style={styles} onClick={onClick}>{children}</button>;
});

export default SecondaryBtn;
