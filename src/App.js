import logo from "./logo.svg";
import Navbar from "./Navbar";
import Home from "./Homs";

function App() {
  const title = "Welcome to the New Blog";
  const likes = 99;
  const link = "https://www.google.com/";

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
       <Home/>
      </div>
    </div>
  );
}
export default App;
