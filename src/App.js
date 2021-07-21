import logo from "./logo.svg";
import "./App.css";

function App() {
  const title = "Welcome to the New Blog";
  const likes = 99;
  const link = "https://www.google.com/";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{"Hello how are you"}</p>
        <p>{[1, 3, 5, 7, 9]}</p>
        <p>{Math.random() * 10}</p>
        <p>
          <a href={link}> Google </a>
        </p>
      </div>
    </div>
  );
}
export default App;
