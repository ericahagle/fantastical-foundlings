describe('Error Handling', () => {
  it('should show an appropriate message if a server error occurs while fetching all creatures', () => {
    cy.intercept('GET', 'https://www.dnd5eapi.co/api/monsters', {
      statusCode: 500,
      fixture: '/mock-data-all-creatures-full.json'
    }).as('getCreatures');
    cy.visit('/adoptable-creatures');
    cy.wait('@getCreatures');
    cy.get('.error-message').contains('Apologies, friend. We seem to be having trouble with our Locate Creature spells. Please try again later.');
  });

  it('should show an appropriate message if a server error occurs while fetching an individual creature\'s details', () => {
    cy.intercept('GET', 'https://www.dnd5eapi.co/api/monsters/ancient-black-dragon', {
      statusCode: 500,
      fixture: '/mock-data-selected-creature.json'
    }).as('getCreature');
    cy.visit('/adoptable-creatures/ancient-black-dragon');
    cy.wait('@getCreature');
    cy.get('.error-message').contains('Apologies, friend. We seem to be having trouble with our Locate Creature spells. Please try again later.');
  });

  it('should show an appropriate message if a client error occurs while fetching all creatures', () => {
    cy.intercept('GET', 'https://www.dnd5eapi.co/api/monsters', {
      statusCode: 400,
      fixture: '/mock-data-all-creatures-full.json'
    }).as('getCreatures');
    cy.visit('/');
    cy.get('.nav-button').contains('Adoptable Creatures').click();
    cy.wait('@getCreatures');
    cy.get('.error-message').contains('Uh oh! Looks like you rolled a Natural 1. Please try again.');
  });

  it('should show an appropriate message if a client error occurs while fetching an individual creature\'s details', () => {
    cy.intercept('GET', 'https://www.dnd5eapi.co/api/monsters/ancient-black-dragon', {
      statusCode: 400,
      fixture: '/mock-data-selected-creature.json'
    }).as('getCreature');
    cy.visit('/adoptable-creatures/ancient-black-dragon');
    cy.wait('@getCreature');
    cy.get('.error-message').contains('Uh oh! Looks like you rolled a Natural 1. Please try again.');
  });

  it('should show an appropriate message if an unknown error occurs while fetching all creatures', () => {
    cy.intercept('GET', 'https://www.dnd5eapi.co/api/monsters', {
      statusCode: 300,
      fixture: '/mock-data-all-creatures-full.json'
    }).as('getCreatures');
    cy.visit('/adoptable-creatures');
    cy.wait('@getCreatures');
    cy.get('.error-message').contains('Unexpected error. Status: 300');
  });

  it('should show an appropriate message if an unknown error occurs while fetching an individual creature\'s details', () => {
    cy.intercept('GET', 'https://www.dnd5eapi.co/api/monsters/ancient-black-dragon', {
      statusCode: 300,
      fixture: '/mock-data-selected-creature.json'
    }).as('getCreature');
    cy.visit('/adoptable-creatures/ancient-black-dragon');
    cy.wait('@getCreature');
    cy.get('.error-message').contains('Unexpected error. Status: 300');
  });

  it('should show an appropriate message when landing on a page that doesn\'t exist', () => {
    cy.visit('/fakepath');
    cy.get('.error-message').contains('Uh oh! You seem to have landed in an unknown realm. Please Plane Shift your way back Home and try again.');
  });
});