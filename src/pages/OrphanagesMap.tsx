import React from 'react';

import mapMarkerTag from '../images/map-marker.svg';

import { Link } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanages-map.css';

import { Map, TileLayer } from 'react-leaflet';

function OrphanagesMap() {
  return (
    <div id="page-map">

      <aside>
        <header>
          <img src={mapMarkerTag} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Guarulhos</strong>
          <span>São Paulo</span>
        </footer>
      </aside>


      <Map
        center={[-23.4563178, -46.5066368]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >

        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
  );
}

export default OrphanagesMap;