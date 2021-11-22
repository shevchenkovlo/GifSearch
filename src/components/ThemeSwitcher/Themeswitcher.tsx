import React from 'react';
import {Theme} from "../../reducers/index";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './ThemeSwitcher.scss';


interface Props {
    theme: Theme
    onClick: (theme: Theme) => void
}

const ThemeSwitcher = (props: Props) => {


    return (
        <FormControlLabel className="themeSwitcher"
            control={
                <Switch  onClick={() => {
                    if (props.theme === 'light') {
                        props.onClick('dark')
                    } else {
                        props.onClick('light')
                    }
                }
                }
                />
            }
            label={props.theme}
        />
        // Redux: {props.theme}

    );
}
export default ThemeSwitcher