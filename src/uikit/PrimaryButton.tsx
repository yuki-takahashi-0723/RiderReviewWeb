import { Button } from "@material-ui/core";
import React from "react";

interface PropsTypes {
  label: string;
  variantOut: boolean;
  onClick?: () => void;
  submitType: boolean;
}

const PrimaryButton: React.FC<PropsTypes> = ({
  label,
  onClick,
  variantOut,
  submitType,
}) => {
  return (
    <Button
      variant={variantOut ? "outlined" : "contained"}
      color={"primary"}
      onClick={
        onClick
          ? () => onClick()
          : () => {
              return false;
            }
      }
      type={submitType ? "submit" : "button"}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
