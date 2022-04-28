import React, { useState } from 'react';
import "./AddEntryForm.css";


const AddEntryForm = (props) => {

    const [title, settitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setRelease] = useState('');
    const [genre, setGenre] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        let addNewSong = {
   
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre,

        };
        console.log(addNewSong);
        props.addNewSong(addNewSong);
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <h3 className='h3-css'>Add New Song!</h3>
            <div className='form-group'>
                <label className='label-group'>Title</label>
                <input type='text' className='form-control' value={title} onChange={(event) => settitle(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label className='label-group'>Artist</label>
                <input type='text' className='form-control' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label className='label-group'>Album</label>
                <input type='text' className='form-control' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label className='label-group'>Release Date</label>
                <input type='yyyy-mm-dd' className='form-control' value={release_date} onChange={(event) => setRelease(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label className='label-group'>Genre</label>
                <input type='text' className='form-control' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>

                <button type='submit' className="add_btn" style={{'marginTop': '1em'}}>Add</button>
        </form>
    );
}
 
export default AddEntryForm;