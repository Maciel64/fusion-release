import { IContainerProps } from "./types"

export default ({ children, styles }: IContainerProps) => {
    return (
        <>
            <div className="flex items-center gap-12" style={styles}>
                {children}
            </div>
        </>
    )
}