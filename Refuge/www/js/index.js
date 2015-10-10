

$(document).ready(function(){
    //pass the id of a view as a string, in format "#yourview"

    resizeMap();
    alert("fired ready")
    if(localStorage.phoneNumber === undefined)
        switchView("#initialize").delay(1500);
    else switchView("#map").delay(1500);

    resizeMap: function() {
         $("#map-canvas").height(Math.max(100,$(window).height()-90));// TODO set
    }

    var map = L.map('map-canvas').setView([45.423, -75.679], 13);

    //this works, but is online:
    /*
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18
    }).addTo(map);
    */

    //TODO build something to fall back to web if not found.
    L.tileLayer('img/mapTiles/{z}/{x}/{y}.png', {
        maxZoom: 17
    }).addTo(map);


    L.marker([45.423, -75.679]).addTo(map)
        .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);
});



function switchView(viewID){
    alert("fired switch")
    $(".view active").fadeOut(300, function(){
        $(viewID).css("display","block")
    });
}
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
