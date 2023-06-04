import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='headerComponent'>
        <p>img</p>
        <ul>
          <li> <Link to={'/'} className='linkHeader'>Home</Link></li>
          <li> <Link to={'/destin'} className='linkHeader'>Destino</Link> </li>
          <li>Time</li>
          <li>Tecnologia</li>
        </ul>
        <button className='btnMenu'>menu</button>
    </div>
  )
}

export default Header