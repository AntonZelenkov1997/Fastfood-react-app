import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { checkingStore } from './storeChecking'

//В файле App.jsx проверка Route и стиля SCSS
//В файле styles.scss сделан стиль для кнопки

//Проверяю подключение к Store
checkingStore(); 

ReactDOM.render(<App />, document.getElementById('root'));
