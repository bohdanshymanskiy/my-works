import './Header.css'
import logo from '../../assets/img/logo.jpg'

function Header() {

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="login">
        <button className='login-button'>Log In</button>
        <button className='login-button'> Sign In</button>
      </div>
    </div>
  );
}

export default Header;
