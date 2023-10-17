import { useState, useEffect, useRef } from "react"
import { Button } from "../components/Form"
import Title from "../components/Title"

import greetings from "../assets/video/boasvindas.mp4"
import professionalVideo from "../assets/video/profissional.mp4"
import partnerVideo from "../assets/video/donodeclinica_erro.mp4"
import ownerVideo from "../assets/video/donodeclinica.mp4"


import VideoCard from "../components/VideoCard"
import Card from "../components/Card"

export default ({ setUIPhase, setGradient }: any) => {
    const [type, setType] = useState("whoAreYou")

    const videoRef = useRef<null | HTMLVideoElement>(null)
    const buttonsContainerRed = useRef<null | HTMLDivElement>(null)

    const typesMap: any = {
        whoAreYou: {
            text: "Escolha a opção que mais se encaixa para você.",
            video: greetings,
            gradient: "gradient"
        },
        professional: {
            text: "Profissional da saúde",
            video: professionalVideo,
            color: "#f0e211",
            gradient: "gradient--to-yellow"
        },
        owner: {
            text: "Dono de clínica",
            video: partnerVideo,
            color: "#f3f3f3",
            gradient: "gradient--to-white"
        },
        partner: {
            text: "Parceiro",
            video: ownerVideo,
            color: "#911d80",
            gradient: "gradient--to-pink"
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
        setGradient(typesMap[type].gradient)

        setTimeout(() => {
            setGradient("gradient")
            setUIPhase("home")
        }, 15000)
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