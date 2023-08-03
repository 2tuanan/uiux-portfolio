import Logo from "../assets/logo.svg"
export const Header = () => {
  return (
    <div className="container nav">
        <a href="/"><img className="logo" src={Logo} alt="" /></a>
        <div className="menu-link">
            <a href="/#about" className="nav-links">ABOUT</a>
            <a href="/#portfolio" className="nav-links">PORTFOLIO</a>
            <a href="/#service" className="nav-links">SERVICE</a>
            <a href="mailto:pantoan288@gmail.com" className="nav-links cta">CONTACT ME</a>
        </div>
        
    </div>
  )
}
