sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("northwind.controller.View3", {

        onInit() {
            console.log("on init is called");
            this.getOwnerComponent().getRouter().getRoute("View3Page").attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched : function(oEvent)
        {
           // console.log(oEvent);
            const productId = oEvent.getParameter("arguments").IIID;
            console.log(productId);
        }


        // define a route for a view. 
        // define the target for the same view - to create the mapping between the route and the view file. 
        // from the first view - you fetch the router - you use 'navTo()' to navigate. you provide the routename and the parameteres(if any)
        // in the second view , use attachpatternmatched to fetch the passed params and do the operations like data binding or get calls
         

    });
});