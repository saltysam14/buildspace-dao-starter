import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x1060B79350E8Cfe42afb3e54D9cBad24eae42c50",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Fire",
        description: "This NFT will give you access to MovieNightDAO!",
        image: readFileSync("scripts/assets/fire.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()