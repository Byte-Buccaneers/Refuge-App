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
        alert("error logging now in alerts");
        window.onerror = function(msg, url, linenumber) {
            alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
        return true;
        }
    },
    // Phonegap is now ready...
    onDeviceReady: function() {
        // Start adding your code here...
        $(document).ready(function(){
            alert("Document ready");

            var defaultGroupContent = "<div> Your group has no members. </div>";
            $('#groupContent').html(defaultGroupContent);
                $.ajax({
                    url: "https://khe2015.herokuapp.com/users/newuser"
                }).complete(function(data){
                    alert("ajax fired!")
                    $('#groupContent').html("<div>hell yeah</div>");
                });
            })

            // localStorage.setItem("phoneNumber","5556667777")
            //below line clears localstored phonenumber, use for debugging
            localStorage.removeItem("phoneNumber");
            // alert(localStorage.getItem("phoneNumber"));
            if(localStorage.getItem("phoneNumber") === null){
                $('#initialize').click();
            }

            $("#initSubmit").click(function(){
                phonenumber = $("#phonenumber").value;
                name = $("#name").value;
                reqObj = {"phonenumber":phonenumber , "name":name};
                $.ajax({
                    url:"www.google.com"
                    //url: "https://khe2015.herokuapp.com/users/newuser",
                    //method: "PUT",
                    //data: reqObj
                }).complete(function(data){
                    alert("ajax fired!")
                    $("#mainViewTrans").click();
                });

            })


    }
};
