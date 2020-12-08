import isPropValid from "@emotion/is-prop-valid"
import styled from "@emotion/styled"
import * as React from "react"
import theme from "../../theme/units"

type ButtonSize = {
  fontSize?: string
  padding?: string
}

const buttonSizeProps: { [key: string]: ButtonSize } = {
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
    bg: `${theme.colors["yellow"][400]}`,
    color: "black",
    hoverBg: `${theme.colors["yellow"][500]}`,
    activeBg: `${theme.colors["yellow"][600]}`,
  },
  cyan: {
    bg: `${theme.colors["cyan"][400]}`,
    color: "black",
    hoverBg: `${theme.colors["cyan"][500]}`,
    activeBg: `${theme.colors["cyan"][600]}`,
  },
}

function variantGhost(colorScheme: string) {
  if (colorScheme === "gray") {
    return {
      main: {
        backgroundColor: "inherit",
      },
      hover: {
        backgroundColor: theme.colors.gray[100],
      },
      active: {
        backgroundColor: theme.colors.gray[200],
      },
    }
  }

  return {
    main: {
      color: theme.colors[colorScheme][600],
      backgroundColor: "transparent",
    },
    hover: {
      backgroundColor: theme.colors[colorScheme][50],
    },
    active: {
      backgroundColor: theme.colors[colorScheme][100],
    },
  }
}

function variantSolid(colorScheme: string) {
  if (colorScheme === "gray") {
    return {
      main: {
        background: theme.colors.gray[200],
      },
      hover: {
        background: theme.colors.gray[300],
      },
      active: {
        background: theme.colors.gray[400],
      },
    }
  }

  const {
    bg = `${theme.colors[colorScheme][500]}`,
    color = "white",
    hoverBg = `${theme.colors[colorScheme][600]}`,
    activeBg = `${theme.colors[colorScheme][700]}`,
  } = accessibleColorMap[colorScheme] || {}

  return {
    main: {
      backgroundColor: bg,
      color,
    },
    hover: {
      backgroundColor: hoverBg,
    },
    active: {
      backgroundColor: activeBg,
    },
  }
}

interface ButtonProps {
  colorScheme?: string
  enableElevation?: boolean
  size?: string
  variant?: string
  isDisabled?: boolean
  type?: "button" | "reset" | "submit"
  className?: string
  children: React.ReactNode
}

const ButtonStyles = ({
  colorScheme = "gray",
  enableElevation,
  size = "md",
  variant = "solid",
  isDisabled,
}: ButtonProps) => {
  const fontSizeBySize = buttonSizeProps[size].fontSize
  const paddingBySize = buttonSizeProps[size].padding

  const variants = {
    solid: variantSolid(colorScheme),
    ghost: variantGhost(colorScheme),
  }

  return {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 250ms",
    userSelect: "none",
    position: "relative",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    outline: "none",
    fontWeight: 500,
    cursor: "pointer",
    opacity: isDisabled && 0.7,
    padding: paddingBySize,
    fontSize: fontSizeBySize,
    borderRadius: theme.radius.md,
    fontFamily: theme.fonts.body,
    boxShadow: enableElevation && theme.shadows.sm,
    borderWidth: 0,
    borderStyle: "solid",
    boxSizing: "border-box",
    ...(variant && variants[variant]?.main),

    "&:hover": !isDisabled && {
      boxShadow: theme.shadows.md,
      ...(variant && variants[variant]?.hover),
    },

    "&:active": !isDisabled && {
      ...(variant && variants[variant]?.active),
    },

    "&:focus": {
      boxShadow: theme.shadows.outline,
    },
  }
}

const ButtonElement = React.forwardRef(function Button(
  props: ButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  const { isDisabled, type, className, children, ...rest } = props

  return (
    <button
      ref={ref}
      className={className}
      disabled={isDisabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
})

const IGNORED_PROPS = ["color"]

const buttonConfig = {
  shouldForwardProp: (prop: string) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
}

export const Button = styled(ButtonElement, buttonConfig)(ButtonStyles)

if (process.env.NODE_ENV !== "production") {
  Button.displayName = "Button"
}
