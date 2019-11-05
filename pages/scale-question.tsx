import { Layout } from "../components/Layout";
import styled from "styled-components";
import { QuestionTemplate } from "../components/QuestionTemplate";

const Root = styled.div`
  margin-left: 24rem;
  max-width: 50rem;
  margin-top: 3rem;
`;

const Text = styled.div`
  margin-bottom: 2rem;
`;

const ScaleSection = styled.div`
  display: flex;
`;

const ScaleBlock = styled.div<{ preview?: boolean; selected?: boolean }>`
  flex-grow: 1;
  height: 74px;
  & + & {
    margin-left: 4px;
  }
  background: #f2f3f4;

  ${p =>
    p.preview &&
    `
    background: #ab61e5;
  `}
  ${p =>
    p.selected &&
    `
    background: #7F0FD7;
  `}

  cursor: pointer;
`;

const RateSelected = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  text-align: right;
`;

export default () => {
  return (
    <Layout>
      <Root>
        <QuestionTemplate>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a euismod dolor, non blandit nisl. Sed euismod
            enim in semper consectetur. Duis elementum venenatis finibus. Sed quis neque diam. Aliquam nec blandit mi,
            et cursus dolor. Duis pharetra purus nunc, in facilisis ex auctor id.
          </Text>
          <ScaleSection>
            <ScaleBlock preview />
            <ScaleBlock preview />
            <ScaleBlock preview />
            <ScaleBlock preview />
            <ScaleBlock preview />
            <ScaleBlock preview />
            <ScaleBlock preview />
            <ScaleBlock />
            <ScaleBlock />
            <ScaleBlock />
          </ScaleSection>
          <RateSelected>8/10</RateSelected>
        </QuestionTemplate>
      </Root>
    </Layout>
  );
};
