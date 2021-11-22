import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App() {
  const [searchTxt, setSearchTxt] = useState();
  const [goHome, setGoHome] = useState();

  const setGoHomeFun=()=>{
    let i=Math.floor(Math.random()*100);
    console.log(i);
    setGoHome(i);
    
    }
  
  return (
      <Router>
      <Navbar onSearch={setSearchTxt} goHome={setGoHomeFun}/>
      <div>
      <Switch>
        <Route path='/' exact>
          <MovieList searchValue={searchTxt} goHome={goHome}/>
        </Route>
        <Route path="/MovieDetails/:id" exact>
          <MovieDetails/>
        </Route>
      </Switch> 
      </div>
      </Router>
  );
}

export default App;
