import './StaffBio.css';

const StaffBio = ({ staffBio }) => {
  return (
    <div className='StaffBio font-face-bookman-bt-roman-headline'>
      {staffBio.image &&
        <img className='staff-image' src={staffBio.image} alt={staffBio.name} />}
      <h3>{staffBio.name}</h3>
      <p className='staff-title'>{staffBio.title}</p>
      <p className='staff-fave'>Favorite Creature: {staffBio.fave}</p>
    </div>
  );
};

export default StaffBio;
