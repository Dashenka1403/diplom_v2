import { FC, useState } from "react";
import { Button, DropDown, TextField } from "../../components";
import { WidgetLayout } from "../../components/layouts";
import './loginPageStyles.scss'
import { RoutesPath } from "../../constants/commonConstants";
import { useNavigate } from "react-router-dom";



export const LoginPage: FC = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const[errorMessage, setErrorMessage] = useState<string>('');


    const loginChangedHandler = (value: string) => {
        setLogin(value);
    };

    const passwordChangedHandler = (value: string) => {
        setPassword(value);
    };

    const roleChangedHandler = (value: string) => {
      setRole(value);
  };

    const toGenerateDocsHandler = () => {
      if(login&&password)
        navigate(RoutesPath.InfoPage);
      else 
      {
        setErrorMessage('Заполните поле ')
      }
 
    }

    return(
      <WidgetLayout>
      <div className='login-page__form'>
        <h2 className='login-page__form__label'>Авторизация</h2>
        <div className='login-page__form__items'>
            <TextField labelText="Имя пользователя" infoType='error' info={errorMessage} type='text' value={login} onChange={loginChangedHandler} />
            <TextField labelText="Пароль" infoType='error' info={errorMessage} type='password'  value={password} onChange={passwordChangedHandler}  />
            <DropDown selectedChanged={roleChangedHandler}  label="Укажите роль" items={[
             
              {
                text: 'Администратор', value: 'admin'
              },
              {
                text: 'Заведующий кафедрой', value: 'zav_kaf'
              },
              {
                text: 'Руководитель ОП', value: 'ruk_OP'
              },
              {
                text: 'Преподаватель', value: 'teacher'
              }
            ]} />
        </div>
        <Button text="Войти" onClick = {toGenerateDocsHandler}/>
      </div>
      </WidgetLayout>
    );
};

/*value={login}*/