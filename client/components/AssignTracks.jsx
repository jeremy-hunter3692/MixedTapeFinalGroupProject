import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { assignTracktoPlaylist, getPlaylists } from '../apis/playlist'
import { getAllTracks } from '../apis/tracks'

const initialForm = {
  track: '',
  playlist: '',
}

export default function AssignTracks(props) {
  const [form, setForm] = useState(initialForm)
  const [tracks, setTracks] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [addedTrack, setAddedTrack] = useState(' ')
  const newPlaylistId = useSelector((state) => state.playlistById.data.id)

  // Get the list of tracks from the db and store them in state as 'tracks'
  useEffect(() => {
    return getAllTracks().then((allTracks) => {
      setTracks(allTracks)
    })
  }, [])

  // Get the list of playlists from the db and store them in state as 'playlists'
  useEffect(() => {
    return getPlaylists().then((allPlaylists) => {
      setPlaylists(allPlaylists)
    })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    setAddedTrack(tracks.find((x) => x.id === Number(form.track)))
    props.bool
      ? assignTracktoPlaylist(form)
      : assignTracktoPlaylist({ ...form, playlist: newPlaylistId })

    setForm(initialForm)
    // props.nextStep()
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Some notes about the HTML used in the form ...
  // In the <select> tags, note the use of required - this is an easy way of preventing the form from being submited with empty values
  // Also in the <select>, note that we used defaultValue='' and in the <option> tag we have: value='' as well as: disabled
  // These are all needed to ensure that the value shown in the select lookup defaults to text in the <option> tag - e.g. 'Choose track' and 'Choose mixtape'

  return (
    <>
      <h1>{addedTrack.title} has been added</h1>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='track'>Assign a track to a mixtape:</label>

        <select
          id='track'
          name='track'
          defaultValue=''
          onChange={handleChange}
          required
        >
          <option value='' disabled>
            Choose track
          </option>
          {tracks.map((track) => (
            <option key={track.id} value={track.id} title='Choose a track'>
              {track.title}
            </option>
          ))}
        </select>

        {props.bool && (
          <select
            id='playlist'
            name='playlist'
            defaultValue=''
            required
            onChange={handleChange}
          >
            <option value='' disabled>
              Choose mixtape
            </option>
            {playlists.map((playlist) => (
              <option key={playlist.id} value={playlist.id}>
                {playlist.name}
              </option>
            ))}
          </select>
        )}
        <div>
          <button>Assign track to Mixtape</button>

          <button
            onClick={(e) => {
              e.preventDefault()
              setForm(initialForm)
              props.backStep()
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  )
}
