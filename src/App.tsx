import React, {useEffect, useState} from 'react';
import s from './components/components.module.css'
import Counter from './components/Counter';
import Button from './components/Button';
import {InputSettings} from './components/InputSettings';

function App() {
    const keyStartLS = 'counterStartValue'
    const keyMaxLS = 'counterMaxValue'
    const keyCountLS = 'counterValue'
    //const keyErrorLS = 'counterValue'

    const [startCount, setStartCount] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(1)
    const [count, setCount] = useState<number>(0);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let startValueString = localStorage.getItem(keyStartLS)
        let maxValueString = localStorage.getItem(keyMaxLS)
        let counterValueString = localStorage.getItem(keyCountLS)
        if (startValueString && maxValueString && counterValueString) {
            let newStartCount = JSON.parse(startValueString)
            let newMaxCount = JSON.parse(maxValueString)
            let newCount = JSON.parse(counterValueString)
            setStartCount(newStartCount)
            setMaxCount(newMaxCount)
            setCount(newCount)

        }
    }, [])

    useEffect(() => {
        if(startCount > -1 && startCount < 100 && startCount < maxCount && maxCount > 0 && maxCount < 101){
            localStorage.setItem(keyStartLS, JSON.stringify(startCount))
            localStorage.setItem(keyMaxLS, JSON.stringify(maxCount))
            localStorage.setItem(keyCountLS, JSON.stringify(count))
        }
    }, [count, startCount, maxCount])

    const inc = () => {
        if (count < maxCount)
            setCount(count + 1)
    }
    const reset = () => {
            setCount(startCount)
    }

    const onChangeStartValueHandler = (value: number) => {
        setError(null)
        setStartCount(value)
    }
    const onChangeMaxValueHandler = (value: number) => {
        setError(null)
        setMaxCount(value)
    }

    const set = () => {
        if(startCount > -1 && startCount < 100 && startCount < maxCount && maxCount > 0 && maxCount < 101){
            setCount(startCount)
        }
        else {
            setError('the value is incorrect')
        }
    }

    return (
        <div className={s.app}>
            <Counter count={count} maxCount={maxCount} error={error}/>

            <div className={s.buttons}>
                <Button name={'inc'} disable={count === maxCount || !!error} callBack={inc}/>
                <Button name={'reset'} disable={!count || !!error} callBack={reset}/>
            </div>
            <div className={s.settingValue}>
                <InputSettings
                    settingName={'Start value'}
                    value={startCount}
                    callBack={(value)=>onChangeStartValueHandler(value)}
                />
                <InputSettings
                    settingName={'Max value'}
                    value={maxCount}
                    callBack={(value)=>onChangeMaxValueHandler(value)}
                />
            </div>
            <div className={s.buttons}>
                <Button name={'set'} disable={!!error} callBack={set}/>
                <Button name={'set'} disable={!!error} callBack={set}/>
            </div>

        </div>
    );
}

export default App;
