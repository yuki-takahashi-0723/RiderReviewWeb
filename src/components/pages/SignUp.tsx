import React from "react";
import { TextField } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { PrimaryButton } from "../../uikit";

type Inputs = {
  inputName: string;
  inputEmail: string;
  inputPassWord: string;
};

const SignUp: React.FC = () => {
  const { handleSubmit, control } = useForm<Inputs>();

  const handleCreate = (data: Inputs) => {
    console.log(data);
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
