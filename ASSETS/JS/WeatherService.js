class WeatherService {
  constructor(apiKey) {
    this.apiKey = apiKey; // [cite: 1]
    this.baseUrl = "https://api.openweathermap.org/data/2.5/"; // [cite: 1]
  }

  // Obtiene el clima actual de una ciudad específica [cite: 2]
  async fetchClimaActual(ciudad) {
    const url = `${this.baseUrl}weather?q=${ciudad},CL&appid=${this.apiKey}&units=metric&lang=es`; // [cite: 2]
    const respuesta = await fetch(url); // [cite: 3]
    if (!respuesta.ok) throw new Error(`Error al obtener clima de ${ciudad}`); // [cite: 3]
    return await respuesta.json(); // [cite: 3]
  }

  // Obtiene el pronóstico extendido para cálculos estadísticos [cite: 4]
  async fetchPronostico(ciudad) {
    const url = `${this.baseUrl}forecast?q=${ciudad},CL&appid=${this.apiKey}&units=metric&lang=es`; // [cite: 4]
    const respuesta = await fetch(url); // [cite: 5]
    if (!respuesta.ok) throw new Error(`Error al obtener pronóstico de ${ciudad}`); // [cite: 5]
    return await respuesta.json(); // [cite: 5]
  }
}
