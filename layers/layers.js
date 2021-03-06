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
    <img src="styles/legend/TravauxZacVHugoconstruction_0_0.png" /> Bureaux<br />\
    <img src="styles/legend/TravauxZacVHugoconstruction_0_1.png" /> Logements<br />\
    <img src="styles/legend/TravauxZacVHugoconstruction_0_2.png" /> Mixte<br />'
        });var format_TravauxEP_1 = new ol.format.GeoJSON();
var features_TravauxEP_1 = format_TravauxEP_1.readFeatures(json_TravauxEP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TravauxEP_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TravauxEP_1.addFeatures(features_TravauxEP_1);var lyr_TravauxEP_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TravauxEP_1, maxResolution:2.24035729218,

                style: style_TravauxEP_1,
    title: 'Travaux EP<br />\
    <img src="styles/legend/TravauxEP_1_0.png" /> Démarrage imminent<br />\
    <img src="styles/legend/TravauxEP_1_1.png" /> En cours<br />'
        });var format_Travauxdmolition_2 = new ol.format.GeoJSON();
var features_Travauxdmolition_2 = format_Travauxdmolition_2.readFeatures(json_Travauxdmolition_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Travauxdmolition_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Travauxdmolition_2.addFeatures(features_Travauxdmolition_2);var lyr_Travauxdmolition_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Travauxdmolition_2, 
                style: style_Travauxdmolition_2,
                title: '<img src="styles/legend/Travauxdmolition_2.png" /> Travaux démolition'
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
    <img src="styles/legend/Travauxdeconstruction_3_0.png" /> Démarrage imminent<br />\
    <img src="styles/legend/Travauxdeconstruction_3_1.png" /> En cours<br />\
    <img src="styles/legend/Travauxdeconstruction_3_2.png" /> Travaux de gare en cours<br />'
        });var format_Conflits_4 = new ol.format.GeoJSON();
var features_Conflits_4 = format_Conflits_4.readFeatures(json_Conflits_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conflits_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Conflits_4.addFeatures(features_Conflits_4);var lyr_Conflits_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Conflits_4, maxResolution:1.68026796914,

                style: style_Conflits_4,
                title: '<img src="styles/legend/Conflits_4.png" /> Conflits'
            });var format_Equipements_5 = new ol.format.GeoJSON();
var features_Equipements_5 = format_Equipements_5.readFeatures(json_Equipements_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equipements_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Equipements_5.addFeatures(features_Equipements_5);var lyr_Equipements_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Equipements_5, 
                style: style_Equipements_5,
                title: '<img src="styles/legend/Equipements_5.png" /> Equipements'
            });var format_Info_6 = new ol.format.GeoJSON();
var features_Info_6 = format_Info_6.readFeatures(json_Info_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Info_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Info_6.addFeatures(features_Info_6);var lyr_Info_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Info_6, maxResolution:1.68026796914,

                style: style_Info_6,
                title: '<img src="styles/legend/Info_6.png" /> Info'
            });var format_OPCZACVHugoversiondetravailMAJ05032021_7 = new ol.format.GeoJSON();
var features_OPCZACVHugoversiondetravailMAJ05032021_7 = format_OPCZACVHugoversiondetravailMAJ05032021_7.readFeatures(json_OPCZACVHugoversiondetravailMAJ05032021_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OPCZACVHugoversiondetravailMAJ05032021_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_OPCZACVHugoversiondetravailMAJ05032021_7.addFeatures(features_OPCZACVHugoversiondetravailMAJ05032021_7);var lyr_OPCZACVHugoversiondetravailMAJ05032021_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OPCZACVHugoversiondetravailMAJ05032021_7, maxResolution:0.00280044661523,

                style: style_OPCZACVHugoversiondetravailMAJ05032021_7,
                title: '<img src="styles/legend/OPCZACVHugoversiondetravailMAJ05032021_7.png" /> OPC ZAC V. Hugo  (version de travail, MAJ 05/03/2021)'
            });

lyr_TravauxZacVHugoconstruction_0.setVisible(true);lyr_TravauxEP_1.setVisible(true);lyr_Travauxdmolition_2.setVisible(true);lyr_Travauxdeconstruction_3.setVisible(true);lyr_Conflits_4.setVisible(true);lyr_Equipements_5.setVisible(true);lyr_Info_6.setVisible(true);lyr_OPCZACVHugoversiondetravailMAJ05032021_7.setVisible(false);
var layersList = [baseLayer,lyr_TravauxZacVHugoconstruction_0,lyr_TravauxEP_1,lyr_Travauxdmolition_2,lyr_Travauxdeconstruction_3,lyr_Conflits_4,lyr_Equipements_5,lyr_Info_6,lyr_OPCZACVHugoversiondetravailMAJ05032021_7];
lyr_TravauxZacVHugoconstruction_0.set('fieldAliases', {'Layer': 'Layer', 'Nom': 'Nom', 'Début trvx': 'Début des travaux', 'Fin trvx': 'Fin des travaux', 'Start': 'Start', 'End': 'End', 'Nature': 'Nature', 'Horizon': 'Horizon', 'Programme': 'Programme', });
lyr_TravauxEP_1.set('fieldAliases', {'Statut': 'Statut', 'Nature': 'Nature', 'Start': 'Start', 'End': 'End', 'Entreprise': 'Entreprise', });
lyr_Travauxdmolition_2.set('fieldAliases', {'Statut': 'Statut', 'Nature': 'Nature', 'Start': 'Start', 'End': 'End', });
lyr_Travauxdeconstruction_3.set('fieldAliases', {'Statut': 'Statut', 'Nature': 'Nature', 'Début': 'Début', 'Fin': 'Fin', });
lyr_Conflits_4.set('fieldAliases', {'Descriptio': 'Descriptio', 'Action': 'Action', });
lyr_Equipements_5.set('fieldAliases', {'Nature': 'Nature', });
lyr_Info_6.set('fieldAliases', {'Info': 'Info', });
lyr_OPCZACVHugoversiondetravailMAJ05032021_7.set('fieldAliases', {'Id': 'Id', });
lyr_TravauxZacVHugoconstruction_0.set('fieldImages', {'Layer': 'TextEdit', 'Nom': 'TextEdit', 'Début trvx': 'Hidden', 'Fin trvx': 'Hidden', 'Start': 'Hidden', 'End': 'Hidden', 'Nature': 'TextEdit', 'Horizon': 'TextEdit', 'Programme': 'TextEdit', });
lyr_TravauxEP_1.set('fieldImages', {'Statut': 'ValueMap', 'Nature': 'TextEdit', 'Start': 'TextEdit', 'End': 'TextEdit', 'Entreprise': 'TextEdit', });
lyr_Travauxdmolition_2.set('fieldImages', {'Statut': 'TextEdit', 'Nature': 'TextEdit', 'Start': 'TextEdit', 'End': 'TextEdit', });
lyr_Travauxdeconstruction_3.set('fieldImages', {'Statut': 'ValueMap', 'Nature': 'TextEdit', 'Début': 'TextEdit', 'Fin': 'TextEdit', });
lyr_Conflits_4.set('fieldImages', {'Descriptio': 'TextEdit', 'Action': 'TextEdit', });
lyr_Equipements_5.set('fieldImages', {'Nature': 'TextEdit', });
lyr_Info_6.set('fieldImages', {'Info': 'TextEdit', });
lyr_OPCZACVHugoversiondetravailMAJ05032021_7.set('fieldImages', {'Id': 'TextEdit', });
lyr_TravauxZacVHugoconstruction_0.set('fieldLabels', {'Layer': 'no label', 'Nom': 'header label', 'Nature': 'header label', 'Horizon': 'header label', 'Programme': 'header label', });
lyr_TravauxEP_1.set('fieldLabels', {'Statut': 'no label', 'Nature': 'header label', 'Start': 'header label', 'End': 'header label', 'Entreprise': 'header label', });
lyr_Travauxdmolition_2.set('fieldLabels', {'Statut': 'header label', 'Nature': 'header label', 'Start': 'header label', 'End': 'header label', });
lyr_Travauxdeconstruction_3.set('fieldLabels', {'Statut': 'header label', 'Nature': 'header label', 'Début': 'header label', 'Fin': 'header label', });
lyr_Conflits_4.set('fieldLabels', {'Descriptio': 'header label', 'Action': 'header label', });
lyr_Equipements_5.set('fieldLabels', {'Nature': 'no label', });
lyr_Info_6.set('fieldLabels', {'Info': 'header label', });
lyr_OPCZACVHugoversiondetravailMAJ05032021_7.set('fieldLabels', {'Id': 'no label', });
lyr_OPCZACVHugoversiondetravailMAJ05032021_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});