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
  const [playlist, setPlaylist] = useState("6t8MZHGhGyQ8vmT9lBTJYg");


  async function getPlaylist(t)  {
    console.log("Got text: " , t);

    window.fetch(global.api_base_url + '/api/get_playlist',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      'sentence': t
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
        <Typography font="arima-madurai" variant="h1" color="white" weight="50px">
            Hello from SentiTunes!
        </Typography>
        <form>
        <Box
         sx={{
                display: 'flex',
                flexDirection: 'row',
                margin: "40px 0 0 0",
            }}
         >
          <TextField multiline inputProps={{ style: { color: 'white'}}} className="TextField" label="How was your day?" variant="outlined" type="text" name="textarea" value={text} onChange={(event) => setText(event.target.value)}/>
        <Button className="Button" onClick={() => getPlaylist(text)} variant="outlined">Find my playlist</Button>
        </Box>
      </form>
      </span>
      <br></br>
      <Spotify className="Spotify" link={`https://open.spotify.com/playlist/${playlist}?si=3db00481f37344fe`}/>
      </Box>
  </section>
  );
}

export default App;
