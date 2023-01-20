import "./index.scss";
import Text from "..";

const TextSecondary = ({ children }: any) => {
  return (
    <Text>
      <span className="secondary"> {children}</span>
    </Text>
  );
};

export default TextSecondary;
