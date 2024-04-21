import React, {useContext} from 'react' ;
import ThemeContext from '../contexs/ThemeContext';

function ChangeTheme() {

    const data = useContext(ThemeContext);
    console.log(data);

    return (
        <div>
            <div>Aktif Tema: {data}</div>
            <button> Change Theme</button>
        </div>
    );
}

export default ChangeTheme