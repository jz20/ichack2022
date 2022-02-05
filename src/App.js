import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { useState } from "react";
import Spotify from 'react-spotify-embed';


function App() {

  const [text, setText] = useState("");

  return (
  <section>
      <span className="h1">
        Hello
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <br></br>
          <Form.Control 
          as="textarea" 
          rows={3} 
          placeholder="How was your day??"
          onChange={(event) => setText(event.target.value)}
          />
          <br></br>
          <Button 
          type="submit" 
          className="my-2"
          onClick={console.log(text)}>
            Find my playlist
          </Button>
        </Form.Group>
      </span>
      <br></br>
      <Spotify link="https://open.spotify.com/playlist/6PESRz1MZWlElXYHkTAvqB?si=3db00481f37344fe" />
  </section>
  );
}

export default App;
