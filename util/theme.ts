import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./customTheme";

export const theme = extendTheme({
  components: { Button: buttonTheme },
});
