import { Player } from "video-analyzer-widgets";

Player;

const token = "YOUR_TOKEN_GOES_HERE";
const accountId = "YOUR_ACCOUNT_ID_GOES_HERE";
const longRegionCode = "YOUR_REGION_CODE_GOES_HERE";
const videoName = "YOUR_VIDEO_NAME_GOES_HERE";

const avaPlayer = document.querySelector("ava-player") as Player;

avaPlayer.configure({
  token,
  accountId,
  longRegionCode,
  videoName,
});

avaPlayer.load();
