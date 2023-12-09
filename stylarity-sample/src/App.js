import logo from './logo.svg';
import './App.css';
import { ThemeProvider, useTheme } from "stylarity"

function App() {
  const theme = useTheme()
  return (
    <ThemeProvider>
      <div style={{ backgroundColor: theme.colors.background }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
