import {FC} from 'react'
import { IconProps } from '../../types/commonTypes';

export const PlusIcon: FC<IconProps> = props => {
    const {width = 24, height = 24, color = 'black', className, onClick} = props;
    return(
        <svg fill="none" height={height} width={width}
        className={className}
        onClick={onClick} viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M13.0001 7C13.0001 6.44771
         12.5524 6 12.0001 6C11.4479 6 11.0001 6.44771 11.0001 7V11H7C6.44771 11 6
         11.4477 6 12C6 12.5523 6.44772 13 7 13H11.0001V17C11.0001 17.5523 11.4479
         18 12.0001 18C12.5524 18 13.0001 17.5523 13.0001 17V13H17C17.5523 13 18
          12.5523 18 12C18 11.4477 17.5523 11 17 11H13.0001V7Z" fill={color}/>
</svg>
    )

}
