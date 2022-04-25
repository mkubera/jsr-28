import "./App.css";
import CoffeeList from "./components/CoffeeList";
import Basket from "./components/Basket";

const App = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <CoffeeList />
          <Basket />
        </header>
      </div>
    </>
  );
};

export default App;