sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("northwind.controller.Products", {

        onInit() {
            console.log("on init is called")
        },
         
        // onBeforeRendering : function()
        // {
        //     console.log("on before is called")
        // },

        // onAfterRendering: function()
        // {
        //     console.log("on after is called")
        // },
        //  onExit : function()
        //  {
        //     console.log("on exit is called")
        //  }

        onSearchByName : function(oEvent)
        {
            console.log(oEvent);
            // fetch the query which user has provided in the filter
            const sQuery = oEvent.getParameter("query");

            // fetch the table
            const oTable = this.byId("idProductsTable");

            //fetch the binding from the table
            const oBinding = oTable.getBinding("items");

            //create a filter
            const oFilter = new Filter("Name", FilterOperator.Contains, sQuery);

            // apply the filter to the binding
            oBinding.filter([oFilter]);
        },


        onSearchByRating : function(oEvent)
        {
            const sQuery = oEvent.getParameter("query");
            const oTable = this.byId("idProductsTable");
            const oBinding = oTable.getBinding("items");
            const oFilter = new Filter("Rating", FilterOperator.EQ , sQuery);
            if(sQuery)
            oBinding.filter([oFilter]);
          else
            oBinding.filter([]);
        },

        // handleChange : function(oEvent)
        // {
        //     console.log(oEvent);
        //     //fetching the from date
        //     const startDate = oEvent.getSource().getDateValue() ;
        //     // fetch the to date
        //     const endDate = oEvent.getSource().getSecondDateValue();
        //     const oBinding = this.byId("idProductsTable").getBinding("items");

        //     if(startDate && endDate)
        //     {
        //         const oFilter = new Filter("ReleaseDate", FilterOperator.BT, startDate, endDate);
        //         oBinding.filter([oFilter]);
        //     }

        // },

        onFilter : function()
        {
            //fetching the input from the name searchfield
            const name = this.byId("name").getValue();

            //fetching the input from the rating searchfield
            const rating = this.byId("rating").getValue();
            const date = this.byId("DRS");
            const startDate = date.getDateValue();
            const endDate = date.getSecondDateValue();

            //fetching the binding
             const oBinding = this.byId("idProductsTable").getBinding("items");

             const aFilters = [];

             if(name)
             {
                const nameFilter = new Filter("Name", FilterOperator.Contains, name);
                aFilters.push(nameFilter);
             }

             if(rating)
             {
                const ratingFilter = new Filter("Rating", FilterOperator.EQ , rating);
                aFilters.push(ratingFilter);
             }

             if(startDate && endDate)
             {
                const dateFilter = new Filter("ReleaseDate", FilterOperator.BT, startDate, endDate);
                aFilters.push(dateFilter);
             }

             oBinding.filter(aFilters);



        },

        clearFilters : function()
        {
            this.byId("name").setValue("");
            this.byId("rating").setValue("");
            this.byId("DRS").setValue("");
            const oBinding = this.byId("idProductsTable").getBinding("items");
            oBinding.filter([]);
        },

        onRowPress : function(oEvent)
        {
            console.log(oEvent);
            const oItem = oEvent.getParameter("listItem");
            const oContext = oItem.getBindingContext();

            //fetch a particular property
            const productId = oContext.getProperty("ID");

            //fetch a complete row
            const oRowObject = oContext.getObject();
            console.log(oRowObject);
        },

        // onRowSelectionChange : function()
        // {
        //     console.log("on row selection triggered");
        // }
    });
});