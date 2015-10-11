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
var app = {
    SOME_CONSTANTS : false,  // some constant


    // Application Constructor
    initialize: function() {
        console.log("console log init");
        this.bindEvents();
        this.initFastClick();
        this.errorLogger();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    initFastClick : function() {
        window.addEventListener('load', function() {
            FastClick.attach(document.body);
        }, false);
    },
    errorLogger : function(){
        //alert("error logging now in //alerts");
        window.onerror = function(msg, url, linenumber) {
            //alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
        return true;
        }
    },
    // Phonegap is now ready...
    onDeviceReady: function() {
        // Start adding your code here...
        $(document).ready(function(){
            //alert("Document ready");

            var grabLoc = navigator.geolocation.getCurrentPosition(function(data, err){
                //alert(data);
                return data;
            });
            var defaultGroupContent  = "<div class='messageContainer'>"
                defaultGroupContent += " <p>NO CURRENT GROUP</p> "
                defaultGroupContent += " <p>Pick a destination or add a friend to start.</p></div>";
            $('#groupContent').prepend(defaultGroupContent);
                $.ajax({
                    url: "https://khe2015.herokuapp.com/"
                }).success(function(data){
                    //alert("ajax fired!")

                }).error(function(err){
                    //alert("ajax failure.")
                    //alert(err);
                });
            })

            // localStorage.setItem("phoneNumber","5556667777")
            //below line clears localstored phonenumber, use for debugging
            //localStorage.removeItem("phoneNumber");
            // //alert(localStorage.getItem("phoneNumber"));
            if(localStorage.getItem("phoneNumber") === null){
                $('#initialize').click();
            } else {
                $("#mainViewTrans").click();
            }

            $("#initSubmit").click(function(){
                phonenumber = $("#phonenumber").val();
                name = $("#name").val();
                url = "https://khe2015.herokuapp.com/createuser/" + phonenumber + '/' + name;
                //alert(url);
                if (name === undefined || phonenumber === undefined){
                } else{
                $.ajax({
                    url:url
                    //url: "https://khe2015.herokuapp.com/users/newuser",
                    //method: "PUT",
                    //data: reqObj
                }).success(function(data){
                    //alert(data);
                    localStorage.setItem("phoneNumber",phonenumber);
                    $("#mainViewTrans").click();
                }).fail(function(err){
                    alert("ajax failure.")
                    alert(err);
                });
                }
            })



            //alert("All functions loaded.")

            $(".addCircle").click(function(){
                var phone = $("#addFriend").val();
                var newElement  = "<div class='spanningContainer'>"
                    newElement += phone;
                    newElement += "</div>"
                $('.messageContainer').css("display","none");

                $('#groupContent').prepend(newElement);
            });


    }
};
