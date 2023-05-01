import './NavBar.css'
export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <span className='logo'>lamabookingApp</span>
        <div className="navItem">
                <button className="navBtn">Register</button>
                <button className="navBtn">Login</button>
            </div>
        </div>
       
    </div>
  )
}



