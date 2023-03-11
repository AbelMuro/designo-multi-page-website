import React, {useEffect, useState} from 'react';
import './styles.css';

function Map({lat, long, id}) {
    const [map, setMap] = useState();

    useEffect(() => {
        setMap(L.map(id, {
            center: [lat, long],
            zoom: 13
        }));
    },[])

    useEffect(() => {
        if(!map) return;

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        map.trackResize = true;
        L.marker([lat, long]).addTo(map);

        return () => {
            map.remove();
        }
    }, [map])

    useEffect(() => {
        const handleResize = () => {
            map
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return(
            <div id={id}>
            </div>
        )
}

export default Map;
