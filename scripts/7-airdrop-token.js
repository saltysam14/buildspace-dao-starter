import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const bundleDropModule = sdk.getBundleDropModule(
    "0x1060B79350E8Cfe42afb3e54D9cBad24eae42c50",
);

const tokenModule = sdk.getTokenModule(
    "0x1cDE52BF90dD9F988042Bc5C0B5D1E444b7258d9",
);

(async () => {
    try {
        //grabs addresses of people who own the membership NFT, tokenID = 0
        const walletAddresses = await bundleDropModule.getAllClaimerAddresses("0");

        if (walletAddresses.length === 0) {
            console.log(
                "No NFTs have been claimed yet, maybe get some friends to claim your free NFTS!",
            );
            process.exit(0);
        }

        //loop through the array of addresses
        const airdropTargets = walletAddresses.map((address) => {
            //picks random number between 1000 and 10000
            const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
            console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

            //sets up the target
            const airdropTarget = {
                address,
                amount: ethers.utils.parseUnits(randomAmount.toString(), 18),
            };
            
            return airdropTarget;
        });

        console.log("🌈 Starting airdrop...")
        await tokenModule.transferBatch(airdropTargets);
        console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
    }   catch (err) {
        console.error("Failed to airdrop tokens", err);
    }
}) ();