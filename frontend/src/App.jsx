import Routes from './Routes';
import './App.css';
import ThemeConfig from './theme';
import GlobalStyles from './theme/GlobalStyles';

function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <Routes />
    </ThemeConfig>
  );
}

export default App;
