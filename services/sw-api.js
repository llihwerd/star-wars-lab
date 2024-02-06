const BASE_URL = 'https://swapi.dev/api/starships'

async function getAllStarships() {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

export {
  getAllStarships,
}