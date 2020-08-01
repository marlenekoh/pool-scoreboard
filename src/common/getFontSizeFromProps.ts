export interface TextStyleProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  sub1?: boolean;
  sub2?: boolean;
}

export const getFontSizeFromProps = (props: TextStyleProps) => {
  if ("h1" in props) {
    return 48;
  } else if ("h2" in props) {
    return 32;
  } else if ("h3" in props) {
    return 24;
  } else if ("h4" in props) {
    return 16;
  } else if ("p1" in props || "h5" in props) {
    return 14;
  } else if ("p2" in props || "sub1" in props) {
    return 12;
  } else if ("p3" in props || "sub2" in props) {
    return 10;
  } else {
    return 14;
  }
};
