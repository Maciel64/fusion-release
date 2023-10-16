import { ReactNode, MutableRefObject } from "react"

export interface IFormProps {
    children: ReactNode,
    data: MutableRefObject<null | object>
}

export interface IFormTitleProps {
    children: ReactNode
}

export interface IInputProps {
    text: string
}

export interface IButtonProps {
    text: string,
    onClick?: () => void,
    style?: React.CSSProperties
}