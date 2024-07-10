import { FC, useState } from "react";
import { GroupListProps } from "./GroupListProps";
import clsx from 'classnames';
import './groupListStyles.scss'
import { PencilIcon, PlusIcon, TrashIcon } from "../../assets/icons";

export const GroupList:FC<GroupListProps> = props => {
    const {groupList, onItemClick, onItemDelete, onItemEdit} = props;
    const [selectedGroup,setSelectedGroup] = useState(0);
   

    const edProgrammEditHandler = (id: number) => {
        onItemEdit && onItemEdit(id);
    }

    const edProgrammDeleteHandler = (id: number) => {
        onItemDelete && onItemDelete(id);
    }


    const groupClickHandler = (id: number) => {
        setSelectedGroup(id);
        onItemClick && onItemClick(id);
    }

    const isSelected= (id:number) => selectedGroup === id;

    return(
        <div className='group-list'>
            {/* <div> Список образовательных программ
            <PlusIcon />
            </div> */}
          
            {groupList.map(group =>{
                return (
                <div key={group.id} 
                className={clsx('group-list__item', {'group-list__item_selected':isSelected(group.id)})}
                onClick={() =>groupClickHandler(group.id)}  >
                    <div  className='group-list__item__fio'>
                        {` ${group.title} ${group.year}`.trim()} 
                     </div>
                    <div className='group-list__item__actions'>
                    <PencilIcon width={20} height={20} onClick={() => {edProgrammEditHandler(group.id)}}/>
                    <TrashIcon width={20} height={20} onClick={() => {edProgrammDeleteHandler(group.id)}}/>
                        </div>
                </div>
                );
            })}
        </div>
    )
}