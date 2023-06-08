import './Time.css'
import { useState } from 'react';

const Time = () => {

    const [papelExercido, setPapelExercido] = useState('Capitão');
    const [pessoaResponsavel, setPessoaResponsavel] = useState('Douglas Hurley');
    const [textoApresentacao, setTextoApresentacao] = useState('Douglas Gerald Hurley é um engenheiro Norte-Americano, ex piloto da marinha e ex astronauta da NASA. Ele foi ao espaço pela terceira vez como comandante da Crew Dragon Demo-2.');

    const fotoIntegrante =  document.getElementById('fotoDoIntegrante');
    const botaoPiloto = document.getElementById('btnPiloto');
    const botaoEngenheira = document.getElementById('btnEngenheira');
    const botaoEspecialista = document.getElementById('btnEspecialista');
    const botaoCapitao = document.getElementById('btnCapitao');


    const engenheiraPerfil = () => {
        setPapelExercido('Engenheira espacial');
        setPessoaResponsavel('Anousheh ansari');
        setTextoApresentacao('Anousheh Ansari é uma engenheira Irã-americana e co-fundadora dos Sistemas Prodea. Anousheh foi a quarta turista no espaço, sendo a primeira mulher a visitar a ISS e a primeira iraniana no espaço.');

        fotoIntegrante.classList.add('fotoEngenheira');
        fotoIntegrante.classList.remove('fotoCapitao');
        fotoIntegrante.classList.remove('fotoPiloto');
        fotoIntegrante.classList.remove('fotoEspecialista');

        botaoCapitao.classList.remove('btnAberto');
        botaoEngenheira.classList.add('btnAberto');
        botaoEspecialista.classList.remove('btnAberto');
        botaoPiloto.classList.remove('btnAberto');

    }

    const comandantePerfil = () => {
        setPapelExercido('Comandante');
        setPessoaResponsavel('Douglas Hurley');
        setTextoApresentacao('Douglas Gerald Hurley é um engenheiro Norte-Americano, ex piloto da marinha e ex astronauta da NASA. Ele foi ao espaço pela terceira vez como comandante da Crew Dragon Demo-2.');

        fotoIntegrante.classList.add('fotoCapitao');
        fotoIntegrante.classList.remove('fotoEngenheira');
        fotoIntegrante.classList.remove('fotoEspecialista');
        fotoIntegrante.classList.remove('fotoPiloto');

        botaoCapitao.classList.add('btnAberto');
        botaoEngenheira.classList.remove('btnAberto');
        botaoEspecialista.classList.remove('btnAberto');
        botaoPiloto.classList.remove('btnAberto');
    }

    const pilotoPerfil = () => {
        setPapelExercido('Piloto');
        setPessoaResponsavel('Victor Glover');
        setTextoApresentacao('Piloto no primeiro voo operacional da SpaceX Crew Dragon à ISS, Glover é comandante na marinha dos EUA onde pilota F/A-18. Ele foi membro do time na experidção de 64 e serviu  como engenheiro de voo em estados de operação.')
  
        fotoIntegrante.classList.remove('fotoCapitao');
        fotoIntegrante.classList.remove('fotoEngenheira');
        fotoIntegrante.classList.remove('fotoEspecialista');
        fotoIntegrante.classList.add('fotoPiloto');

        botaoCapitao.classList.remove('btnAberto');
        botaoEngenheira.classList.remove('btnAberto');
        botaoEspecialista.classList.remove('btnAberto');
        botaoPiloto.classList.add('btnAberto');
    }

    const especialistaPerfil = () => {
        setPapelExercido('Especialista de voo');
        setPessoaResponsavel('Mark Shuttleworth');
        setTextoApresentacao('Mark Richard Shuttleworth é fundador e CEO da Cannonical, a empresa por trás do sistema operacional Ubuntu baseado em Linux. Shuttleworth se tornou o primeiro Sul-Africano a viajar ao espaço como turista.');

        fotoIntegrante.classList.remove('fotoCapitao');
        fotoIntegrante.classList.remove('fotoEngenheira');
        fotoIntegrante.classList.remove('fotoPiloto');
        fotoIntegrante.classList.add('fotoEspecialista');

        botaoCapitao.classList.remove('btnAberto');
        botaoEngenheira.classList.remove('btnAberto');
        botaoEspecialista.classList.add('btnAberto');
        botaoPiloto.classList.remove('btnAberto');
    }

    return (
        <div className='timePage'>
            <h2><span>02</span> Conheça seu time</h2>
            <div>
                <div className='fotoCapitao' id='fotoDoIntegrante'>
                    <img src="../assets/crew/image-anousheh-ansari.png" alt="" />
                </div>

                <div>
                    <h3 id='papelExercido'>{papelExercido}</h3>
                    <h2 id='pessoaResponsavel'>{pessoaResponsavel}</h2>
                    <p id='textoApresentacao'>{textoApresentacao} </p>
                    <button className='btnMudaTime' id='btnCapitao' onClick={comandantePerfil}></button>
                    <button className='btnMudaTime' id='btnPiloto' onClick={pilotoPerfil}></button>
                    <button className='btnMudaTime' id='btnEngenheira' onClick={engenheiraPerfil}></button>
                    <button className='btnMudaTime' id='btnEspecialista' onClick={especialistaPerfil}></button>
                </div>
            </div>
        </div>
    )
}

export default Time