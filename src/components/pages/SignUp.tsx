import React from "react";
import { TextField } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { PrimaryButton } from "../../uikit";
import { useSelector, useDispatch } from "react-redux";
import { AuthUser, selectUser } from "../../features/Slice/userDataSlice";
import { auth } from "../../firebaseConfig";
import * as H from "history";

type Inputs = {
  inputName: string;
  inputEmail: string;
  inputPassWord: string;
};

interface PropsTypes {
  history: H.History;
}

const SignUp: React.FC<PropsTypes> = ({ history }) => {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm<Inputs>();

  const handleCreate = (data: Inputs) => {
    auth
      .createUserWithEmailAndPassword(data.inputEmail, data.inputPassWord)
      .then(({ user }) => {
        if (user) {
          user.updateProfile({
            displayName: data.inputName,
          });
          dispatch(
            AuthUser({
              uid: user.uid,
              name: data.inputName,
              email: user.email,
            })
          );
          history.push("/videoItemList");
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleCreate)}>
        <div>
          <Controller
            name="inputName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                variant={"outlined"}
                label="お名前"
                type="text"
                required={true}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="inputEmail"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                variant={"outlined"}
                label="メールアドレス"
                type="Email"
                required={true}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="inputPassWord"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                variant={"outlined"}
                label="パスワード"
                type="PassWord"
                required={true}
              />
            )}
          />
        </div>
        <div>
          <PrimaryButton label="送信" variant={"contained"} submitType={true} />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
