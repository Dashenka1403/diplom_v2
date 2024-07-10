import { User } from "../../types/models";

export interface UserListProps {
    userList:Array<User>;
    onSetAdminRole: (id: number) => void;
    onSetManagerRole: (id: number) => void;
    onResetPermissions: (id: number) => void;
}