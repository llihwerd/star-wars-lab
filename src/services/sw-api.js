const BASE_URL = 'https://swapi.dev/api/starships'

export async function getShips() {
  try {
    const res = await fetch(`${BASE_URL}`)
    return res.json()
  } catch (err) {
    console.log(`🚨`, err)
  }
}

export async function getShipData(shipId) {
  try {
    const res = await fetch(`${BASE_URL}/${shipId}`)
    return res.json()
  } catch (err) {
    console.log(err)
  }
}