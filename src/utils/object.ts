/**
 * Get value from object using a string path
 * @param obj - the object
 * @param string = the string path
 */

export function get(obj: object, string: string | number) {
  const keys = typeof string === "string" ? string.split(".") : [string]

  for (let i = 0; i < keys.length; i++) {
    if (!obj) {
      break
    }

    obj = obj[keys[i]]
  }

  return obj === undefined ? "" : obj
}
