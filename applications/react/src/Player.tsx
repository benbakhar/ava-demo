import { useEffect, FunctionComponent } from "react";
import { Player as PlayerWidget } from "video-analyzer-widgets";

/* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
PlayerWidget;

interface IProps {
  token: string;
  accountId: string;
  longRegionCode: string;
  videoName: string;
}

export const Player: FunctionComponent<IProps> = ({
  token,
  accountId,
  longRegionCode,
  videoName,
}) => {
  useEffect(() => {
    const avaPlayer = document.querySelector("ava-player") as PlayerWidget;
    avaPlayer.configure({
      token,
      accountId,
      longRegionCode,
      videoName,
    });

    avaPlayer.load();
  });

  return <ava-player></ava-player>;
};
