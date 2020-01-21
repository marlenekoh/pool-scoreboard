export const getFontSizeFromButtonSize = (
  buttonSize: "small" | "medium" | "large"
) => {
  switch (buttonSize) {
    case "small":
      return 16;
    case "medium":
      return 24;
    case "large":
      return 32;
  }
};
