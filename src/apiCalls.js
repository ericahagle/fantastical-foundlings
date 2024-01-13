const BASE_URL = 'https://www.dnd5eapi.co';

const getAllCreatures = () => {
  return fetch(BASE_URL + '/api/monsters')
    .then((response) => response.json())
    .then((creatureIndexes) =>
      Promise.all(
        creatureIndexes.results.map((index) =>
          fetch(BASE_URL + index.url)
            .then((response) => response.json())
        )
      )
    )
}

const getCreatureByIndex = (index) => {
  return fetch(BASE_URL + `/api/monsters/${index}`)
    .then((response) => response.json())
}

export { getAllCreatures, getCreatureByIndex };
