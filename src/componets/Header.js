import './Header.css';
import { Link } from 'react-router-dom';
import logoImg from '../assets/shared/logo.svg';
import imgMenu from '../assets/shared/icon-hamburger.svg';


const Header = () => {

  const openMenu = () => {
    const abrirMenu = document.getElementById('menuLista');
    abrirMenu.classList.toggle('menuLista2')
  }

  return (
    <div className='headerComponent'>
      <img src={logoImg} alt="logo" className='logoImg' />
      <ul className='menuLista' id='menuLista'>
        <Link to={'/'} className='linkHeader'> <span>00</span>  Home</Link>
        <Link to={'/destin'} className='linkHeader'>  <span>01</span>   Destino</Link>
        <Link to={'/flightCrew'} className='linkHeader'> <span>02</span>   Time</Link>
        <Link to={'/technologySection'} className='linkHeader'> <span>03</span>   Tecnologia</Link>
      </ul>
      <div className='btnDiv'>
        <button className='btnMenu'>
          <img src={imgMenu} alt="menu" onClick={openMenu}/>
        </button>
      </div>


    </div >
  )
}

export default Header