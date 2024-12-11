import { getAuthUrl } from "@tools/url.tool";
import axios, { service } from "@tools/axios.tool";
import store from "@redux/store.redux";

const AuthService = {
  login({ email, password }) {
    return service(axios.post(getAuthUrl("/login"), { email, password }));
  },
  register({ email, password }) {
    return service(axios.post(getAuthUrl("/register"), { email, password }));
  },
  refreshToken() {
    const { refreshToken } = store.getState().auth.tokens;
    return service(axios.post(getAuthUrl("/refresh-token"), { refreshToken }));
  },
  getUserInfo() {
    return service(axios.get(getAuthUrl("/info")));
  },
  changePassword({ currentPassword, newPassword }) {
    return service(
      axios.post(getAuthUrl("/change-password"), {
        currentPassword,
        newPassword,
      })
    );
  },
  forgotPassword(email) {
    return service(axios.post(getAuthUrl("/forgot-password"), { email }));
  },
  forgotPasswordVerify({ newPassword, code }) {
    return service(
      axios.post(getAuthUrl("/forgot-password/verify"), { newPassword, code })
    );
  },
};

export default AuthService;
