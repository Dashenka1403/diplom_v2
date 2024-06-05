import React from 'react';
import { InfoPage, LoginPage } from './pages';
import { RoutesPath } from './constants/commonConstants';
import { Route, Routes } from 'react-router-dom';
import './styles/globalStyles.scss'


export const App: React.FC = () => {
  
  return(
    <Routes>
    <Route path={RoutesPath.Login} element = {<LoginPage/>} />
    <Route path={RoutesPath.InfoPage} element = {<InfoPage/>} />
    <Route path={'*'} element = {<LoginPage/>} />
  </Routes>
    )
}
