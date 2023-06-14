import './Time.css'
import { useState } from 'react';
import fotoCapitao from '../assets/crew/image-douglas-hurley.png';
import fotoEngenheira from '../assets/crew/image-anousheh-ansari.png';
import fotoPiloto from '../assets/crew/image-victor-glover.png';
import fotoEspecialista from '../assets/crew/image-mark-shuttleworth.png';


const Time = () => {
    const [mudaFoto, setMudaFoto] = useState(fotoCapitao);


    const [papelExercido, setPapelExercido] = useState('Capitão');
    const [pessoaResponsavel, setPessoaResponsavel] = useState('Douglas Hurley');
    const [textoApresentacao, setTextoApresentacao] = useState('Douglas Gerald Hurley é um engenheiro Norte-Americano, ex piloto da marinha e ex astronauta da NASA. Ele foi ao espaço pela terceira vez como comandante da Crew Dragon Demo-2.');


    const engenheiraPerfil = () => {
        setPapelExercido('Engenheira espacial');
        setPessoaResponsavel('Anousheh ansari');
        setTextoApresentacao('Anousheh Ansari é uma engenheira Irã-americana e co-fundadora dos Sistemas Prodea. Anousheh foi a quarta turista no espaço, sendo a primeira mulher a visitar a ISS e a primeira iraniana no espaço.');

        setMudaFoto(fotoEngenheira)

    }

    const capitaoPerfil = () => {
        setPapelExercido('Comandante');
        setPessoaResponsavel('Douglas Hurley');
        setTextoApresentacao('Douglas Gerald Hurley é um engenheiro Norte-Americano, ex piloto da marinha e ex astronauta da NASA. Ele foi ao espaço pela terceira vez como comandante da Crew Dragon Demo-2.');

        setMudaFoto(fotoCapitao)

    }

    const pilotoPerfil = () => {
        setPapelExercido('Piloto');
        setPessoaResponsavel('Victor Glover');
        setTextoApresentacao('Piloto no primeiro voo operacional da SpaceX Crew Dragon à ISS, Glover é comandante na marinha dos EUA onde pilota F/A-18. Ele foi membro do time na experidção de 64 e serviu  como engenheiro de voo em estados de operação.')

        setMudaFoto(fotoPiloto)

    }

    const especialistaPerfil = () => {
        setPapelExercido('Especialista de voo');
        setPessoaResponsavel('Mark Shuttleworth');
        setTextoApresentacao('Mark Richard Shuttleworth é fundador e CEO da Cannonical, a empresa por trás do sistema operacional Ubuntu baseado em Linux. Shuttleworth se tornou o primeiro Sul-Africano a viajar ao espaço como turista.');

        setMudaFoto(fotoEspecialista)

    }

    return (
        <div className='timePage'>
            <div className="tituloSessao">
                <h2><span>02</span> Conheça seu time</h2>
            </div>
            <div className='timeMain'>
                <div className='fotoDoIntegrante'>
                    <img src={mudaFoto} alt="Foto do capitão Douglas Hurley" />
                </div>
                <div>
                    <h3 id='papelExercido'>{papelExercido}</h3>
                    <h2 id='pessoaResponsavel'>{pessoaResponsavel}</h2>
                    <p id='textoApresentacao'>{textoApresentacao} </p>
                    <button className='btnMudaTime' id='btnCapitao' onClick={capitaoPerfil}></button>
                    <button className='btnMudaTime' id='btnPiloto' onClick={pilotoPerfil}></button>
                    <button className='btnMudaTime' id='btnEngenheira' onClick={engenheiraPerfil}></button>
                    <button className='btnMudaTime' id='btnEspecialista' onClick={especialistaPerfil}></button>
                </div>
            </div>
        </div>
    )
}

export default Time