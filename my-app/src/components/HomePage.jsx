import React, { useState } from 'react';
import Loader from './Loader';
import ListBooks from './ListBooks';

/**
 * HomePage component renders the main content of the homepage.
 * Displays a loading indicator while data is being fetched,
 * and shows a logo image along with a list of books once loading is complete.
 * @returns {JSX.Element} The rendered HomePage component.
 */
const HomePage = () => {
  // State to manage loading status
  const [isLoading] = useState(false);

  return (
    <div>
      {isLoading ? (
        <Loader /> // Display the Loader component if isLoading is true
      ) : (
        <>
          <ListBooks />
        </>
      )}
    </div>
  );
};

export default HomePage;
