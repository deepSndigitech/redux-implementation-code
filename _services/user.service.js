import { CONST } from '../_config';
import { authHeader } from '../_helpers';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from '../_helpers/store';

export const userService = {

  register,
  registerOtp,
  login,
  loginOtp,
  forgetPassword,
  forgotUpdatePassword,
  getProfile,
  updateProfile,
  addContractAddress,
  getWalletList,
  sendCoin,
  getTX,
  uploadProfileImg,
  createWallet,
  getAddressList,


};

function getAddressList(data) {
  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getAddressList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.userToken : null
    },
    data: JSON.stringify(data)
  };
  return axios(options)
    .then(response => {
      // console.log('getAddress----------->', response.data.data.data);
      let bucketObj = {
        getAddressData: response.data.data.data
      }
      return bucketObj;
    });
}

function createWallet(data) {
  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/createAddress`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.userToken : null
    },
    data: JSON.stringify(data)
  };
  return axios(options)
    .then(response => {
      console.log('createWallet----------->', response.data);
      let bucketObj = {
        createWalletData: response.data
      }
      return bucketObj;
    });
}

function uploadProfileImg(image) {
  let { users } = store.getState()
  // console.log("=========>", data, users.tokensss);
  var data = new FormData();
  data.append('image', {
    uri: image.path,
    type: image.mime,
    name: image.path,
  });

  var config = {
    method: 'post',
    // maxBodyLength: Infinity,
    url: 'https://gcn-wallet-backend.vercel.app/api/v1/uploadImageProfile',
    headers: {
      'Authorization': users ? "Bearer " + users.userToken : null,
      'Content-Type': 'multipart/form-data',
    },
    data: data
  };
  return axios(config)
    .then(users => {
      let bucketObj = {
        uploadedImg: users.data
      }
      console.log("IMAGE UPLOAD SERVICE  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", users.data);
      return bucketObj;
    });
}


function getTX() {
  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getTXByAddress`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.userToken : null
    },
    data: { address: users && users.getSavedAddress && users.getSavedAddress.data }
  };
  return axios(options)
    .then(response => {
      // console.log('GET TRANSACTION API IN SERVICE', response.data.data);
      let bucketObj = {
        getTX: response.data.data
      }
      return bucketObj;
    });
}

function sendCoin(data) {
  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/sendCoin`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.userToken : null
    },
    data: JSON.stringify(data)
  };
  return axios(options)
    .then(response => {
      console.log('SEND COIN API IN SERVICE', response.data);
      let bucketObj = {
        sendCoin: response.data
      }
      return bucketObj;
    })
    .catch(error => {
      console.log('ERRORRRRRRR  =>', error);
    })
}

function getWalletList(data) {
  let { users } = store.getState()
  console.log('===== SELECTED WALLET ADDRESS =======>', users && users.getSavedAddress && users.getSavedAddress.data);
  const options = {
    url: CONST.BACKEND_URL + `/getWalletListByAddress`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.userToken : null
    },
    data: JSON.stringify({ address: users && users.getSavedAddress && users.getSavedAddress.data })
  };
  return axios(options)
    .then(response => {
      console.log('GET WALLET API IN SERVICE', response.data.data);
      let bucketObj = {
        getWalletList: response.data.data
      }
      return bucketObj;
    });
}

function addContractAddress(data) {
  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/addContractAddress`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.userToken : null
    },
    data: JSON.stringify(data)
  };
  return axios(options)
    .then(response => {
      console.log('addContractAddress IN SERVICE', response.data);
      let bucketObj = {
        addResponce: response.data
      }
      return bucketObj;
    })
    .catch(error => {
      console.log('EERRREEERRRRRR  =>', error);
    })
}

function updateProfile(formData) {
  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/updateProfile`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.userToken : null
    },
    data: JSON.stringify(formData)
  };
  return axios(options)
    .then(response => {
      console.log('UPDATE PROFILE IN SERVICE', response.data);
      let bucketObj = {
        updateProfile: response.data
      }
      return bucketObj;
    });
}

function getProfile() {
  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getProfile`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.userToken : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(response => {
      // console.log('GET PROFILE IN SERVICE', response.data);
      let bucketObj = {
        getProfile: response.data
      }
      return bucketObj;
    });
}

function forgotUpdatePassword(formData) {
  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/forgotUpdatePassword`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(formData)
  };
  return axios(options)
    .then(response => {
      console.log('forgotUpdatePassword DATA IN SERVICE', response.data);
      let bucketObj = {
        forgotUpdatePassword: response.data
      }
      return bucketObj;
    });
}

function forgetPassword(formData) {
  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/forgotPassword`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(formData)
  };
  return axios(options)
    .then(response => {
      console.log('FORGET PASS DATA IN SERVICE', response.data);
      let bucketObj = {
        forgetPassword: response.data
      }
      return bucketObj;
    });
}

function loginOtp(data) {
  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/validateLoginOtp`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data)
  };
  return axios(options)
    .then(response => {
      console.log('LOGIN-OTP DATA IN SERVICE', response.data);
      let bucketObj = {
        loginOtpData: response.data
      }
      return bucketObj;
    });
}

function login(formData) {
  console.log('SSSSSSS', formData);
  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/login`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(formData)
  };
  return axios(options)
    .then(response => {
      console.log('LOGIN DATA IN SERVICE', response.data);
      let bucketObj = {
        loginData: response.data
      }
      return bucketObj;
    });
}

function registerOtp(detailData) {
  const options = {
    url: CONST.BACKEND_URL + `/validateRegisterOtp`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(detailData)
  };
  return axios(options)
    .then(response => {
      console.log('REGISTER DATA IN SERVICE', response.data);
      let bucketObj = {
        registerOtp: response.data
      }
      return bucketObj;
    });
}

function register(detailData) {
  console.log('aaaaaaaaaaaaaaaa', detailData);
  const options = {
    url: CONST.BACKEND_URL + `/register`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(detailData)
  };
  return axios(options)
    .then(response => {
      console.log('REGISTER DATA IN SERVICE', response.data);
      let bucketObj = {
        registerData: response.data
      }
      return bucketObj;
    });
}



