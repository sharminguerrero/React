import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementby, reset} from './store/slices/counter';

function App() {

  const {counter} = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>count is: {counter}</p>
      <p>
        <button type="button" onClick={() => dispatch(increment())}>
         Increment 
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
         Decrement
        </button>
        <button type="button" onClick={() => dispatch(incrementby(2))}>
         Increment by 2
        </button>
        <button type="button" onClick={() => dispatch(reset())}>
         Reset
        </button>
        </p>
    </>
  )
}

export default App
