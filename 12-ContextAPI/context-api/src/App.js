import './style.css';
import { LangContextProvider } from "./contexs/LangContext";
import { ThemeContextProvider } from "./contexs/ThemeContext";
import Container from './Container';

const App = () => (
  <LangContextProvider>
    <ThemeContextProvider>
      <Container />
    </ThemeContextProvider> 
  </LangContextProvider>
);

export default App;
