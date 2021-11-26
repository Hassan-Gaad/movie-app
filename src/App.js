import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css';
import Favorite from './pages/Favorite';
import { useSelector } from 'react-redux';
import Loader from './components/Loader';
import { LanguageProvider } from './context/LangContext';

function App() {
  const [searchTxt, setSearchTxt] = useState();
  const [goHome, setGoHome] = useState();
  const [lang, setLang] = useState('en');

  const loader = useSelector((state) => state.loader.isLoad);
  console.log(loader);
  const setGoHomeFun = () => {
    let i = Math.floor(Math.random() * 100);
    console.log(i);
    setGoHome(i);

  }

  return (
    <div
    dir={lang==='en'? 'ltr':'rtl'}
    className={lang==='en'? "text-left":"text-right"}
    >
    <Router>
      <LanguageProvider value={{lang,setLang}}>
      <Navbar onSearch={setSearchTxt} goHome={setGoHomeFun} />
      <div>
        {loader && <Loader />}
        <Switch>
          <Route path='/' exact>
            <MovieList searchValue={searchTxt} goHome={goHome} />
          </Route>
          <Route path="/MovieDetails/:id" exact>
            <MovieDetails />
          </Route>
          <Route path="/favorites" exact>
            <Favorite />
          </Route>
        </Switch>
      </div>
      </LanguageProvider>
    </Router>
    </div>
  );
}

export default App;
