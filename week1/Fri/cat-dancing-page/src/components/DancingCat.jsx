import { useState } from 'react';
import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

const DancingCat = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img src={catSvg} alt="Dancing Cat" className="cat-image" />
      </div>
      <button
        className="control-button"
        onClick={toggleAnimation}
      >
        {isAnimating ? '🛑 Stop Dancing' : '💃 Start Dancing'}
      </button>
    </div>
  );
};

export default DancingCat;