import { useState } from 'react'
import './Tecnologia.css'

const Tecnologia = () => {

    const [titulo, setTitulo] = useState('Veículo de lançamento');
    const [descricao, setDescricao] = useState(' Um veículo de lançamento é um foguete de propulsão usado para transportar carga da superfície da Terra para o espaço, geralmente para a órbita da terra ou além. Nosso próximo WEB-X é o mais poderoso em funcionamento. Tendo 150m de altura, é, de longe uma grande inspiração no ramo dos foguetes.');
    const elBtn1 = document.getElementById('elBtn1');
    const elBtn2 = document.getElementById('elBtn2');
    const elBtn3 = document.getElementById('elBtn3');
    const fotoDiv = document.getElementById('fotoDiv');

    const btn1 = () => {
        setTitulo('Veículo de lançamento');
        setDescricao(' Um veículo de lançamento é um foguete de propulsão usado para transportar carga da superfície da Terra para o espaço, geralmente para a órbita da terra ou além. Nosso próximo WEB-X é o mais poderoso em funcionamento. Tendo 150m de altura, é, de longe uma grande inspiração no ramo dos foguetes.');

        elBtn1.classList.add('sessaoTechAberta');
        elBtn2.classList.remove('sessaoTechAberta');
        elBtn3.classList.remove('sessaoTechAberta');

        fotoDiv.classList.add('fotoVeiculo');
        fotoDiv.classList.remove('fotoSpaceport');
        fotoDiv.classList.remove('fotoCapsula');

    }

    const btn2 = () => {
        setTitulo('Spaceport');
        setDescricao('Um spaceport é um local de decolagem e aterrisagem de foguetes espaciais, em analogia com porto marítmo para navios ou aeroporto para aviões. Localizado no famoso campo de Cabo Canaveral, nosso spaceport é pensado para tirar vantagem da rotação da Terra para um lançamento mais eficaz.')

        elBtn1.classList.remove('sessaoTechAberta');
        elBtn2.classList.add('sessaoTechAberta');
        elBtn3.classList.remove('sessaoTechAberta');

        fotoDiv.classList.add('fotoSpaceport');
        fotoDiv.classList.remove('fotoVeiculo');
        fotoDiv.classList.remove('fotoCapsula');

    }

    const btn3 = () => {
        setTitulo('Cápsula espacial');
        setDescricao('Uma cápsula espacial é uma nave geralmente ocupada por um time que usa de uma cápsula de reentrada para voltar à atmosfera da Terra sem asas em um veículo. Nossa cápsula é onde você passará seu tempo durante a viagem. Ela inclui espaço de academia, cinema e muitas outras atividades para manter você entretido.')
     
        elBtn1.classList.remove('sessaoTechAberta');
        elBtn2.classList.remove('sessaoTechAberta');
        elBtn3.classList.add('sessaoTechAberta');

        fotoDiv.classList.remove('fotoSpaceport');
        fotoDiv.classList.remove('fotoVeiculo');
        fotoDiv.classList.add('fotoCapsula');

    }

    return (
        <div className='tecnologiaPage'>
            <div className="botoesSessao">
                <button className='mudaSessaoTech sessaoTechAberta' id='elBtn1' onClick={btn1}>1</button>
                <button className='mudaSessaoTech' id='elBtn2' onClick={btn2}>2</button>
                <button className='mudaSessaoTech' id='elBtn3' onClick={btn3}>3</button>
            </div>
            <main>
                <div className='fotoVeiculo' id='fotoDiv'>
                    <img src="../assets/technology/image-launch-vehicle-portrait.jpg" alt="" />
                </div>
                <div className='textoDiv'>
                    <h3 id='tituloTech'>{titulo}</h3>
                    <p className='textoDescritivo'>{descricao}</p>
                </div>

            </main>
        </div>
    )
}

export default Tecnologia