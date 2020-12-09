import * as React from "react"
import { Spinner } from "./Spinner"

export default {
  title: "Spinner",
  decorators: [
    (Story: any) => (
      <div style={{ marginTop: "40px" }}>
        <Story />
      </div>
    ),
  ],
}

export const size = () => (
  <>
    <Spinner size="xs" />
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
    <Spinner size="xl" />
  </>
)

export const basic = () => (
  <Spinner
    thickness="4px"
    speed="0.65s"
    emptyColor="gray.200"
    color="blue.500"
    size="xl"
  />
)
