import React from "react";
import { Redirect } from "react-router";
import { riderData } from "../../Db";
import { PrimaryButton } from "../../uikit";

const VideoItemList: React.FC = () => {
  console.log(riderData);
  return (
    <div>
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
