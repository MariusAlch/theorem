import { Layout } from "../components/Layout";
import styled from "styled-components";
import { QuestionTemplate } from "../components/QuestionTemplate";

const Root = styled.div`
  margin-left: 24rem;
  max-width: 50rem;
  margin-top: 3rem;
`;

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  outline: none;
  border: 1px solid #d9dcde;
  border-radius: 3px;

  font-size: 16px;
  line-height: 19px;

  color: #031323;
  padding: 1rem;

  ::placeholder {
    color: #acb1b6;
    opacity: 1;
  }
`;

export default () => {
  return (
    <Layout>
      <Root>
        <QuestionTemplate>
          <TextArea placeholder="Say something" rows={5}></TextArea>
        </QuestionTemplate>
      </Root>
    </Layout>
  );
};

// TODO: implement back button
// TODO: restrict viewport
