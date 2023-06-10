import { Link } from 'react-router-dom';

const PopularClassesCard = ({ popularClass }) => {
  const { imageURL, subCategory, price, stage, className } = popularClass;
  return (
    <div className='p-5 box-shadow border-2 border-slate-700 rounded'>
      <div>
        <img src={imageURL} className='rounded' alt='' />
      </div>
      <div>
        <p>
          <span>{subCategory}</span>
          <span>{price}</span>
        </p>
        <p>{stage || 'Beginner'}</p>
        <h2>{className}</h2>
        <Link>View Courses</Link>
      </div>
    </div>
  );
};

export default PopularClassesCard;
