import axios, { service } from "@tools/axios.tool";
import { getApiUrl } from "@tools/url.tool";

const AccountService = {
  getAccount() {
    return service(axios.get(getApiUrl("/accounts")), true);
  },
  updateAccount({ displayName, dob, phone, avatar }) {
    return service(
      axios.put(getApiUrl("/accounts"), { displayName, dob, phone, avatar })
    );
  },
};

export default AccountService;
