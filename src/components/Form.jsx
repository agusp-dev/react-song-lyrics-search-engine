import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Form = ({ searchData }) => {

  const [artist, setArtist] = useState('')
  const [song, setSong] = useState('')
  const [error, showError] = useState('')

  const onHandleSubmit = e => {
    e.preventDefault()
    if (!artist.trim() || !song.trim()) return showError('All inputs required!')
    showError('')
    searchData({ artist, song })
  }

  return (
    <div className='bg-info'>
      <div className='container'>
        {error && (
          <p className='alert alert-danger text-center p-2'>{ error }</p>
        )}
        <div className='row'>
          <form 
            className='col card text-white bg-transparent mb-5 pt-5 pb-2'
            onSubmit={ onHandleSubmit }>
            <fieldset>
              <legend className='text-center'>Song Lyrics Search</legend>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>Artist</label>
                    <input 
                      type='text'
                      className='form-control'
                      name='artist'
                      placeholder='Artist Name'
                      onChange={ e => setArtist( e.target.value ) }/>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>Song</label>
                    <input 
                      type='text'
                      className='form-control'
                      name='song'
                      placeholder='Song Name'
                      onChange={ e => setSong( e.target.value ) }/>
                  </div>
                </div>
              </div>
              <button 
                type='submit'
                className='btn btn-primary float-right'
                >Search
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

Form.propTypes = {
  searchData: PropTypes.func.isRequired
}

export { Form }