import isPropValid from "@emotion/is-prop-valid"
import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import * as React from "react"
import theme from "../../theme/units"
import { get } from "../../utils"

const sizes = {
  xs: {
    width: "0.75rem",
    height: "0.75rem",
  },
  sm: {
    width: "1rem",
    height: "1rem",
  },
  md: {
    width: "1.5rem",
    height: "1.5rem",
  },
  lg: {
    width: "2rem",
    height: "2rem",
  },
  xl: {
    width: "3rem",
    height: "3rem",
  },
}

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    },
    100% {
        transform: rotate(360deg);
    }
`

interface SpinnerProps {
  className?: string
  color?: string
  thickness?: string
  speed?: string
  label?: string
  emptyColor?: string
  size?: string
}

const SpinnerStyles = ({
  thickness = "2px",
  emptyColor,
  speed = "0.45s",
  size,
  color,
}: SpinnerProps) => {
  return {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: thickness,
    borderBottomColor: emptyColor
      ? get(theme.colors, emptyColor)
      : "transparent",
    borderLeftColor: emptyColor ? get(theme.colors, emptyColor) : "transparent",
    animation: `${spin} ${speed} linear infinite`,
    color: color && get(theme.colors, color),
    ...sizes[`${size}`],
  }
}

const spinenrConfig = {
  shouldForwardProp: (prop: string) => isPropValid(prop),
}

const StyledSpinner = styled("div", spinenrConfig)(SpinnerStyles)

const Spinner = React.forwardRef(function Spinner(
  props: SpinnerProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const { className, ...rest } = props
  return <StyledSpinner ref={ref} className={className} {...rest} />
})

export default Spinner
