/** @jsx jsx */
import { jsx } from "@emotion/core";
export function titleCase(string) {
  return string[0].toUpperCase() + string.substr(1, string.length - 1);
}
