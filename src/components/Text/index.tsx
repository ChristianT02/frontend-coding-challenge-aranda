import { useMemo } from "react";
import "./index.scss";

const Text = ({ children, classNameInitial, color, size, lineHeight }: any) => {
  const className = useMemo(
    () =>
      `${classNameInitial} ${color || "black"}-color font-size-${
        size || 0
      } line-height-${lineHeight || 0}`,
    [color, lineHeight, size, classNameInitial]
  );

  return <span className={className}>{children}</span>;
};

export default Text;
