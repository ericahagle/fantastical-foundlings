describe('Functional Tests', () => {
  beforeEach(() => {
    cy.intercept(
      'GET', 'https://www.dnd5eapi.co/api/monsters', {
      statusCode: 200,
      fixture: '/mock-data-all-creatures-full.json'
    }
    ).as('getAllCreatures');

    cy.intercept(
      'GET', 'https://www.dnd5eapi.co/api/monsters/aboleth', {
      statusCode: 200,
      fixture: '/mock-data-aboleth.json'
    }
    ).as('getAboleth');

    cy.intercept(
      'GET', 'https://www.dnd5eapi.co/api/monsters/ape', {
      statusCode: 200,
      fixture: '/mock-data-ape.json'
    }
    ).as('getApe');

    cy.intercept(
      'GET', 'https://www.dnd5eapi.co/api/monsters/ancient-black-dragon', {
      statusCode: 200,
      fixture: '/mock-data-ancient-black-dragon.json'
    }
    ).as('getAncientBlackDragon');

    cy.intercept(
      'GET', 'https://www.dnd5eapi.co/api/monsters/ankheg', {
      statusCode: 200,
      fixture: '/mock-data-ankheg.json'
    }
    ).as('getAnkheg');

    cy.intercept(
      'GET', 'https://www.dnd5eapi.co/api/monsters/weasel', {
      statusCode: 200,
      fixture: '/mock-data-weasel.json'
    }
    ).as('getWeasel');

    cy.intercept(
      'GET', 'https://www.dnd5eapi.co/api/monsters/zombie', {
      statusCode: 200,
      fixture: '/mock-data-zombie.json'
    }
    ).as('getZombie');

    cy.visit('/');
  });

  it('should have a header with the page title and nav button', () => {
    cy.get('.app-title').contains('Fantastical Foundlings');
    cy.get('.nav-button').contains('Adoptable Creatures');
  });

  it('should have a hero image, greeting, and copy on the main page', () => {
    cy.get('.main-page-hero-image')
      .should('have.attr', 'src', '/main-page-hero.avif')
      .should('have.attr', 'alt', 'Two images next to one another. The first image is of a character with their small dragon familiar and the second image is of a different character with their large pet bear');
    cy.get('.greeting').contains('Greetings fellow travelers!');
    cy.get('.mission')
      .within(() => {
        cy.get('p').contains('Is it lonely in the back of the cart traveling from city to city looking for work? Are your arcane studies progressing to the point where you can control a familiar? Or maybe you\'ve been at this game for so long that you\'re recently had to retire an old familiar, friend, or companion.');
        cy.get('p').contains('You\'re neither royalty nor made of coin, and you know full well not to listen to the hucksters peddling magical kitties in the back alleys of the local port town. And by now, we all know not to purchase a baby dragon from a shop. So give us a look, here at the Fantastical Foundlings rescue, where we re-home everything from the most special little magical babies to the most mammoth countryside-burning critters. Good, bad, non-committal, cats … we have them all and they all have the same thing in common: They are ready to set out on their next big adventure with you.');
        cy.get('p').contains('Peruse the site, and if you see a compatible companion, reach out to us via a basic third-level Sending message and we\'ll get back to you as soon as we\'ve taken a long rest. (Rates of 25 words or fewer apply.)');
      });
  });

  describe('Adoptable Creatures', () => {
    beforeEach(() => {
      cy.get('.nav-button').click();
      cy.wait(['@getAllCreatures', '@getAboleth', '@getApe', '@getAncientBlackDragon', '@getAnkheg', '@getWeasel', '@getZombie']);
    });

    it('should render Header correctly when landing on the Adoptable Creatures page', () => {
      cy.url().should('eq', 'http://localhost:3000/adoptable-creatures');
      cy.get('.nav-button').should('not.exist');
      cy.get('.app-title-link').should('have.attr', 'href', '/');
    });

    it('should render page elements correctly when landing on the Adoptable Creatures page', () => {
      cy.get('.page-title').contains('Adoptable Creatures');

      cy.get('.filter-wrapper').children().first()
        .within(() => {
          cy.contains('Filter By Size');
          cy.contains('All Sizes');
          cy.contains('Tiny');
          cy.contains('Small');
          cy.contains('Medium');
          cy.contains('Large');
          cy.contains('Huge');
          cy.contains('Gargantuan');
        });

      cy.get('.filter-wrapper').children().eq(1)
        .within(() => {
          cy.contains('Filter By Type');
          cy.contains('All Types');
          cy.contains('Aberration');
          cy.contains('Beast');
          cy.contains('Construct');
          cy.contains('Dragon');
          cy.contains('Elemental');
          cy.contains('Fey');
          cy.contains('Humanoid');
          cy.contains('Monstrosity');
          cy.contains('Plant');
          cy.contains('Undead');
        });

      cy.get('.filter-wrapper').children().eq(2)
        .within(() => {
          cy.contains('Filter By Alignment');
          cy.contains('All Alignments');
          cy.contains('Lawful Good');
          cy.contains('Neutral Good');
          cy.contains('Chaotic Good');
          cy.contains('Lawful Neutral');
          cy.contains('(True) Neutral');
          cy.contains('Chaotic Neutral');
          cy.contains('Lawful Evil');
          cy.contains('Neutral Evil');
          cy.contains('Chaotic Evil');
          cy.contains('Unaligned');
          cy.contains('Any Alignment');
          cy.contains('Any Non-Good Alignment');
        });

      cy.get('.filter-wrapper').children().last()
        .within(() => {
          cy.contains('#reset-filters-button', 'Reset All Filters');
        });

      cy.get('.creature-list').children().first()
        .should('have.attr', 'href', '/adoptable-creatures/aboleth');
      cy.get('.creature-list').children().last()
        .should('have.attr', 'href', '/adoptable-creatures/zombie');

      cy.get('.creature-link').should('have.length', 6);
      cy.get('.creature-link').children().first()
        .within(() => {
          cy.contains('h4', 'Aboleth');
          cy.get('.creature-image')
            .should('have.attr', 'src', 'https://www.dnd5eapi.co/api/images/monsters/aboleth.png')
            .should('have.attr', 'alt', 'Aboleth');
          cy.get('p').contains('Size Large');
          cy.get('p').contains('Type aberration');
          cy.get('p').contains('Alignment lawful evil');
        });
      cy.get('.creature-link').children().last()
        .within(() => {
          cy.contains('h4', 'Zombie');
          cy.get('.creature-image')
            .should('have.attr', 'src', 'https://www.dnd5eapi.co/api/images/monsters/zombie.png')
            .should('have.attr', 'alt', 'Zombie');
          cy.get('p').contains('Size Medium');
          cy.get('p').contains('Type undead');
          cy.get('p').contains('Alignment neutral evil');
        });
    });

    it('should render creature cards correctly when using the filters')

    // describe('Creature Detail', () => {
    //   beforeEach(() => {

    //   });
    // });
  });
});
