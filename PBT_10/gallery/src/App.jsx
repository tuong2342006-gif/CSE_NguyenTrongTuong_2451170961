import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  const triggerRef = useRef(null);

  async function loadMorePhotos() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=20`
      );

      const data = await response.json();

      setPhotos((prev) => {
        return [...prev, ...data];
      });

      setPage((prev) => {
        return prev + 1;
      });

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMorePhotos();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !loading
        ) {
          loadMorePhotos();
        }
      },
      {
        threshold: 1
      }
    );

    if (triggerRef.current) {
      observer.observe(
        triggerRef.current
      );
    }

    return () => {
      observer.disconnect();
    };

  }, [loading]);

  return (
    <div className="container">

      <h1>Infinite Gallery</h1>

      <div className="grid">

        {photos.map((photo) => (
          <img
            key={photo.id}
            className="photo"
            loading="lazy"
            src={photo.download_url}
            alt={photo.author}
            onClick={() => {
              setSelected(
                photo.download_url
              );
            }}
          />
        ))}

      </div>

      {loading && (
        <p className="loading">
          Đang tải thêm...
        </p>
      )}

      <div
        id="load-trigger"
        ref={triggerRef}
      ></div>

      {selected && (
        <div
          className="modal"
          onClick={() => {
            setSelected(null);
          }}
        >
          <img
            src={selected}
            alt="preview"
            className="modal-img"
          />
        </div>
      )}

    </div>
  );
}

export default App;