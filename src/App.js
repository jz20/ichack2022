import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Spotify from 'react-spotify-embed';
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import "@fontsource/arima-madurai";



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

      <Box
       sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        justifyContent: 'space-between',
                        margin: "200px 200px 0 200px",
                        backgroundColor: "transparent",

                      }}
      >
      <span className="h1">
        <Typography font="arima-madurai" variant="h1">
            Hello!
        </Typography>
        <form onSubmit={doSubmit}>
        <label>
          <br></br>
          <TextField label="How was your day?" variant="outlined" type="text" name="textarea" value={text} onChange={(event) => setText(event.target.value)}/>
        </label>
        <Button variant="outlined">Find my playlist</Button>
      </form>
      </span>
      <br></br>
      <Spotify link={`https://open.spotify.com/playlist/${playlist}?si=3db00481f37344fe`}/>
      </Box>
  </section>
  );
}

export default App;
