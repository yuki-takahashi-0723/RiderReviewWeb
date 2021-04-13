import React, { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Heder from "./components/Heder";

import {
  MyPage,
  SignIn,
  SignUp,
  TopPage,
  VideoItemList,
  VideoReview,
} from "./components/pages";
import { PrimaryButton } from "./uikit";
import SideModal from "./uikit/SideModal";

// import { PrimaryButton, TextInputArea } from "./uikit";
// import { Button, TextField } from "@material-ui/core";
// import { Controller, useForm } from "react-hook-form";

// type Inputs = {
//   inputName: string;
//   inputEmail: string;
//   inputPassWord: string;
// };

const App: React.FC = () => {
  // const [inputTest, setInputTest] = useState("");
  // console.log(inputTest);

  // const { handleSubmit, control } = useForm<Inputs>();

  // const handleCreate = (data: Inputs) => {
  //   console.log(data);
  // };

  //右サイドのモーダルの開閉
  // const [open, setOpen] = useState(false);

  return (
    <>
      {/*サイドのモーダルの使用サンプル
      <SideModal open={open} setOpen={setOpen} />
      <PrimaryButton
      label="モーダル開閉"
      variantOut={false}
      onClick={() => setOpen(true)}
      submitType={false}
    /> */}
      {/* テキストフィールドの使用サンプル<TextInputArea
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputTest(e.target.value)
        }
        label={"テストラベル"}
        fullWidth={false}
        multiline={false}
        rows={1}
        required={true}
        value={inputTest}
      /> */}
      {/* react-hook-formの使用サンプル
        <form onSubmit={handleSubmit(handleCreate)}>
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
              <PrimaryButton label="送信" variantOut={true} submitType={true} />
            </form> */}
      <Heder />
      　
      <HashRouter>
        <Switch>
          <Route exact path="(/)?" component={TopPage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/videoitemlist" component={VideoItemList} />
          <Route exact path="/videoreview" component={VideoReview} />
          <Route exact path="/mypage" component={MyPage} />
        </Switch>
      </HashRouter>
      <Footer />
    </>
  );
};

export default App;
