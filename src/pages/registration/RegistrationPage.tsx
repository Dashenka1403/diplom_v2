import {FC, useState} from 'react';
import { TextField } from '../../components/';
import { Button} from '../../components/';
import { WidgetLayout } from '../../components/layouts';
import './registrationPageStyle.scss';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '../../constants/commonConstants';
import { AuthApi } from '../../api';
import { AxiosError } from 'axios';

/*<TextField labelText="Фамилия" value ={formFields?.lastName} type='text' onChange={(value) => changeFieldValue(value, 'firstName')}/>
            <TextField labelText="Имя" value ={formFields?.firstName} type='text' onChange={(value) => changeFieldValue(value,'lastName')}/>
            <TextField labelText="Отчество" value ={formFields?.midName} type='text' onChange={(value) => changeFieldValue(value, 'midName')}/>*/


type formFieldsNames = 'login' | 'password' | 'repeatPassword' | 'lastName' | 'firstName' | 'midName';

interface RegistrationForm{
    login: string;
    password: string;
    repeatPassword: string;
    lastName: string;
    firstName: string;
    midName?: string;
}

export const RegistrationPage: FC = () => {
    const {signUp, signIn} = AuthApi();
   const navigate = useNavigate();
   const[formFields, setFormFields] = useState<RegistrationForm>();
   const[errorMessage, setErrorMessage] = useState<string>();
   const changeFieldValue = (value: string|undefined, fieldname: formFieldsNames) => {
        setFormFields(prev =>{
            return{
                ...prev,
                [fieldname]:value
            } as RegistrationForm
        })
   };
const registrationHandler = () => {
   // navigate(RoutesPath.Departments)
   if (!formFields?.login||!formFields.password)
   {
        setErrorMessage('Не задан логин или пароль')
        return;
   }

   if (formFields?.password !== formFields?.repeatPassword)
   {
        setErrorMessage('Пароли не совпадают')
        return;
   }
   const data = {
    login:formFields.login, 
    password: formFields.password,
    lastName: formFields.lastName,
    firstName: formFields.firstName,
    midName: formFields.midName   
}

   signUp(data)
   .then(()=>{
        signIn(data).then(respData=>{
            if(respData.role === 'user')
            {
                navigate(`/${RoutesPath.NoPermissions}`);
            }
            else {
                navigate(`/${RoutesPath.InfoPage}`);
            }
            
        }).catch(err=> 
            setErrorMessage((err as AxiosError)?.message)
        );
       
   })
   .catch((err)=>{
        setErrorMessage((err as AxiosError)?.message);
   });
};
const toReturnHandler = () => {
    navigate(RoutesPath.Login)
};


    return(
        <WidgetLayout>
            <div className='reg-page__form'>
                
                <h3 className='reg-page__title'>Регистрация</h3>
                <div className='reg-page__fields'>
            <TextField labelText="Фамилия" value = {formFields?.lastName} type='text' onChange={(value) => changeFieldValue(value, 'lastName')}/>
            <TextField labelText="Имя" value = {formFields?.firstName} type='text' onChange={(value) => changeFieldValue(value, 'firstName')}/>
            <TextField labelText="Отчество" value = {formFields?.midName} type='text' onChange={(value) => changeFieldValue(value, 'midName')}/>
            <TextField labelText="Логин" value = {formFields?.login} type='text' onChange={(value) => changeFieldValue(value, 'login')}/>
            <TextField labelText="Пароль" value ={formFields?.password} type='password' onChange={(value) => changeFieldValue(value, 'password')}/>
           
            <TextField labelText="Подтвердите пароль" value ={formFields?.repeatPassword} type='password' onChange={(value) => changeFieldValue(value, 'repeatPassword')}/>
            {errorMessage&&(<span style={{color: 'red'}}>{errorMessage}</span>)}
                </div>
            <div className='reg-page__actions'>
                <Button text="Назад" onClick={toReturnHandler} />
                <Button text="Зарегистрироваться" onClick={registrationHandler} />
            </div>
            </div>
        </WidgetLayout>
    );
}