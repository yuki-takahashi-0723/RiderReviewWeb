import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalContorol, selectUser } from "../features/Slice/userDataSlice";
import { PrimaryButton } from "../uikit";
import SideModal from "../uikit/SideModal";
import * as H from "history";
interface PropsTypes {
  history: H.History;
}

const Heder: React.FC<PropsTypes> = ({ history }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const modalState = user.modal;
  return (
    <div>
      <p>ヘッダーパーツ</p>
      <SideModal open={modalState} history={history} />
      <PrimaryButton
        label="モーダル開閉"
        variant="contained"
        onClick={() => dispatch(ModalContorol())}
        submitType={false}
      />
    </div>
  );
};

export default Heder;
