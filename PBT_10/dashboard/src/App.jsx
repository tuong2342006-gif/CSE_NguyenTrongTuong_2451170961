import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [widgets, setWidgets] = useState({
    users: {
      loading: true,
      error: "",
      data: null
    },

    weather: {
      loading: true,
      error: "",
      data: null
    },

    dog: {
      loading: true,
      error: "",
      data: null
    }
  });

  const [globalLoading, setGlobalLoading] =
    useState(true);

  const [timeLoaded, setTimeLoaded] =
    useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    const startTime =
      Date.now();

    setGlobalLoading(true);

    setWidgets({
      users: {
        loading: true,
        error: "",
        data: null
      },

      weather: {
        loading: true,
        error: "",
        data: null
      },

      dog: {
        loading: true,
        error: "",
        data: null
      }
    });

    const results =
      await Promise.allSettled([

        fetch(
          "https://jsonplaceholder.typicode.com/users"
        ).then((r) => r.json()),

        fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=21.03&longitude=105.85&current_weather=true"
        ).then((r) => r.json()),

        fetch(
          "https://dog.ceo/api/breeds/image/random"
        ).then((r) => r.json())

      ]);

    const nextState = {
      users: {},
      weather: {},
      dog: {}
    };

    results.forEach(
      (result, index) => {

        const keys = [
          "users",
          "weather",
          "dog"
        ];

        const key =
          keys[index];

        if (
          result.status ===
          "fulfilled"
        ) {

          nextState[key] = {
            loading: false,
            error: "",
            data:
              result.value
          };

        } else {

          nextState[key] = {
            loading: false,
            error:
              result.reason.message,
            data: null
          };

        }

      }
    );

    setWidgets(nextState);

    setTimeLoaded(
      Date.now() -
      startTime
    );

    setGlobalLoading(false);
  }

  return (
    <div className="container">

      <h1>
        Multi API Dashboard
      </h1>

      <button
        onClick={
          loadDashboard
        }
      >
        Refresh All
      </button>

      {globalLoading && (
        <p>
          Loading dashboard...
        </p>
      )}

      <p>
        Data loaded in
        {" "}
        {timeLoaded}
        ms
      </p>

      <div className="grid">

        <div className="card">

          <h2>
            Users Widget
          </h2>

          {widgets.users.loading &&
            <p>Loading...</p>
          }

          {widgets.users.error &&
            <p>
              {widgets.users.error}
            </p>
          }

          {widgets.users.data &&

            widgets.users.data
              .slice(0, 3)
              .map((user) => (

              <p
                key={user.id}
              >
                {user.name}
              </p>

            ))

          }

        </div>

        <div className="card">

          <h2>
            Weather Widget
          </h2>

          {widgets.weather.loading &&
            <p>Loading...</p>
          }

          {widgets.weather.error &&
            <p>
              {widgets.weather.error}
            </p>
          }

          {widgets.weather.data && (

            <div>

              <p>
                Temp:
                {" "}
                {
                  widgets.weather
                  .data
                  .current_weather
                  .temperature
                }
                °C
              </p>

              <p>
                Wind:
                {" "}
                {
                  widgets.weather
                  .data
                  .current_weather
                  .windspeed
                }
              </p>

            </div>

          )}

        </div>

        <div className="card">

          <h2>
            Dog Widget
          </h2>

          {widgets.dog.loading &&
            <p>Loading...</p>
          }

          {widgets.dog.error &&
            <p>
              {widgets.dog.error}
            </p>
          }

          {widgets.dog.data && (

            <img
              src={
                widgets.dog
                .data.message
              }

              className="dog"
            />

          )}

        </div>

      </div>

    </div>
  );
}

export default App;