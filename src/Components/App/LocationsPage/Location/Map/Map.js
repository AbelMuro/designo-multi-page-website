import React, {useEffect, useState} from 'react';
import './styles.css';

function Map({lat, long, id}) {
    const [map, setMap] = useState();

    /* initializing the map*/
    useEffect(() => {
        setMap(L.map(id, {
            center: [lat, long],
            zoom: 13
        }));
    },[])

    /*specifying a tile layer, track resize and a marker to the map */
    useEffect(() => {
        if(!map) return;

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
        }).addTo(map);
        map.trackResize = true;
        L.marker([lat, long]).addTo(map);

        return () => {
            map.off();
            map.remove();
        }
    }, [map])


    /* this will check to see if the map's size has changed and will update it accordingly*/
    useEffect(() => {
        if(!map) return;

        setTimeout(() => {
            map.invalidateSize(true)
        }, 200)
    })

    return(
            <div id={id}>
            </div>
        )
}

export default Map;
