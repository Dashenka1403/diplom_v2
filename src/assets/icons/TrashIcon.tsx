import {FC} from 'react'
import { IconProps } from '../../types/commonTypes';

export const TrashIcon: FC<IconProps> = props => {
    const {width = 24, height = 24, color = 'black', className, onClick} = props;
    return(
        <svg fill="none" height={height} width={width}
        className={className}
        onClick={onClick}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M10 11V17" stroke={color} strokeWidth="2"strokeLinecap="round" />
        <path d="M14 11V17" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M4 7H20" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke={color} />
        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke={color} />
                </svg>
    )

}

