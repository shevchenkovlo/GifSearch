import { connect } from 'react-redux';
import {State, switchTheme, Theme} from "../reducers";
import ThemeSwitcher from "../components/ThemeSwitcher/Themeswitcher";
import {Dispatch} from "redux";

const mapStateToProps = (state: State) => ({
    theme: state.theme
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onClick: (theme:Theme) => {
        dispatch(switchTheme(theme))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);