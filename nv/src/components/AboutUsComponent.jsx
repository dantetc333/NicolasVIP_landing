import imgHand from "../assets/img/img-hand.png"

export default function AboutUsComponent() {
  return (
    <div className="about-us" id="about_us">
        <div className="left">
            <img 
                src={imgHand} 
                alt="App Nicolás VIP" 
            />
        </div>

        <div className="right">
            <h2>¿Por qué elegirnos?</h2>
            <p>En Nicolás VIP nuestro objetivo es brindarte un servicio rápido, seguro y eficiente para que llegues a tu destino sin complicaciones. A través de nuestra app, conectamos a pasajeros con conductores de confianza.</p>
        </div>
    </div>
  )
}
