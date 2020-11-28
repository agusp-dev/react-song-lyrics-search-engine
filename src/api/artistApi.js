import axios from 'axios'

const URL = 'https://theaudiodb.com/api/v1/json/1/search.php'

const getArtist = async artist => {
  const url = `${URL}?s=${artist}`
  const result = await axios.get(url)
  return result
}

export { getArtist }