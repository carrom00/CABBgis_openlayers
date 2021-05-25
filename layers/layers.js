var wms_layers = [];

var format_PTSZONASHMEDAS_0 = new ol.format.GeoJSON();
var features_PTSZONASHMEDAS_0 = format_PTSZONASHMEDAS_0.readFeatures(json_PTSZONASHMEDAS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTSZONASHMEDAS_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTSZONASHMEDAS_0.addFeatures(features_PTSZONASHMEDAS_0);
var lyr_PTSZONASHMEDAS_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PTSZONASHMEDAS_0, 
                style: style_PTSZONASHMEDAS_0,
                interactive: true,
    title: 'PTS ZONAS HÚMEDAS<br />\
    <img src="styles/legend/PTSZONASHMEDAS_0_0.png" /> Agua<br />\
    <img src="styles/legend/PTSZONASHMEDAS_0_1.png" /> Área de especial protección<br />\
    <img src="styles/legend/PTSZONASHMEDAS_0_2.png" /> Área degradada a recuperar<br />\
    <img src="styles/legend/PTSZONASHMEDAS_0_3.png" /> Forestal protector<br />\
    <img src="styles/legend/PTSZONASHMEDAS_0_4.png" /> Zona de mejora de ecosistema<br />\
    <img src="styles/legend/PTSZONASHMEDAS_0_5.png" /> Zona de protección de aguas superficiales<br />'
        });
var format_PTSLITORAL_1 = new ol.format.GeoJSON();
var features_PTSLITORAL_1 = format_PTSLITORAL_1.readFeatures(json_PTSLITORAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTSLITORAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTSLITORAL_1.addFeatures(features_PTSLITORAL_1);
var lyr_PTSLITORAL_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PTSLITORAL_1, 
                style: style_PTSLITORAL_1,
                interactive: true,
    title: 'PTS LITORAL<br />\
    <img src="styles/legend/PTSLITORAL_1_0.png" /> Áreas de mejora de ecosistemas<br />\
    <img src="styles/legend/PTSLITORAL_1_1.png" /> Áreas degradadas a recuperar<br />\
    <img src="styles/legend/PTSLITORAL_1_2.png" /> Espacios Naturales Protegidos<br />\
    <img src="styles/legend/PTSLITORAL_1_3.png" /> Especial protección compatible<br />\
    <img src="styles/legend/PTSLITORAL_1_4.png" /> Especial protección estricta<br />\
    <img src="styles/legend/PTSLITORAL_1_5.png" /> Humedales<br />\
    <img src="styles/legend/PTSLITORAL_1_6.png" /> Playas Urbanas<br />\
    <img src="styles/legend/PTSLITORAL_1_7.png" /> Puertos<br />\
    <img src="styles/legend/PTSLITORAL_1_8.png" /> Rías<br />'
        });
var format_PTSROSYARROYOS_2 = new ol.format.GeoJSON();
var features_PTSROSYARROYOS_2 = format_PTSROSYARROYOS_2.readFeatures(json_PTSROSYARROYOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTSROSYARROYOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTSROSYARROYOS_2.addFeatures(features_PTSROSYARROYOS_2);
var lyr_PTSROSYARROYOS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PTSROSYARROYOS_2, 
                style: style_PTSROSYARROYOS_2,
                interactive: true,
    title: 'PTS RÍOS Y ARROYOS<br />\
    <img src="styles/legend/PTSROSYARROYOS_2_0.png" /> Márgenes con necesidad de recuperación<br />\
    <img src="styles/legend/PTSROSYARROYOS_2_1.png" /> Zonas de interés naturalístico preferente<br />\
    <img src="styles/legend/PTSROSYARROYOS_2_2.png" /> Zonas con vegetación bien conservada<br />'
        });
var format_PTSAGROFORESTAL_3 = new ol.format.GeoJSON();
var features_PTSAGROFORESTAL_3 = format_PTSAGROFORESTAL_3.readFeatures(json_PTSAGROFORESTAL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTSAGROFORESTAL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTSAGROFORESTAL_3.addFeatures(features_PTSAGROFORESTAL_3);
var lyr_PTSAGROFORESTAL_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PTSAGROFORESTAL_3, 
                style: style_PTSAGROFORESTAL_3,
                interactive: true,
    title: 'PTS AGROFORESTAL<br />\
    <img src="styles/legend/PTSAGROFORESTAL_3_0.png" /> Agroganadero: Alto valor estrategico<br />\
    <img src="styles/legend/PTSAGROFORESTAL_3_1.png" /> Mejora Ambiental<br />'
        });
var format_MONTESDEUTILIDADPBLICA_4 = new ol.format.GeoJSON();
var features_MONTESDEUTILIDADPBLICA_4 = format_MONTESDEUTILIDADPBLICA_4.readFeatures(json_MONTESDEUTILIDADPBLICA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MONTESDEUTILIDADPBLICA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MONTESDEUTILIDADPBLICA_4.addFeatures(features_MONTESDEUTILIDADPBLICA_4);
var lyr_MONTESDEUTILIDADPBLICA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MONTESDEUTILIDADPBLICA_4, 
                style: style_MONTESDEUTILIDADPBLICA_4,
                interactive: true,
                title: '<img src="styles/legend/MONTESDEUTILIDADPBLICA_4.png" /> MONTES DE UTILIDAD PÚBLICA'
            });
var format_INVENTARIODESUELOSPOTENCIALMENTECONTAMINADOS_5 = new ol.format.GeoJSON();
var features_INVENTARIODESUELOSPOTENCIALMENTECONTAMINADOS_5 = format_INVENTARIODESUELOSPOTENCIALMENTECONTAMINADOS_5.readFeatures(json_INVENTARIODESUELOSPOTENCIALMENTECONTAMINADOS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INVENTARIODESUELOSPOTENCIALMENTECONTAMINADOS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INVENTARIODESUELOSPOTENCIALMENTECONTAMINADOS_5.addFeatures(features_INVENTARIODESUELOSPOTENCIALMENTECONTAMINADOS_5);
var lyr_INVENTARIODESUELOSPOTENCIALMENTECONTAMINADOS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INVENTARIODESUELOSPOTENCIALMENTECONTAMINADOS_5, 
                style: style_INVENTARIODESUELOSPOTENCIALMENTECONTAMINADOS_5,
                interactive: true,
                title: '<img src="styles/legend/INVENTARIODESUELOSPOTENCIALMENTECONTAMINADOS_5.png" /> INVENTARIO DE SUELOS POTENCIALMENTE CONTAMINADOS'
            });
var format_ZONASDEPROTECCINDELAAVIFAUNACONTRATTENDIDOSDEAT_6 = new ol.format.GeoJSON();
var features_ZONASDEPROTECCINDELAAVIFAUNACONTRATTENDIDOSDEAT_6 = format_ZONASDEPROTECCINDELAAVIFAUNACONTRATTENDIDOSDEAT_6.readFeatures(json_ZONASDEPROTECCINDELAAVIFAUNACONTRATTENDIDOSDEAT_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONASDEPROTECCINDELAAVIFAUNACONTRATTENDIDOSDEAT_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONASDEPROTECCINDELAAVIFAUNACONTRATTENDIDOSDEAT_6.addFeatures(features_ZONASDEPROTECCINDELAAVIFAUNACONTRATTENDIDOSDEAT_6);
var lyr_ZONASDEPROTECCINDELAAVIFAUNACONTRATTENDIDOSDEAT_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONASDEPROTECCINDELAAVIFAUNACONTRATTENDIDOSDEAT_6, 
                style: style_ZONASDEPROTECCINDELAAVIFAUNACONTRATTENDIDOSDEAT_6,
                interactive: true,
                title: '<img src="styles/legend/ZONASDEPROTECCINDELAAVIFAUNACONTRATTENDIDOSDEAT_6.png" /> ZONAS DE PROTECCIÓN DE LA AVIFAUNA CONTRAT TENDIDOS DE AT'
            });
var format_HBITATSDEINTERSPRIORITARIO_7 = new ol.format.GeoJSON();
var features_HBITATSDEINTERSPRIORITARIO_7 = format_HBITATSDEINTERSPRIORITARIO_7.readFeatures(json_HBITATSDEINTERSPRIORITARIO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HBITATSDEINTERSPRIORITARIO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HBITATSDEINTERSPRIORITARIO_7.addFeatures(features_HBITATSDEINTERSPRIORITARIO_7);
var lyr_HBITATSDEINTERSPRIORITARIO_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HBITATSDEINTERSPRIORITARIO_7, 
                style: style_HBITATSDEINTERSPRIORITARIO_7,
                interactive: true,
    title: 'HÁBITATS DE INTERÉS PRIORITARIO<br />\
    <img src="styles/legend/HBITATSDEINTERSPRIORITARIO_7_0.png" /> Acantilados con vegetación de las costas atlánticas y bálticas.<br />\
    <img src="styles/legend/HBITATSDEINTERSPRIORITARIO_7_1.png" /> Bosques aluviales de Alnus glutinosa y Fraxinus excelsior (Alno-Padion, Alnion incanae, Salicion albae).<br />\
    <img src="styles/legend/HBITATSDEINTERSPRIORITARIO_7_2.png" /> Bosques de laderas, desprendimientos o barrancos del Tilio-Acerion.<br />\
    <img src="styles/legend/HBITATSDEINTERSPRIORITARIO_7_3.png" /> Bosques de Quercus ilex y Quercus rotundifolia.<br />\
    <img src="styles/legend/HBITATSDEINTERSPRIORITARIO_7_4.png" /> Brezales húmedos atlánticos de zonas templadas de Erica ciliaris y Erica tetralix.<br />\
    <img src="styles/legend/HBITATSDEINTERSPRIORITARIO_7_5.png" /> Brezales oromediterráneos endémicos con aliaga.<br />\
    <img src="styles/legend/HBITATSDEINTERSPRIORITARIO_7_6.png" /> Brezales secos atlánticos costeros de Erica vagans.<br />\
    <img src="styles/legend/HBITATSDEINTERSPRIORITARIO_7_7.png" /> Brezales secos europeos.<br />\
    <img src="styles/legend/HBITATSDEINTERSPRIORITARIO_7_8.png" /> Desprendimientos mediterráneos occidentales y termófilos.<br />\
    <img src="styles/legend/HBITATSDEINTERSPRIORITARIO_7_9.png" /> Dunas costeras fijas con vegetación herbácea (dunas grises).<br />\
    <img src="styles/legend/HBITATSDEINTERSPRIORITARIO_7_10.png" /> Estanques temporales mediterráneos.<br />\
    <img src="styles/legend/HBITATSDEINTERSPRIORITARIO_7_11.png" /> Formaciones herbosas con Nardus, con numerosas especies, sobre sustratos silíceos de zonas montañosas.<br />\
    <img src="styles/legend/HBITATSDEINTERSPRIORITARIO_7_12.png" /> Mires de transición.<br />\
    <img src="styles/legend/HBITATSDEINTERSPRIORITARIO_7_13.png" /> Pendientes rocosas calcícolas con vegetación casmofítica.<br />\
    <img src="styles/legend/HBITATSDEINTERSPRIORITARIO_7_14.png" /> Prados alpinos y subalpinos calcáreos.<br />\
    <img src="styles/legend/HBITATSDEINTERSPRIORITARIO_7_15.png" /> Prados pobres de siega de baja altitud (Alopecurus pratensis, Sanguisorba officinalis).<br />\
    <img src="styles/legend/HBITATSDEINTERSPRIORITARIO_7_16.png" /> Prados secos seminaturales y facies de matorral sobre sustratos calcáreos (parajes con orquídeas).<br />'
        });
var format_PLANESDERECUPERACINDEFLORA_8 = new ol.format.GeoJSON();
var features_PLANESDERECUPERACINDEFLORA_8 = format_PLANESDERECUPERACINDEFLORA_8.readFeatures(json_PLANESDERECUPERACINDEFLORA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLANESDERECUPERACINDEFLORA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLANESDERECUPERACINDEFLORA_8.addFeatures(features_PLANESDERECUPERACINDEFLORA_8);
var lyr_PLANESDERECUPERACINDEFLORA_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PLANESDERECUPERACINDEFLORA_8, 
                style: style_PLANESDERECUPERACINDEFLORA_8,
                interactive: true,
    title: 'PLANES DE RECUPERACIÓN DE FLORA<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_0.png" /> Alyssum loiseleurii<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_1.png" /> Apium graveolens ssp. butronensis<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_2.png" /> Barlia robertiana<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_3.png" /> Carex rostrata<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_4.png" /> Chamaesyce peplis<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_5.png" /> Cirsium heterophyllum<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_6.png" /> Culcita macrocarpa<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_7.png" /> Daphne cneorum<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_8.png" /> Diphasiastrum alpinum<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_9.png" /> Epipactis phyllanthes<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_10.png" /> Eriophorum vaginatum<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_11.png" /> Festuca vasconcensis<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_12.png" /> Galium arenarium<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_13.png" /> Genista legionensis<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_14.png" /> Juncus trifidus<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_15.png" /> Matricaria maritima<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_16.png" /> Medicago marina<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_17.png" /> Menyanthes trifoliata<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_18.png" /> Meum athamanticum<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_19.png" /> Nigritella gabasiana<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_20.png" /> Olea europaea var. sylvestris<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_21.png" /> Prunus lusitanica<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_22.png" /> Ranunculus amplexicaulis<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_23.png" /> Solidago virgaurea ssp. macrorhiza<br />\
    <img src="styles/legend/PLANESDERECUPERACINDEFLORA_8_24.png" /> Zostera noltii<br />'
        });
var format_AIEDEOTRASESPECIESPROTEGIDAS_9 = new ol.format.GeoJSON();
var features_AIEDEOTRASESPECIESPROTEGIDAS_9 = format_AIEDEOTRASESPECIESPROTEGIDAS_9.readFeatures(json_AIEDEOTRASESPECIESPROTEGIDAS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIEDEOTRASESPECIESPROTEGIDAS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIEDEOTRASESPECIESPROTEGIDAS_9.addFeatures(features_AIEDEOTRASESPECIESPROTEGIDAS_9);
var lyr_AIEDEOTRASESPECIESPROTEGIDAS_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AIEDEOTRASESPECIESPROTEGIDAS_9, 
                style: style_AIEDEOTRASESPECIESPROTEGIDAS_9,
                interactive: true,
    title: 'AIE DE OTRAS ESPECIES PROTEGIDAS<br />\
    <img src="styles/legend/AIEDEOTRASESPECIESPROTEGIDAS_9_0.png" /> Cormorán moñudo<br />\
    <img src="styles/legend/AIEDEOTRASESPECIESPROTEGIDAS_9_1.png" /> Nutria euroasiática<br />\
    <img src="styles/legend/AIEDEOTRASESPECIESPROTEGIDAS_9_2.png" /> Paíño europeo<br />\
    <img src="styles/legend/AIEDEOTRASESPECIESPROTEGIDAS_9_3.png" /> Pez espinoso<br />'
        });
var format_AIEZPADEAVESNECRFAGAS_10 = new ol.format.GeoJSON();
var features_AIEZPADEAVESNECRFAGAS_10 = format_AIEZPADEAVESNECRFAGAS_10.readFeatures(json_AIEZPADEAVESNECRFAGAS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIEZPADEAVESNECRFAGAS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIEZPADEAVESNECRFAGAS_10.addFeatures(features_AIEZPADEAVESNECRFAGAS_10);
var lyr_AIEZPADEAVESNECRFAGAS_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AIEZPADEAVESNECRFAGAS_10, 
                style: style_AIEZPADEAVESNECRFAGAS_10,
                interactive: true,
                title: '<img src="styles/legend/AIEZPADEAVESNECRFAGAS_10.png" /> AIE/ZPA DE AVES NECRÓFAGAS'
            });
var format_REASDEINTERSESPECIALDELVISNEUROPEO_11 = new ol.format.GeoJSON();
var features_REASDEINTERSESPECIALDELVISNEUROPEO_11 = format_REASDEINTERSESPECIALDELVISNEUROPEO_11.readFeatures(json_REASDEINTERSESPECIALDELVISNEUROPEO_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REASDEINTERSESPECIALDELVISNEUROPEO_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REASDEINTERSESPECIALDELVISNEUROPEO_11.addFeatures(features_REASDEINTERSESPECIALDELVISNEUROPEO_11);
var lyr_REASDEINTERSESPECIALDELVISNEUROPEO_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REASDEINTERSESPECIALDELVISNEUROPEO_11, 
                style: style_REASDEINTERSESPECIALDELVISNEUROPEO_11,
                interactive: true,
                title: '<img src="styles/legend/REASDEINTERSESPECIALDELVISNEUROPEO_11.png" /> ÁREAS DE INTERÉS ESPECIAL DEL VISÓN EUROPEO'
            });
var format_ESPACIOSDELAREDNATURA2000_12 = new ol.format.GeoJSON();
var features_ESPACIOSDELAREDNATURA2000_12 = format_ESPACIOSDELAREDNATURA2000_12.readFeatures(json_ESPACIOSDELAREDNATURA2000_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESPACIOSDELAREDNATURA2000_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESPACIOSDELAREDNATURA2000_12.addFeatures(features_ESPACIOSDELAREDNATURA2000_12);
var lyr_ESPACIOSDELAREDNATURA2000_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESPACIOSDELAREDNATURA2000_12, 
                style: style_ESPACIOSDELAREDNATURA2000_12,
                interactive: true,
                title: '<img src="styles/legend/ESPACIOSDELAREDNATURA2000_12.png" /> ESPACIOS DE LA RED NATURA 2000'
            });
var format_ESPACIOSNATURALESPROTEGIDOS_13 = new ol.format.GeoJSON();
var features_ESPACIOSNATURALESPROTEGIDOS_13 = format_ESPACIOSNATURALESPROTEGIDOS_13.readFeatures(json_ESPACIOSNATURALESPROTEGIDOS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESPACIOSNATURALESPROTEGIDOS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESPACIOSNATURALESPROTEGIDOS_13.addFeatures(features_ESPACIOSNATURALESPROTEGIDOS_13);
var lyr_ESPACIOSNATURALESPROTEGIDOS_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESPACIOSNATURALESPROTEGIDOS_13, 
                style: style_ESPACIOSNATURALESPROTEGIDOS_13,
                interactive: true,
                title: '<img src="styles/legend/ESPACIOSNATURALESPROTEGIDOS_13.png" /> ESPACIOS NATURALES PROTEGIDOS'
            });
var format_DESLINDEDPMT_14 = new ol.format.GeoJSON();
var features_DESLINDEDPMT_14 = format_DESLINDEDPMT_14.readFeatures(json_DESLINDEDPMT_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESLINDEDPMT_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESLINDEDPMT_14.addFeatures(features_DESLINDEDPMT_14);
var lyr_DESLINDEDPMT_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DESLINDEDPMT_14, 
                style: style_DESLINDEDPMT_14,
                interactive: true,
    title: 'DESLINDE DPMT<br />\
    <img src="styles/legend/DESLINDEDPMT_14_0.png" /> DPMT aprobado<br />\
    <img src="styles/legend/DESLINDEDPMT_14_1.png" /> DPMT en tramitación<br />\
    <img src="styles/legend/DESLINDEDPMT_14_2.png" /> Ribera del mar<br />\
    <img src="styles/legend/DESLINDEDPMT_14_3.png" /> Servidumbre de protección<br />'
        });
var lyr_ROSYARROYOS_15 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.geo.euskadi.eus/WMS_URA",
    attributions: ' ',
                              params: {
                                "LAYERS": "has_rios",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "RÍOS Y ARROYOS",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ROSYARROYOS_15, 1]);

lyr_PTSZONASHMEDAS_0.setVisible(false);lyr_PTSLITORAL_1.setVisible(false);lyr_PTSROSYARROYOS_2.setVisible(false);lyr_PTSAGROFORESTAL_3.setVisible(false);lyr_MONTESDEUTILIDADPBLICA_4.setVisible(false);lyr_INVENTARIODESUELOSPOTENCIALMENTECONTAMINADOS_5.setVisible(false);lyr_ZONASDEPROTECCINDELAAVIFAUNACONTRATTENDIDOSDEAT_6.setVisible(false);lyr_HBITATSDEINTERSPRIORITARIO_7.setVisible(false);lyr_PLANESDERECUPERACINDEFLORA_8.setVisible(false);lyr_AIEDEOTRASESPECIESPROTEGIDAS_9.setVisible(false);lyr_AIEZPADEAVESNECRFAGAS_10.setVisible(false);lyr_REASDEINTERSESPECIALDELVISNEUROPEO_11.setVisible(false);lyr_ESPACIOSDELAREDNATURA2000_12.setVisible(false);lyr_ESPACIOSNATURALESPROTEGIDOS_13.setVisible(false);lyr_DESLINDEDPMT_14.setVisible(false);lyr_ROSYARROYOS_15.setVisible(false);
var layersList = [lyr_PTSZONASHMEDAS_0,lyr_PTSLITORAL_1,lyr_PTSROSYARROYOS_2,lyr_PTSAGROFORESTAL_3,lyr_MONTESDEUTILIDADPBLICA_4,lyr_INVENTARIODESUELOSPOTENCIALMENTECONTAMINADOS_5,lyr_ZONASDEPROTECCINDELAAVIFAUNACONTRATTENDIDOSDEAT_6,lyr_HBITATSDEINTERSPRIORITARIO_7,lyr_PLANESDERECUPERACINDEFLORA_8,lyr_AIEDEOTRASESPECIESPROTEGIDAS_9,lyr_AIEZPADEAVESNECRFAGAS_10,lyr_REASDEINTERSESPECIALDELVISNEUROPEO_11,lyr_ESPACIOSDELAREDNATURA2000_12,lyr_ESPACIOSNATURALESPROTEGIDOS_13,lyr_DESLINDEDPMT_14,lyr_ROSYARROYOS_15];
lyr_PTSZONASHMEDAS_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_SUB': 'COD_SUB', 'COD_ZONA': 'COD_ZONA', 'ZONA_ES': 'ZONA_ES', 'ZONA_EU': 'ZONA_EU', 'COD_ORDENA': 'COD_ORDENA', 'ORDENA_ES': 'Descripción', 'ORDENA_EU': 'ORDENA_EU', 'CODIGO': 'CODIGO', 'NOMBRE_EU': 'NOMBRE_EU', 'NOMBRE_ES': 'NOMBRE_ES', 'NOMBRESUB_': 'NOMBRESUB_', 'NOMBRESUB1': 'NOMBRESUB1', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_PTSLITORAL_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'DESCRIP': 'Descripción', 'CODGRA': 'CODGRA', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'NOMBRE': 'NOMBRE', });
lyr_PTSROSYARROYOS_2.set('fieldAliases', {'DXF_LAYER': 'DXF_LAYER', });
lyr_PTSAGROFORESTAL_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'LEY_CAS': 'Descripción', 'LEY_EUS': 'LEY_EUS', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_MONTESDEUTILIDADPBLICA_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'MONTE': 'Número de monte', 'TER_HIST': 'TER_HIST', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_INVENTARIODESUELOSPOTENCIALMENTECONTAMINADOS_5.set('fieldAliases', {'IDPARCELA': 'IDPARCELA', 'CODIGO': 'CODIGO', 'PROVINCIA': 'PROVINCIA', 'TIPO': 'TIPO', 'MUNICIPIO': 'MUNICIPIO', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_ZONASDEPROTECCINDELAAVIFAUNACONTRATTENDIDOSDEAT_6.set('fieldAliases', {'Id': 'Id', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_HBITATSDEINTERSPRIORITARIO_7.set('fieldAliases', {'CODIGO': 'Código hábitat 1', 'CODIGO2': 'Código hábitat 2', 'COBERTURA': 'COBERTURA', 'COBERTURA2': 'COBERTURA2', 'CONSERVACI': 'CONSERVACI', 'CONSERVA_1': 'CONSERVA_1', 'NOMBRE_ES': 'Nombre hábitat 1', 'NOMBRE2_ES': 'Nombre hábitat 2', });
lyr_PLANESDERECUPERACINDEFLORA_8.set('fieldAliases', {'CODIGO': 'CODIGO', 'scientific': 'Nombre científico', 'tipoArea': 'Clasificación', 'references': 'references', 'Area': 'Area', 'Perimetro': 'Perimetro', '+info': '+info', });
lyr_AIEDEOTRASESPECIESPROTEGIDAS_9.set('fieldAliases', {'CODIGO': 'CODIGO', 'TAXON': 'Nombre científico', 'SCIENTIFIC': 'SCIENTIFIC', 'KINGDOM': 'KINGDOM', 'PHYLUM': 'PHYLUM', 'CLASS': 'CLASS', 'ORDER_': 'ORDER_', 'FAMILY': 'FAMILY', 'VERNACULAR': 'Nombre común', 'THREATSTAT': 'THREATSTAT', 'LEGISLATIO': 'Legislación de aplicación', 'REFERENCES': 'REFERENCES', 'MODIFIED': 'MODIFIED', 'ZONAS': 'Clasificación', });
lyr_AIEZPADEAVESNECRFAGAS_10.set('fieldAliases', {'siteCode': 'Especie:', 'siteName': 'Zona', 'Area': 'Area', 'Perimetro': 'Perimetro', 'MotaTipo': 'Legislación', 'Clasificac': 'Clasificación', });
lyr_REASDEINTERSESPECIALDELVISNEUROPEO_11.set('fieldAliases', {'CODIGO': 'CODIGO', 'TAXON': 'Nombre científico', 'SCIENTIFIC': 'SCIENTIFIC', 'KINGDOM': 'KINGDOM', 'PHYLUM': 'PHYLUM', 'CLASS': 'CLASS', 'ORDER_': 'ORDER_', 'FAMILY': 'FAMILY', 'VERNACULAR': 'Nombre común', 'THREATSTAT': 'THREATSTAT', 'LEGISLATIO': 'Legislación de aplicación', 'REFERENCES': 'REFERENCES', 'MODIFIED': 'MODIFIED', 'ZONAS': 'Clasificación', });
lyr_ESPACIOSDELAREDNATURA2000_12.set('fieldAliases', {'siteName': 'Nombre', 'designatio': 'Red Natura 2000', 'RN2000': 'RN2000', });
lyr_ESPACIOSNATURALESPROTEGIDOS_13.set('fieldAliases', {'siteCode': 'siteCode', 'siteName': 'Nombre', 'Legislatio': 'Legislatio', 'Status': 'Status', 'IUCN': 'IUCN', 'legalFound': 'legalFound', 'modified': 'modified', 'designatio': 'Tipo de ENP', 'references': 'references', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_DESLINDEDPMT_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Layer': 'Layer', 'IDTRAMO': 'IDTRAMO', 'Provincia': 'Provincia', 'Referencia': 'Referencia', 'TM': 'TM', 'Estado': 'Estado', 'OM': 'OM', 'Sit_Admin': 'Sit_Admin', 'Tipo_Linea': 'Tipo_Linea', 'Label': 'Label', 'FIGURA': 'FIGURA', 'ID_SEGMENT': 'ID_SEGMENT', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_PTSZONASHMEDAS_0.set('fieldImages', {'OBJECTID': 'Hidden', 'COD_SUB': 'Hidden', 'COD_ZONA': 'Hidden', 'ZONA_ES': 'Hidden', 'ZONA_EU': 'Hidden', 'COD_ORDENA': 'Hidden', 'ORDENA_ES': 'TextEdit', 'ORDENA_EU': 'Hidden', 'CODIGO': 'Hidden', 'NOMBRE_EU': 'Hidden', 'NOMBRE_ES': 'Hidden', 'NOMBRESUB_': 'Hidden', 'NOMBRESUB1': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', });
lyr_PTSLITORAL_1.set('fieldImages', {'OBJECTID': 'Hidden', 'CODIGO': 'Hidden', 'DESCRIP': 'TextEdit', 'CODGRA': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'NOMBRE': 'Hidden', });
lyr_PTSROSYARROYOS_2.set('fieldImages', {'DXF_LAYER': 'Hidden', });
lyr_PTSAGROFORESTAL_3.set('fieldImages', {'OBJECTID': 'Hidden', 'AREA': 'Hidden', 'LEY_CAS': 'TextEdit', 'LEY_EUS': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', });
lyr_MONTESDEUTILIDADPBLICA_4.set('fieldImages', {'OBJECTID': 'Hidden', 'MONTE': 'TextEdit', 'TER_HIST': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', });
lyr_INVENTARIODESUELOSPOTENCIALMENTECONTAMINADOS_5.set('fieldImages', {'IDPARCELA': 'Hidden', 'CODIGO': 'Hidden', 'PROVINCIA': 'Hidden', 'TIPO': 'Hidden', 'MUNICIPIO': 'Hidden', 'Shape_STAr': 'Hidden', 'Shape_STLe': 'Hidden', });
lyr_ZONASDEPROTECCINDELAAVIFAUNACONTRATTENDIDOSDEAT_6.set('fieldImages', {'Id': 'Hidden', 'Area': 'Hidden', 'Perimetro': 'Hidden', });
lyr_HBITATSDEINTERSPRIORITARIO_7.set('fieldImages', {'CODIGO': 'TextEdit', 'CODIGO2': 'TextEdit', 'COBERTURA': 'Hidden', 'COBERTURA2': 'Hidden', 'CONSERVACI': 'Hidden', 'CONSERVA_1': 'Hidden', 'NOMBRE_ES': 'TextEdit', 'NOMBRE2_ES': 'TextEdit', });
lyr_PLANESDERECUPERACINDEFLORA_8.set('fieldImages', {'CODIGO': 'Hidden', 'scientific': 'TextEdit', 'tipoArea': 'TextEdit', 'references': 'Hidden', 'Area': 'Hidden', 'Perimetro': 'Hidden', '+info': 'Hidden', });
lyr_AIEDEOTRASESPECIESPROTEGIDAS_9.set('fieldImages', {'CODIGO': 'Hidden', 'TAXON': 'TextEdit', 'SCIENTIFIC': 'Hidden', 'KINGDOM': 'Hidden', 'PHYLUM': 'Hidden', 'CLASS': 'Hidden', 'ORDER_': 'Hidden', 'FAMILY': 'Hidden', 'VERNACULAR': 'TextEdit', 'THREATSTAT': 'Hidden', 'LEGISLATIO': 'TextEdit', 'REFERENCES': 'Hidden', 'MODIFIED': 'Hidden', 'ZONAS': 'TextEdit', });
lyr_AIEZPADEAVESNECRFAGAS_10.set('fieldImages', {'siteCode': 'TextEdit', 'siteName': 'TextEdit', 'Area': 'Hidden', 'Perimetro': 'Hidden', 'MotaTipo': 'TextEdit', 'Clasificac': 'TextEdit', });
lyr_REASDEINTERSESPECIALDELVISNEUROPEO_11.set('fieldImages', {'CODIGO': 'Hidden', 'TAXON': 'TextEdit', 'SCIENTIFIC': 'Hidden', 'KINGDOM': 'Hidden', 'PHYLUM': 'Hidden', 'CLASS': 'Hidden', 'ORDER_': 'Hidden', 'FAMILY': 'Hidden', 'VERNACULAR': 'TextEdit', 'THREATSTAT': 'Hidden', 'LEGISLATIO': 'TextEdit', 'REFERENCES': 'Hidden', 'MODIFIED': 'Hidden', 'ZONAS': 'TextEdit', });
lyr_ESPACIOSDELAREDNATURA2000_12.set('fieldImages', {'siteName': 'TextEdit', 'designatio': 'TextEdit', 'RN2000': 'Hidden', });
lyr_ESPACIOSNATURALESPROTEGIDOS_13.set('fieldImages', {'siteCode': 'Hidden', 'siteName': 'TextEdit', 'Legislatio': 'Hidden', 'Status': 'Hidden', 'IUCN': 'Hidden', 'legalFound': 'Hidden', 'modified': 'Hidden', 'designatio': 'TextEdit', 'references': 'Hidden', 'Area': 'Hidden', 'Perimetro': 'Hidden', });
lyr_DESLINDEDPMT_14.set('fieldImages', {'OBJECTID': 'Hidden', 'Layer': 'Hidden', 'IDTRAMO': 'Hidden', 'Provincia': 'Hidden', 'Referencia': 'Hidden', 'TM': 'Hidden', 'Estado': 'Hidden', 'OM': 'Hidden', 'Sit_Admin': 'Hidden', 'Tipo_Linea': 'Hidden', 'Label': 'Hidden', 'FIGURA': 'Hidden', 'ID_SEGMENT': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Le_1': 'Hidden', });
lyr_PTSZONASHMEDAS_0.set('fieldLabels', {'ORDENA_ES': 'header label', });
lyr_PTSLITORAL_1.set('fieldLabels', {'DESCRIP': 'header label', });
lyr_PTSROSYARROYOS_2.set('fieldLabels', {});
lyr_PTSAGROFORESTAL_3.set('fieldLabels', {'LEY_CAS': 'header label', });
lyr_MONTESDEUTILIDADPBLICA_4.set('fieldLabels', {'MONTE': 'header label', });
lyr_INVENTARIODESUELOSPOTENCIALMENTECONTAMINADOS_5.set('fieldLabels', {});
lyr_ZONASDEPROTECCINDELAAVIFAUNACONTRATTENDIDOSDEAT_6.set('fieldLabels', {});
lyr_HBITATSDEINTERSPRIORITARIO_7.set('fieldLabels', {'CODIGO': 'header label', 'CODIGO2': 'header label', 'NOMBRE_ES': 'header label', 'NOMBRE2_ES': 'header label', });
lyr_PLANESDERECUPERACINDEFLORA_8.set('fieldLabels', {'scientific': 'header label', 'tipoArea': 'header label', });
lyr_AIEDEOTRASESPECIESPROTEGIDAS_9.set('fieldLabels', {'TAXON': 'header label', 'VERNACULAR': 'header label', 'LEGISLATIO': 'header label', 'ZONAS': 'header label', });
lyr_AIEZPADEAVESNECRFAGAS_10.set('fieldLabels', {'siteCode': 'header label', 'siteName': 'header label', 'MotaTipo': 'header label', 'Clasificac': 'header label', });
lyr_REASDEINTERSESPECIALDELVISNEUROPEO_11.set('fieldLabels', {'TAXON': 'header label', 'VERNACULAR': 'header label', 'LEGISLATIO': 'header label', 'ZONAS': 'header label', });
lyr_ESPACIOSDELAREDNATURA2000_12.set('fieldLabels', {'siteName': 'header label', 'designatio': 'header label', });
lyr_ESPACIOSNATURALESPROTEGIDOS_13.set('fieldLabels', {'siteName': 'header label', 'designatio': 'header label', });
lyr_DESLINDEDPMT_14.set('fieldLabels', {});
lyr_DESLINDEDPMT_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});