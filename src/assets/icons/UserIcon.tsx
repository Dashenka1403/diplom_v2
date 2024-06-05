import {FC} from 'react'
import { IconProps } from '../../types/commonTypes';


export const UserIcon: FC<IconProps> = props => {
    const {width = 42, height = 42, color = 'white', className, onClick} = props;
    return(
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className = {className} onClick={onClick} xmlns="http://www.w3.org/2000/svg">
<path d="M10 12H20M20 12L17 9M20 12L17 15" stroke={color} strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12C4 7.58172 7.58172 4 12 4M12 20C9.47362 20 7.22075 18.8289 5.75463 17" stroke={color} strokeWidth="2.0" strokeLinecap="round"/>
</svg>
    )

}

