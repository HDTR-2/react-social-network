import axios from 'axios';

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    'API-KEY': '5b3b1686-3191-4d2d-831c-796e04d93ef3',
  },
});
export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data;
    });
  },

  onUnfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  onFollow(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const authAPI = {
  getAuthMe() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe }).then((response) => {
      return response.data;
    });
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => {
      return response.data;
    });
  },
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
};
