import './App.css';
import Buttons from './components/buttons';
import { useSelector, useDispatch } from 'react-redux';
import {selectCount} from './store/count/selectors';
import {selectFavorite} from './store/favorite/selectors';
import { toggle } from './store/favorite/slice';

function App() {
  // Equivalent to accessing a state variable from React useState hook
  const count = useSelector(selectCount)
  const favorite = useSelector(selectFavorite);

  // Equivalent to using setStateVariable from React useState hook
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Count: {count}</p>
      <Buttons />
      <p>{favorite ? '⭐️' : ''}</p>
      <button onClick={() => {dispatch(toggle())}}>Toggle favorite</button>
    </div>
  );
}

export default App;
