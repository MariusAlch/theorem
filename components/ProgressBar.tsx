import styled from "styled-components";

const Root = styled.div`
  background: #f2f3f4;
  position: relative;
  height: 5px;
  border-radius: 10px;
  overflow: hidden;
`;

const Bar = styled.div<{ progress: number }>`
  background-color: #58e4c7;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${p => `${Math.round(p.progress * 100)}%`};
`;

/**
 * progress: from 0 to 1
 */
export const ProgressBar: React.FunctionComponent<{ progress: number; className?: string }> = props => {
  return (
    <Root className={props.className}>
      <Bar progress={props.progress}></Bar>
    </Root>
  );
};
