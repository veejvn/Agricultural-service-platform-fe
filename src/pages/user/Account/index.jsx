import { useParams } from "react-router-dom";
import Profile from "./Profile";
import Address from "./Address";
import ChangePassword from "./ChangePassword";

const page = {
    proflie: Profile,
    address: Address,
    "change-password": ChangePassword
}

const Account = () => {
    const params = useParams();
    const Page = page[params.page] || Profile;
    return <Page></Page>
}

export default Account;