import './Header.css';
import { Link } from 'react-router-dom';
import logoImg from '../assets/shared/logo.svg';
import imgMenu from '../assets/shared/icon-hamburger.svg';


const Header = () => {
  return (
    <div className='headerComponent'>
      <img src={logoImg} alt="logo" className='logoImg' />
      <ul className='menuLista'>
        <li> <Link to={'/'} className='linkHeader'> <span>00</span>  Home</Link></li>
        <li> <Link to={'/destin'} className='linkHeader'>  <span>01</span>   Destino</Link> </li>
        <li> <Link to={'/flightCrew'} className='linkHeader'> <span>02</span>   Time</Link></li>
        <li><Link to={'/technologySection'} className='linkHeader'> <span>03</span>   Tecnologia</Link></li>
      </ul>
      <div className='btnTeste'>
   <button className='btnMenu'>
        <img src={imgMenu} alt="menu"/>
      </button>
      </div>
   

    </div >
  )
}

export default Header