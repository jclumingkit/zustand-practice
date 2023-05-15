import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const minimal = defineStyle({
  border: "1px",
  borderColor: "gray.200",
  width: "100%",
});

export const buttonTheme = defineStyleConfig({
  variants: { minimal },
});
