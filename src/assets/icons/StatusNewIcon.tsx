import {FC} from 'react'
import { IconProps } from '../../types/commonTypes';


export const StatusNewIcon: FC<IconProps> = props => {

    const {width = 24, height = 24, color = 'black', className, onClick} = props;
    return(
        <svg fill={color} width={width} height={height} viewBox="0 0 48 48" onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg">
  <g >

      <path d="M44,14H4a2,2,0,0,0-2,2V32a2,2,0,0,0,2,2H44a2,2,0,0,0,2-2V16A2,2,0,0,0,44,14ZM17.3,29H14.8l-3-5-.7-1.3h0V29H8.7V19h2.5l3,5,.6,1.3h.1s-.1-1.2-.1-1.6V19h2.5Zm9.1,0H18.7V19h7.6v2H21.2v1.8h4.4v2H21.2v2.1h5.2Zm10.9,0H34.8l-1-4.8c-.2-.8-.4-1.9-.4-1.9h0s-.2,1.1-.3,1.9L32,29H29.6L26.8,19h2.5l1,4.2a20.1,20.1,0,0,1,.5,2.5h0l.5-2.4,1-4.3h2.3l.9,4.3.5,2.4h0l.5-2.5,1-4.2H40Z"/>
    
  </g>
</svg>
    )

}
