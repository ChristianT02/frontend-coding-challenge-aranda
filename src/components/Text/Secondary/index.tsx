import Text from "..";

const TextSecondary = ({ children, color, size, lineHeight }: any) => {
  return (
    <Text
      classNameInitial="textSecondary"
      size={size}
      color={color}
      lineHeight={lineHeight}
    >
      {children}
    </Text>
  );
};

export default TextSecondary;
