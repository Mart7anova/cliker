import React, {ChangeEvent} from 'react';
import s from './InputSettings.module.css'

type InputSettingsPropsType={
    settingName: string
    value: number
    callBack: (value: number)=>void
}

export const InputSettings = (props: InputSettingsPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = JSON.parse(e.currentTarget.value)
        props.callBack(newValue)
    }
    return (
        <div>
            {props.settingName}
            <input type="number" value={props.value.toFixed()} onChange={onChangeHandler} className={s.superInput}/>
        </div>
    );
};
