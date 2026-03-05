# APP-de-clima-modulo-5
App de clima mejorado con adiciones de POO, ES6+ y API de clima

WeatherApp es una aplicación web moderna diseñada para visualizar el estado del tiempo en tiempo real para diversas localidades de la Región de Tarapacá, Chile. La temática se centra en ofrecer una interfaz limpia y funcional donde los usuarios pueden consultar temperaturas actuales y acceder a un análisis detallado del pronóstico extendido para planificar sus actividades diarias.

Estructura de Clases (POO)

El proyecto está construido bajo el paradigma de Programación Orientada a Objetos, utilizando ES6+, separando las responsabilidades en dos clases principales:

    * WeatherService: Es la clase encargada de la comunicación con la infraestructura externa. Su función principal es realizar las peticiones fetch a los endpoints de clima actual y pronóstico, gestionando la API Key y la construcción de las URLs.

    * WeatherApp: Actúa como el controlador principal de la lógica de negocio y la interfaz. Se encarga de:

       - Gestionar el ciclo de vida de la aplicación (inicialización del Home y Detalle).

       - Procesar los datos crudos de la API para generar estadísticas y alertas.

       - Manipular el DOM para renderizar las tarjetas de ciudades y los reportes detallados.

API de Clima Utilizada

La aplicación consume datos meteorológicos profesionales a través de:

    Nombre: OpenWeatherMap API.

    URL Base: https://api.openweathermap.org/data/2.5/.

    Endpoints utilizados:

     - Weather: Para obtener la temperatura y el estado actual.

     -Forecast: Para obtener el pronóstico de 5 días con datos cada 3 horas.

Cálculo de Estadísticas

En esta versión, la aplicación procesa los datos del pronóstico para ofrecer valor añadido al usuario mediante los siguientes cálculos:

    Temperatura Máxima y Mínima: Se analizan todos los registros del pronóstico semanal para extraer los valores extremos (max y min) utilizando Math.max y Math.min.

    Promedio Semanal: Se calcula la media aritmética de las temperaturas previstas para dar una visión general de la tendencia climática.

    Alertas Climáticas: Se generan avisos automáticos si el promedio supera los 25°C (Alerta de Calor) o si se detectan más de 5 periodos soleados (Alerta de Radiación UV).

Repositorio

En el siguiente enlace está el código fuente: https://github.com/pawisoft/APP-de-clima-modulo-5
