const getCreature = (index) => {
  return fetch(`https://www.dnd5eapi.co/api/monsters/${index}`)
    .then((response) => {
      if (!response.ok) {
        if (response.status >= 400 && response.status < 500) {
          throw new Error("Sorry traveler! There's nothing to see here!");
        } else if (response.status >= 500) {
          throw new Error("Sorry traveler! Something went wrong. Please try again later.");
        } else {
          throw new Error(`Unexpected error. Status: ${response.status}`);
        }
      }
      return response.json();
    })
}

export default getCreature;
