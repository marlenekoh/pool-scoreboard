export const getFontStyleFromButtonSize = (
  buttonSize: "small" | "medium" | "large"
) => {
  switch (buttonSize) {
    case "small":
      return { h4: true };
    case "medium":
      return { h3: true };
    case "large":
      return { h2: true };
  }
};
