const MI_API_KEY = "9e72502893bebfbdbaf613b79059d691"; 
const servicioClima = new WeatherService(MI_API_KEY); 
const app = new WeatherApp(servicioClima); 

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("localidades")) {
    app.iniciarHome();
  } else if (document.getElementById("detalle")) {
    app.initDetalle();
  }
});