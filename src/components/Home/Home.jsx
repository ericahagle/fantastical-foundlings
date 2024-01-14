import './Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <img 
      className='main-page-hero-image'
      src='/main-page-hero.avif'
      alt='Two images next to one another. The first image is of a character with their small dragon familiar and the second image is of a different character with their large pet bear'
      />
      <div className='main-page-copy'>
        <h2 className='greeting font-face-modesto-poster'>Greetings fellow travelers!</h2>
        <div className='mission font-face-modesto-poster'>
          <p>
            Is it lonely in the back of the cart traveling from city to city looking for work? Are your arcane studies progressing to the point where you can control a familiar? Or maybe you've been at this game for so long that you're recently had to retire an old familiar, friend, or companion.
          </p>
          <p>
            You're neither royalty nor made of coin, and you know full well not to listen to the hucksters peddling magical kitties in the back alleys of the local port town. And by now, we all know not to purchase a baby dragon from a shop. So give us a look, here at the Fantastical Foundlings rescue, where we re-home everything from the most special little magical babies to the most mammoth countryside-burning critters. Good, bad, non-committal, cats … we have them all and they all have the same thing in common: They are ready to set out on their next big adventure with you.
          </p>
          <p>
            Peruse the site, and if you see a compatible companion, reach out to us via a basic third-level Sending message and we'll get back to you as soon as we've taken a long rest. (Rates of 25 words or fewer apply.)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
