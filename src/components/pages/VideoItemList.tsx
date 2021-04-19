import React from "react";
import { riderData } from "../../Db";
import { PrimaryButton } from "../../uikit";
import Heder from "../Heder";
import * as H from "history";

interface PropsTypes {
  history: H.History;
}

const VideoItemList: React.FC<PropsTypes> = ({ history }) => {
  console.log(riderData);
  return (
    <div>
      <Heder history={history} />
      <h2>ライダー作品リスト</h2>
      <ul>
        {riderData.map((rider) => {
          return (
            <PrimaryButton
              key={rider.riderId}
              label={rider.title}
              variant={"text"}
              onClick={() => console.log(rider.riderId)}
              submitType={false}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default VideoItemList;
