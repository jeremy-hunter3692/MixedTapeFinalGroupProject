import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// ACTION CREATORS
import { fetchPlaylists } from '../actions/playlist'
// COMPONENTS
import AddPlaylist from './AddPlaylist'
import AssignTracks from './AssignTracks'
import Container from './Container'
import GetPlaylistById from './GetPlaylistById'

export default function PlaylistSteps() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlaylists())
  }, [])

  const [step, setStep] = useState(1)

  // Go to next step - passed as props
  const nextStep = () => {
    setStep(step + 1)
  }

  // Go back one step - passed as props
  const backStep = () => {
    setStep(step - 1)
  }
  return (
    <Container>
      {step == 1 && (
        <>
          <div className='playlists'>
            <AddPlaylist nextStep={nextStep} />
          </div>
        </>
      )}
      {step == 2 && (
        <>
          <div className='centerThis'>
            <GetPlaylistById bool={true} />
            <AssignTracks
              bool={false}
              // nextStep={nextStep}
              // backStep={backStep}
              className='column'
            />
          </div>
        </>
      )}
      {step == 3 && (
        <>
          <div className='centerThis'>
            <GetPlaylistById bool={true} />
          </div>
        </>
      )}
    </Container>
  )
}
