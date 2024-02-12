import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p style={{ 
    color: 'red',
    backgroundImage: 'linear-gradient(to right, red, blue)', // Modify the gradient colors and direction as needed
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
    }} >SK</p>
        </NavLink>
<nav className="flex text-lg gap-7 font-medium">
    <NavLink to="/about" className={({isActive}) => isActive? 'text-red-500' : 'text-black' }>
        About
    </NavLink>
    </nav>
    <nav className="flex text-lg gap-7 font-medium">
    <NavLink to="/projects" className={({isActive}) => isActive? 'text-red-500' : 'text-black' }>
        Projects
    </NavLink>
</nav>

    </header>
  )
}

export default Navbar