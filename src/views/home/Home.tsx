/**
 * 首页
 * Created by 姚应龙 on 2018/10/11
 */
import * as React from 'react';

export default class Home extends React.Component{
    public render(){
        return (
            <div>
                <article className="post">
                    <h1>Cesium官方资料下载</h1>
                    <div id="czms">
                        <a href="https://www.cesium.com/" target="_blank">Cesium官网</a>
                        <a href="https://github.com/AnalyticalGraphicsInc/cesium" target="_blank">Cesium源码地址</a>
                        <a href="https://cesiumjs.org/downloads/" target="_blank">Cesium官方下载</a>
                    </div>
                </article>

                <article className="post">
                    <h1>飞渡Holo3DForWeb</h1>
                    <p>For Web
                        API是一套由JavaScript语言编写的应用程序接口，可以帮助您快速、简单、灵活的在您的业务系统中加入BIM、GIS应用，并提供在线数据转换功能，您可将手中的模型通过API转换为你需要的模型格式。</p>
                    <a href="http://forweb.gbim360.com" target="_blank">官网地址</a>&nbsp;
                    <a target="_blank" href="http://forweb.gbim360.com/latest/projectsManager/static/exampleDemo.html">示例程序</a>
                </article>

                <article className="post">
                    <h1>Cesium实验室(Cesiumlab)</h1>
                    <p>Cesiumlab是一款专为Cesium开源数字地球平台打造的免费数据处理工具集。</p>
                    <a href="https://www.cesiumlab.com/" target="_blank">Cesiumlab官网</a>&nbsp;
                    <a href="https://res.cesiumlab.com/cesiumlab1.4.4.exe" target="_blank">最新版下载</a>&nbsp;
                    <a href="https://pan.baidu.com/s/1_1_qW5o13On3l1CwEEkYVQ" target="_blank">依赖包下载</a>
                </article>

                <article className="post">
                    <h1>MarsGIS for Cesium三维地球框架</h1>
                    <p>MarsGIS for
                        Cesium是研发的一个Web三维地图开发平台系统，是火星科技团队成员多年GIS开发和Cesium使用的技术沉淀。基于Cesium和现代Web技术栈全新构建，
                        集成了领先的开源地图库、可视化库，提供了全新的大数据可视化、实时流数据可视化功能，通过本产品可快速实现浏览器和移动端上美观、流畅的三维地图呈现与空间分析。</p>
                    <a target="_blank" href="http://cesium.marsgis.cn/">官网地址</a>
                </article>

                <article className="post">
                    <h1>Wish3DEarth</h1>
                    <p>Wish3DEarth是另外一个基于Cesium的WebGL框架</p>
                    <a target="_blank" href="http://wish3d.com/Wish3DEarth.jsp">官网地址</a>&nbsp;
                    <a target="_blank" href="http://wish3d.com/Wish3DEarth/manage/index.jsp">在线平台</a>
                </article>

                <article className="post">
                    <h1>3dtiles&amp;gltf浏览器</h1>
                    <p>3dtiles&amp;gltf浏览器是专门用来<b>浏览本地离线3dtiles和gltf数据</b>的工具。</p>
                    离线3dtiles&amp;gltf浏览器（可以同时打开在线和离线数据）
                    <a href="https://www.czm6.com/t/18/3dtiles-explorer-help/index.html">查看帮助</a>&nbsp;
                    <a href="https://gitee.com/xiaofeii/n1808-cesium-notes/attach_files/download?i=157003&amp;u=http%3A%2F%2Ffiles.git.oschina.net%2Fgroup1%2FM00%2F04%2F7F%2FPaAvDFto9b6AHHDOAvA4u9Ypcso327.exe%3Ftoken%3D7bed89a8b2c8bd824df69a73c0b2aa4f%26ts%3D1533727438%26attname%3D3dtiles-gltf-explorer%2520Setup%25201.0.1.exe">码云下载</a>&nbsp;
                    <a target="_blank" href="https://pan.baidu.com/s/1Uat3DtH9cf79K4bLZGiZAA">百度网盘下载</a>&nbsp;
                    <a target="_blank" href="https://download.csdn.net/download/xiaofeii/10585026">CSDN下载</a>&nbsp;
                    <br/>
                    3dtiles&amp;gltf浏览器（注意只能打开在线数据）<a href="https://www.czm6.com/t/18/3dtiles-explorer/index.html" target="_blank">在线打开</a>
                </article>
            </div>
        )
    }

}