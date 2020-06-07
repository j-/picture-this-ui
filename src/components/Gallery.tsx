import * as React from 'react';
import { useSelector } from 'react-redux';
import { getCaptures } from '../store';

const Gallery: React.FC = () => {
  const captures = useSelector(getCaptures);

  return (
    <div className="Gallery">
      {captures.map((imageSrc, i) => (
        <div key={i}>
          <strong><code>{imageSrc}</code></strong><br />
          <img alt="" src={imageSrc} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
