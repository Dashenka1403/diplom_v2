import { FC, useState } from 'react';
import { UserListProps } from './UserListProps';
import './userListStyles.scss'
import clsx from 'classnames';
import { Button } from '../../components';



export const UserList: FC<UserListProps> = props => {
    const {userList, onSetAdminRole, onSetManagerRole, onResetPermissions} = props;
    const [selectedUser,setSelectedUser] = useState(0);

    

    return(
        <div className='user-list'>
            {userList.map(user =>{
                return (
                <div key={user.id} className='user-list__item' >
                   <div className='user-list__item-descr'>
                    <span className='user-list__item-descr-and-title'>
                        <span className='user-list__item-title'>Логин : </span> 
                         {user.login}
                    </span>
                    <span >
                        <span className='user-list__item-title'> Имя : </span>
                        {user.firstname}
                    </span>
                    <span  className='user-list__item-descr-and-title' >
                        <span className='user-list__item-title'> Фамилия : </span>
                        {user.lastname}
                    </span>
                    <span  className='user-list__item-descr-and-title'>
                        <span className='user-list__item-title'> Роль : </span>
                        {user.role} 
                    </span>
                    <div className='user-list__btn-chahge-role'>
                    {/* <Button text='Сделать администратором' onClick={()=>onSetAdminRole(user.id)}/> */}
                    <Button text='Сделать менеджером'   onClick={()=>onSetManagerRole(user.id)}/>
                    <Button text='Убрать права'   onClick={()=>onResetPermissions(user.id)}/>
                    </div>
                   </div>
                </div>
                );
            })}
        </div>
    )
}
