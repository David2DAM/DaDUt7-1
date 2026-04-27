import Grid from "@mui/material/Grid2";
import {useState} from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import {useNavigate} from "react-router-dom";

const ComandosVoz = () => {
    const [colorCircle, setColorCircle] = useState(['#A59D84', '#A59D84', '#A59D84'])

    const [showGif, setShowGif] = useState(false)
    const [showGif2, setShowGif2] = useState(false)
    const [showGif3, setShowGif3] = useState(false)
    const [showGifTodos, setShowGifTodos] = useState(false)

    const navigate = useNavigate();

    const commands = [
        {
            command: 'Encender luces.',
            callback: () => {
                setColorCircle(['#FCC737', '#FCC737', '#FCC737']);
            }
        },
        {
            command: 'Encender luz derecha.',
            callback: () => {setColorCircle(['#A59D84', '#A59D84', '#FCC737']);
            }
        },
        {
            command: 'Encender luz izquierda.',
            callback: () => {setColorCircle(['#FCC737', '#A59D84','#A59D84']);

            }
        },
        {
            command: 'Encender luz centro.',
            callback: () => {setColorCircle(['#A59D84', '#FCC737', '#A59D84']);
            }
        },
        {
            command: 'Apagar luces.',
            callback: () => {setColorCircle(['#A59D84', '#A59D84', '#A59D84']);
            }
        }
    ]

    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })
    console.log(transcript)
    if (!browserSupportsSpeechRecognition) {
        return null
    }

    const Circle = (props) => ({
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: props.color,
    });

        return(
            <>
                <Grid container spacing={58} sx={{ width: '100%' }}  justifyContent="center">
                    {colorCircle.map((color, index) => (
                        <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                        <div key={index} style={Circle({ color })}></div>
                        </Grid>
                    ))}
                </Grid>

                <Grid container spacing={1} justifyContent="center" sx={{ marginTop: 2, width: '100%' }}>
                    <button onClick={SpeechRecognition.startListening}>Start</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop</button>
                </Grid>
            </>
        )
}

export default ComandosVoz