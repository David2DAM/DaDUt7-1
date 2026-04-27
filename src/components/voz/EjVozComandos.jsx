import Grid from "@mui/material/Grid2";
import { useState, useMemo } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const ComandosVoz = () => {
    const [colorCircle, setColorCircle] = useState(['#A59D84', '#A59D84', '#A59D84']);

    const commands = useMemo(() => [
        {
            command: 'encender luces',   
            callback: () => setColorCircle(['#FCC737', '#FCC737', '#FCC737']),
        },
        {
            command: 'encender luz derecha',
            callback: () => setColorCircle(['#A59D84', '#A59D84', '#FCC737']),
        },
        {
            command: 'encender luz izquierda',
            callback: () => setColorCircle(['#FCC737', '#A59D84', '#A59D84']),
        },
        {
            command: 'encender luz centro',
            callback: () => setColorCircle(['#A59D84', '#FCC737', '#A59D84']),
        },
        {
            command: 'apagar luces',
            callback: () => setColorCircle(['#A59D84', '#A59D84', '#A59D84']),
        },
    ], []);

    const { transcript,resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands });

    if (!browserSupportsSpeechRecognition) return null;

    const circleStyle = (color) => ({
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: color,
    });

    return (
        <>
            <Grid container spacing={58} sx={{ width: '100%' }} justifyContent="center">
                {colorCircle.map((color, index) => (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                        <div style={circleStyle(color)}></div>
                    </Grid>
                ))}
            </Grid>

            <p>Transcripción: {transcript}</p> 

            <Grid container spacing={1} justifyContent="center" sx={{ marginTop: 2, width: '100%' }}>
                <button onClick={() => SpeechRecognition.startListening({ language: 'es-ES', continuous: true })}>
                    Start
                </button>
                <button onClick={SpeechRecognition.stopListening}>Stop</button>
                <button onClick={resetTranscript}>Limpiar</button>

            </Grid>
        </>
    );
};

export default ComandosVoz;