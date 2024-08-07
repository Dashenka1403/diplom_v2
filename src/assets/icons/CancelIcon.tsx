import {FC} from 'react'
import { IconProps } from '../../types/commonTypes';

export const CancelIcon: FC<IconProps> = props => {
    const {width = 30, height = 30, color = 'black', className, onClick} = props;
    return(
        <svg fill={color} width={width} height={height} viewBox="0 0 20 20" onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg">

<g>

<path d="M10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1Zm0,16.4A7.4,7.4,0,1,1,17.4,10,7.41,7.41,0,0,1,10,17.4ZM13.29,5.29,10,8.59,6.71,5.29,5.29,6.71,8.59,10l-3.3,3.29,1.42,1.42L10,11.41l3.29,3.3,1.42-1.42L11.41,10l3.3-3.29Z"/>

</g>

</svg>
 )

}


