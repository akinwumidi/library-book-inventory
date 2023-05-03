import './App.css';
import Routers from "./Routes/Routers"
import { Header, Footer } from "./components"

function App() {
  return (
    <div className="App">
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
