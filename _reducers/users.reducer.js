import { userConstants } from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {

    case userConstants.WALLET_SUCCESS:
      return {
        ...state,

        loading: false,
        getSavedAddress: action.data.data,
      };







    case userConstants.GET_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_ADDRESS_SUCCESS:
      return {
        ...state,

        loading: false,
        getAddressList: action.users.getAddressData,
      };
    case userConstants.GET_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case userConstants.CREATE_WALLET_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.CREATE_WALLET_SUCCESS:
      return {
        ...state,

        loading: false,
        createWalletData: action.users.createWalletData,
      };
    case userConstants.CREATE_WALLET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.UPLOAD_PROFILE_IMG_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.UPLOAD_PROFILE_IMG_SUCCESS:
      return {
        ...state,

        loading: false,
        uploadedImg: action.users.uploadedImg,
      };
    case userConstants.UPLOAD_PROFILE_IMG_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.GET_TX_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_TX_SUCCESS:
      return {
        ...state,

        loading: false,
        getTX: action.users.getTX,
      };
    case userConstants.GET_TX_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.SEND_COIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.SEND_COIN_SUCCESS:
      return {
        ...state,

        loading: false,
        getWalletList: action.users.getWalletList,
      };
    case userConstants.SEND_COIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };



    case userConstants.GET_WALLET_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_WALLET_LIST_SUCCESS:
      return {
        ...state,

        loading: false,
        getWalletList: action.users.getWalletList,
      };
    case userConstants.GET_WALLET_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };



    case userConstants.ADD_CONTRACT_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.ADD_CONTRACT_ADDRESS_SUCCESS:
      return {
        ...state,

        loading: false,
        addContractAddress: action.users.addResponce,
      };
    case userConstants.ADD_CONTRACT_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,

        loading: false,
        updateProfile: action.users.updateProfile,
      };
    case userConstants.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_PROFILE_SUCCESS:
      return {
        ...state,

        loading: false,
        getProfile: action.users.getProfile.data,
      };
    case userConstants.GET_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };



    case userConstants.FORGET_UPDATE_PASS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.FORGET_UPDATE_PASS_SUCCESS:
      return {
        ...state,
        loading: false,
        forgetPassToken: action.users.forgetPassword.data.token,
      };
    case userConstants.FORGET_UPDATE_PASS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.FORGET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        forgetPassToken: action.users.forgetPassword.data.token,
      };
    case userConstants.FORGET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };




    case userConstants.USER_LOGIN_OTP_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.USER_LOGIN_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        loginOtpData: action.users.loginOtpData,
        userToken: action.users.loginOtpData.data.token
      };
    case userConstants.USER_LOGIN_OTP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.USER_LOGIN_SUCCESS:
      return {
        ...state,

        loading: false,
        loginToken: action.users.loginData.data.token
      };
    case userConstants.USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.USER_REGISTER_OTP_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.USER_REGISTER_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.users.registerOtp.data,
        userToken: action.users.registerOtp.data.token
      };
    case userConstants.USER_REGISTER_OTP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };



    case userConstants.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.USER_REGISTER_SUCCESS:
      return {
        ...state,

        loading: false,
        registerData: action.users.registerData.data.token
      };
    case userConstants.USER_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };




    default:
      return state
  }
}