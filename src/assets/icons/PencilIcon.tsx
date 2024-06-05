import {FC} from 'react'
import { IconProps } from '../../types/commonTypes';

export const PencilIcon: FC<IconProps> = props => {
    const {width = 24, height = 24, color = 'black', className, onClick} = props;
    return(
        <svg fill="none" height={height} width={width}
        className={className}
        onClick={onClick}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
       <path d="M18 10L14 6M18 10L21 7L17 3L14 6M18 10L17 11M14 6L8 12V16H12L14.5 13.5M20 14V20H12M10 4L4 4L4 20H7"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )

}
