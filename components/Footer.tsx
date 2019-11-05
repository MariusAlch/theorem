import styled from "styled-components";

export const Footer: React.FunctionComponent<{}> = () => {
  return (
    <Root>
      <Logo src="/logo.svg"></Logo>
      <CopyRight>
        Copyright © 2018&nbsp;<b> Theorem </b>, LLC. All Rrights Reserved.
      </CopyRight>
    </Root>
  );
};

const Root = styled.div`
  position: absolute;
  width: 100%;
  height: 54px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  background: #031323;
`;

const CopyRight = styled.div`
  position: absolute;
  height: 100%;
  right: 2rem;

  font-family: Untitled Sans;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;

  color: #ffffff;
`;

const Logo = styled.img`
  position: absolute;
  left: 8rem;
  height: 16px;
  bottom: 19px;
`;
