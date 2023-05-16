import React, { useState, useEffect, useRef } from "react";
import {
    GoogleMap,
    Marker,
    InfoWindow,
    MarkerClusterer, LoadScript, Rectangle, DrawingManager, LoadScriptNext, useJsApiLoader, InfoBox
} from "@react-google-maps/api";
import { ClusterIcon } from "@react-google-maps/marker-clusterer";
import { apiURL } from "@/constants";
import { useRouter } from "next/router";
import api from "@/hooks/api";
import RedMarker from "@/components/Map/RedMarker";
import Link from "next/link";
import { Col, Image, Row } from "antd";
import { MagnifyingGlass } from "react-loader-spinner";

const libraries = ["drawing"];


const EstatesGoogleMapSingle = (props) => {

    const { isLoaded, loadError } = useJsApiLoader({
        id: "redgroup-script",
        googleMapsApiKey: "AIzaSyCfSucQ9MNt5j0d4lc7hmqupvxdhMishMg",
        nonce: "map",
        libraries: ["drawing"]
    });

    const [map, setMap] = useState(null);
    const centerInitial = {
        lat: 40.177628,
        lng: 44.512546
    };

    const markerInitial = props.marker;

    const markerChanged = [markerInitial].map((item) => {
        return {
            id: item.id,
            position: { lat: parseFloat(item.native_coords[0]), lng: parseFloat(item.native_coords[1]) },
            lat: parseFloat(item.native_coords[0]),
            lng: parseFloat(item.native_coords[1]),
            label: item.price,
            price: item.price,
            title: item.full_address,
            code: item.code,
            image: item.image,
            optimized: false
        };
    });

    const [marker, setMarker] = useState(markerChanged[0]);


    console.log("marker");
    console.log(marker);


    const [selectedMarker, setSelectedMarker] = useState(props.marker);
    const [center, setCenter] = useState(centerInitial);
    const mapContainerStyle = {
        height: "500px",
        width: "1280px"
    };


    const handleMapClick = () => {
        if (selectedMarker) {
            setSelectedMarker(null);
        }
    };


    const handleMarkerClick = (marker) => {
        setCenter(marker.position);
        setSelectedMarker(marker);
    };

    const handleCloseClick = () => {
        setSelectedMarker(null);
    };

    function createKey(location) {
        return location.lat + location.lng + location.id;
    }


    const [markerOptions, setMarkerOptions] = useState({
        color: "#FFFFFF"
    });


    return (
        <>


            {isLoaded &&
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={13}
                    onLoad={(map) => setMap(map)}
                    onClick={handleMapClick}
                >


                        <Marker
                            key={createKey(marker)}
                            position={marker.position}
                            onClick={() => handleMarkerClick(marker)}
                            icon={"/assets/img/svg/mapIcon.svg"}
                            label={{
                                text: marker.label,
                                color: "#FFFFFF", // set the color to white
                                fontSize: "12px",
                                fontWeight: "bold"
                            }}
                        />

                    {selectedMarker && (
                        <InfoWindow
                            position={selectedMarker}
                            options={{ disableAutoPan: true, maxWidth: 350 }}
                            anchor={selectedMarker}
                            onCloseClick={handleCloseClick}
                            content={selectedMarker.id}
                        >
                            <div>
                                <Link href={"/estates/" + selectedMarker.id}>
                                    <div className={"flex flex-row items-start"}>
                                        <div className={"mr-4"}>
                                            <Image preview={false} src={selectedMarker.image} height={100}
                                                   alt={selectedMarker.title} />
                                        </div>
                                        <div className={"flex flex-col items-start"}>
                                            <h3><span
                                                className={"text-main font-bold  font-size-16"}>{selectedMarker.price}</span> | {selectedMarker.code}
                                            </h3>
                                            <h3>{selectedMarker.title}</h3>
                                        </div>

                                    </div>
                                </Link>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>

            }
        </>
    );
};

export default EstatesGoogleMapSingle;
