import { FC, useState } from "react";
import './informationStyles.scss'
import { InformationProps } from "./InformationProps";
import { TextField } from "../textField";



export const Information:FC<InformationProps> = props => {

    const {disciplines, onTabClick, children} = props;
   // const [selectedComp,setSelectedComp] = useState(competences[1].id);
    



    return(
        <div className='info'>
           
               
           <div className='info__data__title'>Цели и задачи учебной программы </div> 
              
                
                    { disciplines?.map(disc =>{
                    return(
                    <div key={disc.id}  className='info__data'>
                      
                        <div className='info__data__row'>
                            <div> Цели:  </div>
                           
                            {disc.goal}
                        </div>
                        <div className='info__data__row'>
                        <div> Задачи: </div>
                            {disc.task}</div>
        
                    </div>)
                    }
                    
                )}
             
         
            
        </div>
    )
}


// {tabs.map(tab =>{
 
//     <div key={tab.id} 
//     className={clsx('info-table__columns__item', {'info-table__columns__item_selected':isSelected(tab.id)})}
//     onClick={() =>tabClickHandler(tab.id)}
//     >

//         <div className='discipline-list__item-fio'>
//             {` ${tab.} (${discipline.status })`.trim() }  
//         </div>  
           
//     </div>
//     ;})}
