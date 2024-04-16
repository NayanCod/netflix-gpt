import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/*
          MainContainer
            - VideoBackGround
            - VideoTitle
          SecondaryContainer
            - MovieList * n
              - cards * n
       */}
    </div>
  )
}

export default Browse