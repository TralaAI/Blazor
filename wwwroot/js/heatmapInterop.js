window.heatmapInterop = {
  map: null,
  heatLayer: null,

  initMap: function (elementId, centerLat, centerLng, zoomLevel) {
    const el = document.getElementById(elementId);
    if (!el) {
      console.error("Element not found:", elementId);
      return;
    }

    console.log("Initializing map on element:", elementId);

    this.map = L.map(elementId).setView([centerLat, centerLng], zoomLevel);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(this.map);
  },

  addHeatmap: function (points) {
    if (!this.map) {
      console.error("Map not initialized");
      return;
    }

    const heat = points.map((p) => [p[0], p[1], p[2]]);
    this.heatLayer = L.heatLayer(heat, { radius: 25 }).addTo(this.map);
  },
};
