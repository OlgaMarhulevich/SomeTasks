type initStateType = {
    currentTheme: string
}

const initState: initStateType = {
    currentTheme: ''
};

export const themeReducer = (state = initState, action: changeThemeACType): initStateType => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, currentTheme: action.theme};
        }
        default: return state;
    }
};

type changeThemeACType = {theme: string, type: string}

export const changeThemeAC = (theme: string): changeThemeACType => ({theme, type: 'CHANGE-THEME'});