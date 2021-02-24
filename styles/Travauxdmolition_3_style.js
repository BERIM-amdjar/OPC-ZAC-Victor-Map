var size = 0;
var placement = 'point';
function categories_Travauxdmolition_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case '
En cours':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [200.000000, 200.000000],
                  scale: 0.13,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Building demolition red.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Démarrage imminent':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [200.000000, 200.000000],
                  scale: 0.13,
                  anchor: [13, 13],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Building demolition green.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Travauxdmolition_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Statut");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Travauxdmolition_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
