import './App.css';
import Routers from "./Routes/Routers"
import { Header, Footer } from "./components"
import { useState } from "react"
import { ThemeContext } from './Context/ThemeContext';
import { NavigationContext } from './Context/NavigationContext';

function App() {
  const [theme, setTheme] = useState('main-theme')
  const [navstatus, setNavstatus] = useState(false)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavigationContext.Provider value={{ navstatus, setNavstatus }}>

        <div className={`App ${theme}`}>
          <Header />
          <Routers />
          <Footer />
        </div>
      </NavigationContext.Provider>
    </ThemeContext.Provider>

  );
}

export default App;
