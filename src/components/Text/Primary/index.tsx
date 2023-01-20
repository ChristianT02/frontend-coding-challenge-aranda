import Text from "..";
import "./index.scss";

const TextPrimary = ({ children }: any) => {
  return (
    <Text>
      <span className="primary"> {children} </span>
    </Text>
  );
};

export default TextPrimary;
