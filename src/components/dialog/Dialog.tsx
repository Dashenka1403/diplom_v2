import {FC} from 'react';
import { DialogProps } from './DialogProps';
import './dialogStyles.scss';
import clsx from 'classnames'
import { Button } from '../button';
import { CancelIcon } from '../../assets/icons';

export const Dialog : FC<DialogProps> = props => {

    const {title, className, onCancel, onSave , open = false, children} = props;

    if(!open) {
      return null;
    }
    
    return (
       <div className="dialog" onClick={onCancel}>
        <div >
        <CancelIcon className='dialog__cancel'/>
        <div className={clsx("dialog__paper", className)} onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}>
          <h3 className="dialog__header">{title}</h3>  
          <div className="dialog__body">
            {children}
            </div>  
          <div className="dialog__footer">
            <Button  text = "Сохранить" onClick={onSave}/> 
             <Button text = "Выйти" onClick={onCancel}/>
          </div> 
          </div> 
        </div>
       </div>
    )
}