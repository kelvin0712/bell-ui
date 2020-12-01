import borders from "./borders"
import breakpoints from "./breakpoints"
import colors from "./colors"
import radius from "./radius"
import shadows from "./shadows"
import { spacing } from "./spacing"
import typography from "./typography"
import zIndices from "./z-index"

const theme = {
  breakpoints,
  borders,
  colors,
  ...typography,
  radius,
  shadows,
  space: spacing,
  zIndices,
}

export type Theme = typeof theme

export default theme
