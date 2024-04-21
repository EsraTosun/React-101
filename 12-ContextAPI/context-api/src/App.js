import ChangeTheme from "./components/ChangeTheme";
import ThemeContext from "./contexs/ThemeContext";

function App() {
  return (
    <div className="App">
      {/* Veriye erişmemizi sağlar */}
      <ThemeContext.Provider value="light">
        <ChangeTheme />  {/* Temayı değiştirmemizi sağlar */}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
