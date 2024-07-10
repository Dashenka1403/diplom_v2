import {FC, useEffect} from 'react';
import { Layout } from '../../components/layouts';
import { UserList } from '../../components/userList';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '../../constants/commonConstants';
import './adminPageStyles.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxToolkitHooks';
import { getUsers, setUserRole } from '../../services';


export const AdminPage: FC =() => {

   // const [users, setUsers] = useState<Array<User>>([]);
    const navigate = useNavigate();
    const { users } = useAppSelector((state) => state.administration);
    const { accessToken, role } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();    
    

    useEffect(() => {
        if(accessToken) {
            if(role === 'rpd' || role === 'oop' || !role) {
                navigate(`${RoutesPath.NoPermissions}`);
            } else {
                dispatch(getUsers());
            }
        } else {
            navigate(`${RoutesPath.Login}`);
        }
    }, [accessToken, role, navigate, dispatch]);


    const setAdminRoleHandler = (id: number) => {

        dispatch(setUserRole({userId: id, roleName: 'admin'}));
    }

    const setManagerRoleHandler = (id: number) => {
        dispatch(setUserRole({userId: id, roleName: 'oop'}));
    }

    const resetPermissionsHandler = (id: number) => {
        dispatch(setUserRole({userId: id, roleName: 'rpd'}));
    }

    // const toLoginHandler = () => {
    //     navigate(RoutesPath.InfoPage)
    // }

    return(
        <div className='admin-page'>
        <Layout  title='Администрирование'>
            {/* <Button className = 'admin-page__button-back' text = "Вернуться к отделам" onClick={toLoginHandler}/> */}
            <UserList onSetAdminRole={setAdminRoleHandler} 
                onSetManagerRole={setManagerRoleHandler} 
                onResetPermissions={resetPermissionsHandler}
                userList={users}
            />

            
        </Layout>
        </div>
    );
}
    



 
    

   