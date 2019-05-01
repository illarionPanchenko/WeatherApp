import React from 'react';
import './App.css';


export default class Title extends React.Component {

    componentDidMount() {
        this.renderMap();
    }

    renderMap =()=>{
      loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCfFsG0Hk-GrF4xv9K5qOgJO-Qq0-bBtU4&callback=initMap"
      );
        window.initMap = this.initMap
    };

    initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: this.props.lat, lng: this.props.lng},
            zoom: this.props.zoom
        });

    };

    render() {

        return (
            <main>
                <div id="map"></div>
            </main>
        )
    }
}

    function loadScript(url) {
        var index = window.document.getElementsByTagName("script")[0];
        var script = window.document.createElement('script');
        script.src = url;
        script.async = true;
        script.defer = true;
        index.parentNode.insertBefore(script,index)
    }