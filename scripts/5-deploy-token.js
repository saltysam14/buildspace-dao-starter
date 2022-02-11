import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x9195b7Fe61a2253DC48eA3770aEc4813F8F13745");

(async () => {
    try {
        const tokenModule = await app.deployTokenModule({
            name: "MovieNightDAO Governance Token",
            symbol: "FIRE",
        });
        console.log(
            "✅ Successfully deployed token module, address:",
            tokenModule.address,
        );
    } catch (error) {
        console.error("failed to deploy token module", error);
    }
}) (); 