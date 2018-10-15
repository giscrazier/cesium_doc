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
            name: 'Animation',
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
    ];
    const data = [
        "Appearance.html", "ArcGisMapServerImageryProvider.html", "AssociativeArray.html", "AxisAlignedBoundingBox.html", "barycentricCoordinates.html", "BaseLayerPicker.html", "BaseLayerPickerViewModel.html", "Billboard.html", "BillboardCollection.html", "BillboardGraphics.html", "BillboardVisualizer.html", "binarySearch.html", "BingMapsApi.html", "BingMapsGeocoderService.html", "BingMapsImageryProvider.html", "BingMapsStyle.html", "BlendEquation.html", "BlendFunction.html", "BlendingState.html", "BlendOption.html", "BoundingRectangle.html", "BoundingSphere.html", "BoxEmitter.html", "BoxGeometry.html", "BoxGeometryUpdater.html", "BoxGraphics.html", "BoxOutlineGeometry.html", "CallbackProperty.html", "Camera.html", "CameraEventAggregator.html", "CameraEventType.html", "cancelAnimationFrame.html", "Cartesian2.html", "Cartesian3.html", "Cartesian4.html", "Cartographic.html", "CartographicGeocoderService.html", "CatmullRomSpline.html", "Cesium3DTile.html", "Cesium3DTileColorBlendMode.html", "Cesium3DTileContent.html", "Cesium3DTileFeature.html", "Cesium3DTilePointFeature.html", "Cesium3DTileset.html", "Cesium3DTilesInspector.html", "Cesium3DTilesInspectorViewModel.html", "Cesium3DTileStyle.html", "CesiumInspector.html", "CesiumInspectorViewModel.html", "CesiumTerrainProvider.html", "CesiumWidget.html", "CheckerboardMaterialProperty.html", "CircleEmitter.html", "CircleGeometry.html", "ClippingPlaneCollection.html", "Clock.html", "ClockRange.html", "ClockStep.html", "ClockViewModel.html", "clone.html", "Color.html", "ColorBlendMode.html", "ColorGeometryInstanceAttribute.html", "ColorMaterialProperty.html", "combine.html", "Command.html", "ComponentDatatype.html", "CompositeEntityCollection.html", "CompositeMaterialProperty.html", "CompositePositionProperty.html", "CompositeProperty.html", "CompressedTextureBuffer.html", "ConditionsExpression.html", "ConeEmitter.html", "ConstantPositionProperty.html", "ConstantProperty.html", "CoplanarPolygonGeometry.html", "CoplanarPolygonOutlineGeometry.html", "CornerType.html", "CorridorGeometry.html", "CorridorGeometryUpdater.html", "CorridorGraphics.html", "CorridorOutlineGeometry.html", "createCommand.html", "createGuid.html", "createOpenStreetMapImageryProvider.html", "createTangentSpaceDebugPrimitive.html", "createTaskProcessorWorker.html", "createTileMapServiceImageryProvider.html", "createWorldImagery.html", "createWorldTerrain.html", "Credit.html", "CreditDisplay.html", "CubicRealPolynomial.html", "CullFace.html", "CullingVolume.html", "CustomDataSource.html", "CylinderGeometry.html", "CylinderGeometryUpdater.html", "CylinderGraphics.html", "CylinderOutlineGeometry.html", "CzmlDataSource.html", "DataSource.html", "DataSourceClock.html", "DataSourceCollection.html", "DataSourceDisplay.html", "DebugAppearance.html", "DebugCameraPrimitive.html", "DebugModelMatrixPrimitive.html", "DefaultProxy.html", "defaultValue.html", "defined.html", "DepthFunction.html", "destroyObject.html", "DeveloperError.html", "DiscardMissingTileImagePolicy.html", "DistanceDisplayCondition.html", "DistanceDisplayConditionGeometryInstanceAttribute.html", "EasingFunction.html", "EllipseGeometry.html", "EllipseGeometryUpdater.html", "EllipseGraphics.html", "EllipseOutlineGeometry.html", "Ellipsoid.html", "EllipsoidGeodesic.html", "EllipsoidGeometry.html", "EllipsoidGeometryUpdater.html", "EllipsoidGraphics.html", "EllipsoidOutlineGeometry.html", "EllipsoidSurfaceAppearance.html", "EllipsoidTangentPlane.html", "EllipsoidTerrainProvider.html", "Entity.html", "EntityCluster.html", "EntityCollection.html", "EntityView.html", "Event.html", "EventHelper.html", "Expression.html", "ExtrapolationType.html", "FeatureDetection.html", "Fog.html", "formatError.html", "FrameRateMonitor.html", "FrustumGeometry.html", "FrustumOutlineGeometry.html", "Fullscreen.html", "FullscreenButton.html", "FullscreenButtonViewModel.html", "Geocoder.html", "GeocoderService.html", "GeocoderViewModel.html", "GeocodeType.html", "GeographicProjection.html", "GeographicTilingScheme.html", "GeoJsonDataSource.html", "Geometry.html", "GeometryAttribute.html", "GeometryAttributes.html", "GeometryInstance.html", "GeometryInstanceAttribute.html", "GeometryPipeline.html", "GeometryUpdater.html", "GeometryVisualizer.html", "getAbsoluteUri.html", "getBaseUri.html", "getExtensionFromUri.html", "GetFeatureInfoFormat.html", "getFilenameFromUri.html", "getImagePixels.html", "getTimestamp.html", "Globe.html", "GoogleEarthEnterpriseImageryProvider.html", "GoogleEarthEnterpriseMapsProvider.html", "GoogleEarthEnterpriseMetadata.html", "GoogleEarthEnterpriseTerrainData.html", "GoogleEarthEnterpriseTerrainProvider.html", "GregorianDate.html", "GridImageryProvider.html", "GridMaterialProperty.html", "GroundPolylineGeometry.html", "GroundPolylinePrimitive.html", "GroundPrimitive.html", "HeadingPitchRange.html", "HeadingPitchRoll.html", "HeightmapTerrainData.html", "HeightReference.html", "HermitePolynomialApproximation.html", "HermiteSpline.html", "HomeButton.html", "HomeButtonViewModel.html", "HorizontalOrigin.html", "ImageMaterialProperty.html", "ImageryLayer.html", "ImageryLayerCollection.html", "ImageryLayerFeatureInfo.html", "ImageryProvider.html", "ImagerySplitDirection.html", "IndexDatatype.html", "InfoBox.html", "InfoBoxViewModel.html", "InterpolationAlgorithm.html", "Intersect.html", "Intersections2D.html", "IntersectionTests.html", "Interval.html", "Ion.html", "IonGeocoderService.html", "IonImageryProvider.html", "IonResource.html", "IonWorldImageryStyle.html", "isArray.html", "isLeapYear.html", "Iso8601.html", "JulianDate.html", "KeyboardEventModifier.html", "KmlCamera.html", "KmlDataSource.html", "KmlFeatureData.html", "KmlLookAt.html", "KmlTour.html", "KmlTourFlyTo.html", "KmlTourWait.html", "Label.html", "LabelCollection.html", "LabelGraphics.html", "LabelStyle.html", "LabelVisualizer.html", "LagrangePolynomialApproximation.html", "LeapSecond.html", "LinearApproximation.html", "LinearSpline.html", "loadCRN.html", "loadKTX.html", "MapboxImageryProvider.html", "MapMode2D.html", "MapProjection.html", "Material.html", "MaterialAppearance.html", "MaterialProperty.html", "Math.html", "Matrix2.html", "Matrix3.html", "Matrix4.html", "mergeSort.html", "Model.html", "ModelAnimation.html", "ModelAnimationCollection.html", "ModelAnimationLoop.html", "ModelGraphics.html", "ModelMaterial.html", "ModelMesh.html", "ModelNode.html", "ModelVisualizer.html", "Moon.html", "NavigationHelpButton.html", "NavigationHelpButtonViewModel.html", "NearFarScalar.html", "NeverTileDiscardPolicy.html", "NodeTransformationProperty.html", "objectToQuery.html", "Occluder.html", "OpenCageGeocoderService.html", "OrientedBoundingBox.html", "OrthographicFrustum.html", "OrthographicOffCenterFrustum.html", "Packable.html", "PackableForInterpolation.html", "Particle.html", "ParticleBurst.html", "ParticleEmitter.html", "ParticleSystem.html", "PathGraphics.html", "PathVisualizer.html", "PeliasGeocoderService.html", "PerformanceWatchdog.html", "PerformanceWatchdogViewModel.html", "PerInstanceColorAppearance.html", "PerspectiveFrustum.html", "PerspectiveOffCenterFrustum.html", "PinBuilder.html", "PixelFormat.html", "Plane.html", "PlaneGeometry.html", "PlaneGeometryUpdater.html", "PlaneGraphics.html", "PlaneOutlineGeometry.html", "PointCloudShading.html", "PointGraphics.html", "pointInsideTriangle.html", "PointPrimitive.html", "PointPrimitiveCollection.html", "PointVisualizer.html", "PolygonGeometry.html", "PolygonGeometryUpdater.html", "PolygonGraphics.html", "PolygonHierarchy.html", "PolygonOutlineGeometry.html", "Polyline.html", "PolylineArrowMaterialProperty.html", "PolylineCollection.html", "PolylineColorAppearance.html", "PolylineDashMaterialProperty.html", "PolylineGeometry.html", "PolylineGeometryUpdater.html", "PolylineGlowMaterialProperty.html", "PolylineGraphics.html", "PolylineMaterialAppearance.html", "PolylineOutlineMaterialProperty.html", "PolylineVisualizer.html", "PolylineVolumeGeometry.html", "PolylineVolumeGeometryUpdater.html", "PolylineVolumeGraphics.html", "PolylineVolumeOutlineGeometry.html", "PositionProperty.html", "PositionPropertyArray.html", "PostProcessStage.html", "PostProcessStageCollection.html", "PostProcessStageComposite.html", "PostProcessStageLibrary.html", "PostProcessStageSampleMode.html", "Primitive.html", "PrimitiveCollection.html", "PrimitiveType.html", "ProjectionPicker.html", "ProjectionPickerViewModel.html", "Property.html", "PropertyArray.html", "PropertyBag.html", "ProviderViewModel.html", "QuadraticRealPolynomial.html", "QuantizedMeshTerrainData.html", "QuarticRealPolynomial.html", "Quaternion.html", "QuaternionSpline.html", "queryToObject.html", "Queue.html", "Ray.html", "Rectangle.html", "RectangleGeometry.html", "RectangleGeometryUpdater.html", "RectangleGraphics.html", "RectangleOutlineGeometry.html", "ReferenceFrame.html", "ReferenceProperty.html", "Request.html", "requestAnimationFrame.html", "RequestErrorEvent.html", "RequestState.html", "RequestType.html", "Resource.html", "Rotation.html", "RuntimeError.html", "SampledPositionProperty.html", "SampledProperty.html", "sampleTerrain.html", "sampleTerrainMostDetailed.html", "Scene.html", "SceneMode.html", "SceneModePicker.html", "SceneModePickerViewModel.html", "SceneTransforms.html", "ScreenSpaceCameraController.html", "ScreenSpaceEventHandler.html", "ScreenSpaceEventType.html", "SelectionIndicator.html", "SelectionIndicatorViewModel.html", "ShadowMap.html", "ShadowMode.html", "ShowGeometryInstanceAttribute.html", "Simon1994PlanetaryPositions.html", "SimplePolylineGeometry.html", "SingleTileImageryProvider.html", "SkyAtmosphere.html", "SkyBox.html", "SphereEmitter.html", "SphereGeometry.html", "SphereOutlineGeometry.html", "Spherical.html", "Spline.html", "StencilFunction.html", "StencilOperation.html", "StripeMaterialProperty.html", "StripeOrientation.html", "StyleExpression.html", "subdivideArray.html", "Sun.html", "SvgPathBindingHandler.html", "TaskProcessor.html", "TerrainData.html", "TerrainProvider.html", "TextureMagnificationFilter.html", "TextureMinificationFilter.html", "TileAvailability.html", "TileCoordinatesImageryProvider.html", "TileDiscardPolicy.html", "TileProviderError.html", "TilingScheme.html", "TimeDynamicImagery.html", "TimeDynamicPointCloud.html", "TimeInterval.html", "TimeIntervalCollection.html", "TimeIntervalCollectionPositionProperty.html", "TimeIntervalCollectionProperty.html", "Timeline.html", "TimeStandard.html", "ToggleButtonViewModel.html", "Transforms.html", "TranslationRotationScale.html", "TridiagonalSystemSolver.html", "TrustedServers.html", "UrlTemplateImageryProvider.html", "VelocityOrientationProperty.html", "VelocityVectorProperty.html", "VertexFormat.html", "VerticalOrigin.html", "VideoSynchronizer.html", "Viewer.html", "viewerCesium3DTilesInspectorMixin.html", "viewerCesiumInspectorMixin.html", "viewerDragDropMixin.html", "viewerPerformanceWatchdogMixin.html", "ViewportQuad.html", "Visibility.html", "Visualizer.html", "VRButton.html", "VRButtonViewModel.html", "VRTheWorldTerrainProvider.html", "WallGeometry.html", "WallGeometryUpdater.html", "WallGraphics.html", "WallOutlineGeometry.html", "WebGLConstants.html", "WebMapServiceImageryProvider.html", "WebMapTileServiceImageryProvider.html", "WebMercatorProjection.html", "WebMercatorTilingScheme.html", "WeightSpline.html", "WindingOrder.html"
    ].map(d=>({
        name: d.replace(".html",""),
        icon:'stack',
        path:`${d}`
    }));
    // @ts-ignore
    menus.push(...data);
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
