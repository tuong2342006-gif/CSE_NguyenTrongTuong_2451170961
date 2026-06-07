import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [history, setHistory] = useState(() => {
    return JSON.parse(localStorage.getItem("weatherHistory")) || [];
  });

  async function getWeather(searchCity) {
    if (!searchCity) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://wttr.in/${searchCity}?format=j1`
      );

      if (!res.ok) {
        throw new Error("API lỗi");
      }

      const data = await res.json();

      if (!data.current_condition) {
        throw new Error("Không tìm thấy thành phố");
      }

      const current = data.current_condition[0];

      setWeather({
        temp: current.temp_C,
        humidity: current.humidity,
        desc: current.weatherDesc[0].value,
        icon: current.weatherIconUrl[0].value,
        city: searchCity,
      });

      let newHistory = [
        searchCity,
        ...history.filter((c) => c !== searchCity),
      ].slice(0, 5);

      setHistory(newHistory);

      localStorage.setItem(
        "weatherHistory",
        JSON.stringify(newHistory)
      );
    } catch (err) {
      setError("Không tìm thấy thành phố hoặc mất mạng");
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <h1>Weather App</h1>

      <div className="search">
        <input
          placeholder="Nhập thành phố..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={() => getWeather(city)}>
          Tìm
        </button>
      </div>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Đang tải...</p>
        </div>
      )}

      {error && <h3>{error}</h3>}

      {weather && (
        <div className="card">
          <h2>{weather.city}</h2>

          <img src={weather.icon} />

          <p>Nhiệt độ: {weather.temp}°C</p>

          <p>Độ ẩm: {weather.humidity}%</p>

          <p>{weather.desc}</p>
        </div>
      )}

      <h3>Lịch sử</h3>

      <div className="history">
        {history.map((item, index) => (
          <button
            key={index}
            onClick={() => getWeather(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;