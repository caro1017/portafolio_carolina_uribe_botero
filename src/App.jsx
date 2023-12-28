import HomePage from "./pages/HomePage/HomePage";
import { ThemeProvider } from "./hooks/ThemeContext";
import LocaleContextProvider from "./contexts/translationsContext";

function App() {
  return (
    <LocaleContextProvider>
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </LocaleContextProvider>
  );
}

export default App;
