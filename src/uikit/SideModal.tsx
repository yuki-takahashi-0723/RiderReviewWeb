import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import StarsIcon from "@material-ui/icons/Stars";
import RateReviewIcon from "@material-ui/icons/RateReview";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ModalContorol,
  selectUser,
  SignOutAction,
} from "../features/Slice/userDataSlice";
import * as H from "history";
interface PropsTypes {
  open: boolean;
  history: H.History;
}

const SideModal: React.FC<PropsTypes> = ({ open, history }) => {
  const user = useSelector(selectUser);

  const signInState = user.isSignIn;

  const dispatch = useDispatch();
  const signOut = () => {
    console.log("サインアウト");
    dispatch(SignOutAction());
    history.push("/");
  };
  const drawer = signInState ? (
    <div>
      <p>ユーザー名</p>
      <Divider />
      <List>
        {[
          "マイページへ",
          "気になる作品リスト",
          "レビュー投稿履歴",
          "視聴済作品",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 && <AssignmentIndIcon />}
              {index === 1 && <StarsIcon />}
              {index === 2 && <RateReviewIcon />}
              {index === 3 && <VisibilityIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["お問い合わせ", "サインアウト"].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => text === "サインアウト" && signOut()}
          >
            <ListItemIcon>
              {index === 0 && <MailIcon />}
              {index === 1 && <ExitToAppIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  ) : (
    <div>
      <Divider />
      <List>
        {["サインイン", "サインアップ"].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() =>
              (dispatch(ModalContorol()) &&
                text === "サインイン" &&
                history.push("/signin")) ||
              (text === "サインアップ" && history.push("/signup"))
            }
          >
            <ListItemIcon>
              {index === 0 && <VpnKeyIcon />}
              {index === 1 && <AccountCircleIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => console.log("お問い合わせ")}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"お問い合わせ"} />
        </ListItem>
      </List>
    </div>
  );
  return (
    <div>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => dispatch(ModalContorol())}
      >
        <div>
          <h2>メニュー</h2>
          {drawer}
        </div>
      </Drawer>
    </div>
  );
};

export default SideModal;
