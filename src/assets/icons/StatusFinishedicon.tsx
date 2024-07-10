import { FC } from "react";
import { IconProps } from "../../types/commonTypes";

export const StatusFinishedIcon: FC<IconProps> = props => {

    const {width = 24, height = 24, color = 'black', className, onClick} = props;
    return(
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className} onClick={onClick}  xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V6M3 12H6M5.63607 5.63604L7.75739 7.75736M5.63604 18.3639L7.75736 16.2426M21 12.0005H18M18.364 5.63639L16.2427 7.75771M11.9998 21.0002V18.0002M18.3639 18.3642L16.2426 16.2429" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )

}


