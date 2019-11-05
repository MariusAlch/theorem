import { Layout } from "../components/Layout";
import styled from "styled-components";
import { QuestionTemplate } from "../components/QuestionTemplate";

const Root = styled.div`
  margin-left: 24rem;
  max-width: 50rem;
  margin-top: 3rem;
`;

const SelectOption = styled.div<{ selected?: boolean }>`
  background: #f2f3f4;
  border-radius: 3px;
  padding: 1.25rem 1.75rem;
  font-size: 16px;
  line-height: 19px;

  & + & {
    margin-top: 1rem;
  }

  cursor: pointer;

  :hover {
    filter: brightness(0.9);
  }

  ${p =>
    p.selected &&
    `
    background: #59636E;
    color: #FFF;
  `}
`;

export default () => {
  return (
    <Layout>
      <Root>
        <QuestionTemplate>
          <div>
            <SelectOption>
              Please Improve <br />
              You may have done one or the following: Maybe you were mostly quiet in meetings and when you had something
              on your mind, you brought it to the team afterward. Or, you had feedback that would be valuable to go, but
              you found it too difficult. Or, you had an opportunity to grow by doing something uncomfortable but you
              didn’t.
            </SelectOption>
            <SelectOption selected>
              You Were Good <br />
              You sometimes participate in meetings but you feel that they don’t always bring up important things when
              they should.
            </SelectOption>
            <SelectOption>
              You Were Great <br />I and others can count on your courage to help the team do what is right.
            </SelectOption>
          </div>
        </QuestionTemplate>
      </Root>
    </Layout>
  );
};
