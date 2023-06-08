import { useState } from 'react';
import './Destino.css'

const Destino = () => {

    const [temaDestino, setTemaDestino] = useState('Marte');
    const [textoPrincipal, setTextoPrincipal] = useState('Não esqueça das suas botas de caminhada. Você vai precisar delas nos montes do Olimpo, a montanha planetária mais alta no nosso sistema solar. É 2.5x o tamanho do Monte Everest.')
    const [distanciaMedia, setDistanciaMedia] = useState('225 MIL. KM');
    const [tempoMedio, setTempoMedio] = useState('9 meses');


    const sessaoMarte = () => {
        document.getElementById('marte').classList.add('temaAberto');
        document.getElementById('lua').classList.remove('temaAberto');
        document.getElementById('europa').classList.remove('temaAberto');
        document.getElementById('titan').classList.remove('temaAberto');

        setTemaDestino('Marte');
        setTextoPrincipal('Não esqueça das suas botas de caminhada. Você vai precisar delas nos montes do Olimpo, a montanha planetária mais alta no nosso sistema solar. É 2.5x o tamanho do Monte Everest.')
        setDistanciaMedia('225 MIL. KM');
        setTempoMedio('9 meses');
    }

    const sessaoLua = () => {
        document.getElementById('marte').classList.remove('temaAberto');
        document.getElementById('lua').classList.add('temaAberto');
        document.getElementById('europa').classList.remove('temaAberto');
        document.getElementById('titan').classList.remove('temaAberto');

        setTemaDestino('Lua');
        setTextoPrincipal('Veja nosso planeta como nunca antes.Uma relaxante viagem para ajudar a renovar perspectivas e voltar refrescado.Enquanto estiver lá, visite os locais Luna 2 e Apollo 11 para explorar a história.')
        setDistanciaMedia('384,400 km');
        setTempoMedio('3 dias');
    }

    const sessaoEuropa = () => {
        document.getElementById('marte').classList.remove('temaAberto');
        document.getElementById('lua').classList.remove('temaAberto');
        document.getElementById('europa').classList.add('temaAberto');
        document.getElementById('titan').classList.remove('temaAberto');


        setTemaDestino('Europa');
        setTextoPrincipal(' A menor das quatro luas galiléias orbitando Júpiter, Europa é o sonho dos amantes de inverno. Com a superfície de gelo, é perfeita para esquiar, praticar esportes  no gelo ou simplesmente relaxar na sua cabine de inverno.')
        setDistanciaMedia('628 mil. km');
        setTempoMedio('3 anos');
    }


    const sessaoTitan = () => {
        document.getElementById('marte').classList.remove('temaAberto');
        document.getElementById('lua').classList.remove('temaAberto');
        document.getElementById('europa').classList.remove('temaAberto');
        document.getElementById('titan').classList.add('temaAberto');

        setTemaDestino('Titan');
        setTextoPrincipal('A única lua conhecida por ter uma densa atmosfera depois da Terra, Titan é um lar longe de casa(apenas umas centenas de graus mais frio!). Como um bônus, enquanto você esquia, pode ver os Anéis de Saturno.')
        setDistanciaMedia('1.6 bil. km');
        setTempoMedio('7 anos');
    }

    return (
        <div className='destinoPage'>
            <h2><span>01</span> Escolha seu destino</h2>
            <div>
                <ul>
                    <li className='temaAberto' id='marte' onClick={sessaoMarte}>Marte</li>
                    <li onClick={sessaoLua} id='lua'>Lua</li>
                    <li id='europa' onClick={sessaoEuropa}>Europa</li>
                    <li id='titan' onClick={sessaoTitan}>Titan</li>
                </ul>
                <div className="textoCentral">
                    <h1 id='temaDestino'>{temaDestino}</h1>
                    <p id='textoPrincipal'> {textoPrincipal} </p>
                </div>

            </div>
            <div className='sessaoInfo'>
                <div>
                    <p>Distância média</p>
                    <p id='distanciaMedia'>{distanciaMedia}</p>
                </div>
                <div>
                    <p>Tempo estimado de viagem</p>
                    <p id='tempoMedio'>{tempoMedio}</p>
                </div>
            </div>

        </div>
    )
}

export default Destino