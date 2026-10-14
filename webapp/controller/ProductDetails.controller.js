sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel"
], (Controller, Filter, FilterOperator, History,JSONModel) => {
    "use strict";

    return Controller.extend("northwind.controller.ProductDetails", {

        onInit() {
            console.log("on init is called");
            this.router =  this.getOwnerComponent().getRouter();
           this.router.getRoute("ProductDetailsView").attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched : function(oEvent)
        {
           // console.log(oEvent);
            this.productId = oEvent.getParameter("arguments").ID;
           // console.log(productId);

            const jsonModel = this.getView().getModel("shared");
            const rowData = jsonModel.getData();

            const oModel = new JSONModel();
            oModel.setProperty("/details", rowData);
            this.getView().setModel(oModel, "oModel");
        },

        onNavigate : function()
        {
            this.router.navTo("View3Page", {
                IIID : this.productId
            });
        },

        onBackPress : function()
        {
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if(sPreviousHash!==undefined)
                window.history.go(-1);
            else
            {
                this.router.navTo("RouteProducts");
            }
        }

    });
});