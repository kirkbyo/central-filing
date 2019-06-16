// Converts string to be used within an HTML `id`. Primarily used for deep linking.
// Example:
// idify("Hello world") -> "hello-world"
export function idify(str) {
  return str.toLocaleLowerCase().replace(" ", "-")
}
