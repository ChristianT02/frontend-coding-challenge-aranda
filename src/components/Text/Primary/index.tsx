import Text from "..";

const TextPrimary = ({ children, color, size, lineHeight }: any) => {
  return (
    <Text
      classNameInitial="textPrimary"
      size={size}
      color={color}
      lineHeight={lineHeight}
    >
      {children}
    </Text>
  );
};

export default TextPrimary;
