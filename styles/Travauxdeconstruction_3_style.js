var size = 0;
var placement = 'point';
function categories_Travauxdeconstruction_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Bâtiment livré':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.08,
                  anchor: [32, 32],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/building in service.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Démarrage imminent':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [980.000000, 776.000000],
                  scale: 0.065306122449,
                  anchor: [32, 32],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Building green.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'En cours':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [980.000000, 776.000000],
                  scale: 0.065306122449,
                  anchor: [32, 32],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Building red.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Travaux de gare en cours':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [560.000000, 720.000000],
                  scale: 0.0678571428571,
                  anchor: [19, 19],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Subway.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Travauxdeconstruction_3 = function(feature, resolution){
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
    
var style = categories_Travauxdeconstruction_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
