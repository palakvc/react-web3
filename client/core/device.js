const size = {
  small: "575px",
  medium: "767px",
  large: "991px",
  extraLarge: "1199px",
  largest: "1399px",
};

export const device = {
  xs: `(max-width: ${size.small})`,
  sm: `(max-width: ${size.medium})`,
  md: `(max-width: ${size.large})`,
  lg: `(max-width: ${size.extraLarge})`,
  xl: `(max-width: ${size.largest})`,
};
