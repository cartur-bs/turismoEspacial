import "./Home.css"
import { Link } from "react-router-dom"

const Home = () => {

    return (
        <div className='homePage'>
            <div className="textoHome">
                <h2>Então você deseja ir ao</h2>
                <h1>ESPAÇO?</h1>
                <p className="textoApresentacao">Vamos ser sinceros, se você deseja ir ao espaço, você poderia
                    ir para mais longe e nâo só orbitar a borda. Bom, aperte o cinto
                    e relaxe porque lhe daremos um verdadeiro pedaço desse mundo!
                </p>
            </div>
           <button><Link to={'/destin'} className="btnExplorar">EXPLORAR</Link></button> 
        </div>
    )
}

export default Home