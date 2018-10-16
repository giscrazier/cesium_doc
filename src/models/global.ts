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
                {
                    name: 'Camera',
                    icon: 'file-text2',
                    path: "Camera.html",
                },
                {
                    name: 'clone',
                    icon: 'file-text2',
                    path: "clone.html",
                },
                {
                    name: 'combine',
                    icon: 'file-text2',
                    path: "combine.html",
                },
                {
                    name: 'Camera',
                    icon: 'file-text2',
                    path: "Camera.html",
                },



            ]
        },

        {
            name: 'cesium/Blend',
            icon: 'stack',
            children: [
                {
                    name: 'BlendEquation',
                    icon: 'file-text2',
                    path: "BlendEquation.html"
                },
                {
                    name: 'BlendFunction',
                    icon: 'file-text2',
                    path: "BlendFunction.html"
                },
                {
                    name: 'BlendingState',
                    icon: 'file-text2',
                    path: "BlendingState.html",
                },
                {
                    name: 'BlendOption',
                    icon: 'file-text2',
                    path: "BlendOption.html",
                }

            ]
        },
        {
            name: 'cesium/Clock',
            icon: 'stack',
            path: 'cesium/Clock',
            children: [
                {
                    name: 'Clock',
                    icon: 'file-text2',
                    path: "Clock.html",
                },
                {
                    name: 'ClockRange',
                    icon: 'file-text2',
                    path: "ClockRange.html",
                },
                {
                    name: 'ClockStep',
                    icon: 'file-text2',
                    path: "ClockStep.html",
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
            path: 'cesium/Collection',
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
            name: 'cesium/color',
            icon: 'stack',
            path: 'cesium/color',
            children: [
                {
                    name: 'Color',
                    icon: 'file-text2',
                    path: "Color.html"
                },
                {
                    name: 'Cesium3DTileColorBlendMode',
                    icon: 'file-text2',
                    path: "Cesium3DTileColorBlendMode.html"
                },
                {
                    name: 'ColorBlendMode',
                    icon: 'file-text2',
                    path: "ColorBlendMode.html"
                },
                {
                    name: 'ColorMaterialProperty',
                    icon: 'file-text2',
                    path: "ColorMaterialProperty.html"
                },

            ]
        },
        {
            name: 'cesium/DataSource',
            icon: 'stack',
            path: 'cesium/DataSource',
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
            name: 'cesium/Emitter',
            icon: 'stack',
            path: 'cesium/Emitter',
            children: [
                {
                    name: 'BoxEmitter',
                    icon: 'file-text2',
                    path: "BoxEmitter.html",
                },
                {
                    name: 'CircleEmitter',
                    icon: 'file-text2',
                    path: "CircleEmitter.html",
                },
                {
                    name: 'ConeEmitter',
                    icon: 'file-text2',
                    path: "ConeEmitter.html",
                },
                {
                    name: 'ParticleEmitter',
                    icon: 'file-text2',
                    path: "ParticleEmitter.html",
                },
                {
                    name: 'SphereEmitter',
                    icon: 'file-text2',
                    path: "SphereEmitter.html",
                }
            ]
        },
        {
            name: 'cesium/geometry',
            icon: 'stack',
            path: 'cesium/geometry',
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
                    name: 'GeometryInstance',
                    icon: 'file-text2',
                    path: "GeometryInstance.html"
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
            path: 'cesium/graphic',
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
            name: 'cesium/mapStyle',
            icon: 'stack',
            path: 'cesium/mapStyle',
            children: [
                {
                    name: 'StyleExpression',
                    icon: 'file-text2',
                    path: "StyleExpression.html",
                },
                {
                    name: 'BingMapsStyle',
                    icon: 'file-text2',
                    path: "BingMapsStyle.html"
                },
                {
                    name: 'Cesium3DTileStyle',
                    icon: 'file-text2',
                    path: "Cesium3DTileStyle.html",
                },
                {
                    name: 'IonWorldImageryStyle',
                    icon: 'file-text2',
                    path: "IonWorldImageryStyle.html",
                },
                {
                    name: 'LabelStyle',
                    icon: 'file-text2',
                    path: "LabelStyle.html"
                }

            ]
        },

        {
            name: 'cesium/MaterialProperty',
            icon: 'stack',
            path: 'cesium/MaterialProperty',
            children: [
                {
                    name: 'MaterialProperty',
                    icon: 'file-text2',
                    path: "MaterialProperty.html",
                },
                {
                    name: 'CheckerboardMaterialProperty',
                    icon: 'file-text2',
                    path: "CheckerboardMaterialProperty.html"
                },
                {
                    name: 'CompositeMaterialProperty',
                    icon: 'file-text2',
                    path: "CompositeMaterialProperty.html"
                },
                {
                    name: 'GridMaterialProperty',
                    icon: 'file-text2',
                    path: "GridMaterialProperty.html"
                },
                {
                    name: 'ImageMaterialProperty',
                    icon: 'file-text2',
                    path: "ImageMaterialProperty.html",
                },
                {
                    name: 'PolylineArrowMaterialProperty',
                    icon: 'file-text2',
                    path: "PolylineArrowMaterialProperty.html"
                },
                {
                    name: 'PolylineDashMaterialProperty',
                    icon: 'file-text2',
                    path: "PolylineDashMaterialProperty.html",
                },
                {
                    name: 'PolylineGlowMaterialProperty',
                    icon: 'file-text2',
                    path: "PolylineGlowMaterialProperty.html",
                },
                {
                    name: 'PolylineOutlineMaterialProperty',
                    icon: 'file-text2',
                    path: "PolylineOutlineMaterialProperty.html",
                },
                {
                    name: 'StripeMaterialProperty',
                    icon: 'file-text2',
                    path: "StripeMaterialProperty.html",
                }
            ]
        },

        {
            name: 'cesium/primitive',
            icon: 'stack',
            path: 'cesium/primitive',
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
            name: 'cesium/providerSupport',
            icon: 'stack',
            path: 'cesium/providerSupport',
            children: [
                {
                    name: 'BingMapsApi',
                    icon: 'file-text2',
                    path: "BingMapsApi.html"
                },

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
            name: 'cesium/Shader/Attribute',
            icon: 'stack',
            path: 'cesium/Shader/Attribute',
            children: [
                {
                    name: 'ColorGeometryInstanceAttribute',
                    icon: 'file-text2',
                    path: "ColorGeometryInstanceAttribute.html"
                },
                {
                    name: 'DistanceDisplayConditionGeometryInstanceAttribute',
                    icon: 'file-text2',
                    path: "DistanceDisplayConditionGeometryInstanceAttribute.html"
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
                    name: 'GeometryInstanceAttribute',
                    icon: 'file-text2',
                    path: "GeometryInstanceAttribute.html"
                },
                {
                    name: 'ShowGeometryInstanceAttribute',
                    icon: 'file-text2',
                    path: "ShowGeometryInstanceAttribute.html"
                }
            ]
        },
        {
            name: 'cesium/Shader/Appearance',
            icon: 'stack',
            path: 'cesium/Shader/Appearance',
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
            name: 'cesium/Shader/Material',
            icon: 'stack',
            path: 'cesium/Shader/Material',
            children: [
                {
                    name: 'Material',
                    icon: 'file-text2',
                    path: "Material.html",
                },
                {
                    name: 'ModelMaterial',
                    icon: 'file-text2',
                    path: "ModelMaterial.html",
                },
            ]
        },
        {
            name: 'cesium/type',
            icon: 'stack',
            path: 'cesium/type',
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
            name: 'cesium/webservice',
            icon: 'stack',
            path: 'cesium/webservice',
            children: [
                {
                    name: 'BingMapsGeocoderService',
                    icon: 'file-text2',
                    path: "BingMapsGeocoderService.html"
                },
                {
                    name: 'GeocoderService',
                    icon: 'file-text2',
                    path: "GeocoderService.html"
                },
                {
                    name: 'IonGeocoderService',
                    icon: 'file-text2',
                    path: "IonGeocoderService.html"
                },
                {
                    name: 'OpenCageGeocoderService',
                    icon: 'file-text2',
                    path: "OpenCageGeocoderService.html",
                },
                {
                    name: 'PeliasGeocoderService',
                    icon: 'file-text2',
                    path: "PeliasGeocoderService.html"
                }
            ]
        },
        {
            name:"cesium/ViewModel",
            icon:'stack',
            path:"cesium/ViewModel",
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
                },
                {
                    name: 'AnimationViewModel',
                    icon: 'file-text2',
                    path: 'AnimationViewModel.html'
                }
            ]
        },
        {
            name: 'cesium/Visualizer',
            icon: 'stack',
            path: 'cesium/Visualizer',
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
                    name: 'CesiumWidget',
                    icon: 'file-text2',
                    path: "CesiumWidget.html",
                },
                {
                    name: 'Animation',
                    icon: 'file-text2',
                    path: 'Animation.html'
                },
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
                {
                    name:'Timeline',
                    icon:'file-text2',
                    path:"Timeline.html",
                },
                {
                    name:'VRButton',
                    icon:'file-text2',
                    path:"VRButton.html",
                },
                {
                    name:'CesiumInspector',
                    icon:'file-text2',
                    path:"CesiumInspector.html",
                },
                {
                    name:'FullscreenButton',
                    icon:'file-text2',
                    path:"FullscreenButton.html",
                },
                {
                    name:'Geocoder',
                    icon:'file-text2',
                    path:"Geocoder.html",
                },
                {
                    name:'HomeButton',
                    icon:'file-text2',
                    path:"HomeButton.html",
                },
                {
                    name:'InfoBox',
                    icon:'file-text2',
                    path:"InfoBox.html",
                },
                {
                    name:'NavigationHelpButton',
                    icon:'file-text2',
                    path:"NavigationHelpButton.html",
                },
                {
                    name:'PerformanceWatchdog',
                    icon:'file-text2',
                    path:"PerformanceWatchdog.html",
                },
                {
                    name:'SelectionIndicator',
                    icon:'file-text2',
                    path:"SelectionIndicator.html",
                },
                {
                    name:'SelectionIndicator',
                    icon:'file-text2',
                    path:"SelectionIndicator.html",
                },
                {
                    name: 'Command',
                    icon: 'file-text2',
                    path: "Command.html",
                },
                {
                    name: 'createCommand',
                    icon: 'file-text2',
                    path: "createCommand.html",
                },
                {
                    name: 'SvgPathBindingHandler',
                    icon: 'file-text2',
                    path: "SvgPathBindingHandler.html",
                }
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
        {
            name: 'cesium/widget/Viewer',
            icon: 'stack',
            path: 'cesium/widget/Viewer',
            children: [
                {
                    name:'Viewer',
                    icon:'file-text2',
                    path:"Viewer.html",
                },
                {
                    name:'viewerCesium3DTilesInspectorMixin',
                    icon:'file-text2',
                    path:"viewerCesium3DTilesInspectorMixin.html",
                },
                {
                    name:'viewerCesiumInspectorMixin',
                    icon:'file-text2',
                    path:"viewerCesiumInspectorMixin.html",
                },
                {
                    name:'viewerDragDropMixin',
                    icon:'file-text2',
                    path:"viewerDragDropMixin.html",
                },
                {
                    name:'viewerPerformanceWatchdogMixin',
                    icon:'file-text2',
                    path:"viewerPerformanceWatchdogMixin.html",
                }
            ]
        },

    ];

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
