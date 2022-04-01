import { red, green, yellow } from "@material-ui/core/colors";
export const getBG = (category) => {
  if (category === "Recovers") return green[200];
  if (category === "Cases") return yellow[200];
  if (category === "Deaths") return red[200];
  return green[500];
};
