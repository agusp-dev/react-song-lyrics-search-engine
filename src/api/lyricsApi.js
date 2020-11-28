import axios from 'axios'

const URL = 'https://api.lyrics.ovh/v1'

const getLyrics = async (artist, song) => {
  const url = `${URL}/${artist}/${song}`
  const result = await axios.get(url)
  return result
}

export { getLyrics }