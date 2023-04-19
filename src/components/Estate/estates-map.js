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
                        fillOpacity: 0.3
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

                        // Get and save html for appending after push reset button polygone
                        let start_html = $(".searched-announcements").html();
                        window.localStorage.setItem("oldData", start_html);
                    }
                });

                // Подпишемся на событие отпускания кнопки мыши.
                map.events.add("mouseup", function(e) {
                    if (paintProcess) {
                        $(".announcement.index .ajax-loader-block").show();

                        // Получаем координаты отрисованного контура.
                        let coordinates = paintProcess.finishPaintingAt(e);
                        paintProcess = null;
                        // В зависимости от состояния кнопки добавляем на карту многоугольник или линию с полученными координатами.
                        let geoObject = button.isSelected() ?
                            new ymaps.Polyline(coordinates, {}, styles[currentIndex]) :
                            new ymaps.Polygon([coordinates], {}, styles[currentIndex]);

                        map.geoObjects.add(geoObject);
                        // console.log(coordinates);

                        let filter = "{{ http_build_query(Request::all()) }}";
                        let locale = "{{ app()->getLocale()  }}";
                        let params = $("#load_more_button").data("params");
                        let nextPage = "";

                        // Ajax
                        let polygonCoordinates = coordinates;
                        $.ajax({
                            url: apiURL+"api/estates/map_search",
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
                                    let iconContent = '<a class="item-in-baloon" href="/estates/'+item.id+'" target="_blank"><span class="ann-code"><p>Address: '+item.c_location_street?.name+' '+item.address_building+'</p><p>Code: '+item.code+'</p></span><p class="baloon-item-address">'+item.name_arm+'</p><p class="baloon-item-address"><img width="80px" height="60px" src='+item?.main_image_file_path_thumb+'"></p></a>';
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

                                console.error('cluster added');

                                // $(".announcement.index .ajax-loader-block").hide();
                                // let announcements = response.data;
                                //
                                // let buttonText = $("#load_more_button").text();
                                //
                                // if (response.current_page == response.last_page) {
                                //     $("#load_more_button").remove();
                                // } else {
                                //     $("#load_more_button").text(buttonText);
                                // }
                                // $.each(announcements, function(index, announcement) {
                                //     let parent = announcement.place ? announcement.place.parent.name : "";
                                //     let place_name = announcement.place ? announcement.place.name : "";
                                //     let code = announcement.currency_price ? announcement.currency_price.code : "";
                                //
                                //     let address = parent + "," + place_name;
                                //     nextPage += "<div class=\"col-md-6 announcement-item\">";
                                //     nextPage += "<a href=\"" + location.origin + "/announcement/" + announcement.code + "\">";
                                //     nextPage += "<div class=\"thumbnail\">";
                                //     nextPage += "<img src=\"" + announcement.thumbnail + "\" alt=\"\">";
                                //     nextPage += "<span class=\"announcement-type\">" + announcement.announcement_type.title + "</span>";
                                //     nextPage += "<p class=\"announcement-price\">";
                                //     nextPage += "<span class=\"property-price\">" + announcement.price + " " + code + "</span>";
                                //     nextPage += "</p>";
                                //     nextPage += announcement.advertised ? "<span class=\"advertised\"><i class=\"fas fa-star\"></i></span>" : "";
                                //     nextPage += "</div>";
                                //     nextPage += "<div class=\"property-info\">";
                                //     nextPage += "<span class=\"announcement-code\" title=\"{{ __(";
                                //     common.code;
                                //     ") }}\">" + announcement.code + "</span>";
                                //     nextPage += "<h4>" + announcement.property_type.title + " " + address + "</h4>";
                                //     nextPage += "<p class=\"address\">{{ __(";
                                //     common.address;
                                //     ") }} &#32;" + address + "</p>";
                                //     nextPage += "<p>";
                                //     nextPage += "<span class=\"rooms\">";
                                //     nextPage += "<i class=\"far fa-moon\"></i>";
                                //     nextPage += "<span class=\"mr-1\">{{ __(\"common.rooms\") }} </span>";
                                //     nextPage += "<span class=\"rooms-count\">" + announcement.rooms.split("-")[0] < announcement.rooms_ext ? (announcement.rooms.split("-")[0] + "-" + announcement.rooms_ext) : announcement.rooms_ext + "</span>";
                                //     nextPage += "</span>";
                                //     nextPage += "<span class=\"area\">";
                                //     nextPage += "<i class=\"fas fa-vector-square\"></i>";
                                //     nextPage += "<span class=\"mr-1\">{{ __(\"common.area\") }} </span>";
                                //     nextPage += "<span class=\"area-count\">" + Number((+announcement.area).toFixed(2)) + " {{ __(\"common.area_point\") }}</span>";
                                //     nextPage += "</span>";
                                //     nextPage += "</p>";
                                //     nextPage += "</div>";
                                //     nextPage += "</a>";
                                //     nextPage += "</div>";
                                // });
                                // $(".searched-announcements").html(nextPage);
                            },
                            error: function(error) {
                                console.log(error);
                            }
                        });

                        // Forbit draw polygone
                        first_time = false;
                    }
                });


            }).catch(console.error);
        }

        ymaps.modules.define("ext.paintOnMap", ["meta", "util.extend", "pane.EventsPane", "Event"], function(provide, meta, extend, EventsPane, Event) {
            "use strict";


            var EVENTS_PANE_ZINDEX = 500;

            var DEFAULT_UNWANTED_BEHAVIORS = ["drag", "scrollZoom"];
            var DEFAULT_STYLE = { strokeColor: "#0000ff", strokeWidth: 1, strokeOpacity: 1 };
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

                // Создаём canvas-элемент.
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

                // Создаём косвенное обращение, чтобы не сдерживать сборщик мусора.
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
                        // Преобразовываем координаты canvas-элемента в геодезические координаты.
                        return coordinates.map(function(x) {
                            var lon = bounds[0][1] + (x[0] / canvas.width) * lonDiff;
                            var lat = bounds[0][0] + (1 - x[1] / canvas.height) * latDiff;
                            return meta.coordinatesOrder === "latlong" ? [lat, lon] : [lon, lat];
                        });
                    }
                };

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
