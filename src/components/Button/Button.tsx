import theme from "../../theme/units"

type Dict = Record<string, any>

const buttonSizeProps = {
  sm: {
    fontSize: theme.fontSizes.xs,
    padding: `${theme.space[1]} ${theme.space[2]}`,
  },
  md: {
    fontSize: theme.fontSizes.sm,
    padding: `${theme.space[2]} ${theme.space[3]}`,
  },
  lg: {
    fontSize: theme.fontSizes.md,
    padding: `${theme.space[3]} ${theme.space[4]}`,
  },
}

type AccessibleColor = {
  bg?: string
  color?: string
  hoverBg?: string
  activeBg?: string
}

/** Accessible color overrides for less accessible colors. */
const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600",
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600",
  },
}

function variantSolid(props: Dict) {
  const { colorScheme: c } = props

  if (c === "gray") {
    return {
      main: {
        background: theme.colors.gray[200],
      },
      hover: {
        background: theme.colors.gray[300],
      },
      active: {
        bacground: theme.colors.gray[400],
      },
    }
  }

  const {
    bg = `${c}.500`,
    color = "white",
    hoverBg = `${c}.600`,
    activeBg = `${c}.700`,
  } = accessibleColorMap[c] || {}

  return {
    main: {
      background: bg,
      color,
    },
    hover: {
      background: hoverBg,
    },
    active: {
      backrgound: activeBg,
    },
  }
}
