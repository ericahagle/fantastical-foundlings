import { useState, useEffect } from 'react';
import StaffBio from '../StaffBio/StaffBio';
import './About.css';
import { getStaffBios } from '../../apiCalls';

const About = () => {
  const [staffBios, setStaffBios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;
      setLoading(true);
      setError('');

      getStaffBios()
        .then((staffBios) => {
          console.log('API Response:', staffBios);
          if (isMounted) {
            setStaffBios(staffBios);
          }   
        })
        .catch((error) => {
          console.error(error);
          if (isMounted) {
            setError(error.message);
          } 
        })
        .finally(() => {
          if (isMounted) {
            setLoading(false);
          }
        });
        return () => {
          isMounted = false;
        }
  }, []);

  return (
    <div className='About'>
      <h2 className='page-title font-face-modesto-expanded'>About Us</h2>
      <div className='main-page-copy font-face-bookman-bt-roman-headline'>
        <p>
          Created by a traveling party who decided to stop searching to fill that necrotic hole in our soul with the blood of others, we had enough coin to buy a lot of farmland on the buffer zone between the adversaries of the Eastern war, but quickly discovered that none of us knew how to farm or were ever going to be very good at it.
        </p>
        <p>
          We love creatures of all sizes and alignments, and immediately began to pick up strays. Once we started accumulating more than we could handle, we needed to find them new homes. A few months of this led to spreading word of mouth and strangers showing up at our front door asking if we have any Displacer Beasts. (We get it, they're cool, but nobody—I repeat, nobody—has Displacer Beasts year-round, and when we do, they go fast.)
        </p>
      </div>
      <h2 className='page-title font-face-modesto-expanded'>Meet the Staff!</h2>
      <div className='staff-bios-container'>
        {loading && <span className='loading'>Loading...</span>}
        {error && <span className='error'>{error}</span>}
        {!loading && staffBios && Array.isArray(staffBios) && (
          staffBios.map((staffBio) => (
            staffBio && 
            <StaffBio key={staffBio._id} staffBio={staffBio} />
          ))
        )}
      </div>
    </div>
  );
};

export default About;