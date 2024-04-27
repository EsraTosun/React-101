import React from 'react' ;
import {useTheme} from '../contexs/ThemeContext';

function ChangeTheme() {

    const { theme, toggleTheme } = useTheme();
    console.log(theme);

    return (
        <div>
            <div>Aktif Tema: {theme} </div>
            <button onClick={toggleTheme}> 
                Temayı Değiştir
            </button>
        </div>
    );
}

export default ChangeTheme