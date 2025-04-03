import imgBenefit from "../assets/img/img-beneficio.webp"

export default function BenefitComponent() {
  return (
    <div className="benefit" id="benefits">
        <div className="top">
            <h2>Nuestros beneficios</h2>
        </div>

        <div className="bottom">
            <div className="left">

                <div className="item">
                    <div className="item-new">
                        <h4>CONDUCTORES VERIFICADOS</h4>
                        <p>Todos los conductores pasan filtros de seguridad</p>
                    </div>

                    <div className="circle"></div>
                </div>

                <div className="item item-center">
                    <div className="item-new">
                        <h4>HISTORIAL DE VIAJES</h4>
                        <p>Consulta tus recorridos anteriores</p>
                    </div>

                    <div className="circle"></div>
                </div>

                <div className="item">
                    <div className="item-new">
                        <h4>SEGUIMIENTO EN VIVO</h4>
                        <p>Comparte tu ubicación con familiares o amigos para mayor seguridad</p>
                    </div>

                    <div className="circle"></div>
                </div>

            </div>

            <div className="center">
                <img 
                    src={imgBenefit} 
                    alt="Beneficio" 
                />
            </div>

            <div className="right">

                <div className="item item-left">
                    <div className="circle"></div>

                    <div className="item-new item-right">
                        <h4>USUARIOS VERIFICADOS</h4>
                        <p>Todos los usuarios pasan filtros de seguridad</p>
                    </div>
                </div>

                <div className="item item-left item-center">
                    <div className="circle"></div>

                    <div className="item-new item-right">
                        <h4>TARIFAS ECONÓMICAS</h4>
                        <p>Conoce el precio antes de viajar, sin costos ocultos ni sorpresas</p>
                    </div>
                </div>

                <div className="item item-left">
                    <div className="circle"></div>

                    <div className="item-new item-right">
                        <h4>DISPONIBILIDAD LAS 24 HORAS</h4>
                        <p>Sin importar la hora o el lugar, siempre tendrás un auto disponible para ti</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
