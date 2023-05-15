import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, HStack, IconButton, useColorMode } from "@chakra-ui/react";

const TopBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack spacing={2}>
      <IconButton
        aria-label="Toggle Dark Mode"
        variant="minimal"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
      <Button variant="minimal">Load JSON</Button>
    </HStack>
  );
};

export default TopBar;
