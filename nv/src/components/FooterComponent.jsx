import imgFooter from "../assets/img/img-logo-footer.webp"
import imgAppStore from "../assets/img/image-appstore.jpg"
import imgGooglePlay from "../assets/img/image-googleplay.jpg"

export default function FooterComponent() {
  return (
    <div className="footer">
        <div className="left">
            <img 
                src={imgFooter} 
                alt="Footer" 
            />
        </div>

        <div className="right">
            <div className="top">
                <ul>
                    <a href=""><li>Políticas de privacidad</li></a>
                    <a href=""><li>Información de contacto</li></a>
                    <a href=""><li>Términos y condiciones</li></a>
                    <a href=""><li>Trabaja con nosotros</li></a>
                </ul>
            </div>

            <div className="bottom">
                <a href="#">
                    <img 
                        src={imgAppStore} 
                        alt="App Store" 
                    />
                </a>

                <a href="#">
                    <img 
                        src={imgGooglePlay} 
                        alt="Google Play" 
                    />
                </a>
            </div>
            
        </div>
    </div>
  )
}
