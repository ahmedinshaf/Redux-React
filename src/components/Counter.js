import classes from './Counter.module.css';
import {useSelector,useDispatch } from 'react-redux'
import {useState} from 'react'
import {counterActions} from '../store/counter'

const Counter = () => {
  const [isShowCounter,setIsShowCounter] = useState(true)
 const dispatch =  useDispatch()
  const counter = useSelector(state => state.counter.value)
  const toggleCounterHandler = () => {
    setIsShowCounter(prevState=>!prevState)
  };

  const increaseHandler =(amount)=>{
    dispatch(counterActions.increment())
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
    {
      isShowCounter &&
      <div className={classes.value}>{counter}</div>

    }
      <div style={{margin:'10px'}}>
      <button  style={{margin:'10px'}} onClick={()=>increaseHandler(4)}>
          increment by 5
        </button>
        <button  style={{margin:'10px'}} onClick={()=>increaseHandler(1)}>
          increment
        </button>
        <button  style={{margin:'10px'}} onClick={()=>increaseHandler(-1)}>
          decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
