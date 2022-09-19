using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace CurrentWeather.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        [HttpGet("[action]/{zip}&{countryCode}")]
        public async Task<IActionResult> GetWeatherByZipCodeAsync( string zip, string countryCode = "us")
        {
            using (var client = new HttpClient())
            {
                try
                {
                    client.BaseAddress = new Uri("http://api.openweathermap.org");
                    var apiKey = "9ddd91b64e6f87ca304d747e204cd1fe";
                    var response = await client.GetAsync($"/data/2.5/weather?zip={zip},{countryCode}&appid={apiKey}&lang=en&units=imperial");
                    response.EnsureSuccessStatusCode();

                    var stringResult = await response.Content.ReadAsStringAsync();
                    var weather = JsonConvert.DeserializeObject<OpenWeatherResponse>(stringResult);
                    return Ok(new
                    {
                        Temp = weather.Main.Temp,                           //get temperature
                        FeelsLike = weather.Main.Feels_Like,                //get realFeel temperature
                        Condition = string.Join(",", weather.Weather.Select(x => x.Main)),   //get group of weather parameters
                        Icon = weather.Weather.Select(x => x.Icon).Last(),
                        City = weather.Name                                 //get city name
                    }); ;
                }
                catch(HttpRequestException httpRequestException)
                {
                    return BadRequest($"Error getting weather from OpenWeather:{httpRequestException.Message}");
                }
            }
        }
    }
}
