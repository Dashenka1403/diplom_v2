import {PropsWithChildren} from 'react';

export interface DialogProps extends PropsWithChildren {
    title : string;
    className?: string;
    open?:boolean;
    onCancel?:()=> void;
    onSave?:() => void;
}
