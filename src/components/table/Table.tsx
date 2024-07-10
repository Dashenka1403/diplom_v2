import {FC, useEffect, useState} from 'react';
import { TableProps } from './TableProps';
import './tableStyles.scss';
import { TextField } from '../textField';
import { Button } from '../button';
import { PencilIcon, PlusIcon, TrashIcon } from '../../assets/icons';

export const Table : FC<TableProps> = props => {

    const { items, open = false, compDescription, onItemEdit, onItemDelete, onItemClick, onItemAdd} = props;
    const [selectedUser,setSelectedUser] = useState(0);

    const lineClickHandler = (id: number) => {
        setSelectedUser(id);
        onItemClick && onItemClick(id);
    }

    const tableEditHandler = (id: number) => {
        onItemEdit && onItemEdit(id);
    }

    const tableDeleteHandler = (id: number) => {
        onItemDelete && onItemDelete(id);
    }

    const isSelected= (id:number) => selectedUser === id;

    return (
        <div className='results'>
             <div className='results__competences'>
             {compDescription?.map(comps => {
                < div   className='results__title'>Информация о компетенциях</div>
                return(
                    <div className="results__competence-info" key={comps.id} >
                       
                        <div className="results__competence-info__row">
                            <div className="results__competence-info__row__title">Код компетенции:</div> 
                            {comps.codeCompetence}
                        </div>
                        <div className="results__competence-info__row">
                            <div className="results__competence-info__row__title">Информация:</div> 
                            {comps.description}</div>
                    </div>  
                )
            }) 
            }
            </div>
       <div  className="results__table"  >
          <table  >
          <thead>
                    <tr className='results__table__title'>
                        <th>Компетенция</th>
                        <th>Знать</th>
                        <th>Уметь</th>
                        <th>Владеть</th>
                        <th>
                            <div className='results__table__title__actions'>
                            <div> Действия</div>
                            <PlusIcon width={20} height={20} onClick={onItemAdd} />
                            </div>
                        </th>

                    </tr>
                </thead>
          {items?.map(item => {
            
                return (
            
                    <tbody key={item.id}    onClick={() =>lineClickHandler(item.id)}   >
                        
                        <tr className='results__table__row' >
                        
                            <td >
                                {item?.codeCompetence}
                            </td>
                            <td>{item.knowledge}</td>
                            <td>{item.skill}</td>
                            <td>{item.ownership}</td>
                            <td>
                            <PencilIcon onClick={()=>{tableEditHandler(item.id)}}/>
                            <TrashIcon onClick={()=>{tableDeleteHandler(item.id)}} />
                            </td>
                        </tr>  

                  
                    </tbody>
                   
                );
                
            })}
            </table>
          
       </div>
      
       </div>
    )
}

// {items.map(item =>  ( <span  key={item.id}>{item.data} </span> ))}