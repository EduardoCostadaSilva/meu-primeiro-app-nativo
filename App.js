import Home from "./src/Home";
import { Appearance, StyleSheet, Text, View } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";


export default function app() {
  return (
    <PaperProvider theme={colorScheme == "dark" ? dark : theme}>
      <Home />
    </PaperProvider>
  );
}

//<PaperProvider theme={colorScheme == 'theme' ? theme : dark} /> // botar no thema escuro

const theme = {
  ...DefaultTheme,
  roudness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
    primary: "#131313",
    accent: "#550000",
    danger: "#ed1c24",
  },
};

const dark = {
  ...DefaultTheme,
  roudness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: "#131313",
    primary: "#fff",
    accent: "#550000",
    danger: "#ed1c24",
  },
};

const colorScheme = Appearance.getColorScheme();
