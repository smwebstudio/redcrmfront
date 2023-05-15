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


const EstatesGoogleMap = (props) => {

    const { isLoaded, loadError } = useJsApiLoader({
        id: "redgroup-script",
        googleMapsApiKey: "AIzaSyCfSucQ9MNt5j0d4lc7hmqupvxdhMishMg",
        nonce: "map",
        libraries: ["drawing"]
    });

    const estatesData = props.estatesData;
    const changeCoords = props.changeCoords;


    const [drawingMode, setDrawingMode] = useState(null);
    const [searchInfoBoxHidden, setSearchInfoBoxHidden] = useState(true);

    const [map, setMap] = useState(null);
    const [coords, setCoords] = useState([]);
    const centerInitial = {
        lat: 40.177628,
        lng: 44.512546
    };

    const [markers, setMarkers] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {

        const initialMarkers = estatesData?.data.map((item) => ({
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
        }));

        setMarkers(initialMarkers);

        console.log(99999);

    }, [estatesData]);

    useEffect(() => {

        // create an async function to fetch the data
        let coordsToSend = encodeURIComponent(JSON.stringify(coords));

        changeCoords(coordsToSend);

        const fetchData = async () => {
            try {
                const response = await api(locale).get(endpoint + "?fromMap=1&filter[coordinates]=" + coordsToSend);
                const newMarkers = response.data.data.map((item) => ({
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
                }));

                setSearchInfoBoxHidden(true);
                setMarkers(newMarkers);
            } catch (error) {
                console.error(error);
            }
        };


        // set a timeout to avoid sending too many requests in a short time
        const timeoutId = setTimeout(() => {
            fetchData();
        }, 2000);





        // return a cleanup function to clear the timeout
        return () => {
            clearTimeout(timeoutId);
        };
    }, [coords]);

// set the markers to the fetched data


    const [selectedMarker, setSelectedMarker] = useState(null);
    const [center, setCenter] = useState(centerInitial);
    const router = useRouter();
    const { locale } = router;
    const mapContainerStyle = {
        height: "calc(100vh - 200px)",
        width: "calc(100vw - 52%)"
    };


    const options = {
        styles: [
            {
                url: "/assets/img/svg/mapIcon.svg",
                height: 100,
                width: 100,
                textColor: "white",
                textSize: 16,
                backgroundPosition: "0 35"
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
        gridSize: 30,
        maxZoom: 22,
        minimumClusterSize: 3
    };


    const onLoad = drawingManager => {
        console.log(drawingManager);
    };

    const endpoint = apiURL + "api/estates/filter/estates";

    const [rectangle, setRectangle] = useState(null);


    const [buttonText, setButtonText] = useState("Շրջագծել");
    const handleStartDrawing = () => {
        setButtonText("Ջնջել");
        rectangle?.setOptions({ map: null });
        setDrawingMode("rectangle");
    };

    const handleMapClick = () => {
        if (selectedMarker) {
            setSelectedMarker(null);
        }
    };

    const handleMapZoomChanged = () => {
        setSearchInfoBoxHidden(false);
        if (map) {
            setTimeout(() => {
                const bounds = map.getBounds();
                const ne = bounds.getNorthEast();
                const sw = bounds.getSouthWest();
                const newCoords = [
                    [ne.lat(), ne.lng()],
                    [ne.lat(), sw.lng()],
                    [sw.lat(), sw.lng()],
                    [sw.lat(), ne.lng()]
                ];
                setCoords(newCoords);
            }, 2000);
        }
    };

    const onRectangleComplete = rectangle => {
        setSearchInfoBoxHidden(false);
        setButtonText("Շրջագծել");
        setDrawingMode(null);
        setRectangle(rectangle);
        const rectangleCoords = rectangle.getBounds();
        const ne = rectangleCoords.getNorthEast();
        const sw = rectangleCoords.getSouthWest();

        const coordsRectangle = [
            [ne.lat(), ne.lng()],
            [ne.lat(), sw.lng()],
            [sw.lat(), sw.lng()],
            [sw.lat(), ne.lng()]
        ];

        setCoords(coordsRectangle);

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
                    zoom={13}
                    onLoad={(map) => setMap(map)}
                    onClick={handleMapClick}
                    onZoomChanged={handleMapZoomChanged}
                    onResize={handleMapZoomChanged}
                    // gestureHandling={'greedy'}
                >

                    {!searchInfoBoxHidden &&
                            <div style={{ backgroundColor: "transparent", opacity: 1, width: "160px" }}>
                                <MagnifyingGlass
                                    visible={true}
                                    height="160"
                                    width="160"
                                    ariaLabel="MagnifyingGlass-loading"
                                    wrapperStyle={{zIndex: '999999', width: '160px', height: '160px', position: 'absolute', left: '42%', top: '42%'}}
                                    wrapperClass="MagnifyingGlass-wrapper"
                                    glassColor="#D8002C"
                                    color="#FFFFFF"
                                />
                            </div>

                    }
                    <button onClick={handleStartDrawing} className="btn btn-main-transparent map-pencil"
                            id="start_drawing" drawable="false">
                        <span className="drawing-icon mr-2 flex"><img src={"/assets/img/svg/pencil.svg"} width={'25px'}/></span> <span
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

export default EstatesGoogleMap;
