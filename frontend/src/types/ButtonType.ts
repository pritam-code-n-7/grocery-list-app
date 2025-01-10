export type ButtonType = {
    name:string;
    type:'button' | 'submit' | 'reset';
    onClick?: ()=>void;
}