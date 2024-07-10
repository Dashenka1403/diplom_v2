import { FC, useState } from 'react';
import { DisciplineListProps } from './DisciplineListProps';
import clsx from 'classnames';
import './disciplineListStyles.scss'
import {  PencilIcon, StatusApprovedIcon, StatusDoneIcon, StatusFinishedIcon, StatusInWorkIcon, StatusNewIcon, TrashIcon } from '../../assets/icons';


export const DisciplineList:FC<DisciplineListProps> = props => {
    const {disciplineList, onItemClick, onItemDelete, onItemEdit, open = false} = props;
    const [selectedDiscipline,setSelectedDiscipline] = useState(0);

    if(!open) {
        return null;
      }

      const disciplineEditHandler = (id: number) => {
        onItemEdit && onItemEdit(id);
    }

    const disciplineDeleteHandler = (id: number) => {
        onItemDelete && onItemDelete(id);
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
                    <div className='discipline-list__item__fio'>
                        {` ${discipline.title} (${discipline.status })`.trim() }
                    </div>  
                        <div className='group-list__item__actions'>
                            <PencilIcon width={20} height={20} onClick={() => {disciplineEditHandler(discipline.id)}}/>
                            <TrashIcon width={20} height={20} onClick={() => {disciplineDeleteHandler(discipline.id)}}/>
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
                        <div className='discipline-list__item__fio'>
                            
                            {` ${discipline.title} (${discipline.status })`.trim() } 
                        </div>
                            <div className='group-list__item__actions'>
                                <PencilIcon width={20} height={20} onClick={() => {disciplineEditHandler(discipline.id)}}/>
                                 <TrashIcon width={20} height={20} onClick={() => {disciplineDeleteHandler(discipline.id)}}/>
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
                            <div className='discipline-list__item__fio'>
                                
                                {` ${discipline.title} (${discipline.status })`.trim() } 
                            </div>
                                <div className='group-list__item__actions'>
                                <PencilIcon width={20} height={20} onClick={() => {disciplineEditHandler(discipline.id)}}/>
                                 <TrashIcon width={20} height={20} onClick={() => {disciplineDeleteHandler(discipline.id)}}/>
                                 </div>
                                  
                        </div>
                        );}
                        else if (discipline.status === 'Завершена') {
                            return (
                                <div key={discipline.id} 
                                className={clsx('discipline-list__item', {'discipline-list__item_selected':isSelected(discipline.id)})}
                                onClick={() =>disciplineClickHandler(discipline.id)}
                                >
                                    <StatusInWorkIcon width={20} height={20}/>
                                    <div className='discipline-list__item__fio'>
                                        
                                        {` ${discipline.title} (${discipline.status })`.trim() } 
                                        </div>
                                        <div className='discipline-list__item__actions'>
                                        <PencilIcon width={20} height={20} onClick={() => {disciplineEditHandler(discipline.id)}}/>
                                         <TrashIcon width={20} height={20} onClick={() => {disciplineDeleteHandler(discipline.id)}}/>
                                         </div>
                                         
                                </div>
                                );}
                             else if (discipline.status === 'В работе') {
                                    return (
                                        <div key={discipline.id} 
                                        className={clsx('discipline-list__item', {'discipline-list__item_selected':isSelected(discipline.id)})}
                                        onClick={() =>disciplineClickHandler(discipline.id)}
                                        >
                                            <StatusFinishedIcon width={20} height={20}/>
                                            <div className='discipline-list__item__fio'>
                                                
                                                {` ${discipline.title} (${discipline.status })`.trim() } 
                                            </div>
                                                <div className='discipline-list__item__actions'>
                                                <PencilIcon width={20} height={20} onClick={() => {disciplineEditHandler(discipline.id)}}/>
                                                 <TrashIcon width={20} height={20} onClick={() => {disciplineDeleteHandler(discipline.id)}}/>
                                                 </div>
                                            
                                        </div>
                                        );}

                
            })}
        </div>
    )
}