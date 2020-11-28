import React, { Fragment, useState, useEffect } from 'react'
import { Form, Song, ArtistInfo } from './components'
import { getLyrics, getArtist } from './api'

function App() {

  //api get song lyric
  const [lyrics, setLyrics] = useState('')
  //api get artist info
  const [artist, setArtist] = useState({})

  const [error, showError] = useState('')
  const [data, searchData] = useState({})
  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      const getDataFromApi = async () => {
        const { artist, song } = data
        const [ getLyricsResult, getArtistResult ] = await Promise.all([
          getLyrics( artist, song ),
          getArtist( artist )
        ])
        processlyricsResult(getLyricsResult)
        processArtistResult(getArtistResult)
      }
      getDataFromApi()
    }
  }, [data])

  const processlyricsResult = result => {
    if (result.status !== 200) return showError(result.statusText)
    showError('')
    const { lyrics } = result.data
    if (lyrics.trim() === '') return showError('Song not found!')
    showError('')
    setLyrics(lyrics)
  }

  const processArtistResult = result => {
    if (result.status !== 200) return showError(result.statusText)
    showError('')
    console.log(result)
    const { artists } = result.data
    if (artists.length === 0) return showError('Artist not found!')
    showError('')
    setArtist(artists[0])
  }

  return (
    <Fragment>
      {error && (
        <p className='alert alert-danger text-center p-2'>{ error }</p>
      )}
      <Form 
        searchData={ searchData }/>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            {artist && (
              <ArtistInfo info={ artist }/>
            )}
          </div>
          <div className='col-md-6'>
            {lyrics && (
              <Song 
                lyrics={ lyrics }/>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;
