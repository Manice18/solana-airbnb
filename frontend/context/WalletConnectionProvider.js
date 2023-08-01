import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { useMemo } from "react";

const WalletConnectionProvider = ({ children }) => {

    const endpoint = useMemo(() => "https://dimensional-hardworking-bush.solana-devnet.discover.quiknode.pro/96693e79598f4da0feb52a23f908d7cec2470feb/", [])

    const wallets = useMemo(() => [new PhantomWalletAdapter()], [])

    return <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
}

export default WalletConnectionProvider