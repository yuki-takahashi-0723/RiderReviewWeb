import { Button } from "@material-ui/core";
import React from "react";

interface PropsTypes {
  label: string;
  variant: string;
  onClick?: () => void;
  submitType: boolean;
}

const PrimaryButton: React.FC<PropsTypes> = ({
  label,
  onClick,
  variant,
  submitType,
}) => {
  const variantData = (variant: string) => {
    if (variant === "text") {
      return "text";
    } else if (variant === "outlined") {
      return "outlined";
    } else if (variant === "contained") {
      return "contained";
    }
  };

  return (
    <Button
      variant={variantData(variant)}
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
