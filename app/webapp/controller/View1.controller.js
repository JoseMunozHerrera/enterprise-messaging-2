// eslint-disable-next-line no-undef
sap.ui.define(["inicial/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("inicial.controller.View1", {


		onInit: function () {
            this.getRouter().getRoute("RouteView1").attachPatternMatched(this._onObjectMatched, this);
        },
        /**
		 * Binds the view to the object path.
		 * @function
		 * @param {sap.ui.base.Event} oEvent pattern match event in route 'object'
		 * @private
		 */
		_onObjectMatched: function() {
			
			
			// this.getRouter().navTo("mappingmonitor/details", {
			// 	from: "Init",
			// 	entity: "mappingmonitor",
			// 	tab: null
			// });		
			
			
			this.getRouter().navTo("Gannt", {
				from: "Init",
				entity: "Gannt",
				tab: null
			});		
			
        },

        toGannt: function(){

			this.getRouter().navTo("Gannt", {
				from: "Init",
				entity: "Gannt",
				tab: null
            });		
            
        }
        
	});
});