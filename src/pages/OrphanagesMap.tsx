import React, { useEffect, useState } from 'react';

import mapMarkerTag from '../images/map-marker.svg';

import { Link } from 'react-router-dom';

import { FiArrowRight, FiPlus } from 'react-icons/fi';

import '../styles/pages/orphanages-map.css';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';


// const mapIcon = Leaflet.icon({
//   iconUrl: mapMarkerTag,

//   iconSize: [58, 68],
//   iconAnchor: [29,68],
//   popupAnchor: [170,2],
// })

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  //chamada API de componentes em tela 
  useEffect(() => {
    api.get('orphanages').then(response => {
      // console.log(response);
      setOrphanages(response.data);

    });
  }, []);

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

        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />


        {orphanages.map(orphanage => {
          return (
            <Marker
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
            >

              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>

            </Marker>
          )
        })}

      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
  );
}

export default OrphanagesMap;