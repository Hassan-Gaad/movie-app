import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css';
import Favorite from './pages/Favorite';
import { useSelector } from 'react-redux';
import Loader from './components/Loader';

function App() {
  const [searchTxt, setSearchTxt] = useState();
  const [goHome, setGoHome] = useState();

  const loader = useSelector((state) => state.loader.isLoad);
console.log(loader);
  const setGoHomeFun=()=>{
    let i=Math.floor(Math.random()*100);
    console.log(i);
    setGoHome(i);
    
    }


  
  return (
      <Router>
      <Navbar onSearch={setSearchTxt} goHome={setGoHomeFun}/>
      <div>
        {loader&& <Loader/>}
      <Switch>
        <Route path='/' exact>
          <MovieList searchValue={searchTxt} goHome={goHome}/>
        </Route>
        <Route path="/MovieDetails/:id" exact>
          <MovieDetails/>
        </Route>
        <Route path="/favorites" exact>
          <Favorite/>
        </Route>
      </Switch> 
      </div>
      </Router>
  );
}

export default App;
