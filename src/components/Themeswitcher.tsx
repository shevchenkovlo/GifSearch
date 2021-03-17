import React from 'react';
import {Theme} from "../reducers";

interface Props {
    theme: Theme
    onClick: (theme:Theme) => void
}

const ThemeSwitcher = (props: Props) => {


    return (
        <button type="button" onClick={() => {
            if (props.theme === 'light') {
                props.onClick('dark')
            } else {
                props.onClick('light')
            }
        }}>
            Redux: {props.theme}
        </button>
    );
}
export default ThemeSwitcher