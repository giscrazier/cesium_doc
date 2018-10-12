import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {Provider} from 'mobx-react';
import * as React from 'react';
import './App.css';
import './App.css';
import stores from './models';
import Routers from './routes';

class App extends React.Component {
    public render() {
        return (
            <LocaleProvider locale={zhCN}>
                <Provider {...stores}>
                    <Routers/>
                </Provider>

            </LocaleProvider>

        );
    }
}

export default App;
