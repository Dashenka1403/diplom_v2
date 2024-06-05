import { FC } from "react"
import { ButtonProps } from "./ButtonProps";
import './buttonStyles.scss';


export const Button: FC<ButtonProps> = (props) => {

    const{
        text,
        onClick
    } = props;

    return (
        <div className="button" onClick={onClick}>
            {text}
        </div>
    );
}