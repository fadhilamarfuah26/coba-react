import React, { useState } from 'react';

const RandomNumber = () => {
  const [number, setNumber] = useState(() => {
    return Math.ceil(Math.random() * 10);
  });

  return (
    <>
      <h3>{number}</h3>
    </>
  );
};

export default function App() {
  const loopingRandomNumber = () => {
    let rows = [];

    for (let i = 0; i < 8; i++) {
      rows.push(<RandomNumber />);
    }

    return rows;
  };

  return <>{loopingRandomNumber()}</>;
}