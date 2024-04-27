import React from 'react';
import { useTheme } from '../contexs/ThemeContext';
import { useLang} from '../contexs/LangContext';

function Footer() {
  const { theme, toggleTheme } = useTheme();
  const {lang, setLang} = useLang();

  return (
    <div>
        <hr />
        <div>Footer Aktif Tema: {theme}</div>
        <div>Footer Aktif Dil: {lang}</div>
        <button onClick=  {toggleTheme}> 
            Temayı Değiştir
        </button>
        <div>Dil Değiştir</div>
        <button onClick={() => setLang('tr')}>TR</button>
        <button onClick={() => setLang('en')}>EN</button>
        <button onClick={() => setLang('de')}>DE</button>
            
    </div>
  )
}

export default Footer