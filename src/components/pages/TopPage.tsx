import React from "react";
import { PrimaryButton } from "../../uikit";
import * as H from "history";

interface PropsTypes {
  history: H.History;
}

const TopPage: React.FC<PropsTypes> = ({ history }) => {
  return (
    <div>
      <h2>TopPage</h2>

      <PrimaryButton
        label="サインインする"
        variant="outlined"
        onClick={() => history.push("/signin")}
        submitType={false}
      />
      <PrimaryButton
        label="登録する"
        variant="outlined"
        onClick={() => history.push("/signup")}
        submitType={false}
      />
      <PrimaryButton
        label="作品のレビューを見る"
        variant="outlined"
        onClick={() => history.push("/videoitemlist")}
        submitType={false}
      />
    </div>
  );
};

export default TopPage;
