import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import StarsIcon from "@material-ui/icons/Stars";
import RateReviewIcon from "@material-ui/icons/RateReview";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from "react";

// const [open,setOpen] = useState(false)

interface PropsTypes {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideModal: React.FC<PropsTypes> = ({ open, setOpen }) => {
  const drawer = (
    <div>
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
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 && <MailIcon />}
              {index === 1 && <ExitToAppIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div>
          <h2>メニュー</h2>
          <p>ユーザー名</p>
          {drawer}
        </div>
      </Drawer>
    </div>
  );
};

export default SideModal;
