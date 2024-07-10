import { FC, useState } from "react";
import './laborIntensityPoleStyles.scss'
import { LaborIntensityProps } from "./LaborIntensityProps";
import { TextField } from "../textField";



export const LaborIntensityPole:FC<LaborIntensityProps> = props => {

    const {labIntensities, } = props;
   // const [selectedComp,setSelectedComp] = useState(competences[1].id);
    



    return(
        <div className='info'>
           
               
           <div className='info__title'>Трудоёмкость дисциплины </div> 
              
             <div className='info__table'> 
           <table   >
          <thead>
                    <tr className='info__table__title'>
                        <th>Вид образовательной работы</th>
                        <th>Всего часов</th>
                        <th>Семестры</th>
                    </tr>
            </thead>
          {labIntensities?.map(item => {
            
                return (
            
                    <tbody key={item.id}   >
                        
                        <tr className='info__table__row' >
                        
                            <td >
                                {item?.info}
                            </td>
                            <td>{item?.idSem}</td>
                            <td>{item?.kolHours}</td>
                            
                        </tr>  

                  
                    </tbody>
                   
                );
                
            })}
            </table>
            </div>  
         
            
        </div>
    )
}

// { labIntensities?.map(lab =>{
//     return(
//     <div key={lab.id}  className='info__data'>
      
//         <div className='info__data__row'>
//             <div> Номер семестра:  </div>
           
//             {lab.idSem}
//         </div>
//         <div className='info__data__row'>
//         <div> Информация: </div>
//             {lab.info}</div>

//             <div className='info__data__row'>
//         <div> Количество часов: </div>
//             {lab.kolHours}</div>\
        
//         </div>)
        
//     }
    
// )}


