/**
 * 菜单
 * Created by 姚应龙 on 2018/10/21
 */
import {IMenu} from "./global";

const API_MENUS:IMenu[] = [
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
                name: 'createGuid',
                icon: 'file-text2',
                path: "createGuid.html",
            },
            {
                name: 'Credit',
                icon: 'file-text2',
                path: "Credit.html",
            },
            {
                name: 'CreditDisplay',
                icon: 'file-text2',
                path: "CreditDisplay.html"
            },
            {
                name: 'ReferenceFrame',
                icon: 'file-text2',
                path: "ReferenceFrame.html",
            },
            {
                name: 'Request',
                icon: 'file-text2',
                path: "Request.html",
            },
            {
                name: 'requestAnimationFrame',
                icon: 'file-text2',
                path: "requestAnimationFrame.html",
            },
            {
                name: 'RequestErrorEvent',
                icon: 'file-text2',
                path: "RequestErrorEvent.html",
            },
            {
                name: 'RequestState',
                icon: 'file-text2',
                path: "RequestState.html",
            },
            {
                name: 'RuntimeError',
                icon: 'file-text2',
                path: "RuntimeError.html",
            },
            {
                name: 'WebGLConstants',
                icon: 'file-text2',
                path: "WebGLConstants.html",
            },
            {
                name: 'VideoSynchronizer',
                icon: 'file-text2',
                path: "VideoSynchronizer.html",
            },
            {
                name: 'CameraEventAggregator',
                icon: 'file-text2',
                path: "CameraEventAggregator.html",
            },
            {
                name: 'queryToObject',
                icon: 'file-text2',
                path: "queryToObject.html",
            },
            {
                name: 'loadCRN',
                icon: 'file-text2',
                path: "loadCRN.html"
            },
            {
                name: 'loadKTX',
                icon: 'file-text2',
                path: "loadKTX.html",
            }
        ]
    },
    {
        name: 'cesium/Algorithm',
        icon: 'stack',
        path: 'cesium/Algorithm',
        children:[
            {
                name: 'HermitePolynomialApproximation',
                icon: 'file-text2',
                path: "HermitePolynomialApproximation.html",
            },
            {
                name: 'InterpolationAlgorithm',
                icon: 'file-text2',
                path: "InterpolationAlgorithm.html",
            },
            {
                name: 'LagrangePolynomialApproximation',
                icon: 'file-text2',
                path: "LagrangePolynomialApproximation.html",
            },
            {
                name: 'LinearApproximation',
                icon: 'file-text2',
                path: "LinearApproximation.html",
            },
            {
                name: 'Spline',
                icon: 'file-text2',
                path: "Spline.html",
            },

            {
                name: 'HermiteSpline',
                icon: 'file-text2',
                path: "HermiteSpline.html",
            },
            {
                name: 'CatmullRomSpline',
                icon: 'file-text2',
                path: "CatmullRomSpline.html",
            },
            {
                name: 'LinearSpline',
                icon: 'file-text2',
                path: "LinearSpline.html",
            },
            {
                name: 'QuaternionSpline',
                icon: 'file-text2',
                path: "QuaternionSpline.html",
            },
            {
                name: 'WeightSpline',
                icon: 'file-text2',
                path: "WeightSpline.html",
            },
            {
                name: 'QuadraticRealPolynomial',
                icon: 'file-text2',
                path: "QuadraticRealPolynomial.html",
            },
            {
                name: 'QuarticRealPolynomial',
                icon: 'file-text2',
                path: "QuarticRealPolynomial.html",
            },
            {
                name: 'Quaternion',
                icon: 'file-text2',
                path: "Quaternion.html",
            },
            {
                name: 'Queue',
                icon: 'file-text2',
                path: "Queue.html",
            },
            {
                name:'sampleTerrain',
                icon: 'file-text2',
                path: "sampleTerrain.html",
            },
            {
                name:'sampleTerrainMostDetailed',
                icon: 'file-text2',
                path: "sampleTerrainMostDetailed.html",
            },
            {
                name:'Simon1994PlanetaryPositions',
                icon: 'file-text2',
                path: "Simon1994PlanetaryPositions.html",
            },
            {
                name:'VelocityVectorProperty',
                icon: 'file-text2',
                path: "VelocityVectorProperty.html",
            },
            {
                name:'VelocityOrientationProperty',
                icon: 'file-text2',
                path: "VelocityOrientationProperty.html",
            },
            {
                name:'Transforms',
                icon: 'file-text2',
                path: "Transforms.html",
            },
            {
                name:'TridiagonalSystemSolver',
                icon: 'file-text2',
                path: "TridiagonalSystemSolver.html",
            },
            {
                name:'pointInsideTriangle',
                icon: 'file-text2',
                path: "pointInsideTriangle.html",
            },


        ]
    },
    {
        name: 'cesium/animation',
        icon: 'stack',
        path: 'cesium/animation',
        children:[
            {
                name: 'EasingFunction',
                icon: 'file-text2',
                path: "EasingFunction.html",
            },
            {
                name: 'cancelAnimationFrame',
                icon: 'file-text2',
                path: "cancelAnimationFrame.html",
            },
        ]
    },
    {
        name: 'cesium/Cesium3DTile',
        icon: 'stack',
        path: 'cesium/Cesium3DTile',
        children:[
            {
                name: 'Cesium3DTile',
                icon: 'file-text2',
                path: "Cesium3DTile.html",
            },
            {
                name: 'Cesium3DTileContent',
                icon: 'file-text2',
                path: "Cesium3DTileContent.html",
            },
            {
                name: 'Cesium3DTileFeature',
                icon: 'file-text2',
                path: "Cesium3DTileFeature.html"
            },
            {
                name: 'Cesium3DTilePointFeature',
                icon: 'file-text2',
                path: "Cesium3DTilePointFeature.html"
            },
            {
                name: 'Cesium3DTileset',
                icon: 'file-text2',
                path: "Cesium3DTileset.html"
            },
            {
                name: 'Cesium3DTilesInspector',
                icon: 'file-text2',
                path: "Cesium3DTilesInspector.html"
            },
            {
                name: 'ConditionsExpression',
                icon: 'file-text2',
                path: "ConditionsExpression.html",
            },
            {
                name: 'Expression',
                icon: 'file-text2',
                path: "Expression.html",
            }
        ]
    },

    {
        name: 'cesium/Blend',
        icon: 'stack',
        path: 'cesium/Blend',
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
        name: 'cesium/Cartesian',
        icon: 'stack',
        path: 'cesium/Cartesian',
        children: [
            {
                name: 'Cartesian2',
                icon: 'file-text2',
                path: "Cartesian2.html",
            },
            {
                name: 'Cartesian3',
                icon: 'file-text2',
                path: "Cartesian3.html",
            },
            {
                name: 'Cartesian4',
                icon: 'file-text2',
                path: "Cartesian4.html",
            },


        ]
    },
    {
        name:'cesium/camera',
        icon: 'stack',
        path: 'cesium/camera',
        children: [
            {
                name: 'PerspectiveFrustum',
                icon: 'file-text2',
                path: "PerspectiveFrustum.html",
            },
            {
                name: 'PerspectiveOffCenterFrustum',
                icon: 'file-text2',
                path: "PerspectiveOffCenterFrustum.html",
            },
            {
                name: 'OrthographicFrustum',
                icon: 'file-text2',
                path: "OrthographicFrustum.html",
            },
            {
                name: 'OrthographicOffCenterFrustum',
                icon: 'file-text2',
                path: "OrthographicOffCenterFrustum.html",
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
            {
                name: 'Interval',
                icon: 'file-text2',
                path: "Interval.html",
            },
            {
                name: 'TimeInterval',
                icon: 'file-text2',
                path: "TimeInterval.html",
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
            {
                name: 'Fullscreen',
                icon: 'file-text2',
                path: "Fullscreen.html",
            },
            {
                name: 'binarySearch',
                icon: 'file-text2',
                path: "binarySearch.html",
            },
            {
                name: 'DefaultProxy',
                icon: 'file-text2',
                path: "DefaultProxy.html",
            },
            {
                name: 'CubicRealPolynomial',
                icon: 'file-text2',
                path: "CubicRealPolynomial.html",
            },
            {
                name: 'Event',
                icon: 'file-text2',
                path: "Event.html",
            },
            {
                name: 'EventHelper',
                icon: 'file-text2',
                path: "EventHelper.html",
            },
            {
                name: 'TileAvailability',
                icon: 'file-text2',
                path: "TileAvailability.html",
            },
            {
                name: 'TilingScheme',
                icon: 'file-text2',
                path: "TilingScheme.html",
            },
            {
                name: 'GeographicTilingScheme',
                icon: 'file-text2',
                path: "GeographicTilingScheme.html",
            },
            {
                name: 'WebMercatorTilingScheme',
                icon: 'file-text2',
                path: "WebMercatorTilingScheme.html",
            },
            {
                name: 'NearFarScalar',
                icon: 'file-text2',
                path: "NearFarScalar.html",
            },
            {
                name: 'TranslationRotationScale',
                icon: 'file-text2',
                path: "TranslationRotationScale.html",
            },
            {
                name: 'objectToQuery',
                icon: 'file-text2',
                path: "objectToQuery.html",
            },
            {
                name: 'Occluder',
                icon: 'file-text2',
                path: "Occluder.html",
            },
            {
                name: 'Packable',
                icon: 'file-text2',
                path: "Packable.html",
            },
            {
                name: 'Rotation',
                icon: 'file-text2',
                path: "Rotation.html",
            },
            {
                name: 'PackableForInterpolation',
                icon: 'file-text2',
                path: "PackableForInterpolation.html",
            },
            {
                name: 'Resource',
                icon: 'file-text2',
                path: "Resource.html",
            },
            {
                name: 'Ray',
                icon: 'file-text2',
                path: "Ray.html",
            },
            {
                name: 'WindingOrder',
                icon: 'file-text2',
                path: "WindingOrder.html"
            },
            {
                name: 'Visibility',
                icon: 'file-text2',
                path: "Visibility.html",
            },
            {
                name: 'VertexFormat',
                icon: 'file-text2',
                path: "VertexFormat.html",
            },
            {
                name: 'TrustedServers',
                icon: 'file-text2',
                path: "TrustedServers.html",
            },
            {
                name: 'CullingVolume',
                icon: 'file-text2',
                path: "CullingVolume.html"
            }


        ]
    },
    {
        name: 'cesium/core/math',
        icon: 'stack',
        path: 'cesium/core/math',
        children:[
            {
                name: 'Ellipsoid',
                icon: 'file-text2',
                path: "Ellipsoid.html",
            },
            {
                name: 'EllipsoidGeodesic',
                icon: 'file-text2',
                path: "EllipsoidGeodesic.html",
            },
            {
                name: 'EllipsoidTangentPlane',
                icon: 'file-text2',
                path: "EllipsoidTangentPlane.html",
            },
            {
                name: 'EllipsoidTangentPlane',
                icon: 'file-text2',
                path: "EllipsoidTangentPlane.html",
            },
            {
                name: 'Math',
                icon: 'file-text2',
                path: "Math.html",
            },
            {
                name: 'Matrix2',
                icon: 'file-text2',
                path: "Matrix2.html"
            },
            {
                name: 'Matrix3',
                icon: 'file-text2',
                path: "Matrix3.html"
            },
            {
                name: 'Matrix4',
                icon: 'file-text2',
                path: "Matrix4.html"
            },
            {
                name: 'mergeSort',
                icon: 'file-text2',
                path: "mergeSort.html",
            },

        ]
    },
    {
        name: 'cesium/core/lang',
        icon: 'stack',
        path: 'cesium/core/lang',
        children:[
            {
                name: 'defaultValue',
                icon: 'file-text2',
                path: "defaultValue.html"
            },
            {
                name: 'defined',
                icon: 'file-text2',
                path: "defined.html",
            },
            {
                name: 'destroyObject',
                icon: 'file-text2',
                path: "destroyObject.html",
            },
            {
                name: 'DeveloperError',
                icon: 'file-text2',
                path: "DeveloperError.html",
            },
            {
                name: 'FeatureDetection',
                icon: 'file-text2',
                path: "FeatureDetection.html",
            },
            {
                name: 'formatError',
                icon: 'file-text2',
                path: "formatError.html",
            },
            {
                name: 'GregorianDate',
                icon: 'file-text2',
                path: "GregorianDate.html",
            },
            {
                name: 'JulianDate',
                icon: 'file-text2',
                path: "JulianDate.html",
            },
            {
                name: 'TimeStandard',
                icon: 'file-text2',
                path: "TimeStandard.html",
            },
            {
                name: 'Iso8601',
                icon: 'file-text2',
                path: "Iso8601.html",
            },
            {
                name: 'isArray',
                icon: 'file-text2',
                path: "isArray.html",
            },
            {
                name: 'isLeapYear',
                icon: 'file-text2',
                path: "isLeapYear.html",
            },
            {
                name: 'LeapSecond',
                icon: 'file-text2',
                path: "LeapSecond.html",
            },
            {
                name: 'subdivideArray',
                icon: 'file-text2',
                path: "subdivideArray.html",
            },

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
            }


        ]
    },
    {
        name: 'cesium/DataSource/PositionProperty',
        icon: 'stack',
        path: 'cesium/DataSource/PositionProperty',
        children:[
            {
                name: 'CompositePositionProperty',
                icon: 'file-text2',
                path: "CompositePositionProperty.html",
            },
            {
                name: 'ConstantPositionProperty',
                icon: 'file-text2',
                path: "ConstantPositionProperty.html",
            },
            {
                name: 'PositionPropertyArray',
                icon: 'file-text2',
                path: "PositionPropertyArray.html",
            },
            {
                name: 'SampledPositionProperty',
                icon: 'file-text2',
                path: "SampledPositionProperty.html",
            }
        ]
    },
    {
        name: 'cesium/DataSource/support',
        icon: 'stack',
        path: 'cesium/DataSource/support',
        children:[
            {
                name: 'CallbackProperty',
                icon: 'file-text2',
                path: "CallbackProperty.html",
            },
            {
                name: 'EntityCluster',
                icon: 'file-text2',
                path: "EntityCluster.html",
            },
            {
                name: 'EntityView',
                icon: 'file-text2',
                path: "EntityView.html",
            },
            {
                name: 'KmlCamera',
                icon: 'file-text2',
                path: "KmlCamera.html",
            },
            {
                name: 'KmlFeatureData',
                icon: 'file-text2',
                path: "KmlFeatureData.html",
            },
            {
                name: 'KmlLookAt',
                icon: 'file-text2',
                path: "KmlLookAt.html",
            },
            {
                name: 'KmlTour',
                icon: 'file-text2',
                path: "KmlTour.html",
            },
            {
                name: 'KmlTourFlyTo',
                icon: 'file-text2',
                path: "KmlTourFlyTo.html",
            },
            {
                name: 'KmlTourWait',
                icon: 'file-text2',
                path: "KmlTourWait.html",
            },
            {
                name: 'NodeTransformationProperty',
                icon: 'file-text2',
                path: "NodeTransformationProperty.html",
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
        name: 'cesium/eventHelper',
        icon: 'stack',
        path: 'cesium/eventHelper',
        children: [
            {
                name: 'KeyboardEventModifier',
                icon: 'file-text2',
                path: "KeyboardEventModifier.html",
            },
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
                name: 'Label',
                icon: 'file-text2',
                path: "Label.html",
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
                name: 'Plane',
                icon: 'file-text2',
                path: "Plane.html",
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
                name: 'PolygonHierarchy',
                icon: 'file-text2',
                path: "PolygonHierarchy.html"
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
                name: 'Polyline',
                icon: 'file-text2',
                path: "Polyline.html",
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
                name: 'Rectangle',
                icon: 'file-text2',
                path: "Rectangle.html",
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
            },
            {
                name: 'TimeDynamicPointCloud',
                icon: 'file-text2',
                path: "TimeDynamicPointCloud.html",
            },
            {
                name: 'PointCloudShading',
                icon: 'file-text2',
                path: "PointCloudShading.html",
            },
            {
                name: 'TimeDynamicImagery',
                icon: 'file-text2',
                path: "TimeDynamicImagery.html",
            },

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
        name: 'cesium/Ion',
        icon: 'stack',
        path: 'cesium/Ion',
        children: [
            {
                name: 'Ion',
                icon: 'file-text2',
                path: "Ion.html",
            },
            {
                name: 'IonResource',
                icon: 'file-text2',
                path: "IonResource.html",
            },
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
        name: 'cesium/Property',
        icon: 'stack',
        path: 'cesium/Property',
        children: [
            {
                name: 'Property',
                icon: 'file-text2',
                path: "Property.html",
            },
            {
                name: 'PropertyArray',
                icon: 'file-text2',
                path: "PropertyArray.html",
            },
            {
                name: 'PropertyBag',
                icon: 'file-text2',
                path: "PropertyBag.html",
            },

            {
                name: 'CompositeProperty',
                icon: 'file-text2',
                path: "CompositeProperty.html",
            },
            {
                name: 'ConstantProperty',
                icon: 'file-text2',
                path: "ConstantProperty.html",
            },
            {
                name: 'SampledProperty',
                icon: 'file-text2',
                path: "SampledProperty.html",
            },
            {
                name: 'TimeIntervalCollectionProperty',
                icon: 'file-text2',
                path: "TimeIntervalCollectionProperty.html"
            },
            {
                name: 'MaterialProperty',
                icon: 'file-text2',
                path: "MaterialProperty.html",
            },
            {
                name: 'PositionProperty',
                icon: 'file-text2',
                path: "PositionProperty.html",
            },
            {
                name: 'ReferenceProperty',
                icon: 'file-text2',
                path: "ReferenceProperty.html",
            }
        ]
    },

    {
        name: 'cesium/MaterialProperty',
        icon: 'stack',
        path: 'cesium/MaterialProperty',
        children: [
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
            },
            {
                name: 'StripeOrientation',
                icon: 'file-text2',
                path: "StripeOrientation.html",
            },

        ]
    },
    {
        name: 'cesium/model',
        icon: 'stack',
        path: 'cesium/model',
        children: [
            {
                name: 'Model',
                icon: 'file-text2',
                path: "Model.html",
            },
            {
                name: 'ModelAnimation',
                icon: 'file-text2',
                path: "ModelAnimation.html",
            },
            {
                name: 'ModelAnimationLoop',
                icon: 'file-text2',
                path: "ModelAnimationLoop.html",
            },
            {
                name: 'ModelMesh',
                icon: 'file-text2',
                path: "ModelMesh.html",
            },
            {
                name: 'ModelNode',
                icon: 'file-text2',
                path: "ModelNode.html",
            },

        ]
    },
    {
        name: 'cesium/Particle',
        icon: 'stack',
        path: 'cesium/Particle',
        children: [
            {
                name: 'Particle',
                icon: 'file-text2',
                path: "Particle.html",
            },
            {
                name: 'ParticleBurst',
                icon: 'file-text2',
                path: "ParticleBurst.html",
            },
            {
                name: 'ParticleSystem',
                icon: 'file-text2',
                path: "ParticleSystem.html",
            },

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
        name: 'cesium/project',
        icon: 'stack',
        path: 'cesium/project',
        children:[
            {
                name: 'MapProjection',
                icon: 'file-text2',
                path: "MapProjection.html",
            },
            {
                name: 'GeographicProjection',
                icon: 'file-text2',
                path: "GeographicProjection.html",
            },
            {
                name: 'WebMercatorProjection',
                icon: 'file-text2',
                path: "WebMercatorProjection.html",
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
        name:'cesium/Provider/create',
        icon:'stack',
        path:'cesium/Provider/create',
        children:[
            {
                name:'createWorldImagery',
                icon: 'file-text2',
                path: "createWorldImagery.html",
            },
            {
                name:'createWorldTerrain',
                icon: 'file-text2',
                path: "createWorldTerrain.html",
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
        name: 'cesium/provider/Support',
        icon: 'stack',
        path: 'cesium/provider/Support',
        children: [
            {
                name: 'BingMapsApi',
                icon: 'file-text2',
                path: "BingMapsApi.html"
            },
            {
                name: 'GoogleEarthEnterpriseMetadata',
                icon: 'file-text2',
                path: "GoogleEarthEnterpriseMetadata.html",
            },
            {
                name: 'GoogleEarthEnterpriseTerrainData',
                icon: 'file-text2',
                path: "GoogleEarthEnterpriseTerrainData.html",
            },

            {
                name: 'TerrainData',
                icon: 'file-text2',
                path: "TerrainData.html",
            },
            {
                name: 'HeightmapTerrainData',
                icon: 'file-text2',
                path: "HeightmapTerrainData.html",
            },
            {
                name: 'QuantizedMeshTerrainData',
                icon: 'file-text2',
                path: "QuantizedMeshTerrainData.html",
            },
        ]
    },
    {
        name: 'cesium/provider/Policy',
        icon: 'stack',
        path: 'cesium/provider/Policy',
        children: [
            {
                name: 'DiscardMissingTileImagePolicy',
                icon: 'file-text2',
                path: "DiscardMissingTileImagePolicy.html",
            },
            {
                name: 'NeverTileDiscardPolicy',
                icon: 'file-text2',
                path: "NeverTileDiscardPolicy.html",
            },
            {
                name: 'TileDiscardPolicy',
                icon: 'file-text2',
                path: "TileDiscardPolicy.html",
            },

        ]
    },
    {
        name:'cesium/scene',
        icon:'stack',
        path:'cesium/scene',
        children:[

            {
                name:'Scene',
                icon:'file-text2',
                path:"Scene.html",
            },
            {
                name:'SceneMode',
                icon:'file-text2',
                path: "SceneMode.html",
            },
            {
                name:'SceneTransforms',
                icon:'file-text2',
                path: "SceneTransforms.html",
            },
            {
                name:'CullFace',
                icon:'file-text2',
                path:"CullFace.html",
            },
            {
                name:'DepthFunction',
                icon:'file-text2',
                path:"DepthFunction.html",
            },
            {
                name:'DistanceDisplayCondition',
                icon:'file-text2',
                path:"DistanceDisplayCondition.html",
            },
            {
                name:'DistanceDisplayCondition',
                icon:'file-text2',
                path:"DistanceDisplayCondition.html",
            },
            {
                name:'Fog',
                icon:'file-text2',
                path:"Fog.html",
            },
            {
                name:'FrameRateMonitor',
                icon:'file-text2',
                path:"FrameRateMonitor.html",
            },
            {
                name:'HeadingPitchRange',
                icon:'file-text2',
                path:"HeadingPitchRange.html",
            },
            {
                name:'HeadingPitchRoll',
                icon:'file-text2',
                path:"HeadingPitchRoll.html",
            },
            {
                name:'HeightReference',
                icon:'file-text2',
                path:"HeightReference.html",
            },
            {
                name: 'Globe',
                icon: 'file-text2',
                path: "Globe.html",
            },
            {
                name: 'ImageryLayer',
                icon: 'file-text2',
                path: "ImageryLayer.html",
            },
            {
                name: 'ImageryLayerFeatureInfo',
                icon: 'file-text2',
                path: "ImageryLayerFeatureInfo.html",
            },
            {
                name: 'ImagerySplitDirection',
                icon: 'file-text2',
                path: "ImagerySplitDirection.html",
            },
            {
                name: 'Moon',
                icon: 'file-text2',
                path: "Moon.html",
            },
            {
                name: 'Sun',
                icon: 'file-text2',
                path: "Sun.html",
            },

            {
                name: 'SkyAtmosphere',
                icon: 'file-text2',
                path: "SkyAtmosphere.html",
            },
            {
                name: 'SkyBox',
                icon: 'file-text2',
                path: "SkyBox.html",
            },
            {
                name: 'Spherical',
                icon: 'file-text2',
                path: "Spherical.html",
            },
            {
                name: 'ScreenSpaceCameraController',
                icon: 'file-text2',
                path: "ScreenSpaceCameraController.html",
            },
            {
                name: 'ScreenSpaceEventHandler',
                icon: 'file-text2',
                path: "ScreenSpaceEventHandler.html",
            },
            {
                name: 'ShadowMap',
                icon: 'file-text2',
                path: "ShadowMap.html"
            },
            {
                name: 'ShadowMode',
                icon: 'file-text2',
                path: "ShadowMode.html"
            },
            {
                name: 'ViewportQuad',
                icon: 'file-text2',
                path: "ViewportQuad.html",
            },
            {
                name: 'HorizontalOrigin',
                icon: 'file-text2',
                path: "HorizontalOrigin.html",
            },
            {
                name: 'VerticalOrigin',
                icon: 'file-text2',
                path: "VerticalOrigin.html",
            },
            {
                name: 'StencilFunction',
                icon: 'file-text2',
                path: "StencilFunction.html",
            },
            {
                name: 'StencilOperation',
                icon: 'file-text2',
                path: "StencilOperation.html",
            },
            {
                name: 'MapMode2D',
                icon: 'file-text2',
                path: "MapMode2D.html",
            },

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
            {
                name: 'CompressedTextureBuffer',
                icon: 'file-text2',
                path: "CompressedTextureBuffer.html",
            },
            {
                name: 'TextureMagnificationFilter',
                icon: 'file-text2',
                path: "TextureMagnificationFilter.html",
            },
            {
                name: 'TextureMinificationFilter',
                icon: 'file-text2',
                path: "TextureMinificationFilter.html",
            },

        ]
    },
    {
        name: 'cesium/spatialAnalysis',
        icon: 'stack',
        path: 'cesium/spatialAnalysis',
        children: [
            {
                name: 'Intersect',
                icon: 'file-text2',
                path: "Intersect.html",
            },
            {
                name: 'Intersections2D',
                icon: 'file-text2',
                path: "Intersections2D.html",
            },
            {
                name: 'IntersectionTests',
                icon: 'file-text2',
                path: "IntersectionTests.html",
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
        name: 'cesium/util',
        icon: 'stack',
        path: 'cesium/util',
        children:[
            {
                name: 'GetFeatureInfoFormat',
                icon: 'file-text2',
                path: "GetFeatureInfoFormat.html",
            },
            {
                name: 'getImagePixels',
                icon: 'file-text2',
                path: "getImagePixels.html",
            },
            {
                name: 'getTimestamp',
                icon: 'file-text2',
                path: "getTimestamp.html",
            },
            {
                name: 'PinBuilder',
                icon: 'file-text2',
                path: "PinBuilder.html",
            },
            {
                name: 'PixelFormat',
                icon: 'file-text2',
                path: "PixelFormat.html",
            },


        ]
    },
    {
        name: 'cesium/util/uri',
        icon: 'stack',
        path: 'cesium/util/uri',
        children:[
            {
                name: 'getAbsoluteUri',
                icon: 'file-text2',
                path: "getAbsoluteUri.html",
            },
            {
                name: 'getBaseUri',
                icon: 'file-text2',
                path: "getBaseUri.html",
            },
            {
                name: 'getExtensionFromUri',
                icon: 'file-text2',
                path: "getExtensionFromUri.html",
            },
            {
                name: 'getFilenameFromUri',
                icon: 'file-text2',
                path: "getFilenameFromUri.html",
            },
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
    {
        name: 'cesium/worker',
        icon: 'stack',
        path: 'cesium/worker',
        children:[

            {
                name: 'TaskProcessor',
                icon: 'file-text2',
                path: "TaskProcessor.html",
            },
            {
                name: 'createTaskProcessorWorker',
                icon: 'file-text2',
                path: "createTaskProcessorWorker.html",
            },
            {
                name: 'PostProcessStage',
                icon: 'file-text2',
                path: "PostProcessStage.html",
            },
            {
                name: 'PostProcessStageComposite',
                icon: 'file-text2',
                path: "PostProcessStageComposite.html",
            },
            {
                name: 'PostProcessStageLibrary',
                icon: 'file-text2',
                path: "PostProcessStageLibrary.html",
            },
            {
                name: 'PostProcessStageSampleMode',
                icon: 'file-text2',
                path: "PostProcessStageSampleMode.html",
            },


        ]
    }


];

export default API_MENUS;