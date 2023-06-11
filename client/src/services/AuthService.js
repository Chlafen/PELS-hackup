import axios from 'axios';
import apiService from './ApiService';

class AuthService {
  async login(loginRequest) {
    const authResponse = (
      await axios.post('/api/auth/login', loginRequest, {
        withCredentials: true,
      })
    ).data;
    apiService.defaults.headers.Authorization = `Bearer ${authResponse.token}`;
    return authResponse;
  }



  async signup(signupRequest){

    return (
        await axios.post('/api/auth/register', signupRequest, {
          withCredentials: true,
        })
    ).data;
    }

  async logout(){
    await apiService.post('/api/auth/logout', {}, { withCredentials: true });
    apiService.defaults.headers.Authorization = null;
  }





  async refresh(){
    const authResponse = (
      await axios.post(
        '/api/auth/refresh',
        {},
        { withCredentials: true },
      )
    ).data;
    apiService.defaults.headers.Authorization = `Bearer ${authResponse.token}`;
    return authResponse;
  }
}

export default new AuthService();