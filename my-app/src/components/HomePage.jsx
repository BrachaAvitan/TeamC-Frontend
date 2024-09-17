import React, { useState } from 'react';
import Loader from './Loader';
import ListBooks from './ListBooks';


const HomePage = () => {
  // State to manage loading status
  const [isLoading] = useState(false);

  return (
    <div>
      {isLoading ? (
        <Loader /> // Display the Loader component if isLoading is true
      ) : (
        <>
         
          <ListBooks />    </>
      )}
    </div>
  );
};

export default HomePage;
