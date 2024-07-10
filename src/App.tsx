import React from 'react';
import { AdminPage, InfoPage, LoginPage, NoPermissionsPage } from './pages';
import { RoutesPath } from './constants/commonConstants';
import { Route, Routes } from 'react-router-dom';
import './styles/globalStyles.scss'
import { RegistrationPage } from './pages/registration';


export const App: React.FC = () => {
  
  return(
    <Routes>
    <Route path={RoutesPath.Login} element = {<LoginPage/>} />
    <Route path={RoutesPath.Registration} element={<RegistrationPage />} />
    <Route path={RoutesPath.InfoPage} element = {<InfoPage/>} />
    <Route path={RoutesPath.Administration} element = {<AdminPage/>}/>
    <Route path={RoutesPath.NoPermissions} element={<NoPermissionsPage />} />
    <Route path={'*'} element = {<LoginPage/>} />
    </Routes>
    );
};
