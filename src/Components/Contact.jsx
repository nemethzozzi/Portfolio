import React, { useRef, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';

const Contact = ({ darkMode }) => {
  const contactItems = [
    {
      label: "GitHub",
      text: "/nemethzozzi",
      icon: "icons/github.png",
    },
    {
      label: "Email",
      text: "nemethzoltan0524@gmail.com",
      icon: "icons/email.png",
    },
    {
      label: "LinkedIn",
      text: "/nemethzoltan0524",
      icon: "icons/linkedin.png",
    },
    {
      label: "Discord",
      text: "/nemethzozzi",
      icon: "icons/discord.png",
    },
    {
      label: "Phone",
      text: "06 70 601 0524",
      icon: "icons/phone.png",
    },
  ];

  const mapElement = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const [mapLongitude] = useState(20.1414);
  const [mapLatitude] = useState(46.2530);
  const [mapZoom] = useState(8);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  const updateMap = () => {
    if (map) {
      map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
      map.setZoom(mapZoom);
    }
  };

  useEffect(() => {
    if (!map) {
      const newMap = tt.map({
        key: "hHm3VNho9upDPgRh1ru2pqCEvsAIbCzV",
        container: mapElement.current,
        center: [mapLongitude, mapLatitude],
        zoom: mapZoom,
      });

      const newMarker = new tt.Marker().setLngLat([mapLongitude, mapLatitude]).addTo(newMap);

      setMap(newMap);
      setMarker(newMarker);
    } else {
      updateMap();
    }

    // Cleanup function
    return () => {
      if (map) {
        map.remove();
        setMap(null);
        setMarker(null);
      }
    };
  }, [map, mapLongitude, mapLatitude, mapZoom]);

  return (
    <div id="contact">
      <div className={`flex items-center justify-center ${isMobile ? 'h-full' : 'min-h-screen'} ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <div className={`max-w-screen-xl mx-2 p-10 ${isMobile ? 'w-full' : isTablet ? 'w-3/4' : 'w-2/3'}`}>
          <h1 className={`text-4xl md:text-6xl text-center font-bold animate-pulse ${darkMode ? 'text-white' : 'text-black'} mb-4`}>Contact Me</h1>
          <div className={`grid grid-cols-1 ${isTablet ? 'sm:grid-cols-2' : ''} lg:grid-cols-2 gap-4 sm:gap-8 mt-4 p-8 ${darkMode ? 'bg-dark-secondary' : 'bg-light-secondary'}`}>
            {contactItems.map((item, index) => (
              <div key={index} className={`flex items-center text-center ${darkMode ? 'text-white' : 'text-black'}`}>
                <div className="flex flex-col items-center mt-2">
                  <img src={item.icon} alt={`${item.icon} icon`} className="w-8 h-8" />
                </div>
                <div className="flex flex-col items-start mt-2 ml-3">
                  <span className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>{item.label}</span>
                  <span className={`text-xs ${darkMode ? 'text-white' : 'text-black'}`}>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div ref={mapElement} className="map-container" style={{ height: '300px', width: '100%' }}></div>
    </div>
  );
};

export default Contact;
