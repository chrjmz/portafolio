import whatsapp from '../asstes/whatsapp.png'

function footer_proyect() {
  return (
    <footer>
          <div className="whatsapp">
              <a href="https://api.whatsapp.com/send?phone=573005445885" target="_blank" rel="noreferrer">
                <img className="what" src={whatsapp} alt="whatsapp"/>
              </a>
          </div>
          <div className="mail" >
            <a href="mailto:christian_medina_92@hotmail.com">christian_medina_92@hotmail.com</a>
          </div>
    </footer>
  )
}

export default footer_proyect;