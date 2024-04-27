import React from 'react'
import ChangeTheme from './components/ChangeTheme'
import ChangeLang from './components/ChangeLang'
import Footer from './components/Footer'
import { useTheme } from './contexs/ThemeContext'

{/* Temayı değiştirmemizi sağlar */}

function Container() {
    const {theme} = useTheme();
    console.log("aaa");

    return (
        <div className= {`container ${theme}`}>
            <ChangeTheme />  
            <hr />
            <ChangeLang />
            <Footer />
        </div>
    );
}

export default Container