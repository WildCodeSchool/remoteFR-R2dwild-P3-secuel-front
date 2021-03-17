import { Link } from 'react-router-dom'

const NavAdmin = () => {
  return (
    <div className='navadmin'>
      <ul>
        <li>
          <Link to='/message' className='adminlink'>
            Gérer assuré
          </Link>
        </li>
        <li>
          <Link to='/notification' className='adminlink'>
            Gérer Notifications
          </Link>
        </li>
        <li>
          <Link to='/analyse' className='adminlink'>
            Gérer acte médical
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavAdmin
