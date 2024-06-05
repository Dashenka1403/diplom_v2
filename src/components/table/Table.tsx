import {FC, useEffect, useState} from 'react';
import { TableProps } from './TableProps';
import './tableStyles.scss';
import { TextField } from '../textField';
import { Button } from '../button';
import { PencilIcon } from '../../assets/icons';

export const Table : FC<TableProps> = props => {

    const { items, open = false, action, compDescription, onItemEdit} = props;

    const tableEditHandler = (id: number) => {
        onItemEdit && onItemEdit(id);
    }
    return (
        <div className='results'>
             
             {compDescription?.map(comps => {
                < div   className="results__title">Информация о компетенциях</div>
                return(
                    <div className="results__competence-info" key={comps.id} >
                       
                        <div className="results__competence-info__row">
                            <div className="results__competence-info__row__title">Код компетенции:</div> 
                            {comps.codeComp}
                        </div>
                        <div className="results__competence-info__row">
                            <div className="results__competence-info__row__title">Информация:</div> 
                            {comps.description}</div>
                    </div>  
                )
            }) 
            }
       <div  className="results__table"  >
          <table  >
          <thead>
                    <tr className='results__table__title'>
                        <th>Компетенция</th>
                        <th>Знать</th>
                        <th>Уметь</th>
                        <th>Владеть</th>
                        {/* <th></th> */}

                    </tr>
                </thead>
          {items?.map(item => {
            
                return (
            
                    <tbody key={item.id}       >
                        
                        <tr className='results__table__row' >
                            
                            <td >
                                {item?.codeComp}
                            </td>
                            <td>{item.knowledge}</td>
                            <td>{item.skill}</td>
                            <td>{item.ownership}</td>
                            <td>
                            <PencilIcon onClick={()=>{tableEditHandler(item.id)}}/>
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