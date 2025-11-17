/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const signup = async (
  name,
  email,
  password,
  passwordConfirm
) => {
  console.log(name, email, password, passwordConfirm);

  try {
    console.log('📤 Sending signup request...');
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm
      }
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Signup in successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    console.log(err.response);
    showAlert('error', err.response.data.message);
  }
};
