var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_TravauxZacVHugoconstruction_0 = new ol.format.GeoJSON();
var features_TravauxZacVHugoconstruction_0 = format_TravauxZacVHugoconstruction_0.readFeatures(json_TravauxZacVHugoconstruction_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TravauxZacVHugoconstruction_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TravauxZacVHugoconstruction_0.addFeatures(features_TravauxZacVHugoconstruction_0);var lyr_TravauxZacVHugoconstruction_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TravauxZacVHugoconstruction_0, 
                style: style_TravauxZacVHugoconstruction_0,
    title: 'Travaux Zac V.Hugo construction<br />\
    <img src="styles/legend/TravauxZacVHugoconstruction_0_0.png" /> Collège<br />\
    <img src="styles/legend/TravauxZacVHugoconstruction_0_1.png" /> Démolition<br />\
    <img src="styles/legend/TravauxZacVHugoconstruction_0_2.png" /> Gare RATP<br />\
    <img src="styles/legend/TravauxZacVHugoconstruction_0_3.png" /> Gare SGP<br />\
    <img src="styles/legend/TravauxZacVHugoconstruction_0_4.png" /> Lot privé ZAC<br />\
    <img src="styles/legend/TravauxZacVHugoconstruction_0_5.png" /> MG Partner<br />\
    <img src="styles/legend/TravauxZacVHugoconstruction_0_6.png" /> Nautile Network<br />\
    <img src="styles/legend/TravauxZacVHugoconstruction_0_7.png" /> Nautile Odyssée<br />\
    <img src="styles/legend/TravauxZacVHugoconstruction_0_8.png" /> Usine Courbet<br />'
        });var format_TravauxZacVHugoespacespublics_1 = new ol.format.GeoJSON();
var features_TravauxZacVHugoespacespublics_1 = format_TravauxZacVHugoespacespublics_1.readFeatures(json_TravauxZacVHugoespacespublics_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TravauxZacVHugoespacespublics_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TravauxZacVHugoespacespublics_1.addFeatures(features_TravauxZacVHugoespacespublics_1);var lyr_TravauxZacVHugoespacespublics_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TravauxZacVHugoespacespublics_1, 
                style: style_TravauxZacVHugoespacespublics_1,
                title: '<img src="styles/legend/TravauxZacVHugoespacespublics_1.png" /> Travaux Zac V.Hugo espaces publics'
            });var format_TravauxEP_2 = new ol.format.GeoJSON();
var features_TravauxEP_2 = format_TravauxEP_2.readFeatures(json_TravauxEP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TravauxEP_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TravauxEP_2.addFeatures(features_TravauxEP_2);var lyr_TravauxEP_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TravauxEP_2, maxResolution:2.24035729218,

                style: style_TravauxEP_2,
    title: 'Travaux EP<br />\
    <img src="styles/legend/TravauxEP_2_0.png" /> Démarrage imminent<br />\
    <img src="styles/legend/TravauxEP_2_1.png" /> En cours<br />'
        });var format_Travauxdeconstruction_3 = new ol.format.GeoJSON();
var features_Travauxdeconstruction_3 = format_Travauxdeconstruction_3.readFeatures(json_Travauxdeconstruction_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Travauxdeconstruction_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Travauxdeconstruction_3.addFeatures(features_Travauxdeconstruction_3);var lyr_Travauxdeconstruction_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Travauxdeconstruction_3, maxResolution:2.24035729218,

                style: style_Travauxdeconstruction_3,
    title: 'Travaux de construction<br />\
    <img src="styles/legend/Travauxdeconstruction_3_0.png" /> Bâtiment livré<br />\
    <img src="styles/legend/Travauxdeconstruction_3_1.png" /> Démarrage imminent<br />\
    <img src="styles/legend/Travauxdeconstruction_3_2.png" /> En cours<br />\
    <img src="styles/legend/Travauxdeconstruction_3_3.png" /> Travaux de gare en cours<br />'
        });var format_Travauxdmolition_4 = new ol.format.GeoJSON();
var features_Travauxdmolition_4 = format_Travauxdmolition_4.readFeatures(json_Travauxdmolition_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Travauxdmolition_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Travauxdmolition_4.addFeatures(features_Travauxdmolition_4);var lyr_Travauxdmolition_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Travauxdmolition_4, maxResolution:2.24035729218,

                style: style_Travauxdmolition_4,
    title: 'Travaux démolition<br />\
    <img src="styles/legend/Travauxdmolition_4_0.png" /> Démarrage imminent<br />\
    <img src="styles/legend/Travauxdmolition_4_1.png" /> En cours<br />'
        });var format_Conflits_5 = new ol.format.GeoJSON();
var features_Conflits_5 = format_Conflits_5.readFeatures(json_Conflits_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conflits_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Conflits_5.addFeatures(features_Conflits_5);var lyr_Conflits_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Conflits_5, maxResolution:1.68026796914,

                style: style_Conflits_5,
                title: '<img src="styles/legend/Conflits_5.png" /> Conflits'
            });var format_OPCZACVHugoMAJle11012021_6 = new ol.format.GeoJSON();
var features_OPCZACVHugoMAJle11012021_6 = format_OPCZACVHugoMAJle11012021_6.readFeatures(json_OPCZACVHugoMAJle11012021_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OPCZACVHugoMAJle11012021_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_OPCZACVHugoMAJle11012021_6.addFeatures(features_OPCZACVHugoMAJle11012021_6);var lyr_OPCZACVHugoMAJle11012021_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OPCZACVHugoMAJle11012021_6, 
                style: style_OPCZACVHugoMAJle11012021_6,
                title: '<img src="styles/legend/OPCZACVHugoMAJle11012021_6.png" /> OPC ZAC V. Hugo  (MAJ le 11/01/2021)'
            });

lyr_TravauxZacVHugoconstruction_0.setVisible(true);lyr_TravauxZacVHugoespacespublics_1.setVisible(true);lyr_TravauxEP_2.setVisible(true);lyr_Travauxdeconstruction_3.setVisible(true);lyr_Travauxdmolition_4.setVisible(true);lyr_Conflits_5.setVisible(true);lyr_OPCZACVHugoMAJle11012021_6.setVisible(false);
var layersList = [baseLayer,lyr_TravauxZacVHugoconstruction_0,lyr_TravauxZacVHugoespacespublics_1,lyr_TravauxEP_2,lyr_Travauxdeconstruction_3,lyr_Travauxdmolition_4,lyr_Conflits_5,lyr_OPCZACVHugoMAJle11012021_6];
lyr_TravauxZacVHugoconstruction_0.set('fieldAliases', {'Layer': 'Layer', 'Phase': 'Phase', 'Nom': 'Nom', 'Début trvx': 'Début des travaux', 'Fin trvx': 'Fin des travaux', 'Start': 'Start', 'End': 'End', 'Text': 'Text', });
lyr_TravauxZacVHugoespacespublics_1.set('fieldAliases', {'Layer': 'Layer', 'Phase': 'Phase', 'Nom': 'Nom', 'Début trvx': 'Début trvx', 'Fin trvx': 'Fin trvx', 'Start': 'Start', 'End': 'End', 'Text': 'Text', });
lyr_TravauxEP_2.set('fieldAliases', {'Statut': 'Statut', 'Nature': 'Nature', 'Start': 'Start', 'End': 'End', });
lyr_Travauxdeconstruction_3.set('fieldAliases', {'Statut': 'Statut', 'Nature': 'Nature', 'Start': 'Start', 'End': 'End', });
lyr_Travauxdmolition_4.set('fieldAliases', {'Statut': 'Statut', 'Nature': 'Nature', 'Start': 'Start', 'End': 'End', });
lyr_Conflits_5.set('fieldAliases', {'Descriptio': 'Descriptio', 'Action': 'Action', });
lyr_OPCZACVHugoMAJle11012021_6.set('fieldAliases', {'Id': 'Id', });
lyr_TravauxZacVHugoconstruction_0.set('fieldImages', {'Layer': 'TextEdit', 'Phase': 'TextEdit', 'Nom': 'TextEdit', 'Début trvx': 'TextEdit', 'Fin trvx': 'TextEdit', 'Start': 'Hidden', 'End': 'Hidden', 'Text': 'TextEdit', });
lyr_TravauxZacVHugoespacespublics_1.set('fieldImages', {'Layer': 'TextEdit', 'Phase': 'TextEdit', 'Nom': 'TextEdit', 'Début trvx': 'TextEdit', 'Fin trvx': 'TextEdit', 'Start': 'Hidden', 'End': 'Hidden', 'Text': 'Hidden', });
lyr_TravauxEP_2.set('fieldImages', {'Statut': 'ValueMap', 'Nature': 'TextEdit', 'Start': 'TextEdit', 'End': 'TextEdit', });
lyr_Travauxdeconstruction_3.set('fieldImages', {'Statut': 'ValueMap', 'Nature': 'TextEdit', 'Start': 'TextEdit', 'End': 'TextEdit', });
lyr_Travauxdmolition_4.set('fieldImages', {'Statut': 'ValueMap', 'Nature': 'TextEdit', 'Start': 'TextEdit', 'End': 'TextEdit', });
lyr_Conflits_5.set('fieldImages', {'Descriptio': 'TextEdit', 'Action': 'TextEdit', });
lyr_OPCZACVHugoMAJle11012021_6.set('fieldImages', {'Id': 'TextEdit', });
lyr_TravauxZacVHugoconstruction_0.set('fieldLabels', {'Layer': 'no label', 'Phase': 'no label', 'Nom': 'inline label', 'Début trvx': 'header label', 'Fin trvx': 'header label', 'Text': 'no label', });
lyr_TravauxZacVHugoespacespublics_1.set('fieldLabels', {'Layer': 'no label', 'Phase': 'no label', 'Nom': 'no label', 'Début trvx': 'header label', 'Fin trvx': 'header label', });
lyr_TravauxEP_2.set('fieldLabels', {'Statut': 'no label', 'Nature': 'header label', 'Start': 'header label', 'End': 'header label', });
lyr_Travauxdeconstruction_3.set('fieldLabels', {'Statut': 'no label', 'Nature': 'header label', 'Start': 'header label', 'End': 'header label', });
lyr_Travauxdmolition_4.set('fieldLabels', {'Statut': 'no label', 'Nature': 'header label', 'Start': 'header label', 'End': 'header label', });
lyr_Conflits_5.set('fieldLabels', {'Descriptio': 'header label', 'Action': 'header label', });
lyr_OPCZACVHugoMAJle11012021_6.set('fieldLabels', {'Id': 'no label', });
lyr_OPCZACVHugoMAJle11012021_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});