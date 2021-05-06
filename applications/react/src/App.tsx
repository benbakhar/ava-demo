import { Player } from "./Player";

const token = "YOUR_TOKEN_GOES_HERE";
const accountId = "YOUR_ACCOUNT_ID_GOES_HERE";
const longRegionCode = "YOUR_REGION_CODE_GOES_HERE";
const videoName = "YOUR_VIDEO_NAME_GOES_HERE";

function App() {
  return (
    <div className="App">
      <Player
        token={token}
        accountId={accountId}
        longRegionCode={longRegionCode}
        videoName={videoName}
      />
    </div>
  );
}

export default App;
