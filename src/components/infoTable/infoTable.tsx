import { FC, useState } from "react";
import clsx from 'classnames';
import './infoTableStyles.scss'
import { InfoTableProps } from "./infoTableProps";
import { TextField } from "../textField";



export const InfoTable:FC<InfoTableProps> = props => {

    const {tabs, onTabClick, children} = props;
    const [selectedTab,setSelectedTab] = useState(tabs[1].id);
    

    const tabClickHandler = (id: number) => {
        setSelectedTab(id);
        onTabClick && onTabClick(id);
    }

    const isSelected = (id:number) => selectedTab === id;


    return(
        <div className='info-table'>
            
            <div className='info-table__columns'>
                {tabs.map(tab =>  ( <span    
                
                className=
                {clsx('info-table__columns__item', {'info-table__columns__item_selected':isSelected(tab.id)})}
                onClick={() =>tabClickHandler(tab.id)}
                  key={tab.id}>{tab.tabTitle} </span> )) }
            </div>
            <div className='info-table__data'>
            <div className='info-table__data__border'></div>
            <div className='info-table__data__border__table'>
            {children}
            </div>
            </div>
        </div>
    )
}
