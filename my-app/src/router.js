import { createBrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import FileUpdateBook from './components/FileUpdateBook';
import FileCreateBook from './components/FileCreateBook';
import ListBooks from './components/ListBooks';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'list-books', 
    element: <ListBooks />,
  },
  {
    path: 'update-book/:id',
    element: <FileUpdateBook />,
  },
  {
    path: 'create-book',
    element: <FileCreateBook />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
