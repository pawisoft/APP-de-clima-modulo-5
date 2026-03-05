class WeatherApp {
  constructor(service) {
    this.service = service; // [cite: 6]
    this.ciudades = ["Iquique", "Alto Hospicio", "Pozo Almonte", "Huara", "Pica", "Camiña", "La Tirana", "Mamiña", "Matilla"]; // Ejemplo de lista [cite: 7]
    this.container = document.getElementById("localidades"); 
    this.detalleContainer = document.getElementById("detalle"); 
  }

  // --- LÓGICA ---

  // Procesa los datos de la API para generar estadísticas
  calcularEstadisticas(listaPronostico) {
    const temps = listaPronostico.map(d => d.main.temp);
    const minSemana = Math.min(...temps); 
    const maxSemana = Math.max(...temps); 
    const promedio = (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1); 
    
    return { minSemana, maxSemana, promedio }; 
  }

  // --- RENDERIZADO ---

  async iniciarHome() {
    if (!this.container) return; 
    this.container.innerHTML = "<p>Cargando clima...</p>";

    try {
      const promesas = this.ciudades.map(c => this.service.fetchClimaActual(c)); 
      const resultados = await Promise.all(promesas);
      this.renderHome(resultados);
    } catch (error) {
      this.container.innerHTML = `<div class="alert alert-danger">${error.message}</div>`; 
    }
  }

renderHome(datos) {
    this.container.innerHTML = ""; 
    datos.forEach(ciudad => {
        const card = document.createElement("div");
        // aplicamos 'col-lg-3' para 4 tarjetas por fila en pantallas grandes
        card.className = "col-12 col-sm-6 col-lg-3 mb-4"; 
        card.innerHTML = `
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body text-center d-flex flex-column">
                    <h5 class="fw-bold text-uppercase small text-muted">${ciudad.sys.country}</h5>
                    <h3 class="mb-3">${ciudad.name}</h3>
                    <div class="display-5 fw-bold text-primary mb-2">${Math.round(ciudad.main.temp)}°C</div>
                    <p class="text-capitalize mb-4 text-muted">${ciudad.weather[0].description}</p>
                    <button class="btn btn-primary mt-auto" onclick="app.verDetalle('${ciudad.name}')">
                        Ver Detalles
                    </button>
                </div>
            </div>
        `;
        this.container.appendChild(card);
    });
}
  verDetalle(nombreCiudad) {
    localStorage.setItem("ciudadSeleccionada", nombreCiudad); 
    window.location.href = "detalle.html"; 
  }

  async initDetalle() {
    if (!this.detalleContainer) return; 
    const ciudad = localStorage.getItem("ciudadSeleccionada"); 
    
    try {
      const datos = await this.service.fetchPronostico(ciudad);
      const stats = this.calcularEstadisticas(datos.list);
      this.renderDetalle(datos, stats);
    } catch (error) {
      this.detalleContainer.innerHTML = "Error al cargar el detalle.";
    }
  }
}