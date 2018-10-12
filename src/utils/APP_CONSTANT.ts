const APP_CONSTANT = {
    // arcgis js root
    ESRI_LIBRARY_ROOT: process.env.REACT_APP_ESRI_LIBRARY_ROOT || "",
    BASE_MAP:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer',
    MAP_ROAD:'https://tiles.arcgis.com/tiles/NcS3EFVskpDSiwGK/arcgis/rest/services/syht2/SceneServer/0'
    // MAP_ROAD:'https://tiles.arcgis.com/tiles/NcS3EFVskpDSiwGK/arcgis/rest/services/road_FeatureClass/SceneServer/0'
};
export default APP_CONSTANT;