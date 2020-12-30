import * as React from "react"
import Icon from "./Icon"

interface CreateIconProps {
  viewBox?: string
  path?: React.ReactElement | React.ReactElement[]
  d?: string
  displayName?: string
}

export function createIcon(options: CreateIconProps) {
  const { viewBox = "0 0 24 24", path, d, displayName } = options

  const CreateIcon = React.forwardRef(
    (props: any, ref: React.Ref<HTMLButtonElement>) => (
      <Icon ref={ref} viewBox={viewBox} {...props}>
        {path ?? <path fill="currentColor" d={d} />}
      </Icon>
    ),
  )

  if (process.env.NODE_ENV !== "production") {
    CreateIcon.displayName = displayName
  }

  return CreateIcon
}
