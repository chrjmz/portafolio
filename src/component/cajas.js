

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

const xhttp = new XMLHttpRequest();

function datoscotizador(variable, subcategoria, pag) {
    xhttp.open("GET", "./component/proyectos.json", true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let cursos = JSON.parse(this.responseText);
          console.log("zzxasdss")
          console.log(cursos)
        }
    }
}

datoscotizador()