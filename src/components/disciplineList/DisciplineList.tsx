import { FC, useState } from 'react';
import { DisciplineListProps } from './DisciplineListProps';
import clsx from 'classnames';
import './disciplineListStyles.scss'
import {  StatusApprovedIcon, StatusDoneIcon, StatusNewIcon } from '../../assets/icons';


export const DisciplineList:FC<DisciplineListProps> = props => {
    const {disciplineList, onItemClick, open = false} = props;
    const [selectedDiscipline,setSelectedDiscipline] = useState(0);

    if(!open) {
        return null;
      }

    const disciplineClickHandler = (id: number) => {
        setSelectedDiscipline(id);
        onItemClick && onItemClick(id);
    }

    const isSelected= (id:number) => selectedDiscipline === id;


    return(
        <div className='discipline-list' >
            {disciplineList.map(discipline =>{
                if(discipline.status === 'Новая') {
                return (
                <div key={discipline.id} 
                className={clsx('discipline-list__item', {'discipline-list__item_selected':isSelected(discipline.id)})}
                onClick={() =>disciplineClickHandler(discipline.id)}
                >
                    <StatusNewIcon width={20} height={20}/> 
                    <div className='discipline-list__item-fio'>
                        {` ${discipline.title} (${discipline.status })`.trim() }  
                    </div>  
                       
                </div>
                );}
                else if (discipline.status === 'Готова') {
                return (
                    <div key={discipline.id} 
                    className={clsx('discipline-list__item', {'discipline-list__item_selected':isSelected(discipline.id)})}
                    onClick={() =>disciplineClickHandler(discipline.id)}
                    >
                        <StatusDoneIcon width={20} height={20}/>
                        <div className='discipline-list__item-fio'>
                            
                            {` ${discipline.title} (${discipline.status })`.trim() } 
                        </div>      
                    </div>
                    );}
                else if (discipline.status === 'Утверждена') {
                    return (
                        <div key={discipline.id} 
                        className={clsx('discipline-list__item', {'discipline-list__item_selected':isSelected(discipline.id)})}
                        onClick={() =>disciplineClickHandler(discipline.id)}
                        >
                            <StatusApprovedIcon width={20} height={20}/>
                            <div className='discipline-list__item-fio'>
                                
                                {` ${discipline.title} (${discipline.status })`.trim() } 
                            </div>      
                        </div>
                        );}

                
            })}
        </div>
    )
}