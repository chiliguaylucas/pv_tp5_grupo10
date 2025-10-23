import huevo from '../img/huevo.png';
import { Link } from 'react-router-dom';
import sonido from '../sounds/cajadinero.mp3';
import { useNavigate } from 'react-router-dom';
import FormJuegos from '../components/FormJuegos';
import JuegoEstrellas from "../components/JuegoEstrellas";

function Games (){

    const navegacion = useNavigate();
    const ejecutarSonido = () => {
        const audio = new Audio(sonido);
        audio.play();
    }
    const manejarClickImagen = () => {
        //haga cualquier otra cosa que desee
        ejecutarSonido();
        navegacion('/');
             
    };
    return (
        <>
        <div>
       <h1>🎯 Juegos</h1>
      <JuegoEstrellas />
       </div>
        
        <p>CLICK EN LA IMAGEN PARA PROBAR SONIDO</p>
        <img src={huevo} width="25%" onClick={manejarClickImagen} />
        <h1>Cargar Juegos</h1>
        <FormJuegos/>
        
        
        </>
        

    )
}

export default Games;
