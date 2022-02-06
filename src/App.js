import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Spotify from 'react-spotify-embed';


function App() {

  const [text, setText] = useState("");
  const [playlist, setPlaylist] = useState("6PESRz1MZWlElXYHkTAvqB");

  const doSubmit = async (event) => {
    console.log("Got text");
    event.preventDefault();
    const formData = new FormData(event.target);
    const text = formData.get("textarea");
    console.log(text);

    window.fetch(global.api_base_url + '/api/get_playlist',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      'sentence': text
      })
    }
    ).then(res => res.json() ).then(
      (result) => {
        setPlaylist(result["playlist_id"])
      }
    )
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
        <button>Find my playlist</button>
      </form>
      </span>
      <br></br>
      <Spotify link={`https://open.spotify.com/playlist/${playlist}?si=3db00481f37344fe`}/>
  </section>
  );
}

export default App;
