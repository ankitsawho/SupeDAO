import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x7C75bbc37299B7Bc496E7979de36905eE642c1Ab");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Supes",
        description: "This NFT will give you access to SupeDAO!",
        image: readFileSync("scripts/assets/supes.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();