import React, { Component, useEffect, useState } from "react";
import $ from "jquery";
import { Button } from "antd";
import { apiURL } from "@/constants";

export function EstatesMap(props) {

    const [mapState, setMapState] = useState(false);

    function toggleMap() {
        setMapState(prevState => ({
            opened: !prevState.opened
        }));
    }

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Red Group Map`;

        ymaps.ready(init());

        function init() {
            ymaps.ready(["ext.paintOnMap"]).then(function() {
                let map = new ymaps.Map("map", {
                    center: [40.177628, 44.512546],
                    zoom: 12,
                    controls: ["zoomControl"]
                });


                let paintProcess;

                // Опции многоугольника или линии.
                let styles = [
                    {
                        strokeColor: "#ff0000",
                        strokeOpacity: 0.6,
                        strokeWidth: 6,
                        fillColor: "#ff0000",
                        fillOpacity: 0.001
                    }
                ];

                let currentIndex = 0;

                // Создадим кнопку для выбора типа рисуемого контура.
                let button = new ymaps.control.Button({
                    data: { content: "Polygon / Polyline" },
                    options: { maxWidth: 150 }
                });
                // map.controls.add(button);


                // Start drawing button click
                $("#start_drawing").on("click", function() {
                    console.log("drawing started");

                    map.container?.fitToViewport();
                    $(this).toggleClass("drawing-started");

                    if ($(this).attr("drawable") === "false") {
                        $(this).attr("drawable", "true");
                        $(this).find(".drawing-title").html("Ջնջել");
                        $(this).find(".drawing-icon").html("<img src='assets/img/svg/pencil.svg' />");
                    } else {
                        $(this).attr("drawable", "false");
                        $(this).find(".drawing-title").html("Շրջագծել");

                        // Reset all polygones
                        map.geoObjects.each(function(item) {
                            if (item.geometry.getType() == "Polygon") {
                                map.geoObjects.remove(item);
                            }
                        });

                        // Retrieve html after reset button pushed
                        $(".searched-announcements").html(window.localStorage.getItem("oldData"));
                        window.localStorage.removeItem("oldData");

                        // Let draw polygone
                        first_time = true;
                    }
                });

                // Подпишемся на событие нажатия кнопки мыши.

                // Let draw polygone
                let first_time = true;
                map.events.add("mousedown", function(e) {
                    // Если кнопка мыши была нажата с зажатой клавишей "alt", то начинаем рисование контура.
                    if ($("#start_drawing").attr("drawable") === "true" && first_time === true) {
                        if ($(window).scrollTop() > 80) {
                            window.scrollTo(0, 80);
                        }

                        if (currentIndex == styles.length - 1) {
                            currentIndex = 0;
                        } else {
                            currentIndex += 1;
                        }
                        paintProcess = ymaps.ext.paintOnMap(map, e, { style: styles[currentIndex] });

                    }
                });

                function addGeoObjectToMap(map, coordinates) {
                    let geoObject = button.isSelected() ?
                        new ymaps.Polyline(coordinates, {}, styles[currentIndex]) :
                        new ymaps.Polygon([coordinates], {}, styles[currentIndex]);

                    map.geoObjects.add(geoObject);
                    console.log(coordinates);
                }

                function removeGeoObjectsOutsidePolygon(polygon) {
                    map.geoObjects.each(function(geoObject) {

                        console.log('geoObject removing');
                        console.log(geoObject);

                        if(geoObject.geometry) {
                            // Check if the geoObject is a placemark and its position is outside the polygon
                            if (!polygon.geometry.contains(geoObject.geometry.getCoordinates())) {
                                map.geoObjects.remove(geoObject);
                            }
                            // Check if the geoObject is a polyline or polygon and any of its vertices are outside the polygon
                            else if ((geoObject.geometry.getType() === 'LineString' || geoObject.geometry.getType() === 'Polygon') &&
                                geoObject.geometry.getCoordinates().some(function(coords) {
                                    return !polygon.geometry.contains(coords);
                                })) {
                                map.geoObjects.remove(geoObject);
                            }
                        }

                    });
                }

                function deleteMarkersOutsideRectangle(rectangle) {
                    map.geoObjects.each(function(geoObject) {
                        // Check if the geoObject is a marker
                        if (geoObject instanceof ymaps.Placemark) {
                            // Check if the marker is outside the rectangle
                            if (!rectangle.geometry.contains(geoObject.geometry.getCoordinates())) {
                                // Remove the marker from the map
                                map.geoObjects.remove(geoObject);
                            }
                        }
                    });
                }

                function performSearch(map, coordinates) {
                    let filter = "{{ http_build_query(Request::all()) }}";
                    let locale = "{{ app()->getLocale()  }}";
                    let params = $("#load_more_button").data("params");
                    let nextPage = "";

                    // const polygon = new ymaps.Polygon([coordinates], {}, {
                    //     fillColor: '#7df9ff33',
                    //     strokeColor: '#0078ff',
                    //     strokeWidth: 2,
                    // });
                    //
                    // map.geoObjects.add(polygon);
                    //
                    // removeGeoObjectsOutsidePolygon(polygon);

                    // Ajax
                    let polygonCoordinates = coordinates;
                    $.ajax({
                        url: apiURL+"api/estates/map/map_search",
                        method: "GET",
                        dataType: "JSON",
                        data: {
                            "coords": polygonCoordinates,
                            "filter": params,
                            "locale": locale
                        },
                        success: function(response) {

                            let estates = response.data;

                            const iconContentLayout = ymaps.templateLayoutFactory.createClass(
                                '<div style="display:block; color: #FFFFFF; font-weight: bold; text-align: center; font-family: \'Montserrat arm\'; font-style: normal;  font-size: 12px; width: 100%;">$[properties.iconContent]</div>'
                            );

                            let geoObjects = [];

                            Object.values(estates).forEach(item => {
                                let position = [item.native_coords[1], item.native_coords[0]];
                                let imageSrc = item?.image ? item?.image : 'https://i0.wp.com/lanecdr.org/wp-content/uploads/2019/08/placeholder.png';

                                let iconContent = '<a class="item-in-baloon" href="/estates/'+item.id+'" target="_blank"><span class="ann-code"><p>Address: '+item.full_address+'</p><p>Code: '+item.code+'</p></span><p class="baloon-item-address">'+item.name_arm+'</p><p class="baloon-item-address"><img width="150px" height="auto" src='+imageSrc+'></p></a>';
                                let estateBaloon = new ymaps.Placemark(
                                    position, {
                                        // Контент метки.
                                        iconContent: item.price+'֏',
                                        balloonContentBody: iconContent,
                                    }, {
                                        iconLayout: 'default#imageWithContent',
                                        iconContent: item.price,
                                        iconImageHref: '/assets/img/svg/mapIcon.svg',
                                        iconImageSize: [120, 40],
                                        iconImageOffset: [-60, -20],
                                        iconContentOffset: [30, 10],
                                        iconContentLayout: iconContentLayout
                                    });

                                geoObjects.push(estateBaloon);
                            });

                            let clusterer = new ymaps.Clusterer({
                                preset: 'islands#invertedRedClusterIcons',
                            });


                            clusterer.add(geoObjects);
                            map.geoObjects.add(clusterer);
                        },
                        error: function(error) {
                            console.log(error);
                        }
                    });
                }

                map.events.add("mouseup", function(e) {
                    if (paintProcess) {
                        let coordinates = paintProcess.finishPaintingAt(e);
                        paintProcess = null;

                        addGeoObjectToMap(map, coordinates);
                        performSearch(map, coordinates);
                        first_time = false;
                    }
                });

                // map.events.add('boundschange', function (event) {
                //     console.log('boundschange');
                //
                //
                //     var newBounds = event.get('newBounds');
                //
                //     var windowOpenedRectangle = new ymaps.Rectangle([
                //         [newBounds[0][0], newBounds[0][1]],
                //         [newBounds[1][0], newBounds[1][1]]
                //     ], {}, {
                //         draggable: false,
                //         fillOpacity: 0,
                //         strokeWidth: 0
                //     });
                //
                //
                //     map.geoObjects.add(windowOpenedRectangle);
                //     console.log('windowOpenedRectangle');
                //     console.log(windowOpenedRectangle.geometry.getBounds());
                //
                //     let coordinates = windowOpenedRectangle.geometry.getBounds();
                //
                //     performSearch(map, coordinates);
                //     // map.geoObjects.remove(windowOpenedRectangle);
                //
                //
                // });

            }).catch(console.error);
        }

        ymaps.modules.define("ext.paintOnMap", ["meta", "util.extend", "pane.EventsPane", "Event"], function(provide, meta, extend, EventsPane, Event) {
            "use strict";


            var EVENTS_PANE_ZINDEX = 500;

            var DEFAULT_UNWANTED_BEHAVIORS = ["drag", "scrollZoom"];
            var DEFAULT_STYLE = { strokeColor: "#0000ff", strokeWidth: 1, strokeOpacity: 0.1 };
            var DEFAULT_TOLERANCE = 16;

            var badFinishPaintingCall = function() {
                throw new Error("(ymaps.ext.paintOnMap) некорректный вызов PaintingProcess#finishPaintingAt. Рисование уже завершено.");
            };


            function paintOnMap(map, positionOrEvent, config) {
                config = config || {};
                var style = extend(DEFAULT_STYLE, config.style || {});

                var unwantedBehaviors = config.unwantedBehaviors === undefined ?
                    DEFAULT_UNWANTED_BEHAVIORS : config.unwantedBehaviors;

                var pane = new EventsPane(map, {
                    css: { position: "absolute", width: "100%", height: "100%" },
                    zIndex: EVENTS_PANE_ZINDEX + 50,
                    transparent: true
                });

                map.panes.append("ext-paint-on-map", pane);

                if (unwantedBehaviors) {
                    map.behaviors.disable(unwantedBehaviors);
                }

                var canvas = document.createElement("canvas");
                var ctx2d = canvas.getContext("2d");
                var rect = map.container.getParentElement().getBoundingClientRect();
                canvas.width = rect.width;
                canvas.height = rect.height;

                ctx2d.globalAlpha = style.strokeOpacity;
                ctx2d.strokeStyle = style.strokeColor;
                ctx2d.lineWidth = style.strokeWidth;

                canvas.style.width = "100%";
                canvas.style.height = "100%";

                pane.getElement().appendChild(canvas);

                var firstPosition = positionOrEvent ? toPosition(positionOrEvent) : null;
                var coordinates = firstPosition ? [firstPosition] : [];

                var bounds = map.getBounds();
                var latDiff = bounds[1][0] - bounds[0][0];
                var lonDiff = bounds[1][1] - bounds[0][1];

                canvas.onmousemove = function(e) {
                    coordinates.push([e.offsetX, e.offsetY]);

                    ctx2d.clearRect(0, 0, canvas.width, canvas.height);
                    ctx2d.beginPath();

                    ctx2d.moveTo(coordinates[0][0], coordinates[0][1]);
                    for (var i = 1; i < coordinates.length; i++) {
                        ctx2d.lineTo(coordinates[i][0], coordinates[i][1]);
                    }

                    ctx2d.stroke();
                }.bind(this);

                var paintingProcess = {
                    finishPaintingAt: function(positionOrEvent) {
                        paintingProcess.finishPaintingAt = badFinishPaintingCall;

                        // Получаем координаты, прежде чем удалить пейн.
                        if (positionOrEvent) {
                            coordinates.push(toPosition(positionOrEvent));
                        }

                        map.panes.remove(pane);
                        if (unwantedBehaviors) {
                            map.behaviors.enable(unwantedBehaviors);
                        }

                        var tolerance = config.tolerance === undefined ? DEFAULT_TOLERANCE : Number(config.tolerance);
                        if (tolerance) {
                            coordinates = simplify(coordinates, tolerance);
                        }


                        console.log('coordinates 1');
                        console.log(coordinates);

                        // Преобразовываем координаты canvas-элемента в геодезические координаты.
                        return coordinates.map(function(x) {
                            var lon = bounds[0][1] + (x[0] / canvas.width) * lonDiff;
                            var lat = bounds[0][0] + (1 - x[1] / canvas.height) * latDiff;
                            return meta.coordinatesOrder === "latlong" ? [lat, lon] : [lon, lat];
                        });
                    }
                };

                console.log('paintingProcess');
                console.log(paintingProcess);

                return paintingProcess;
            }

            function toPosition(positionOrEvent) {
                return positionOrEvent instanceof Event ?
                    [positionOrEvent.get("offsetX"), positionOrEvent.get("offsetY")] :
                    positionOrEvent;
            }

            function simplify(coordinates, tolerance) {
                var toleranceSquared = tolerance * tolerance;
                var simplified = [coordinates[0]];

                var prev = coordinates[0];
                for (var i = 1; i < coordinates.length; i++) {
                    var curr = coordinates[i];
                    if (Math.pow(prev[0] - curr[0], 2) + Math.pow(prev[1] - curr[1], 2) > toleranceSquared) {
                        simplified.push(curr);
                        prev = curr;
                    }
                }

                return simplified;
            }

            provide(paintOnMap);
        });

        // init();
    }, []);


    return (
        <div className="estates-map" id="map">
            <button className="btn btn-main-transparent map-pencil" id="start_drawing" drawable="false">
                <span className="drawing-icon mr-2"><img src={"/assets/img/svg/pencil.svg"} /></span> <span
                className="drawing-title">Շրջագծել</span>
            </button>
            <Button className="btn btn-main-transparent bg-white toggle-map p-2" onClick={(event) => {
                props.toggleMap();
                toggleMap();
            }}>
                <span><img src={"/assets/img/svg/arrow-right.svg"} /></span>
            </Button>
        </div>
    );
}

export default EstatesMap;
