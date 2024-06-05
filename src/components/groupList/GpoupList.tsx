import { FC, useState } from "react";
import { GroupListProps } from "./GroupListProps";
import clsx from 'classnames';
import './groupListStyles.scss'

export const GroupList:FC<GroupListProps> = props => {
    const {groupList, onItemClick} = props;
    const [selectedGroup,setSelectedGroup] = useState(0);
   
    const groupClickHandler = (id: number) => {
        setSelectedGroup(id);
        onItemClick && onItemClick(id);
    }

    const isSelected= (id:number) => selectedGroup === id;

    return(
        <div className='group-list'>
            {groupList.map(group =>{
                return (
                <div key={group.id} 
                className={clsx('group-list__item', {'group-list__item_selected':isSelected(group.id)})}
                onClick={() =>groupClickHandler(group.id)}
                
                >
                    <div  className='group-list__item-fio'>
                        {` ${group.title} ${group.year}`.trim()}
                    </div>
                    
                </div>
                );
            })}
        </div>
    )
}