import React from 'react';
import s from './components.module.css'

type propsType={
    count:number
    maxCount:number
    error: string | null
}

const Counter = (props: propsType) => {
    return (
        <div className={props.count === props.maxCount || props.error ? s.countOn : s.count}>
            {props.error || props.count}
        </div>
    );
};

export default Counter;