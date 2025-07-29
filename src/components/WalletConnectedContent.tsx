import { FaUserCircle } from "react-icons/fa";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton, WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";

const WalletConnectedContent = () => {
  const { publicKey } = useWallet();

  return (
    <div className="wallet-connect-container">
      <FaUserCircle size={20} className="wallet-icon" />
      {publicKey ? (
        <>
          <span className="wallet-address">
            {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
          </span>
          <WalletDisconnectButton className="wallet-disconnect-btn" />
        </>
      ) : (
        <WalletMultiButton className="wallet-connect-btn" />
      )}
    </div>
  );
};

export default WalletConnectedContent;