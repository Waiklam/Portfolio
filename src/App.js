import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './components/root/root';
import Projects from './pages/projects/projects';
import Home from './pages/home/homepage';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root /> }>
    <Route index element={ <Home /> } />
    <Route path=':projects' element={ <Projects />} />
  </Route>
))


function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
