var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Trabajo_final_SIG_1 = new ol.format.GeoJSON();
var features_Trabajo_final_SIG_1 = format_Trabajo_final_SIG_1.readFeatures(json_Trabajo_final_SIG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trabajo_final_SIG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trabajo_final_SIG_1.addFeatures(features_Trabajo_final_SIG_1);
var lyr_Trabajo_final_SIG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trabajo_final_SIG_1, 
                style: style_Trabajo_final_SIG_1,
                popuplayertitle: 'Trabajo_final_SIG',
                interactive: true,
                title: '<img src="styles/legend/Trabajo_final_SIG_1.png" /> Trabajo_final_SIG'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Trabajo_final_SIG_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Trabajo_final_SIG_1];
lyr_Trabajo_final_SIG_1.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Uso': 'Uso', });
lyr_Trabajo_final_SIG_1.set('fieldImages', {'fid': 'TextEdit', 'Area': 'TextEdit', 'Uso': 'TextEdit', });
lyr_Trabajo_final_SIG_1.set('fieldLabels', {'fid': 'no label', 'Area': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_Trabajo_final_SIG_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});