const BASE_URL = 'https://www.dnd5eapi.co';
const LOCAL_BASE_URL = 'http://localhost:8080';

const getStaffBios = () => {
  return fetch(LOCAL_BASE_URL + '/api/staff')
    .then((response) => {
      if (!response.ok) {
        if (response.status >= 400 && response.status < 500) {
          throw new Error('Uh oh! Looks like you rolled a Natural 1. Please try again.');
        } else if (response.status >= 500) {
          throw new Error('Apologies, friend. We seem to be having trouble with our Locate Person spells. Please try again later.');
        } else {
          throw new Error(`Unexpected error. Status: ${response.status}`);
        }
      }
      return response.json();
    })
    .then((data) => {
      if (data.success) {
        const staffBios = data.data;
        return staffBios;
      } else {
        throw new Error('API request was not successful.');
      }
    });
};

const getAllCreatures = () => {
  return fetch(BASE_URL + '/api/monsters')
    .then((response) => {
      if (!response.ok) {
        if (response.status >= 400 && response.status < 500) {
          throw new Error('Uh oh! Looks like you rolled a Natural 1. Please try again.');
        } else if (response.status >= 500) {
          throw new Error('Apologies, friend. We seem to be having trouble with our Locate Creature spells. Please try again later.');
        } else {
          throw new Error(`Unexpected error. Status: ${response.status}`);
        }
      }
      return response.json();
    })
    .then((creatureIndexes) =>
      Promise.all(
        creatureIndexes.results.map((index) =>
          fetch(BASE_URL + index.url)
            .then((response) => {
              if (!response.ok) {
                if (response.status >= 400 && response.status < 500) {
                  throw new Error('Uh oh! Looks like you rolled a Natural 1. Please try again.');
                } else if (response.status >= 500) {
                  throw new Error('Apologies, friend. We seem to be having trouble with our Locate Creature spells. Please try again later.');
                } else {
                  throw new Error(`Unexpected error. Status: ${response.status}`);
                }
              }
              return response.json();
            })
        )
      )
    )
}

const getCreatureByIndex = (index) => {
  return fetch(BASE_URL + `/api/monsters/${index}`)
    .then((response) => {
      if (!response.ok) {
        if (response.status >= 400 && response.status < 500) {
          throw new Error('Uh oh! Looks like you rolled a Natural 1. Please try again.');
        } else if (response.status >= 500) {
          throw new Error('Apologies, friend. We seem to be having trouble with our Locate Creature spells. Please try again later.');
        } else {
          throw new Error(`Unexpected error. Status: ${response.status}`);
        }
      }
      return response.json();
    })
}

export { getStaffBios, getAllCreatures, getCreatureByIndex };
