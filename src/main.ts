import axios from "axios"



const getCharacters = async () => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character')
    console.log(response.data)
  }
  catch (error) {
    throw new Error('Error API')
  }
}


getCharacters()

