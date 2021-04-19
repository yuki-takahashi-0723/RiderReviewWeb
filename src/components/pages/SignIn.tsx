import React from "react";

import { TextField } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { PrimaryButton } from "../../uikit";
import { useDispatch } from "react-redux";
import { AuthUser } from "../../features/Slice/userDataSlice";
import { auth } from "../../firebaseConfig";
import * as H from "history";

type Inputs = {
  inputEmail: string;
  inputPassWord: string;
};
interface PropsTypes {
  history: H.History;
}

const SignIn: React.FC<PropsTypes> = ({ history }) => {
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm<Inputs>();
  const handleCreate = (data: Inputs) => {
    auth
      .signInWithEmailAndPassword(data.inputEmail, data.inputPassWord)
      .then(({ user }) => {
        if (user) {
          dispatch(
            AuthUser({
              uid: user.uid,
              name: user.displayName,
              email: user.email,
            })
          );
          history.push("/videoItemList");
        }
      });
  };

  return (
    <div>
      <h2>サインイン画面</h2>
      <form onSubmit={handleSubmit(handleCreate)}>
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

export default SignIn;
