import { useState } from 'react'
import './Tecnologia.css'
import fotoVeiculo from '../assets/technology/image-launch-vehicle-portrait.jpg';
import fotoSpaceport from '../assets/technology/image-spaceport-landscape.jpg';
import fotoCapsula from '../assets/technology/image-space-capsule-portrait.jpg';

const Tecnologia = () => {

    const [titulo, setTitulo] = useState('Veículo de lançamento');
    const [descricao, setDescricao] = useState(' Um veículo de lançamento é um foguete de propulsão usado para transportar carga da superfície da Terra para o espaço, geralmente para a órbita da terra ou além. Nosso próximo WEB-X é o mais poderoso em funcionamento. Tendo 150m de altura, é, de longe uma grande inspiração no ramo dos foguetes.');

    const [mudaFoto, setMudaFoto] = useState(fotoVeiculo);
    const [classVeiculo, setClassVeiculo] = useState('sessaoTechAberta');
    const [classSpaceport, setClassSpaceport] = useState('mudaSessaoTech');
    const [classCapsula, setClassCapsula] = useState('mudaSessaoTech');

    const btnVeiculo = () => {
        setTitulo('Veículo de lançamento');
        setDescricao(' Um veículo de lançamento é um foguete de propulsão usado para transportar carga da superfície da Terra para o espaço, geralmente para a órbita da terra ou além. Nosso próximo WEB-X é o mais poderoso em funcionamento. Tendo 150m de altura, é, de longe uma grande inspiração no ramo dos foguetes.');

        setClassVeiculo('sessaoTechAberta');
        setClassSpaceport('mudaSessaoTech');
        setClassCapsula('mudaSessaoTech');

        setMudaFoto(fotoVeiculo);
    }

    const btnSpaceport = () => {
        setTitulo('Spaceport');
        setDescricao('Um spaceport é um local de decolagem e aterrisagem de foguetes espaciais, em analogia com porto marítmo para navios ou aeroporto para aviões. Localizado no famoso campo de Cabo Canaveral, nosso spaceport é pensado para tirar vantagem da rotação da Terra para um lançamento mais eficaz.')

        setClassVeiculo('mudaSessaoTech');
        setClassSpaceport('sessaoTechAberta');
        setClassCapsula('mudaSessaoTech');

        setMudaFoto(fotoSpaceport);
    }

    const btnCapsula = () => {
        setTitulo('Cápsula espacial');
        setDescricao('Uma cápsula espacial é uma nave geralmente ocupada por um time que usa de uma cápsula de reentrada para voltar à atmosfera da Terra sem asas em um veículo. Nossa cápsula é onde você passará seu tempo durante a viagem. Ela inclui espaço de academia, cinema e muitas outras atividades para manter você entretido.')

        setClassVeiculo('mudaSessaoTech');
        setClassSpaceport('mudaSessaoTech');
        setClassCapsula('sessaoTechAberta');

        setMudaFoto(fotoCapsula)
    }

    return (
        <div className='tecnologiaPage'>
            <div className="botoesSessao">
                <button className={'mudaSessaoTech ' +  classVeiculo } id='elBtn1' onClick={btnVeiculo}>1</button>
                <button className={'mudaSessaoTech ' + classSpaceport } id='elBtn2' onClick={btnSpaceport}>2</button>
                <button className={'mudaSessaoTech ' +  classCapsula } id='elBtn3' onClick={btnCapsula}>3</button>
            </div>
            <main className='mainTecnologia'>
                <div className='fotoDiv'>
                    <img src={mudaFoto} alt="" />
                </div>
                <div className='textoDiv'>
                    <h3 className='tituloTech'>{titulo}</h3>
                    <p className='textoDescritivo'>{descricao}</p>
                </div>

            </main>
        </div>
    )
}

export default Tecnologia