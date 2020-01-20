export const getButtonSizeFromFontSize = (fontSize: number) => {
  if (fontSize < 16) {
    return "small";
  } else if (fontSize > 24) {
    return "large";
  }
  return "medium";
};
