const typography = {
  /**
   * The fontSizes are derived from the major second (1.125) type scale,
   * which is a good scale for product websites
   */
  fontSizes: {
    xs: "0.79rem",
    sm: "0.889rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.266rem",
    xxl: "1.424rem",
  },

  fontWeights: {
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
  },

  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },

  fonts: {
    heading:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
    body:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
    mono:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
  },
}

export type Typography = typeof typography

export default typography
