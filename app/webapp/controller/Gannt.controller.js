// eslint-disable-next-line no-undef
sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/core/ws/WebSocket",
    "sap/m/MessageToast"
], function (Controller,WebSocket,MessageToast) {
	"use strict";

	return Controller.extend("inicial.controller.Gannt", {
		onInit: function () {
           

		},

		onPress: function(){

            $.ajax({url: "/NodeWS", success: function(){
                console.log("test");
            }});
            
            /*var connection = new WebSocket("/NodeWS");

            // server messages
            connection.attachMessage(function (oControlEvent) {
                var msg = JSON.parse(oControlEvent.getParameter("data"));
                console.log(JSON.stringify(msg));
                MessageToast.show(msg.message || msg.errorMessage);
            });        */    
			console.log("test2");
		}
	});
});