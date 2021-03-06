import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import AddEntryForm from './Components/AddEntryForm/AddEntryForm';
import FilterBar from './Components/SearchBar/SearchBar';
import Header from './Components/ImageFolder/image';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  
  async function getAllSongs(){
    try{
      let response = await axios.get('http://127.0.0.1:8000/api/songs/');
      console.log(response.data);
      setSongs(response.data)
    } catch (ex) {
      console.log('Error in getAllSongs API call!');
    
    }
  }

  async function createSong(newSong){


    let response = await axios.post('http://127.0.0.1:8000/api/songs/', newSong);
    if(response.status === 201){
      await getAllSongs();
      // then((response) => setPost(response.data))
    }

    

  }

  return(
    <div className='backgroundall'>
      <h1 className='header_one'>Music Library</h1>
      <div>
      <button className ='getAllSongs' onClick = {getAllSongs}>Get All Songs!</button>
    </div>
      <div className='row-posts'>
        <MusicTable parentMusicTable = {songs}/>
      </div>  
      <div class name='row-createSong'>
        <AddEntryForm addNewSong = {createSong}/>
        </div>
        <div>
          <FilterBar songs = {songs} setSongs = {setSongs}/>
        </div>
        <Header />
    </div>
    );
  
}
export default App;