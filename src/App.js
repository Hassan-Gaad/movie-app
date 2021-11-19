import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import axiosInstance from './environment/AxiosConfig';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App() {
  const [searchTxt, setSearchTxt] = useState();
  const [goHome, setGoHome] = useState(1);
  
  return (
      <Router>
      <Navbar onSearch={setSearchTxt} goHome={(val)=>{setGoHome(val)}}/>
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
