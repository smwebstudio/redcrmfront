import React, { useState, useEffect, useRef } from "react";
import {
    GoogleMap,
    Marker,
    InfoWindow,
    MarkerClusterer, LoadScript, Rectangle, DrawingManager, LoadScriptNext, useJsApiLoader
} from "@react-google-maps/api";
import { ClusterIcon } from "@react-google-maps/marker-clusterer";
import { apiURL } from "@/constants";
import { useRouter } from "next/router";
import api from "@/hooks/api";
import RedMarker from "@/components/Map/RedMarker";
import Link from "next/link";
import { Col, Image, Row } from "antd";

const libraries = ["drawing"];


const EstatesGoogleMap = ({}) => {

    const { isLoaded, loadError } = useJsApiLoader({
        id: "redgroup-script",
        googleMapsApiKey: "AIzaSyCi0-3QkFGkcpGHEP2_FBEfkuCtyzKrkt8",
        nonce: "map",
        libraries: ["drawing"]
    });

    const [drawingMode, setDrawingMode] = useState('rectangle');

    const [map, setMap] = useState(null);

    const [markers, setMarkers] = useState([]);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const router = useRouter();
    const { locale } = router;
    const mapContainerStyle = {
        height: "100vh",
        width: "100vw"
    };

    const center = {
        lat: 40.177628,
        lng: 44.512546
    };

    const options = {
        styles: [
            {
                url: "/assets/img/svg/mapIcon.svg",
                height: 50,
                width: 50,
                textColor: "white",
                textSize: 16
            }
        ],
        clusterClass: "custom-clustericon",
        calculator: (markers, numStyles) => {
            return {
                text: markers.length,
                index: 0,
                title: markers.map((marker) => marker.title).join("\n")
            };
        },
        gridSize: 50
    };


    const onLoad = drawingManager => {
        console.log(drawingManager);
    };

    const endpoint = apiURL + "api/estates/map_search";
    // const onPolylineComplete = polyline => {
    //     const polylineCoords = polyline.getPath().getArray().map((point) => [point.lat(), point.lng()]);
    //     let coords = [];
    //
    //     for (let i = 0; i < polylineCoords.length; i++) {
    //         coords[i] = polylineCoords[i];
    //     }
    //
    //     const formData = new FormData();
    //     formData.append("coords", JSON.stringify(coords));
    //     formData.append("locale", JSON.stringify(locale));
    //     const fetchData = async () => {
    //         try {
    //             const response = await api(locale).post(endpoint, formData);
    //             const newMarkers = response.data.data.map((item) => ({
    //                 lat: parseFloat(item.native_coords[1]),
    //                 lng: parseFloat(item.native_coords[0])
    //
    //             }));
    //             setMarkers(newMarkers);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //
    //     fetchData();
    // };

    const [rectangle, setRectangle] = useState(null);


    const [buttonText, setButtonText] = useState("Start Drawing");
    const handleStartDrawing = () => {
        setButtonText("Ջնջել");
        rectangle?.setOptions({ map: null });
        setDrawingMode('rectangle');
    }

    const handleMapClick = () => {
        if (selectedMarker) {
            setSelectedMarker(null);
        }
    };

    const onRectangleComplete = rectangle => {

        setButtonText('Շրջագծել')
        setDrawingMode(null);
        setRectangle(rectangle);
        const rectangleCoords = rectangle.getBounds();
        const ne = rectangleCoords.getNorthEast();
        const sw = rectangleCoords.getSouthWest();

        const coords = [
            [ne.lat(), ne.lng()],
            [ne.lat(), sw.lng()],
            [sw.lat(), sw.lng()],
            [sw.lat(), ne.lng()]
        ];

        const formData = new FormData();
        formData.append("coords", JSON.stringify(coords));
        formData.append("locale", JSON.stringify(locale));
        const fetchData = async () => {
            try {
                const response = await api(locale).post(endpoint, formData);
                const newMarkers = response.data.data.map((item) => ({
                    id: item.id,
                    position: {lat: parseFloat(item.native_coords[1]), lng: parseFloat(item.native_coords[0])},
                    lat: parseFloat(item.native_coords[1]),
                    lng: parseFloat(item.native_coords[0]),
                    label: item.price,
                    price: item.price,
                    title: item.full_address,
                    code: item.code,
                    image: item.image,
                    optimized: false
                }));
                setMarkers(newMarkers);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    };


    const handleMarkerClick = (marker) => {
        setSelectedMarker(marker);
    };

    const handleCloseClick = () => {
        setSelectedMarker(null);
    };

    function createKey(location) {
        return location.lat + location.lng + location.id;
    }

    const [rectangleOptions, setRectangleOptions] = useState({
        fillColor: "#D8002C", // green background color
        fillOpacity: 0.2,
        strokeWeight: 2,
        strokeColor: "#D8002C",
        clickable: false,
        editable: true,
        zIndex: 1
    });

    const [markerOptions, setMarkerOptions] = useState({
        color: "#FFFFFF"
    });

    return (
        <>

            {isLoaded &&
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={10}
                    onLoad={(map) => setMap(map)}
                    onClick={handleMapClick}
                    // gestureHandling={'greedy'}
                >
                    <button onClick={handleStartDrawing} className="btn btn-main-transparent map-pencil" id="start_drawing" drawable="false">
                        <span className="drawing-icon mr-2"><img src={"/assets/img/svg/pencil.svg"} /></span> <span
                        className="drawing-title">{buttonText}</span>
                    </button>
                    <DrawingManager
                        onLoad={onLoad}
                        onRectangleComplete={onRectangleComplete}
                        drawingMode={drawingMode}
                        options={{
                            rectangleOptions: rectangleOptions,
                            markerOptions: markerOptions,
                            drawingControlOptions: {
                                position: -5,
                                drawingModes: [
                                    google.maps.drawing.OverlayType.RECTANGLE
                                ]
                            }
                        }}
                    />


                    <MarkerClusterer options={options}>
                        {(clusterer) =>
                            markers.map((marker) => (
                                <Marker
                                    key={createKey(marker)}
                                    position={marker}
                                    clusterer={clusterer}
                                    onClick={() => handleMarkerClick(marker)}
                                    icon={"/assets/img/svg/mapIcon.svg"}
                                    label={{
                                        text: marker.label,
                                        color: "#FFFFFF", // set the color to white
                                        fontSize: "12px",
                                        fontWeight: "bold"
                                    }}
                                />
                            ))
                        }
                    </MarkerClusterer>
                    {selectedMarker && (
                        <InfoWindow
                            position={selectedMarker}
                            options={{ disableAutoPan: true }}
                            anchor={selectedMarker}
                            onCloseClick={handleCloseClick}
                            content={selectedMarker.id}
                        >
                            <div>
                                <Link href={"/estates/" + selectedMarker.id}>
                                    <div className={'flex flex-row items-start'}>
                                        <div className={'mr-4'}>
                                            <Image preview={false} src={selectedMarker.image} height={100}  alt={selectedMarker.title} />
                                        </div>
                                        <div className={'flex flex-row items-start'}>
                                            <h3><span className={'text-main font-bold  font-size-16'}>{selectedMarker.price}</span> | {selectedMarker.code}</h3>
                                            <h3>{selectedMarker.full_address}</h3>
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

export default EstatesGoogleMap;
