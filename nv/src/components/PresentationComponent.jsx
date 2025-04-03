import imgAppStore from "../assets/img/image-appstore.jpg"
import imgGooglePlay from "../assets/img/image-googleplay.jpg"

export default function PresentationComponent() {
  return (
    <div className="presentation" id="presentation">
        <h2>Más que un viaje, una experiencia.</h2>

        <p>Olvídate de las esperas y los complicados métodos de transportes, con Nicolás VIP pedir transporte nunca fue más fácil que nunca</p>

        <div className="cont-btn">
          <a href="#">
            <img 
              src={imgAppStore} 
              alt="AppStore" 
            />
          </a>

          <a href="#">
            <img 
              src={imgGooglePlay} 
              alt="GooglePlay" 
            />
          </a>
        </div>
    </div>
  )
}
