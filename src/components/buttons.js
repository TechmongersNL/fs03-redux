import {useDispatch} from 'react-redux';
import {increase, decrease, reset, set} from '../store/count/slice';

const Buttons = () => {
    // Equivalent to using setStateVariable from React useState hook
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => {dispatch(increase())}}>Increase</button>
            <button onClick={() => {dispatch(decrease())}}>Decrease</button>
            <button onClick={() => {dispatch(reset())}}>Reset</button>
            <button onClick={() => {dispatch(set(100))}}>Set to 100</button>
            <button onClick={() => {dispatch(set(500))}}>Set to 500</button>
        </div>
    )
}

export default Buttons;