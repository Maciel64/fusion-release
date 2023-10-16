export default ({ src, reference }: any) => {
    return (
        <>
            <video src={src} ref={reference} className="w-[70vw] h-[70vw] max-w-[300px] max-h-[300px] rounded"></video>
        </>
    )
}