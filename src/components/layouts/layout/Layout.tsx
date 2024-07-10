import {FC} from 'react';
import { LayoutProps } from './LayoutProps';
import './layoutStyles.scss'
import { useNavigate } from 'react-router-dom';
import { AccessTokenKey, RoutesPath } from '../../../constants/commonConstants';
import { LogoIcon } from '../../../assets/icons';
import { UserMenu } from '../../userMenu';
import { MenuItem } from '../../userMenu/UserMenuProps';
import { logOut } from '../../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hooks/reduxToolkitHooks';




export const Layout: FC<LayoutProps> = props => {
    const { title, headerChild, children} = props;
    const navigate = useNavigate();
    const {role} = useAppSelector((state)=>state.user);
    const dispatch = useDispatch();

    // const logOutHandler = () => {
    //     dispatch(logOut());
    //     navigate(`/${RoutesPath.Login}`)
    //     console.log(AccessTokenKey)
    // };

    // const goToAdministrationHandler = () => {
    //     navigate(`/${RoutesPath.Administration}`)
    // };

    // const exitMenuItem: MenuItem = {
    //     id: 'exit',
    //     action: logOutHandler,
    //     label: 'Выйти'
    // };;

    // const administrationMenuItem: MenuItem =  {
    //     id: 'go_to_administration',
    //     action: goToAdministrationHandler,
    //     label: 'Администрирование'
    // };

    return (
    <div className='layout'>
         <div className = 'layout__header' > 
            <div >
                <LogoIcon/>
            </div>
            <div className='layout__header_title' > 
                <div  >{title ?? 'Header'} </div>
                <div  >{headerChild} </div>
            </div>
            {/* <div className='layout__user-menu' >
            <UserMenu items={role === 'admin' ? [administrationMenuItem, exitMenuItem]: [exitMenuItem]}/>     
           
            </div> */}
        </div>
        <div  className='layout__body'> 
        <div className='layout__body__children'>
        {children}
        </div>
        </div>
     </div>
    );
}


