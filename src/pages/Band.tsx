import { useState, useEffect, useRef } from "react"
import { Button } from "../components/Form"
import Title from "../components/Title"

import video from "../assets/video/teste.mp4"
import video2 from "../assets/video/success_professional.mp4"


import VideoCard from "../components/VideoCard"
import Card from "../components/Card"

export default ({ setUIPhase }: any) => {
    const [type, setType] = useState("whoAreYou")

    const videoRef = useRef<null | HTMLVideoElement>(null)
    const buttonsContainerRed = useRef<null | HTMLDivElement>(null)

    const typesMap: any = {
        whoAreYou: {
            text: "Quem é você?",
            video: video
        },
        professional: {
            text: "Profissional da saúde",
            video: video2
        },
        owner: {
            text: "Dono de clínica",
            video: video2
        },
        partner: {
            text: "Parceiro",
            video: video2
        },
    }

    useEffect(() => {
        videoRef.current?.play()

        setTimeout(() => {
            if (buttonsContainerRed.current) {
                buttonsContainerRed.current.style.opacity = "1"
            }
        }, 5000)
    })

    const onButtonClicked = (type: string) => {
        setType(type)

        videoRef.current?.play()

        setTimeout(() => {
            setUIPhase("home")
        }, 20000)
    }

    return (
        <>
            <Card>
                <VideoCard src={typesMap[type].video} reference={videoRef} />
            </Card>

            <Title>{typesMap[type].text}</Title>
            
            {type === "whoAreYou" && (
                <div className="flex gap-5 flex-col p-5 opacity-0 transition-opacity" ref={buttonsContainerRed}>
                    <Button text="Profissional da saúde" onClick={() => onButtonClicked("professional")} />
                    <Button text="Dono de clínica" onClick={() => onButtonClicked("owner")} />
                    <Button text="Parceiro" onClick={() => onButtonClicked("partner")} />
                </div>
            )}
        </>
    )
}