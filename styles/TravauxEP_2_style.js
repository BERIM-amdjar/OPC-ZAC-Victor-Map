var size = 0;
var placement = 'point';
function categories_TravauxEP_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Démarrage imminent':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [834.000000, 597.000000],
                  scale: 0.0455635491607,
                  anchor: [19, 19],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Public works green.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'En cours':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [834.000000, 597.000000],
                  scale: 0.0455635491607,
                  anchor: [19, 19],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Public works red.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_TravauxEP_2 = function(feature, resolution){
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
    
var style = categories_TravauxEP_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
