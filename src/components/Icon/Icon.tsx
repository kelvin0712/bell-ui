import * as React from "react"
import styled from "@emotion/styled"

const fallbackIcon = {
  path: (
    <g stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        fill="none"
        d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      />
      <circle fill="none" strokeMiterlimit="10" cx="12" cy="12" r="11.25" />
    </g>
  ),
  viewBox: "0 0 24 24",
}

interface IconProps {
  color?: string
}

const IconStyles = ({ color }: IconProps) => {
  return {
    width: "1em",
    height: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    verticalAlign: "middle",
    color,
  }
}

const StyledIcon = styled("svg")(IconStyles)

const Icon = React.forwardRef(
  (props: any, ref: React.Ref<HTMLButtonElement>) => {
    const {
      viewBox,
      color = "currentColor",
      focusable = false,
      children,
      className,
      ...rest
    } = props

    const _path = (children ?? fallbackIcon.path) as React.ReactNode

    const _viewBox = viewBox ?? fallbackIcon.viewBox

    return (
      <StyledIcon
        {...rest}
        viewBox={_viewBox}
        ref={ref}
        focusable={focusable}
        className={className}
      >
        {_path}
      </StyledIcon>
    )
  },
)

if (process.env.NODE_ENV !== "production") {
  Icon.displayName = "Icon"
}

export default Icon
