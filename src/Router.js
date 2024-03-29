import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import intl from 'react-intl-universal';

import LoginIndex from "./component/user/Login";
import IndexIndex from "./component/index/Index";
import PoolIndex from  "./component/pool/Index";
import UpgradeIndex from  "./component/upgrade/Index";
import UpgradeAdd from  "./component/upgrade/Add";

const locales = {
    "en-US": require('./lang/en-US'),
    "zh-CN": require('./lang/zh-CN'),
};

export default class Basic extends Component {
    state = {
        initDone: false,
        wsDone: 1
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.loadLocales();
    }

    componentWillUnmount() {
    }

    loadLocales() {
        intl.init({
            currentLocale: 'zh-CN',
            locales,
        }).then(() => {
            this.setState({initDone: true});
        });
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route path="/userweb/login" component={LoginIndex}/>
                        <Route path="/index/index" component={IndexIndex}/>
                        <Route path="/poolweb/index" component={PoolIndex}/>
                        <Route path="/upgradeweb/index" component={UpgradeIndex}/>
                        <Route path="/upgradeweb/add" component={UpgradeAdd}/>
                        <Route path="/" component={LoginIndex}/>
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
}