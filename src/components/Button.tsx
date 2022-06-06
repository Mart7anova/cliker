import React from 'react';
import s from './Button.module.css';

type propsType={
    name: string
    callBack:()=>void
    disable: boolean
}

const Button = (props: propsType) => {
    return (
            <button className={s.default} onClick={props.callBack} disabled={props.disable}>
                {props.name}
            </button>
    );
};

export default Button;