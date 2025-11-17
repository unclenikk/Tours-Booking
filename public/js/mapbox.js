/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibHVrYTEiLCJhIjoiY21oanNocWs1MDMwbzJsc2l2MzFiN2ZtayJ9.i_yLpiHwJtZaEKX1Xs0yhQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/luka1/cmhjsiudd00d601pj93ruhmfq',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    zoom: 25
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
