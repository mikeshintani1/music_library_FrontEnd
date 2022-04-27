import React, { useState } from 'react';
import "./AddEntryForm.css";


const AddEntryForm = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release, setRelease] = useState('');
    const [genre, setGenre] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        let song = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release: release,

        };
        console.log(song);
        props.addNewSongProperty(song);
    }

    return (  
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Title</label>
                <input type='text' className='form-control' value={title} onChange={(event) => setTitle(parseFloat(event.target.value))}/>
            </div>
            <div className='form-group'>
                <label>Artist</label>
                <input type='text' className='form-control' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Album</label>
                <input type='text' className='form-control' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Genre</label>
                <input type='text' className='form-control' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Release Date</label>
                <input type='text' className='form-control' value={release} onChange={(event) => setRelease(event.target.value)}/>
            </div>
                <button type='submit' className="add_btn" style={{'margin-top': '1em'}}>Add</button>
        </form>
    );
}
 
export default AddEntryForm;