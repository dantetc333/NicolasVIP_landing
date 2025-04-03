import imgLogo from "../assets/img/nv-logo-of.webp"

export default function NavbarComponent() {
  return (
    <div className="navbar">

        <div className="logo">
            <a href="#presentation">
                <img 
                    src={imgLogo} 
                    alt="Logo NicolasVip"
                />
            </a>
        </div>

        <ul>
            <a href="#presentation"><li>Inicio</li></a>
            <a href="#about_us"><li>Nosotros</li></a>
            <a href="#benefits"><li>Beneficio</li></a>
        </ul>
    </div>
  )
}
