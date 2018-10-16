import {action, observable, runInAction} from 'mobx';
import 'whatwg-fetch';
import IResponse from "../l-utils/request/IResponse";

// import {IPayload} from "../utils/modelEnhance";

export interface IMenu {
    name: string;
    icon?: string;
    path: string,
    children?: IMenu[],
    parentPath?: string[],
    hideInMenu?: boolean
    target?: '_blank' | '_parent' | '_self' | '_top' | 'framename'
}


export default class Global {

    @observable public menu: IMenu[] = [];
    @observable public flatMenu: IMenu[] = [];

    @action
    public async getMenu() {
        const {status, data} = await getMenus();

        if (status) {
            const menu = data;

            const loopMenu = (menu2: IMenu[], pitem?: IMenu) => {
                menu2.forEach((item: IMenu) => {
                    if (pitem && pitem.path) {
                        item.parentPath = pitem.parentPath ? pitem.parentPath.concat(pitem.path) : [pitem.path];
                    }
                    if (item.children && item.children.length) {
                        loopMenu(item.children, item);
                    }
                });
            };
            loopMenu(menu);

            runInAction(() => {
                this.menu = menu;
                this.flatMenu = getFlatMenu(menu);
            })


        }
    }

    @action
    public getGuideMenu(){
        const {data} = getGuideMenu();

        const menu = data;

        const loopMenu = (menu2: IMenu[], pitem?: IMenu) => {
            menu2.forEach((item: IMenu) => {
                if (pitem && pitem.path) {
                    item.parentPath = pitem.parentPath ? pitem.parentPath.concat(pitem.path) : [pitem.path];
                }
                if (item.children && item.children.length) {
                    loopMenu(item.children, item);
                }
            });
        };
        loopMenu(menu);
        this.menu = menu;
        this.flatMenu = getFlatMenu(menu);
    }
};


export function getFlatMenu(menus: IMenu[]) {
    let menu: IMenu[] = [];
    menus.forEach(item => {
        if (item.children) {
            menu = menu.concat(getFlatMenu(item.children));
        }
        menu.push(item);
    });
    return menu;
}

export async function getMenus(): Promise<IResponse> {
    const menus = [
        {
            name: 'cesium',
            icon: 'stack',
            path: 'cesium',
            children: [
                {
                    name: 'barycentricCoordinates',
                    icon: 'file-text2',
                    path: "barycentricCoordinates.html"
                },

            ]
        },
        {
            name: 'cesium/core',
            icon: 'stack',
            path: 'cesium/core',
            children: [
                {
                    name: 'AssociativeArray',
                    icon: 'file-text2',
                    path: "AssociativeArray.html",
                },
                {
                    name: 'Entity',
                    icon: 'file-text2',
                    path: "Entity.html"
                },

            ]
        },
        {
            name: 'cesium/Animation',
            icon: 'stack',
            path: 'Animation',
            children: [
                {
                    name: 'Animation',
                    icon: 'file-text2',
                    path: 'Animation.html'
                },
                {
                    name: 'AnimationViewModel',
                    icon: 'file-text2',
                    path: 'AnimationViewModel.html'
                }
            ]
        },
        {
            name: 'cesium/Appearance',
            icon: 'stack',
            path: 'cesium/Appearance',
            children: [
                {
                    name: 'Appearance',
                    icon: 'file-text2',
                    path: "Appearance.html"
                },
                {
                    name: 'DebugAppearance',
                    icon: 'file-text2',
                    path: "DebugAppearance.html"
                },
                {
                    name: 'EllipsoidSurfaceAppearance',
                    icon: 'file-text2',
                    path: "EllipsoidSurfaceAppearance.html"
                },
                {
                    name: 'MaterialAppearance',
                    icon: 'file-text2',
                    path: "MaterialAppearance.html"
                },
                {
                    name: 'PerInstanceColorAppearance',
                    icon: 'file-text2',
                    path: "PerInstanceColorAppearance.html"
                },
                {
                    name: 'PolylineColorAppearance',
                    icon: 'file-text2',
                    path: "PolylineColorAppearance.html"
                },
                {
                    name: 'PolylineMaterialAppearance',
                    icon: 'file-text2',
                    path: "PolylineMaterialAppearance.html"
                }
            ]
        },
        {
            name: 'cesium/Bounding',
            icon: 'stack',
            path: 'cesium/Bounding',
            children: [
                {
                    name: 'AxisAlignedBoundingBox',
                    icon: 'file-text2',
                    path: "AxisAlignedBoundingBox.html"
                },
                {
                    name: 'BoundingRectangle',
                    icon: 'file-text2',
                    path: "BoundingRectangle.html"
                },
                {
                    name: 'BoundingSphere',
                    icon: 'file-text2',
                    path: "BoundingSphere.html"
                },
                {
                    name: 'OrientedBoundingBox',
                    icon: 'file-text2',
                    path: "OrientedBoundingBox.html"
                },

            ]
        },
        {
            name: 'cesium/Collection',
            icon: 'stack',
            children: [
                {
                    name: 'BillboardCollection',
                    icon: 'file-text2',
                    path: "BillboardCollection.html"
                },
                {
                    name: 'ClippingPlaneCollection',
                    icon: 'file-text2',
                    path: "ClippingPlaneCollection.html"
                },
                {
                    name: 'CompositeEntityCollection',
                    icon: 'file-text2',
                    path: "CompositeEntityCollection.html"
                },
                {
                    name: 'DataSourceCollection',
                    icon: 'file-text2',
                    path: "DataSourceCollection.html"
                },
                {
                    name: 'EntityCollection',
                    icon: 'file-text2',
                    path: "EntityCollection.html"
                },
                {
                    name: 'ImageryLayerCollection',
                    icon: 'file-text2',
                    path: "ImageryLayerCollection.html"
                },
                {
                    name: 'LabelCollection',
                    icon: 'file-text2',
                    path: "LabelCollection.html"
                },
                {
                    name: 'ModelAnimationCollection',
                    icon: 'file-text2',
                    path: "ModelAnimationCollection.html"
                },
                {
                    name: 'PointPrimitiveCollection',
                    icon: 'file-text2',
                    path: "PointPrimitiveCollection.html",
                },
                {
                    name: 'PolylineCollection',
                    icon: 'file-text2',
                    path: "PolylineCollection.html"
                },
                {
                    name: 'PostProcessStageCollection',
                    icon: 'file-text2',
                    path: "PostProcessStageCollection.html"
                },
                {
                    name: 'PrimitiveCollection',
                    icon: 'file-text2',
                    path: "PrimitiveCollection.html"
                },
                {
                    name: 'TimeIntervalCollection',
                    icon: 'file-text2',
                    path: "TimeIntervalCollection.html"
                },
                {
                    name: 'TimeIntervalCollectionPositionProperty',
                    icon: 'file-text2',
                    path: "TimeIntervalCollectionPositionProperty.html"
                },
                {
                    name: 'TimeIntervalCollectionProperty',
                    icon: 'file-text2',
                    path: "TimeIntervalCollectionProperty.html"
                }

            ]
        },
        {
            name: 'cesium/DataSource',
            icon: 'stack',
            children: [
                {
                    name: 'DataSource',
                    icon: 'file-text2',
                    path: "DataSource.html"
                },
                {
                    name: 'CustomDataSource',
                    icon: 'file-text2',
                    path: "CustomDataSource.html"
                },
                {
                    name: 'CzmlDataSource',
                    icon: 'file-text2',
                    path: "CzmlDataSource.html"
                },
                {
                    name: 'DataSourceClock',
                    icon: 'file-text2',
                    path: "DataSourceClock.html"
                },
                {
                    name: 'DataSourceDisplay',
                    icon: 'file-text2',
                    path: "DataSourceDisplay.html"
                },
                {
                    name: 'GeoJsonDataSource',
                    icon: 'file-text2',
                    path: "GeoJsonDataSource.html"
                },
                {
                    name: 'KmlDataSource',
                    icon: 'file-text2',
                    path: "KmlDataSource.html"
                },
                {
                    name: 'KmlDataSource',
                    icon: 'file-text2',
                    path: "KmlDataSource.html"
                },


            ]
        },

        {
            name: 'cesium/geometry',
            icon: 'stack',
            children: [
                {
                    name: 'Geometry',
                    icon: 'file-text2',
                    path: "Geometry.html"
                },
                {
                    name: 'Billboard',
                    icon: 'file-text2',
                    path: "Billboard.html"
                },
                {
                    name: 'BoxGeometry',
                    icon: 'file-text2',
                    path: "BoxGeometry.html"
                },
                {
                    name: 'BoxGeometryUpdater',
                    icon: 'file-text2',
                    path: "BoxGeometryUpdater.html"
                },
                {
                    name: 'BoxOutlineGeometry',
                    icon: 'file-text2',
                    path: "BoxOutlineGeometry.html"
                },
                {
                    name: 'CircleGeometry',
                    icon: 'file-text2',
                    path: "CircleGeometry.html"
                },
                {
                    name: 'ColorGeometryInstanceAttribute',
                    icon: 'file-text2',
                    path: "ColorGeometryInstanceAttribute.html"
                },
                {
                    name: 'CoplanarPolygonGeometry',
                    icon: 'file-text2',
                    path: "CoplanarPolygonGeometry.html"
                },
                {
                    name: 'CoplanarPolygonOutlineGeometry',
                    icon: 'file-text2',
                    path: "CoplanarPolygonOutlineGeometry.html"
                },
                {
                    name: 'CorridorGeometry',
                    icon: 'file-text2',
                    path: "CorridorGeometry.html"
                },
                {
                    name: 'CorridorGeometryUpdater',
                    icon: 'file-text2',
                    path: "CorridorGeometryUpdater.html"
                },
                {
                    name: 'CorridorOutlineGeometry',
                    icon: 'file-text2',
                    path: "CorridorOutlineGeometry.html",
                },
                {
                    name: 'CylinderGeometry',
                    icon: 'file-text2',
                    path: "CylinderGeometry.html"
                },
                {
                    name: 'CylinderGeometryUpdater',
                    icon: 'file-text2',
                    path: "CylinderGeometryUpdater.html"
                },
                {
                    name: 'CylinderOutlineGeometry',
                    icon: 'file-text2',
                    path: "CylinderOutlineGeometry.html"
                },
                {
                    name: 'DistanceDisplayConditionGeometryInstanceAttribute',
                    icon: 'file-text2',
                    path: "DistanceDisplayConditionGeometryInstanceAttribute.html"
                },
                {
                    name: 'EllipseGeometry',
                    icon: 'file-text2',
                    path: "EllipseGeometry.html"
                },
                {
                    name: 'EllipseGeometryUpdater',
                    icon: 'file-text2',
                    path: "EllipseGeometryUpdater.html"
                },
                {
                    name: 'EllipseOutlineGeometry',
                    icon: 'file-text2',
                    path: "EllipseOutlineGeometry.html"
                },
                {
                    name: 'EllipsoidGeometry',
                    icon: 'file-text2',
                    path: "EllipsoidGeometry.html"
                },
                {
                    name: 'EllipsoidGeometryUpdater',
                    icon: 'file-text2',
                    path: "EllipsoidGeometryUpdater.html"
                },
                {
                    name: 'EllipsoidOutlineGeometry',
                    icon: 'file-text2',
                    path: "EllipsoidOutlineGeometry.html"
                },
                {
                    name: 'FrustumGeometry',
                    icon: 'file-text2',
                    path: "FrustumGeometry.html"
                },
                {
                    name: 'FrustumOutlineGeometry',
                    icon: 'file-text2',
                    path: "FrustumOutlineGeometry.html"
                },
                {
                    name: 'GeometryAttribute',
                    icon: 'file-text2',
                    path: "GeometryAttribute.html",
                },
                {
                    name: 'GeometryAttributes',
                    icon: 'file-text2',
                    path: "GeometryAttributes.html"
                },
                {
                    name: 'GeometryInstance',
                    icon: 'file-text2',
                    path: "GeometryInstance.html"
                },
                {
                    name: 'GeometryInstanceAttribute',
                    icon: 'file-text2',
                    path: "GeometryInstanceAttribute.html"
                },
                {
                    name: 'GeometryPipeline',
                    icon: 'file-text2',
                    path: "GeometryPipeline.html"
                },
                {
                    name: 'GeometryUpdater',
                    icon: 'file-text2',
                    path: "GeometryUpdater.html"
                },
                {
                    name: 'GroundPolylineGeometry',
                    icon: 'file-text2',
                    path: "GroundPolylineGeometry.html"
                },
                {
                    name: 'PlaneGeometry',
                    icon: 'file-text2',
                    path: "PlaneGeometry.html"
                },
                {
                    name: 'PlaneGeometryUpdater',
                    icon: 'file-text2',
                    path: "PlaneGeometryUpdater.html"
                },
                {
                    name: 'PlaneOutlineGeometry',
                    icon: 'file-text2',
                    path: "PlaneOutlineGeometry.html"
                },
                {
                    name: 'PolygonGeometry',
                    icon: 'file-text2',
                    path: "PolygonGeometry.html"
                },
                {
                    name: 'PolygonGeometryUpdater',
                    icon: 'file-text2',
                    path: "PolygonGeometryUpdater.html"
                },
                {
                    name: 'PolygonOutlineGeometry',
                    icon: 'file-text2',
                    path: "PolygonOutlineGeometry.html"
                },
                {
                    name: 'PolylineGeometry',
                    icon: 'file-text2',
                    path: "PolylineGeometry.html"
                },
                {
                    name: 'PolylineGeometryUpdater',
                    icon: 'file-text2',
                    path: "PolylineGeometryUpdater.html"
                },
                {
                    name: 'PolylineVolumeGeometry',
                    icon: 'file-text2',
                    path: "PolylineVolumeGeometry.html"
                },
                {
                    name: 'PolylineVolumeGeometryUpdater',
                    icon: 'file-text2',
                    path: "PolylineVolumeGeometryUpdater.html"
                },
                {
                    name: 'PolylineVolumeOutlineGeometry',
                    icon: 'file-text2',
                    path: "PolylineVolumeOutlineGeometry.html"
                },
                {
                    name: 'RectangleGeometry',
                    icon: 'file-text2',
                    path: "RectangleGeometry.html",
                },
                {
                    name: 'RectangleGeometryUpdater',
                    icon: 'file-text2',
                    path: "RectangleGeometryUpdater.html"
                },
                {
                    name: 'RectangleOutlineGeometry',
                    icon: 'file-text2',
                    path: "RectangleOutlineGeometry.html"
                },
                {
                    name: 'ShowGeometryInstanceAttribute',
                    icon: 'file-text2',
                    path: "ShowGeometryInstanceAttribute.html"
                },
                {
                    name: 'SimplePolylineGeometry',
                    icon: 'file-text2',
                    path: "SimplePolylineGeometry.html"
                },
                {
                    name: 'SphereGeometry',
                    icon: 'file-text2',
                    path: "SphereGeometry.html"
                },
                {
                    name: 'SphereOutlineGeometry',
                    icon: 'file-text2',
                    path: "SphereOutlineGeometry.html"
                },
                {
                    name: 'WallGeometry',
                    icon: 'file-text2',
                    path: "WallGeometry.html"
                },
                {
                    name: 'WallGeometryUpdater',
                    icon: 'file-text2',
                    path: "WallGeometryUpdater.html"
                },
                {
                    name: 'WallOutlineGeometry',
                    icon: 'file-text2',
                    path: "WallOutlineGeometry.html"
                }
            ]
        },
        {
            name: 'cesium/graphic',
            icon: 'stack',
            children: [
                {
                    name: 'BillboardGraphics',
                    icon: 'file-text2',
                    path: "BillboardGraphics.html"
                },
                {
                    name: 'BoxGraphics',
                    icon: 'file-text2',
                    path: "BoxGraphics.html"
                },
                {
                    name: 'Cartographic',
                    icon: 'file-text2',
                    path: "Cartographic.html"
                },
                {
                    name: 'CartographicGeocoderService',
                    icon: 'file-text2',
                    path: "CartographicGeocoderService.html"
                },
                {
                    name: 'CorridorGraphics',
                    icon: 'file-text2',
                    path: "CorridorGraphics.html"
                },
                {
                    name: 'CylinderGraphics',
                    icon: 'file-text2',
                    path: "CylinderGraphics.html"
                },
                {
                    name: 'EllipseGraphics',
                    icon: 'file-text2',
                    path: "EllipseGraphics.html"
                },
                {
                    name: 'EllipsoidGraphics',
                    icon: 'file-text2',
                    path: "EllipsoidGraphics.html"
                },
                {
                    name: 'LabelGraphics',
                    icon: 'file-text2',
                    path: "LabelGraphics.html",
                },
                {
                    name: 'ModelGraphics',
                    icon: 'file-text2',
                    path: "ModelGraphics.html"
                },
                {
                    name: 'PathGraphics',
                    icon: 'file-text2',
                    path: "PathGraphics.html"
                },
                {
                    name: 'PlaneGraphics',
                    icon: 'file-text2',
                    path: "PlaneGraphics.html"
                },
                {
                    name: 'PointGraphics',
                    icon: 'file-text2',
                    path: "PointGraphics.html"
                },
                {
                    name: 'PolylineGraphics',
                    icon: 'file-text2',
                    path: "PolylineGraphics.html"
                },
                {
                    name: 'PolylineVolumeGraphics',
                    icon: 'file-text2',
                    path: "PolylineVolumeGraphics.html"
                },
                {
                    name: 'RectangleGraphics',
                    icon: 'file-text2',
                    path: "RectangleGraphics.html"
                },
                {
                    name: 'WallGraphics',
                    icon: 'file-text2',
                    path: "WallGraphics.html"
                }
            ]
        },

        {
            name: 'cesium/primitive',
            icon: 'stack',
            children: [
                {
                    name: 'Primitive',
                    icon: 'file-text2',
                    path: "Primitive.html"
                },
                {
                    name: 'createTangentSpaceDebugPrimitive',
                    icon: 'file-text2',
                    path: "createTangentSpaceDebugPrimitive.html"
                },
                {
                    name: 'DebugCameraPrimitive',
                    icon: 'file-text2',
                    path: "DebugCameraPrimitive.html"
                },
                {
                    name: 'DebugModelMatrixPrimitive',
                    icon: 'file-text2',
                    path: "DebugModelMatrixPrimitive.html"
                },
                {
                    name: 'GroundPolylinePrimitive',
                    icon: 'file-text2',
                    path: "GroundPolylinePrimitive.html"
                },
                {
                    name: 'GroundPrimitive',
                    icon: 'file-text2',
                    path: "GroundPrimitive.html"
                },
                {
                    name: 'PointPrimitive',
                    icon: 'file-text2',
                    path: "PointPrimitive.html"
                }
            ]
        },
        {
            name:'cesium/Provider',
            icon:'stack',
            path:'cesium/Provider',
            children:[
                {
                    name:'CesiumTerrainProvider',
                    icon: 'file-text2',
                    path: "CesiumTerrainProvider.html"
                },
                {
                    name:'EllipsoidTerrainProvider',
                    icon: 'file-text2',
                    path: "EllipsoidTerrainProvider.html"
                },
                {
                    name:'GoogleEarthEnterpriseMapsProvider',
                    icon: 'file-text2',
                    path: "GoogleEarthEnterpriseMapsProvider.html"
                },
                {
                    name:'GoogleEarthEnterpriseTerrainProvider',
                    icon: 'file-text2',
                    path: "GoogleEarthEnterpriseTerrainProvider.html"
                },
                {
                    name:'TerrainProvider',
                    icon: 'file-text2',
                    path: "TerrainProvider.html"
                },
                {
                    name:'TileProviderError',
                    icon: 'file-text2',
                    path: "TileProviderError.html"
                },
                {
                    name:'VRTheWorldTerrainProvider',
                    icon: 'file-text2',
                    path: "VRTheWorldTerrainProvider.html"
                }



            ]
        },
        {
            name:'cesium/Provider/ImageryProvider',
            icon:'stack',
            path:'cesium/Provider/ImageryProvider',
            children:[
                {
                    name:'ImageryProvider',
                    icon: 'file-text2',
                    path: "ImageryProvider.html"
                },
                {
                    name:'ArcGisMapServerImageryProvider',
                    icon: 'file-text2',
                    path: "ArcGisMapServerImageryProvider.html"
                },
                {
                    name:'BingMapsImageryProvider',
                    icon: 'file-text2',
                    path: "BingMapsImageryProvider.html"
                },
                {
                    name:'createOpenStreetMapImageryProvider',
                    icon: 'file-text2',
                    path: "createOpenStreetMapImageryProvider.html"
                },
                {
                    name:'createTileMapServiceImageryProvider',
                    icon: 'file-text2',
                    path: "createTileMapServiceImageryProvider.html"
                },
                {
                    name:'GoogleEarthEnterpriseImageryProvider',
                    icon: 'file-text2',
                    path: "GoogleEarthEnterpriseImageryProvider.html"
                },
                {
                    name:'GridImageryProvider',
                    icon: 'file-text2',
                    path: "GridImageryProvider.html"
                },
                {
                    name:'IonImageryProvider',
                    icon: 'file-text2',
                    path: "IonImageryProvider.html"
                },
                {
                    name:'MapboxImageryProvider',
                    icon: 'file-text2',
                    path: "MapboxImageryProvider.html"
                },
                {
                    name:'SingleTileImageryProvider',
                    icon: 'file-text2',
                    path: "SingleTileImageryProvider.html"
                },
                {
                    name:'TileCoordinatesImageryProvider',
                    icon: 'file-text2',
                    path: "TileCoordinatesImageryProvider.html"
                },
                {
                    name:'UrlTemplateImageryProvider',
                    icon: 'file-text2',
                    path: "UrlTemplateImageryProvider.html"
                },
                {
                    name:'WebMapServiceImageryProvider',
                    icon: 'file-text2',
                    path: "WebMapServiceImageryProvider.html"
                },
                {
                    name:'WebMapTileServiceImageryProvider',
                    icon: 'file-text2',
                    path: "WebMapTileServiceImageryProvider.html"
                }

            ]
        },
        {
            name: 'cesium/type',
            icon: 'stack',
            children: [
                {
                    name: 'PrimitiveType',
                    icon: 'file-text2',
                    path: "PrimitiveType.html"
                },
                {
                    name: 'CameraEventType',
                    icon: 'file-text2',
                    path: "CameraEventType.html"
                },
                {
                    name: 'ComponentDatatype',
                    icon: 'file-text2',
                    path: "ComponentDatatype.html"
                },
                {
                    name: 'CornerType',
                    icon: 'file-text2',
                    path: "CornerType.html"
                },
                {
                    name: 'ExtrapolationType',
                    icon: 'file-text2',
                    path: "ExtrapolationType.html"
                },
                {
                    name: 'GeocodeType',
                    icon: 'file-text2',
                    path: "GeocodeType.html"
                },
                {
                    name: 'IndexDatatype',
                    icon: 'file-text2',
                    path: "IndexDatatype.html"
                },
                {
                    name: 'RequestType',
                    icon: 'file-text2',
                    path: "RequestType.html"
                },
                {
                    name: 'ScreenSpaceEventType',
                    icon: 'file-text2',
                    path: "ScreenSpaceEventType.html"
                }

            ]
        },
        {
            name:"cesium/ViewModel",
            icon:'stack',
            path:"ViewModel",
            children:[
                {
                    name:'ProviderViewModel',
                    icon:'file-text2',
                    path:"ProviderViewModel.html"
                },
                {
                    name:'Cesium3DTilesInspectorViewModel',
                    icon:'file-text2',
                    path:"Cesium3DTilesInspectorViewModel.html"
                },
                {
                    name:'CesiumInspectorViewModel',
                    icon:'file-text2',
                    path:"CesiumInspectorViewModel.html"
                },
                {
                    name:'ClockViewModel',
                    icon:'file-text2',
                    path:"ClockViewModel.html"
                },
                {
                    name:'FullscreenButtonViewModel',
                    icon:'file-text2',
                    path:"FullscreenButtonViewModel.html"
                },
                {
                    name:'GeocoderViewModel',
                    icon:'file-text2',
                    path:"GeocoderViewModel.html"
                },
                {
                    name:'HomeButtonViewModel',
                    icon:'file-text2',
                    path:"HomeButtonViewModel.html"
                },
                {
                    name:'InfoBoxViewModel',
                    icon:'file-text2',
                    path:"InfoBoxViewModel.html"
                },
                {
                    name:'NavigationHelpButtonViewModel',
                    icon:'file-text2',
                    path:"NavigationHelpButtonViewModel.html"
                },
                {
                    name:'PerformanceWatchdogViewModel',
                    icon:'file-text2',
                    path:"PerformanceWatchdogViewModel.html"
                },

                {
                    name:'SelectionIndicatorViewModel',
                    icon:'file-text2',
                    path:"SelectionIndicatorViewModel.html"
                },
                {
                    name:'ToggleButtonViewModel',
                    icon:'file-text2',
                    path:"ToggleButtonViewModel.html"
                },
                {
                    name:'VRButtonViewModel',
                    icon:'file-text2',
                    path:"VRButtonViewModel.html"
                }
            ]
        },
        {
            name: 'cesium/Visualizer',
            icon: 'stack',
            children: [
                {
                    name: 'Visualizer',
                    icon: 'file-text2',
                    path: "Visualizer.html"
                },
                {
                    name: 'BillboardVisualizer',
                    icon: 'file-text2',
                    path: "BillboardVisualizer.html"
                },
                {
                    name: 'LabelVisualizer',
                    icon: 'file-text2',
                    path: "LabelVisualizer.html"
                },
                {
                    name: 'ModelVisualizer',
                    icon: 'file-text2',
                    path: "ModelVisualizer.html"
                },
                {
                    name: 'PathVisualizer',
                    icon: 'file-text2',
                    path: "PathVisualizer.html"
                },
                {
                    name: 'PointVisualizer',
                    icon: 'file-text2',
                    path: "PointVisualizer.html"
                },
                {
                    name: 'PolylineVisualizer',
                    icon: 'file-text2',
                    path: "PolylineVisualizer.html"
                },
                {
                    name: 'GeometryVisualizer',
                    icon: 'file-text2',
                    path: "GeometryVisualizer.html"
                },

            ]
        },
        {
            name: 'cesium/widget',
            icon: 'stack',
            path: 'cesium/widget',
            children: [
                {
                    name: 'BaseLayerPicker',
                    icon: 'file-text2',
                    path: "BaseLayerPicker.html"
                },
                {
                    name: 'ProjectionPicker',
                    icon: 'file-text2',
                    path: "ProjectionPicker.html",
                },
                {
                    name: 'SceneModePicker',
                    icon: 'file-text2',
                    path: "SceneModePicker.html"
                },

            ]
        },
        {
            name: 'cesium/widget/viewModel',
            icon: 'stack',
            path: 'cesium/widget/viewModel',
            children: [
                {
                    name:'BaseLayerPickerViewModel',
                    icon:'file-text2',
                    path:'BaseLayerPickerViewModel.html',
                },
                {
                    name:'ProjectionPickerViewModel',
                    icon:'file-text2',
                    path:"ProjectionPickerViewModel.html"
                },
                {
                    name:'SceneModePickerViewModel',
                    icon:'file-text2',
                    path:"SceneModePickerViewModel.html"
                },
            ]
        },

    ];
    /*const data = [
        "Appearance.html", "ArcGisMapServerImageryProvider.html", "AssociativeArray.html", "AxisAlignedBoundingBox.html", "barycentricCoordinates.html", "BaseLayerPicker.html", "BaseLayerPickerViewModel.html", "Billboard.html", "BillboardCollection.html", "BillboardGraphics.html", "BillboardVisualizer.html", "binarySearch.html", "BingMapsApi.html", "BingMapsGeocoderService.html", "BingMapsImageryProvider.html", "BingMapsStyle.html", "BlendEquation.html", "BlendFunction.html", "BlendingState.html", "BlendOption.html", "BoundingRectangle.html", "BoundingSphere.html", "BoxEmitter.html", "BoxGeometry.html", "BoxGeometryUpdater.html", "BoxGraphics.html", "BoxOutlineGeometry.html", "CallbackProperty.html", "Camera.html", "CameraEventAggregator.html", "CameraEventType.html", "cancelAnimationFrame.html", "Cartesian2.html", "Cartesian3.html", "Cartesian4.html", "Cartographic.html", "CartographicGeocoderService.html", "CatmullRomSpline.html", "Cesium3DTile.html", "Cesium3DTileColorBlendMode.html", "Cesium3DTileContent.html", "Cesium3DTileFeature.html", "Cesium3DTilePointFeature.html", "Cesium3DTileset.html", "Cesium3DTilesInspector.html", "Cesium3DTilesInspectorViewModel.html", "Cesium3DTileStyle.html", "CesiumInspector.html", "CesiumInspectorViewModel.html", "CesiumTerrainProvider.html", "CesiumWidget.html", "CheckerboardMaterialProperty.html", "CircleEmitter.html", "CircleGeometry.html", "ClippingPlaneCollection.html", "Clock.html", "ClockRange.html", "ClockStep.html", "ClockViewModel.html", "clone.html", "Color.html", "ColorBlendMode.html", "ColorGeometryInstanceAttribute.html", "ColorMaterialProperty.html", "combine.html", "Command.html", "ComponentDatatype.html", "CompositeEntityCollection.html", "CompositeMaterialProperty.html", "CompositePositionProperty.html", "CompositeProperty.html", "CompressedTextureBuffer.html", "ConditionsExpression.html", "ConeEmitter.html", "ConstantPositionProperty.html", "ConstantProperty.html", "CoplanarPolygonGeometry.html", "CoplanarPolygonOutlineGeometry.html", "CornerType.html", "CorridorGeometry.html", "CorridorGeometryUpdater.html", "CorridorGraphics.html", "CorridorOutlineGeometry.html", "createCommand.html", "createGuid.html", "createOpenStreetMapImageryProvider.html", "createTangentSpaceDebugPrimitive.html", "createTaskProcessorWorker.html", "createTileMapServiceImageryProvider.html", "createWorldImagery.html", "createWorldTerrain.html", "Credit.html", "CreditDisplay.html", "CubicRealPolynomial.html", "CullFace.html", "CullingVolume.html", "CustomDataSource.html", "CylinderGeometry.html", "CylinderGeometryUpdater.html", "CylinderGraphics.html", "CylinderOutlineGeometry.html", "CzmlDataSource.html", "DataSource.html", "DataSourceClock.html", "DataSourceCollection.html", "DataSourceDisplay.html", "DebugAppearance.html", "DebugCameraPrimitive.html", "DebugModelMatrixPrimitive.html", "DefaultProxy.html", "defaultValue.html", "defined.html", "DepthFunction.html", "destroyObject.html", "DeveloperError.html", "DiscardMissingTileImagePolicy.html", "DistanceDisplayCondition.html", "DistanceDisplayConditionGeometryInstanceAttribute.html", "EasingFunction.html", "EllipseGeometry.html", "EllipseGeometryUpdater.html", "EllipseGraphics.html", "EllipseOutlineGeometry.html", "Ellipsoid.html", "EllipsoidGeodesic.html", "EllipsoidGeometry.html", "EllipsoidGeometryUpdater.html", "EllipsoidGraphics.html", "EllipsoidOutlineGeometry.html", "EllipsoidSurfaceAppearance.html", "EllipsoidTangentPlane.html", "EllipsoidTerrainProvider.html", "Entity.html", "EntityCluster.html", "EntityCollection.html", "EntityView.html", "Event.html", "EventHelper.html", "Expression.html", "ExtrapolationType.html", "FeatureDetection.html", "Fog.html", "formatError.html", "FrameRateMonitor.html", "FrustumGeometry.html", "FrustumOutlineGeometry.html", "Fullscreen.html", "FullscreenButton.html", "FullscreenButtonViewModel.html", "Geocoder.html", "GeocoderService.html", "GeocoderViewModel.html", "GeocodeType.html", "GeographicProjection.html", "GeographicTilingScheme.html", "GeoJsonDataSource.html", "Geometry.html", "GeometryAttribute.html", "GeometryAttributes.html", "GeometryInstance.html", "GeometryInstanceAttribute.html", "GeometryPipeline.html", "GeometryUpdater.html", "GeometryVisualizer.html", "getAbsoluteUri.html", "getBaseUri.html", "getExtensionFromUri.html", "GetFeatureInfoFormat.html", "getFilenameFromUri.html", "getImagePixels.html", "getTimestamp.html", "Globe.html", "GoogleEarthEnterpriseImageryProvider.html", "GoogleEarthEnterpriseMapsProvider.html", "GoogleEarthEnterpriseMetadata.html", "GoogleEarthEnterpriseTerrainData.html", "GoogleEarthEnterpriseTerrainProvider.html", "GregorianDate.html", "GridImageryProvider.html", "GridMaterialProperty.html", "GroundPolylineGeometry.html", "GroundPolylinePrimitive.html", "GroundPrimitive.html", "HeadingPitchRange.html", "HeadingPitchRoll.html", "HeightmapTerrainData.html", "HeightReference.html", "HermitePolynomialApproximation.html", "HermiteSpline.html", "HomeButton.html", "HomeButtonViewModel.html", "HorizontalOrigin.html", "ImageMaterialProperty.html", "ImageryLayer.html", "ImageryLayerCollection.html", "ImageryLayerFeatureInfo.html", "ImageryProvider.html", "ImagerySplitDirection.html", "IndexDatatype.html", "InfoBox.html", "InfoBoxViewModel.html", "InterpolationAlgorithm.html", "Intersect.html", "Intersections2D.html", "IntersectionTests.html", "Interval.html", "Ion.html", "IonGeocoderService.html", "IonImageryProvider.html", "IonResource.html", "IonWorldImageryStyle.html", "isArray.html", "isLeapYear.html", "Iso8601.html", "JulianDate.html", "KeyboardEventModifier.html", "KmlCamera.html", "KmlDataSource.html", "KmlFeatureData.html", "KmlLookAt.html", "KmlTour.html", "KmlTourFlyTo.html", "KmlTourWait.html", "Label.html", "LabelCollection.html", "LabelGraphics.html", "LabelStyle.html", "LabelVisualizer.html", "LagrangePolynomialApproximation.html", "LeapSecond.html", "LinearApproximation.html", "LinearSpline.html", "loadCRN.html", "loadKTX.html", "MapboxImageryProvider.html", "MapMode2D.html", "MapProjection.html", "Material.html", "MaterialAppearance.html", "MaterialProperty.html", "Math.html", "Matrix2.html", "Matrix3.html", "Matrix4.html", "mergeSort.html", "Model.html", "ModelAnimation.html", "ModelAnimationCollection.html", "ModelAnimationLoop.html", "ModelGraphics.html", "ModelMaterial.html", "ModelMesh.html", "ModelNode.html", "ModelVisualizer.html", "Moon.html", "NavigationHelpButton.html", "NavigationHelpButtonViewModel.html", "NearFarScalar.html", "NeverTileDiscardPolicy.html", "NodeTransformationProperty.html", "objectToQuery.html", "Occluder.html", "OpenCageGeocoderService.html", "OrientedBoundingBox.html", "OrthographicFrustum.html", "OrthographicOffCenterFrustum.html", "Packable.html", "PackableForInterpolation.html", "Particle.html", "ParticleBurst.html", "ParticleEmitter.html", "ParticleSystem.html", "PathGraphics.html", "PathVisualizer.html", "PeliasGeocoderService.html", "PerformanceWatchdog.html", "PerformanceWatchdogViewModel.html", "PerInstanceColorAppearance.html", "PerspectiveFrustum.html", "PerspectiveOffCenterFrustum.html", "PinBuilder.html", "PixelFormat.html", "Plane.html", "PlaneGeometry.html", "PlaneGeometryUpdater.html", "PlaneGraphics.html", "PlaneOutlineGeometry.html", "PointCloudShading.html", "PointGraphics.html", "pointInsideTriangle.html", "PointPrimitive.html", "PointPrimitiveCollection.html", "PointVisualizer.html", "PolygonGeometry.html", "PolygonGeometryUpdater.html", "PolygonGraphics.html", "PolygonHierarchy.html", "PolygonOutlineGeometry.html", "Polyline.html", "PolylineArrowMaterialProperty.html", "PolylineCollection.html", "PolylineColorAppearance.html", "PolylineDashMaterialProperty.html", "PolylineGeometry.html", "PolylineGeometryUpdater.html", "PolylineGlowMaterialProperty.html", "PolylineGraphics.html", "PolylineMaterialAppearance.html", "PolylineOutlineMaterialProperty.html", "PolylineVisualizer.html", "PolylineVolumeGeometry.html", "PolylineVolumeGeometryUpdater.html", "PolylineVolumeGraphics.html", "PolylineVolumeOutlineGeometry.html", "PositionProperty.html", "PositionPropertyArray.html", "PostProcessStage.html", "PostProcessStageCollection.html", "PostProcessStageComposite.html", "PostProcessStageLibrary.html", "PostProcessStageSampleMode.html", "Primitive.html", "PrimitiveCollection.html", "PrimitiveType.html", "ProjectionPicker.html", "ProjectionPickerViewModel.html", "Property.html", "PropertyArray.html", "PropertyBag.html", "ProviderViewModel.html", "QuadraticRealPolynomial.html", "QuantizedMeshTerrainData.html", "QuarticRealPolynomial.html", "Quaternion.html", "QuaternionSpline.html", "queryToObject.html", "Queue.html", "Ray.html", "Rectangle.html", "RectangleGeometry.html", "RectangleGeometryUpdater.html", "RectangleGraphics.html", "RectangleOutlineGeometry.html", "ReferenceFrame.html", "ReferenceProperty.html", "Request.html", "requestAnimationFrame.html", "RequestErrorEvent.html", "RequestState.html", "RequestType.html", "Resource.html", "Rotation.html", "RuntimeError.html", "SampledPositionProperty.html", "SampledProperty.html", "sampleTerrain.html", "sampleTerrainMostDetailed.html", "Scene.html", "SceneMode.html", "SceneModePicker.html", "SceneModePickerViewModel.html", "SceneTransforms.html", "ScreenSpaceCameraController.html", "ScreenSpaceEventHandler.html", "ScreenSpaceEventType.html", "SelectionIndicator.html", "SelectionIndicatorViewModel.html", "ShadowMap.html", "ShadowMode.html", "ShowGeometryInstanceAttribute.html", "Simon1994PlanetaryPositions.html", "SimplePolylineGeometry.html", "SingleTileImageryProvider.html", "SkyAtmosphere.html", "SkyBox.html", "SphereEmitter.html", "SphereGeometry.html", "SphereOutlineGeometry.html", "Spherical.html", "Spline.html", "StencilFunction.html", "StencilOperation.html", "StripeMaterialProperty.html", "StripeOrientation.html", "StyleExpression.html", "subdivideArray.html", "Sun.html", "SvgPathBindingHandler.html", "TaskProcessor.html", "TerrainData.html", "TerrainProvider.html", "TextureMagnificationFilter.html", "TextureMinificationFilter.html", "TileAvailability.html", "TileCoordinatesImageryProvider.html", "TileDiscardPolicy.html", "TileProviderError.html", "TilingScheme.html", "TimeDynamicImagery.html", "TimeDynamicPointCloud.html", "TimeInterval.html", "TimeIntervalCollection.html", "TimeIntervalCollectionPositionProperty.html", "TimeIntervalCollectionProperty.html", "Timeline.html", "TimeStandard.html", "ToggleButtonViewModel.html", "Transforms.html", "TranslationRotationScale.html", "TridiagonalSystemSolver.html", "TrustedServers.html", "UrlTemplateImageryProvider.html", "VelocityOrientationProperty.html", "VelocityVectorProperty.html", "VertexFormat.html", "VerticalOrigin.html", "VideoSynchronizer.html", "Viewer.html", "viewerCesium3DTilesInspectorMixin.html", "viewerCesiumInspectorMixin.html", "viewerDragDropMixin.html", "viewerPerformanceWatchdogMixin.html", "ViewportQuad.html", "Visibility.html", "Visualizer.html", "VRButton.html", "VRButtonViewModel.html", "VRTheWorldTerrainProvider.html", "WallGeometry.html", "WallGeometryUpdater.html", "WallGraphics.html", "WallOutlineGeometry.html", "WebGLConstants.html", "WebMapServiceImageryProvider.html", "WebMapTileServiceImageryProvider.html", "WebMercatorProjection.html", "WebMercatorTilingScheme.html", "WeightSpline.html", "WindingOrder.html"
    ].map(d=>({
        name: d.replace(".html",""),
        icon:'stack',
        path:`${d}`
    }));*/
    // @ts-ignore
    // menus.push(...data);
    return {
        status: true,
        message: '',
        code: 200,
        data: menus
    };
}

export function getGuideMenu():IResponse {
    const menus = [
        {
            name: 'Animation',
            icon: 'stack',
            path: 'Animation',
        },
    ];
    return {
        status: true,
        message: '',
        code: 200,
        data: menus
    };
}

/*[

            {
                name: '首页',
                icon: 'dashboard',
                path: '/home'
            },
            {
                name: '管线修复改造',
                icon: 'desktop',
                path: '/pipe',
                children: [
                    {
                        name: '计划统计',
                        icon: 'share-alt',
                        path: '/statisticalQuery'
                    },
                    {
                        name: '计划制定',
                        icon: 'book',
                        path: '/drawUpPlan'
                    },
                    {
                        name: '计划一览',
                        icon: "bulb",
                        path: "/planGlance"
                    },
                ],
            },
            {
                name: '排水户排查建档',
                icon: 'dashboard',
                path: '/drainInvest'
            },
            {
                name: '源头纳污',
                icon: 'dashboard',
                path: '/ytnw',
                children: [
                    {
                        name: '计划制定',
                        icon: 'book',
                        path: '/ytnw/drawUpPlan'
                    },
                    {
                        name: '计划一览',
                        icon: 'book',
                        path: '/ytnw/planGlance'
                    },
                ],
            },
            {
                name: '水质监测',
                icon: 'dashboard',
                path: '/wqm/map',
            },
            {
                name: '管网排查',
                icon: 'dashboard',
                path: '/pipeCheck',
            },
            {
                name: '系统管理',
                icon: 'dashboard',
                path: '/systemManager',
                children: [
                    {
                        name: '个人信息',
                        icon: 'bulb',
                        path: '/userInfo'
                    },
                    {
                        name: '用户管理',
                        icon: 'bulb',
                        path: '/listUser'
                    },
                    {
                        name: '角色管理',
                        icon: 'bulb',
                        path: '/listRole'
                    },
                    /!*{
                        name: '用户授权',
                        icon: 'bulb',
                        path: '/systemManager1'
                    },
                    {
                        name: '角色授权',
                        icon: 'bulb',
                        path: '/systemManager2'
                    },*!/
                    {
                        name: '密码修改',
                        icon: 'bulb',
                        path: '/userPasswd'
                    },
                ],
            }
        ]*/
