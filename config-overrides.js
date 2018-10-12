/**
 * Created by 姚应龙 on 2018/9/27
 */
const tsImportPluginFactory = require('ts-import-plugin');
const { getLoader } = require("react-app-rewired");
const rewireLess = require('react-app-rewire-less');
// const rewireLessWithModule = require('react-app-rewire-less-with-modules');
const rewireMobX = require('react-app-rewire-mobx');
// const {injectBabelPlugin, } = require('react-app-rewired');

module.exports = function override(config, env) {
    const tsLoader = getLoader(
        config.module.rules,
        rule =>
            rule.loader &&
            typeof rule.loader === 'string' &&
            rule.loader.includes('ts-loader')
    );

    tsLoader.options = {
        getCustomTransformers: () => ({
            before: [ tsImportPluginFactory({
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true,
            }) ]
        })
    };
    config = rewireMobX(config, env);

    config = rewireLess.withLoaderOptions({
        javascriptEnabled: true,
        modifyVars: { "@primary-color": "#1DA57A" },
    })(config, env);



    return config;

};