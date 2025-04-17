import { useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

// eslint-disable-next-line react/prop-types
const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home")

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext)


  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  useEffect(() => {
    const toggle = document.getElementById('visual-toggle');

    // Function to apply the stored mode preference
    function applyModePreference() {
      const mode = localStorage.getItem('mode');
      if (mode === 'light') {
        toggle.checked = true;
        document.body.classList.add('lightcolors');
        document.getElementById('visual-toggle-button').classList.add('lightmode');
      } else {
        toggle.checked = false;
        document.body.classList.remove('lightcolors');
        document.getElementById('visual-toggle-button').classList.remove('lightmode');
      }
    }

    // Call the function to apply the mode preference on page load
    applyModePreference();

    toggle.addEventListener('change', function() {
      if (toggle.checked) {
        localStorage.setItem('mode', 'light');
        document.body.classList.add('lightcolors');
        document.getElementById('visual-toggle-button').classList.add('lightmode');
      } else {
        localStorage.setItem('mode', 'dark');
        document.body.classList.remove('lightcolors');
        document.getElementById('visual-toggle-button').classList.remove('lightmode');
      }
    });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
        <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
        <div className='navbar'>
        
      </div>
            <div className="navbar-search-icon">
                <Link to='/cart'><img className='basketlogo' src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!token?<button className='signbutton' onClick={()=>setShowLogin(true)}>sign in</button>
            :<div className='navbar-profile'>
              <img src={assets.profile_icon} className='white-filter' alt="" />
              <ul className="nav-profile-dropdown">
                <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
              </div>}
        </div>
    </div>
  )
}

export default Navbar