import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
//Components
import Header from '../Components/Header/Header';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles} from '../themes';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import * as walletActions from '../redux/actions/wallet/wallet.action';
import { PuffLoader } from "react-spinners";

// * Lazy loading
const Swap = React.lazy(() => import('../Pages/Swap'));
const Farms = React.lazy(() => import('../Pages/Farms'));
const Ponds = React.lazy(() => import('../Pages/Ponds'));
const Pools = React.lazy(() => import('../Pages/Pools'));
const Frontpage = React.lazy(() => import("../Pages/Frontpage/Frontpage"));

const Routes = (props) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    const connectWallet = async () => {
        if (props.userAddress === null) {
            return props.connectWallet();
        }
    };

    const disconnectUserWallet = async () => {
        if (props.userAddress) {
            return props.disconnectWallet();
        }
    };

    useEffect(() => {
        return props.fetchWalletAddress();
    }, []);

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <React.Suspense fallback={<PuffLoader />}>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Frontpage
                            toggleTheme={toggleTheme}
                            theme={theme}
                            connecthWallet={connectWallet}
                            disconnectWallet={disconnectUserWallet}
                            walletAddress={props.userAddress}/>
                    </Route>
                    <div>
                        <Header
                            toggleTheme={toggleTheme}
                            theme={theme}
                            connecthWallet={connectWallet}
                            disconnectWallet={disconnectUserWallet}
                            walletAddress={props.userAddress}
                        />

                        <Route path="/swap" exact>
                            <Swap
                                walletAddress={props.userAddress}
                                connecthWallet={connectWallet}
                            />
                        </Route>
                        <Route path="/farms">
                            <Farms walletAddress={props.userAddress}/>
                        </Route>
                        <Route path="/pools">
                            <Pools walletAddress={props.userAddress}/>
                        </Route>
                        <Route path="/ponds">
                            <Ponds walletAddress={props.userAddress}/>
                        </Route>
                    </div>
                </Switch>
            </Router>
            </React.Suspense>
        </ThemeProvider>
    );
};

const mapStateToProps = state => {
    return {
        userAddress: state.wallet.address,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        connectWallet: () => (dispatch(walletActions.connectWallet())),
        disconnectWallet: () => (dispatch(walletActions.disconnectWallet())),
        fetchWalletAddress: () => (dispatch(walletActions.fetchWalletAddress())),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
