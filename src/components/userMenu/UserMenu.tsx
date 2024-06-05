import { FC, useState } from "react";
import { UserMenuProps } from "./UserMenuProps";
import { UserIcon } from "../../assets/icons";
import './userMenuStyles.scss'
import { RoutesPath } from "../../constants/commonConstants";
import { useNavigate } from "react-router-dom";


export const UserMenu:FC<UserMenuProps> = (props) => {

    const [show, setShow] = useState<boolean>(false);
    const navigate = useNavigate();
    
    const logOutHandler = () => {
        navigate(RoutesPath.Login)
    };

    const showMenuHandler = () => {
        setShow(prev=>!prev)
    }

    const {items} = props;

    return(
        <div className='user-menu'>
            <UserIcon onClick={showMenuHandler}/>
            {show&&(<div className='user-menu__menu'>
            {items.map(item =>  ( <span onClick={logOutHandler} className='user-menu__menu-item' key={item.id}>{item.label} </span> )) }
            </div>)}
        </div>
    )
}
