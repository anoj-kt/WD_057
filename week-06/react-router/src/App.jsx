import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import AllMovies from './pages/AllMovies';
import ComedyMovies from './pages/ComedyMovies';
import SciFi from './pages/SciFiMovies';
import AnimationMovies from './pages/AnimationMovies';
import ActionMovies from './pages/ActionMovies';
import MainLayout from './layout/MainLayout';
import MovieDetails from './pages/MovieDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path='/'
        element={<MainLayout />}
        errorElement={<h1>Your app is down</h1>}
      >
        <Route index element={<AllMovies />}></Route>
        <Route
          path='/movies/:movieID'
          element={<MovieDetails />}
          errorElement={<h1>This is not a valid movie id</h1>}
        ></Route>
        <Route path='/comedy' element={<ComedyMovies />}></Route>
        <Route path='/scifi' element={<SciFi />}></Route>
        <Route path='/animation' element={<AnimationMovies />}></Route>
        <Route path='/action' element={<ActionMovies />}></Route>
        <Route path='/*' element={<h1>This path does not exist</h1>}></Route>
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

// 1. Import createBrowserRouter & createBrowserFromElements, Route
// 2. Create the routing system and store it in a variable
// 3. Link it with your app using RouterProvider
