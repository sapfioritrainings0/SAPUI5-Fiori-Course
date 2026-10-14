sap.ui.define([
    "sap/ui/core/format/DateFormat",
    "sap/ui/core/format/NumberFormat"
], (DateFormat, NumberFormat) => {
  "use strict";

  return {
    formatDate : function(oDate)
    {
        if(!oDate)
            return "";

        oDate = oDate instanceof Date ? oDate : new Date(oDate);
        const oDateFormat = DateFormat.getDateInstance({
            pattern : "dd-MM-yyyy"
        });

        return oDateFormat.format(oDate);
    },

    formatPrice : function(oPrice)
    {
        if(!oPrice)
            return "" ;

        const oNumberFormat = NumberFormat.getFloatInstance({
            minFractionDigits : 2,
            maxFractionDigits : 2
        });

        return "$" + oNumberFormat.format(oPrice);
    }
  }
});