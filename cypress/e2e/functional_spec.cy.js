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

  describe('Home', () => {
    it('should have a header with the page title and nav button', () => {
      cy.get('.app-title').contains('Fantastical Foundlings');
      cy.get('.nav-button').contains('Adoptable Creatures');
    });

    it('should have a hero image, greeting, and copy on the main page', () => {
      cy.get('.main-page-hero-image')
        .should('have.attr', 'src', '/main-page-hero.avif')
        .should('have.attr', 'alt', 'Two characters: one with a small dragon familiar, and the other with a large pet bear');
      cy.get('.greeting').contains('Greetings fellow travelers!');
      cy.get('.mission')
        .within(() => {
          cy.get('p').contains('Is it lonely in the back of the cart traveling from city to city looking for work? Are your arcane studies progressing to the point where you can control a familiar? Or maybe you\'ve been at this game for so long that you\'re recently had to retire an old familiar, friend, or companion.');
          cy.get('p').contains('You\'re neither royalty nor made of coin, and you know full well not to listen to the hucksters peddling magical kitties in the back alleys of the local port town. And by now, we all know not to purchase a baby dragon from a shop. So give us a look, here at the Fantastical Foundlings rescue, where we re-home everything from the most special little magical babies to the most mammoth countryside-burning critters. Good, bad, non-committal, cats … we have them all and they all have the same thing in common: They are ready to set out on their next big adventure with you.');
          cy.get('p').contains('Peruse the site, and if you see a compatible companion, reach out to us via a basic third-level Sending message and we\'ll get back to you as soon as we\'ve taken a long rest. (Rates of 25 words or fewer apply.)');
        });
    });
  });

  describe('Adoptable Creatures', () => {
    beforeEach(() => {
      cy.get('.nav-button').click();
      cy.wait(['@getAllCreatures', '@getAboleth', '@getApe', '@getAncientBlackDragon', '@getAnkheg', '@getWeasel', '@getZombie']);
    });

    it('should render Header correctly when landing on the Adoptable Creatures page', () => {
      cy.url().should('eq', 'http://localhost:3000/adoptable-creatures');
      cy.get('.app-title-link').should('have.attr', 'href', '/');
      cy.get('.nav-button').should('not.exist');
    });

    it('should render page elements correctly when landing on the Adoptable Creatures page', () => {
      cy.get('.page-title').contains('Adoptable Creatures');

      cy.get('.CreaturesFilter').children().first()
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

      cy.get('.CreaturesFilter').children().eq(1)
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

      cy.get('.CreaturesFilter').children().eq(2)
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

      cy.get('.CreaturesFilter').children().last()
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
          cy.contains('h3', 'Aboleth');
          cy.get('.creature-image')
            .should('have.attr', 'src', 'https://www.dnd5eapi.co/api/images/monsters/aboleth.png')
            .should('have.attr', 'alt', 'Aboleth');
          cy.get('p').contains('Size: Large');
          cy.get('p').contains('Type: aberration');
          cy.get('p').contains('Alignment: lawful evil');
        });
      cy.get('.creature-link').children().last()
        .within(() => {
          cy.contains('h3', 'Zombie');
          cy.get('.creature-image')
            .should('have.attr', 'src', 'https://www.dnd5eapi.co/api/images/monsters/zombie.png')
            .should('have.attr', 'alt', 'Zombie');
          cy.get('p').contains('Size: Medium');
          cy.get('p').contains('Type: undead');
          cy.get('p').contains('Alignment: neutral evil');
        });
    });

    it('should render creature cards correctly when using the filters', () => {
      cy.get('#select-alignment')
        .select('Unaligned')
        .invoke('val')
        .should('eq', 'unaligned');

      cy.get('.creature-link').should('have.length', 3);
      cy.get('.creature-link').children().first()
        .within(() => {
          cy.contains('h3', 'Ankheg');
          cy.get('.creature-image')
            .should('have.attr', 'src', 'https://www.dnd5eapi.co/api/images/monsters/ankheg.png')
            .should('have.attr', 'alt', 'Ankheg');
          cy.get('p').contains('Size: Large');
          cy.get('p').contains('Type: monstrosity');
          cy.get('p').contains('Alignment: unaligned');
        });
      cy.get('.creature-link').children().last()
        .within(() => {
          cy.contains('h3', 'Weasel');
          cy.get('.creature-image')
            .should('have.attr', 'src', 'https://www.dnd5eapi.co/api/images/monsters/weasel.png')
            .should('have.attr', 'alt', 'Weasel');
          cy.get('p').contains('Size: Tiny');
          cy.get('p').contains('Type: beast');
          cy.get('p').contains('Alignment: unaligned');
        });

      cy.get('#select-type')
        .select('Beast')
        .invoke('val')
        .should('eq', 'beast');

      cy.get('.creature-link').should('have.length', 2);
      cy.get('.creature-link').children().first()
        .within(() => {
          cy.contains('h3', 'Ape');
          cy.get('.creature-image')
            .should('have.attr', 'src', 'https://www.dnd5eapi.co/api/images/monsters/ape.png')
            .should('have.attr', 'alt', 'Ape');
          cy.get('p').contains('Size: Medium');
          cy.get('p').contains('Type: beast');
          cy.get('p').contains('Alignment: unaligned');
        });
      cy.get('.creature-link').children().last()
        .within(() => {
          cy.contains('h3', 'Weasel');
          cy.get('.creature-image')
            .should('have.attr', 'src', 'https://www.dnd5eapi.co/api/images/monsters/weasel.png')
            .should('have.attr', 'alt', 'Weasel');
          cy.get('p').contains('Size: Tiny');
          cy.get('p').contains('Type: beast');
          cy.get('p').contains('Alignment: unaligned');
        });

      cy.get('#select-size')
        .select('Tiny')
        .invoke('val')
        .should('eq', 'Tiny');

      cy.get('.creature-link').should('have.length', 1);
      cy.get('.creature-link').children().first()
        .within(() => {
          cy.contains('h3', 'Weasel');
          cy.get('.creature-image')
            .should('have.attr', 'src', 'https://www.dnd5eapi.co/api/images/monsters/weasel.png')
            .should('have.attr', 'alt', 'Weasel');
          cy.get('p').contains('Size: Tiny');
          cy.get('p').contains('Type: beast');
          cy.get('p').contains('Alignment: unaligned');
        });

      cy.get('#reset-filters-button').click();
      cy.get('.creature-link').should('have.length', 6);
      cy.get('.creature-link').children().first()
        .within(() => {
          cy.contains('h3', 'Aboleth');
          cy.get('.creature-image')
            .should('have.attr', 'src', 'https://www.dnd5eapi.co/api/images/monsters/aboleth.png')
            .should('have.attr', 'alt', 'Aboleth');
          cy.get('p').contains('Size: Large');
          cy.get('p').contains('Type: aberration');
          cy.get('p').contains('Alignment: lawful evil');
        });
      cy.get('.creature-link').children().last()
        .within(() => {
          cy.contains('h3', 'Zombie');
          cy.get('.creature-image')
            .should('have.attr', 'src', 'https://www.dnd5eapi.co/api/images/monsters/zombie.png')
            .should('have.attr', 'alt', 'Zombie');
          cy.get('p').contains('Size: Medium');
          cy.get('p').contains('Type: undead');
          cy.get('p').contains('Alignment: neutral evil');
        });
    });

    describe('Creature Detail', () => {
      beforeEach(() => {
        cy.get('.creature-link').contains('Ancient Black Dragon').click();
        cy.wait('@getAncientBlackDragon');
      });

      it('should render Header correctly when landing on a Creature Detail page', () => {
        cy.url().should('eq', 'http://localhost:3000/adoptable-creatures/ancient-black-dragon')
        cy.get('.app-title-link').should('have.attr', 'href', '/');
        cy.get('.nav-link').should('have.attr', 'href', '/adoptable-creatures');
      });

      it('should render page elements correctly when landing on a Creature Detail page', () => {
        cy.get('.creature-name').contains('Ancient Black Dragon');

        cy.get('.selected-creature-image')
          .should('have.attr', 'src', 'https://www.dnd5eapi.co/api/images/monsters/ancient-black-dragon.png')
          .should('have.attr', 'alt', 'Ancient Black Dragon');

        cy.get('p').contains('Size: Gargantuan');
        cy.get('p').contains('Type: dragon');
        cy.get('p').contains('Alignment: chaotic evil');
        cy.get('p').contains('Armor Class: 22');
        cy.get('p').contains('Walk Speed: 40 ft.');
        cy.get('p').contains('Fly Speed: 80 ft.');
        cy.get('p').contains('Swim Speed: 40 ft.');
        cy.get('p').contains('Hit Points: 367');
        cy.get('p').contains('Strength: 27');
        cy.get('p').contains('Dexterity: 14');
        cy.get('p').contains('Constitution: 25');
        cy.get('p').contains('Intelligence: 16');
        cy.get('p').contains('Wisdom: 15');
        cy.get('p').contains('Charisma: 19');
        cy.get('p').contains('Languages: Common, Draconic');

        cy.get('div').eq(2).within(() => {
          cy.contains('p', 'Special Abilities');
          cy.contains('p', 'Amphibious: The dragon can breathe air and water.');
          cy.contains('p', 'Legendary Resistance: If the dragon fails a saving throw, it can choose to succeed instead.');
        });

        cy.get('div').eq(5).within(() => {
          cy.contains('p', 'Actions');
          cy.contains('p', 'Multiattack: The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.');
          cy.contains('p', 'Bite: Melee Weapon Attack:+ 15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage.');
          cy.contains('p', 'Claw: Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.');
          cy.contains('p', 'Tail: Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.');
          cy.contains('p', 'Frightful Presence: Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.');
          cy.contains('p', 'Acid Breath: The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one.');
        });

        cy.get('div').eq(8).within(() => {
          cy.contains('p', 'Legendary Actions');
          cy.contains('p', 'Detect: The dragon makes a Wisdom (Perception) check.');
          cy.contains('p', 'Tail Attack: The dragon makes a tail attack.');
          cy.contains('p', 'Wing Attack (Costs 2 Actions): The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.');
        });
      });

      it('should return Home when the app title is clicked', () => {
        cy.get('.app-title').contains('Fantastical Foundlings').click();
        cy.url().should('eq', 'http://localhost:3000/');
      });
    });
  });
});