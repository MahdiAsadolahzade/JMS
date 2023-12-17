// MovingBits.tsx
import React, { useEffect, useState } from 'react';
import './MovingBits.css';

interface Bit {
  id: number;
  value: '0' | '1';
}

const MovingBits: React.FC = () => {
  const [bits, setBits] = useState<Bit[]>([]);

  useEffect(() => {
    const generateRandomBits = () => {
      const newBits: Bit[] = [];
      for (let i = 0; i < 100; i++) {
        const bitValue: '0' | '1' = Math.random() > 0.5 ? '1' : '0';
        newBits.push({ id: i, value: bitValue });
      }
      setBits(newBits);
    };

    generateRandomBits();

    const intervalId = setInterval(() => {
      generateRandomBits();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="moving-bits-container w-[115%]">
      {bits.map((bit) => (
        <div key={bit.id} className={`bit bit-${bit.value}`}>
          {bit.value}
        </div>
      ))}
    </div>
  );
};

export default MovingBits;
