import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Spotify from 'react-spotify-embed';


function App() {

  const [text, setText] = useState("");

  const doSubmit = async (event) => {
    console.log("Got text");
    event.preventDefault();
    const formData = new FormData(event.target);
    const text = formData.get("textarea");
    console.log(text);
;
  };

  return (
  <section>
      <span className="h1">
        Hello
        <form onSubmit={doSubmit}>
        <label>
          How was your day?
          <br></br>
          <input type="text" name="textarea" value={text} onChange={(event) => setText(event.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </span>
      <br></br>
      <Spotify link="https://open.spotify.com/playlist/6PESRz1MZWlElXYHkTAvqB?si=3db00481f37344fe" />
  </section>
  );
}

export default App;
