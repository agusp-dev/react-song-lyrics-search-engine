import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Song = ({ lyrics }) => {
  return (
    <Fragment>
      <h2>Lyrics Song</h2>
      <p className='letra'>{ lyrics }</p>
    </Fragment>
  )
}

Song.propTypes = {
  lyrics: PropTypes.string.isRequired
}

export { Song }
