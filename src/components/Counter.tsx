import React from 'react';
import s from './components.module.css'

type propsType={
    count:number
    maxCount:number
}

const Counter = (props: propsType) => {
    return (
        <div className={props.count === props.maxCount ? s.countOn : s.count}>
            {props.count}
        </div>
    );
};

export default Counter;