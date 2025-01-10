import React, { useEffect, useRef } from 'react';
import cards from '../../assets/cards/Cards_data';

function TitleCard() {
  const refdat = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refdat.current) {
    const handleWheel = (e:WheelEvent) => {
      e.preventDefault();
      if (refdat.current) {
      refdat.current.scrollLeft += e.deltaY;
      }
    };

    
    
    refdat.current.addEventListener('wheel', handleWheel);
    
    
    
    return () => {
      if (refdat.current) {

        refdat.current.removeEventListener('wheel', handleWheel);
      }
    };
}
  }, []);

  return (
    <div className="flex space-x-7 overflow-x-scroll  Tops" ref={refdat}>
      {cards.map((dat, index) => (
        <div key={index} className="cards relative">
          <img src={dat.image} key={index} alt={dat.name} />
          <h2 key={index} className="text-white absolute z-50 left-3 font-titlee bottom-0">{dat.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default TitleCard;
