import { createContext, useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { songsData } from "../assets/assets";

export const Playercontext= createContext();

const Playercontextprovider= (props)=>{
    const audioref= useRef();
    const seekBg= useRef();
    const seekBar = useRef();

    const[track,settrack] = useState(songsData[0]);
    const [playstatus,setplaystatus] = useState(false);
    const[time,settime] = useState({
        currentime:{
            second:0,
            minute:0
        },
        totaltime:{
            second:0,
            minute:0
        }
    })

    const play=()=>{
        audioref.current.play();
        setplaystatus(true);
    }

    const pause=()=>{
        audioref.current.pause();
        setplaystatus(false);
    }

    useEffect(()=>{
         setTimeout(() => {
            audioref.current.ontimeupdate=()=>{
                settime({
                    currenttime:{
                        second:Math.floor(audioref.current.currenttime % 60),
                        minute:Math.floor(audioref.current.currenttime / 60)
                    },
                    totaltime:{
                        second:Math.floor(audioref.current.current.duration % 60),
                        minute:Math.floor(audioref.current.current.duration / 60)
                    }
                })
            }
         }, 1000);
    },[audioref])


    const contextvalue={
        audioref,
        seekBg,
        seekBar,
        track,settrack,
        playstatus,setplaystatus,
        time,settime,
        play,pause

    }

    return (
        <Playercontext.Provider value={contextvalue}>
            {props.children}
        </Playercontext.Provider>
    )
}

export default Playercontextprovider;


