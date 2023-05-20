import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

class Card extends React.Component {
    render(){
        return (
        <div class = "container_map">
            <p >Basic map</p>
            <div id="map" class = "map">
            <YMaps>
                <Map defaultState={{center:[57.5335903710942,38.33502323828125], zoom: 16 }} height= "531px" width = "auto" >
                <Placemark geometry={[57.533230, 38.336577]}
                properties={
                    {
                    hintContent: 'My place',
                    balloonContent: 'Home',
                    }
                }
                modules = {
                    ['geoObject.addon.balloon', 'geoObject.addon.hint']
                }
                
                    />
                </Map>
            </YMaps>
            </div>

        </div>
        )
    }
}
export default Card