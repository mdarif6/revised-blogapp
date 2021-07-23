import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("luigi");
    setAge(30);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        {name} is {age} old
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
