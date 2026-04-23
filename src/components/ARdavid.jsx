import Dashboard from './Dashboard'
import EjAR from './ar/EjAR'
import { Typography } from "@mui/material"
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function ARdavid() {

    function Scene() {
      const gltf = useLoader(GLTFLoader, '/scene.gltf')

      return (
        <primitive scale ={3} object={gltf.scene} position={[0, 0, -5]} />
    )
}
    return (    
        <> 
        <Dashboard/>
        <Typography variant="h2">Pagina creada por david</Typography>

    <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <Scene />
      </Canvas>        


        </>
    );
  }
  
  export default ARdavid;