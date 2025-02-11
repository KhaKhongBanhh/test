import React, { useState } from "react";
import Map, { Source, Layer } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css"; // Import CSS

function MapComponent() {
  const [viewState, setViewState] = useState({
    latitude: 10.732237, // Tọa độ Quận 7
    longitude: 106.732600,
    zoom: 12,
  });

  const [showLayer, setShowLayer] = useState(false); // Toggle layer
  const [opacity, setOpacity] = useState(1); // Độ mờ của layer

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      {/* Bản đồ MapLibre */}
      <div style={{ flex: 1, position: "relative" }}>
        <Map
          {...viewState}
          style={{ width: "100%", height: "100%" }}
          mapStyle="https://demotiles.maplibre.org/style.json"
          onMove={(evt) => setViewState(evt.viewState)}
        >
          {/* Nếu showLayer = true, thêm nguồn dữ liệu raster */}
          {showLayer && (
            <Source
              id="quan7-raster"
              type="raster"
              tiles={["/img/{z}/{x}/{y}.png"]}
              tileSize={256}
            >
              <Layer
                id="quan7-layer"
                type="raster"
                source="quan7-raster"
                paint={{ "raster-opacity": opacity }} // Điều chỉnh độ mờ
              />
            </Source>
          )}
        </Map>


        {/* Thanh trượt điều chỉnh độ mờ */}
        {showLayer && (
          <div
            style={{
              position: "absolute",
              top: 10,
              right: 10, // Chuyển sang góc phải
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <label><b>Độ mờ của bản đồ</b></label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={opacity}
              onChange={(e) => setOpacity(parseFloat(e.target.value))}
              style={{ width: "120px" }}
            />
          </div>
        )}
      </div>

      {/* Google Maps
      <div style={{ flex: 1 }}>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.758587817698!2d106.707428315334!3d10.756395992334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec1b5b0d1b7%3A0x2d0b7b0b7b0b7b0b!2sQuận%207%2C%20Thành%20phố%20Hồ%20Chí%20Minh%2C%20Việt%20Nam!5e0!3m2!1svi!2s!4v1610000000000!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div> */}
    </div>
  );
}

export default MapComponent;





// import React, { useState } from "react";
// import Map from "react-map-gl/maplibre";
// import "maplibre-gl/dist/maplibre-gl.css"; // Cần import CSS


// function MapComponent() {
//   const [viewState, setViewState] = useState({
//     latitude: 10.732237,
//     longitude: 106.732600,
//     zoom: 2,
//   });

//   return (
//     <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
//       {/* Mapbox
//       <div style={{ flex: 1 }}>
//         <Map
//           {...viewState}
//           style={{ width: "100%", height: "100%" }}
//           mapStyle="https://demotiles.maplibre.org/style.json" // Sử dụng bản đồ từ MapLibre
//           onMove={evt => setViewState(evt.viewState)}
//         />
//       </div> */}

//       {/* Google Maps */}
//       <div style={{ flex: 1 }}>
//         <iframe
//           title="Google Maps"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12
//           // !1m3!1d3919.758587817698!2d106.707428315334!3d10.756395992
//           // 334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec1b
//           // 5b0d1b7%3A0x2d0b7b0b7b0b7b0b!2sQuận%207%2C%20Thành%20phố%20Hồ%20Chí%20
//           // Minh%2C%20Việt%20Nam!5e0!3m2!1svi!2s!4v1610000000000!5m2!1svi!2s"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         />
//       </div>
//     </div>
//   );
// }



// export default MapComponent;