import { userConstants } from '../_constants';
import { userService } from '../_services';
import { users } from '../_reducers/users.reducer';
import { alertActions } from './alert.actions';
import { ActivityIndicator, Alert } from 'react-native';

export const userActions = {

    register,
    registerOtp,
    login,
    loginOtp,
    getProfile,
    forgetPassword,
    forgotUpdatePassword,
    updateProfile,
    addContractAddress,
    getWalletList,
    sendCoin,
    getTX,
    uploadProfileImg,
    createWallet,
    getAddressList,
    save_Wallet_address


}
function save_Wallet_address(data) {
    return dispatch => {
        dispatch(success({ data }));
        dispatch(userActions.getWalletList())
    };
    function success(data) { return { type: userConstants.WALLET_SUCCESS, data } }
}
function getAddressList(data) {
    return dispatch => {
        dispatch(request());
        userService.getAddressList(data).then(
            users => {
                if (users.getAddressData && users.getAddressData.error) {
                    dispatch(failure(error));
                } else {
                    dispatch(success(users));
                }
            },
        );
    };
    function request() { return { type: userConstants.GET_ADDRESS_REQUEST }; }
    function success(users) { return { type: userConstants.GET_ADDRESS_SUCCESS, users }; }
    function failure(error) { return { type: userConstants.GET_ADDRESS_FAILURE, error }; }
}

function createWallet(data, props) {
    return dispatch => {
        dispatch(request());
        userService.createWallet(data).then(
            users => {
                if (users.createWalletData && users.createWalletData.error) {
                    dispatch(alertActions.error(users.createWalletData.message));
                    dispatch(failure(error));
                } else {
                    let message = users && users.createWalletData && users.createWalletData.messages ? users.createWalletData.message : 'Wallet created successfully'
                    dispatch(alertActions.success(message));
                    dispatch(userActions.getAddressList())
                    dispatch(success(users));
                }
            },
        );
    };
    function request() { return { type: userConstants.CREATE_WALLET_REQUEST }; }
    function success(users) { return { type: userConstants.CREATE_WALLET_SUCCESS, users }; }
    function failure(error) { return { type: userConstants.CREATE_WALLET_FAILURE, error }; }
}


function uploadProfileImg(image) {
    return dispatch => {
        dispatch(request());
        userService.uploadProfileImg(image).then(
            users => {
                dispatch(success(users));
                dispatch(userActions.getProfile())
            },
            error => {
                dispatch(failure(error));
            },
        );
    };
    function request() { return { type: userConstants.UPLOAD_PROFILE_IMG_REQUEST }; }
    function success(users) { return { type: userConstants.UPLOAD_PROFILE_IMG_SUCCESS, users }; }
    function failure(error) { return { type: userConstants.UPLOAD_PROFILE_IMG_FAILURE, error }; }
}


function getTX() {
    return dispatch => {
        dispatch(request());
        userService.getTX().then(
            users => {
                dispatch(success(users));
            },
            error => {
                dispatch(failure(error));
            },
        );
    };
    function request() { return { type: userConstants.GET_TX_REQUEST }; }
    function success(users) { return { type: userConstants.GET_TX_SUCCESS, users }; }
    function failure(error) { return { type: userConstants.GET_TX_FAILURE, error }; }
}

function sendCoin(data, props) {
    return dispatch => {
        dispatch(request());
        userService.sendCoin(data).then(
            users => {
                if (users.sendCoin && users.sendCoin.error) {
                    dispatch(alertActions.error(users.sendCoin.message));
                    dispatch(failure(error));
                } else {
                    let message = users && users.sendCoin && users.sendCoin.message ? users.sendCoin.message : ''
                    dispatch(alertActions.success(message));
                    dispatch(success(users));
                    getWalletList()
                    getTX()
                    setTimeout(() => {
                        props.navigation.navigate('Notification');
                    }, 1000);
                }
            },
        );
    };
    function request() { return { type: userConstants.SEND_COIN_REQUEST }; }
    function success(users) { return { type: userConstants.SEND_COIN_SUCCESS, users }; }
    function failure(error) { return { type: userConstants.SEND_COIN_FAILURE, error }; }
}

function getWalletList(data) {
    return dispatch => {
        dispatch(request());
        userService.getWalletList(data).then(
            users => {
                dispatch(success(users));
            },
            error => {
                dispatch(failure(error));
            },
        );
    };
    function request() { return { type: userConstants.GET_WALLET_LIST_REQUEST }; }
    function success(users) { return { type: userConstants.GET_WALLET_LIST_SUCCESS, users }; }
    function failure(error) { return { type: userConstants.GET_WALLET_LIST_FAILURE, error }; }
}

function addContractAddress(data, props,) {
    return dispatch => {
        dispatch(request());
        userService.addContractAddress(data).then(
            users => {
                console.log('------------->', users);
                if (users.addResponce && users.addResponce.error) {
                    // dispatch(alertActions.error(users && users.addResponce && users.addResponce.message ? users.addResponce.message : ''));
                    dispatch(Alert.alert('Alert!', users.addResponce.message))
                    // dispatch(ActivityIndicator.alert('Alert!', users.addResponce.message))
                    dispatch(failure(error));
                } else {
                    let message = users && users.addResponce && users.addResponce.message ? users.addResponce.message : ''
                    dispatch(alertActions.success(message));
                    dispatch(success(users));
                    setTimeout(() => {
                        props.navigation.navigate('Dashboard');
                    }, 1000);
                }
            },
        );
    };
    function request() { return { type: userConstants.ADD_CONTRACT_ADDRESS_REQUEST }; }
    function success(users) { return { type: userConstants.ADD_CONTRACT_ADDRESS_SUCCESS, users }; }
    function failure(error) { return { type: userConstants.ADD_CONTRACT_ADDRESS_FAILURE, error }; }
}




function updateProfile(formData, props, setEditProfile) {
    return dispatch => {
        dispatch(request());
        userService.updateProfile(formData).then(
            users => {
                dispatch(success(users));
                // Alert.alert('Success!', 'Succeessfully Updated');
                dispatch(setEditProfile(true))
                setTimeout(() => {
                    props.navigation.navigate('Dashboard')
                }, 1000);
            },
            error => {
                dispatch(failure(error));
            },
        );
    };
    function request() { return { type: userConstants.UPDATE_PROFILE_REQUEST }; }
    function success(users) { return { type: userConstants.UPDATE_PROFILE_SUCCESS, users }; }
    function failure(error) { return { type: userConstants.UPDATE_PROFILE_FAILURE, error }; }
}

function getProfile() {
    return dispatch => {
        dispatch(request());
        userService.getProfile().then(
            users => {
                dispatch(success(users));
            },
            error => {
                dispatch(failure(error));
            },
        );
    };
    function request() { return { type: userConstants.GET_PROFILE_REQUEST }; }
    function success(users) { return { type: userConstants.GET_PROFILE_SUCCESS, users }; }
    function failure(error) { return { type: userConstants.GET_PROFILE_FAILURE, error }; }
}

function forgotUpdatePassword(formData, props, Alert) {
    return dispatch => {
        dispatch(request());
        userService.forgotUpdatePassword(formData).then(
            users => {
                dispatch(success(users));
                Alert.alert('We have sent an email, please verify your account')
                setTimeout(() => {
                    props.navigation.navigate('Login')
                }, 1000);
            },
            error => {
                dispatch(failure(error))
            },
        );
    };
    function request() { return { type: userConstants.FORGET_UPDATE_PASS_REQUEST }; }
    function success(users) { return { type: userConstants.FORGET_UPDATE_PASS_SUCCESS, users }; }
    function failure(error) { return { type: userConstants.FORGET_UPDATE_PASS_FAILURE, error }; }
}

function forgetPassword(formData, props) {
    return dispatch => {
        dispatch(request());
        userService.forgetPassword(formData).then(
            users => {
                dispatch(success(users));
                let message = 'We have sent an email, please verify your account'
                setTimeout(() => {
                    props.navigation.navigate('ForgetUpdatePass')
                }, 1000);
            },
            error => {
                dispatch(failure(error))
            },
        );
    };
    function request() { return { type: userConstants.FORGET_PASSWORD_REQUEST }; }
    function success(users) { return { type: userConstants.FORGET_PASSWORD_SUCCESS, users }; }
    function failure(error) { return { type: userConstants.FORGET_PASSWORD_FAILURE, error }; }
}

function loginOtp(data, props) {
    return dispatch => {
        dispatch(request());
        userService.loginOtp(data).then(
            users => {
                if (users.loginOtpData && users.loginOtpData.error) {
                    dispatch(alertActions.error(users.loginOtpData.message));
                    dispatch(failure(error));
                } else {
                    let message = users && users.loginOtpData && users.loginOtpData.message ? users.loginOtpData.message : ''
                    dispatch(alertActions.success(message));

                    dispatch(success(users));
                    setTimeout(() => {
                        props.navigation.navigate('Dashboard');
                    }, 1000);
                }
            },
        );
    };
    function request() { return { type: userConstants.USER_LOGIN_OTP_REQUEST }; }
    function success(users) { return { type: userConstants.USER_LOGIN_OTP_SUCCESS, users }; }
    function failure(error) { return { type: userConstants.USER_LOGIN_OTP_FAILURE, error }; }
}

function login(formData, props) {
    return dispatch => {
        dispatch(request());
        userService.login(formData).then(
            users => {
                if (users.loginData && users.loginData.error) {
                    dispatch(alertActions.error(users.loginData.message));
                    dispatch(failure(error));
                } else {
                    let message = users && users.loginData && users.loginData.message ? users.loginData.message : ''
                    dispatch(alertActions.success(message));

                    dispatch(success(users));
                    setTimeout(() => {
                        props.navigation.navigate('OTP', { formData });
                    }, 1000);
                }
            },
        );
    };
    function request() { return { type: userConstants.USER_LOGIN_REQUEST }; }
    function success(users) { return { type: userConstants.USER_LOGIN_SUCCESS, users }; }
    function failure(error) { return { type: userConstants.USER_LOGIN_FAILURE, error }; }
}

function registerOtp(detailData, props) {
    return dispatch => {
        dispatch(request());
        userService.registerOtp(detailData).then(
            users => {
                if (users.registerOtp && users.registerOtp.error) {
                    dispatch(alertActions.error(users.registerOtp.message));
                    dispatch(failure(error));
                } else {
                    let message = users && users.registerOtp && users.registerOtp.message ? users.registerOtp.message : ''
                    dispatch(alertActions.success(message));

                    dispatch(success(users));
                    setTimeout(() => {
                        props.navigation.navigate('Dashboard');
                    }, 1000);
                }
            },
        );
    };
    function request() { return { type: userConstants.USER_REGISTER_OTP_REQUEST }; }
    function success(users) { return { type: userConstants.USER_REGISTER_OTP_SUCCESS, users }; }
    function failure(error) { return { type: userConstants.USER_REGISTER_OTP_FAILURE, error }; }
}

function register(detailData, props) {
    return dispatch => {
        dispatch(request());
        userService.register(detailData).then(
            users => {
                if (users.registerData && users.registerData.error) {
                    dispatch(alertActions.error(users.registerData.message));
                    dispatch(failure(error));
                } else {
                    let message = users && users.registerData && users.registerData.message ? users.registerData.message : ''
                    dispatch(alertActions.success(message));

                    dispatch(success(users));
                    setTimeout(() => {
                        props.navigation.navigate('RegisterOTP', { detailData });
                    }, 1000);
                }
            },

        );
    };
    function request() { return { type: userConstants.USER_REGISTER_REQUEST }; }
    function success(users) { return { type: userConstants.USER_REGISTER_SUCCESS, users }; }
    function failure(error) { return { type: userConstants.USER_REGISTER_FAILURE, error }; }
}


