# <img src='public/favicon.png'> Fantastical Foundlings

<!-- ![Deployed Site]() -->

# 💻 Tech Stack
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?logo=cypress&logoColor=fff&style=for-the-badge)

# 🧠 Contributors
[Erica Hagle](https://github.com/ericahagle)

# 💭 Abstract
Are you a character in a Dungeons & Dragons campaign? Is it lonely in the back of the cart traveling from city to city looking for work? Are your arcane studies progressing to the point where you can control a familiar? Or maybe you've been at this game for so long that you're recently had to retire an old familiar, friend, or companion.

Give us a look, here at the Fantastical Foundlings rescue, where we re-home everything from the most special little magical babies to the most mammoth countryside-burning critters. Good, bad, non-committal, cats… we have them all and they all have the same thing in common: They are ready to set out on their next big adventure with you.  

# 📝 Context
This application was built as the solo showcase project of Turing School of Software and Design's Front End Web Development program, Mod 3. We were given 7 days, from kick-off, to complete and submit the project for evaluation from scratch using the [provided spec](https://frontend.turing.edu/projects/module-3/showcase.html).

# 🎬 Preview
<!-- ![Preview Video]() -->

# 🔧 Installation Instructions
1. Clone this client repository to your local machine
2. Navigate (`cd`) to your local directory containing the repository
3. Run `npm install` to install the dependencies
4. Run `npm start` to start the server
5. On your web browser, navigate to http://localhost:3000/
6. Find your new best friend!

# 🕵️ Testing Instructions
After completing installation of the app...

1. Navigate (`cd`) into your local directory containing the repository
2. Run `npm install cypress` to install Cypress dependencies
3. Run `npx cypress open` to launch Cypress
4. When Cypress opens, click the `E2E Testing` box and choose a browser (if you are currently using the Chrome browser, using Electron is recommended to avoid issues)
5. Click the `Start E2E Testing in <chosen browser>` button
6. Select a test and see the magic!
    - The `errorhandling_spec.cy.js` script will test API error handling, as well as the handling of navigating to a non-existent path
    - The `functional_spec.cy.js` script will test all functional elements of the application, across all pages

# 💡 Learning Goals
- Gain competency with React fundamentals
- Test React components & asynchronous JS
- Practice refactoring
- Create a multi-page UX using Router
- Implement responsive design

# Challenges & Wins
## 🚧 Challenges
- As always, CSS. While I do think I'm improving, I still struggle with CSS in every project. 
- Figuring out how best to utilize the API. I initially wanted to curate a list of creatures to display as "adoptable", but based on how the API is structured, that ended up not being the best avenue. Instead, I based my API call on only creatures that had images in their API response. This ended up working great, although I had to do some refactoring to get the filters to work correctly. 
  - Sub-challenge: At first, I was rendering the creature cards based on whether or not they had images, but this ended up causing shenanigans with the filter. The filter was based on the return from the API _before_ filtering out the creatures with no images. I was able to figure this out and address it, thankfully!

## 🌟 Wins
- I had so much fun with this project. From start to finish, I had a really good idea of the product I wanted to create. In the end, Fantastical Foundlings is a whimsical format to display the skills I've learned during this module at school.
- Finding assets that were free and legal to use, that were either the actual elements Wizards of the Coast uses for their Dungeons & Dragons materials, or at least very close replicas, was a big win. I love that I was able to really give this app the look and feel of Dungeons & Dragons.
- Getting a little better at CSS! I've struggled with styling throughout my learning, and while there's still so much room for improvement, I think I've gotten much better. This app looks almost entirely as I envisioned it in its MVP state.