import React, {useState} from 'react';
import s from './components/components.module.css'
import Counter from './components/Counter';
import Button from './components/Button';

function App() {
    const minCount = 0
    const maxCount = 5
    const [count, setCount] = useState<number>(minCount);

    const inc = () => {if (count < maxCount) setCount(count + 1)}
    const reset = () => setCount(minCount)

    return (
        <div className={s.app}>
            <Counter count={count} maxCount={maxCount}/>

            <div className={s.buttons}>
                <Button name={'inc'} disable={count === 5} callBack={inc}/>
                <Button name={'reset'} disable={!count} callBack={reset}/>
            </div>
        </div>
    );
}

export default App;
