import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle({
  html: {
    ...tw`font-pixelify`,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BaseStyles />
    <CustomStyles />
    <App />
  </StrictMode>
);
