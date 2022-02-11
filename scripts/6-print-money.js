import {ethers} from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
    "0x1cDE52BF90dD9F988042Bc5C0B5D1E444b7258d9",
);

(async () => {
    try {
        const amount =1_000_000;
        //the util function from "ethers" will convert the amount to 18 decimals, the standard for ERC20 tokens
        const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
        await tokenModule.mint(amountWith18Decimals);
        const totalSupply = await tokenModule.totalSupply();

        console.log(
            "✅ There now is",
            ethers.utils.formatUnits(totalSupply, 18),
            "$FIRE in circulation",
        );
    } catch (error) {
        console.error("Failed to pring money", error);
    }
}) ();