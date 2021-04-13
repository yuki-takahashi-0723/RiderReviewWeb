import React from "react";
import styled from "styled-components";

const Spacer = styled.div`
  margin: 0;
  padding: 0;
  height: 40px;
`;

const MiniSpacer: React.FC = () => {
  return <Spacer />;
};

export default MiniSpacer;
