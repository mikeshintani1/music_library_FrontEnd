import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    try{
      let response = await axios.get('https://www.fill in when ready.com/api');
      console.log(response.data);

    } catch (ex) {
      console.log('Error in getAllSongs API call!');
    
    }
  async function createSong(newSong){
    newSong:
    {
      title: "TEST SONG",
      album: "TEST ALBUM",
      artist: "TEST ART",
      genre: "TEST GENRE"
      releaseDate: "11/11/1111"
    }

    let response =await axios.post('http://blaha', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }
  
  }

  return(
    <div>
      <h1>Async Await Axios</h1>
      <button onClick = {getAllSongs}>Remake API Call</button>
    </div>
    );
}

export default App;