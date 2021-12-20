import { ethers } from "ethers";
import { getData, login, postData } from "../../api/user";
import Button from "../simpleComponents/button/Button";
import "./styles.scss";
declare let window: any;

interface AuthProps {
  onFinish: Function;
}
export default function Auth(props: AuthProps) {
  const { onFinish } = props;

  const renderLogin = () => {
    const loginApi = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const walletAddress = await signer.getAddress();

        getData(walletAddress)
          .then(async (data: any) => {
            const signature = await signer.signMessage(
              `Iam signing my one-time nonce: ${data.data.nonce}`
            );
            await login(walletAddress, signature);
            onFinish(walletAddress);
          })
          .catch(async (err: any) => {
            postData(walletAddress)
              .then(async (data) => {
                const signature = await signer.signMessage(
                  `Iam signing my one-time nonce: ${data.data.nonce}`
                );
                await login(walletAddress, signature);
                onFinish(walletAddress);
              })
              .catch((err) => {
                return err;
              });
          });
      } else {
        return;
      }
    };

    return (
      <div>
        <div className="authcontent">
          <Button
            label="Connect MetaMask"
            onClick={() => loginApi()}
            loading={false}
          />
        </div>
      </div>
    );
  };

  return <div className="auth">{renderLogin()}</div>;
}
