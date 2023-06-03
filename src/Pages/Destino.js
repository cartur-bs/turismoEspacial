import './Destino.css'

const Destino = () => {
    return (
        <div className='destinoPage'>
            <h2><span>01</span> Escolha seu destino</h2>
            <div>
                <ul>
                    <li>Lua</li>
                    <li>Marte</li>
                    <li>Europa</li>
                    <li>Titan</li>
                </ul>
                <h1>Marte</h1>
                <p>Não esqueça das suas botas de caminhada. Você vai precisar delas
                    nos montes do Olimpo, a montanha planetária mais alta no nosso sistema solar.
                    É 2.5x o tamanho do Monte Everest.
                </p>
            </div>
            <div className='sessaoInfo'>
                <div>
                    <p>Distância média</p>
                    <p>225 MIL. KM</p>
                </div>
                <div>
                    <p>Tempo estimado de viagem</p>
                    <p>9 meses</p>
                </div>
            </div>

        </div>
    )
}

export default Destino