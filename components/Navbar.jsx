import logo from '../images/earth-logo.png'

function Navbar(){
    return(
        <nav>
            <img src={logo} alt="logo" className='earth-logo' />
            <h2>my travel journal.</h2>
        </nav>
    )
}

export default Navbar