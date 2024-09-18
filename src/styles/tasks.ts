import styled from "styled-components";

type TaskLabelProps = {
  done: boolean;
};

export const List = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const Task = styled.div`
  display: flex;
  gap: 0.5rem;
  font-weight: 300;
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: #ccc;
  height:2.5rem;
  align-items:center;
  padding-left: 0rem;
`

export const TaskInput = styled.input`
  min-height:2.5rem;
  max-height:2.5rem;
  font-size: 16px;
  min-width: 24rem;
  padding-left: 0.7rem;
  border: 1px solid #ccc;
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: #ccc;
  &::placeholder {
    color: #888;
    font-style: italic;
    font-weight: 100
  };
`

export const TaskInputCheckbox = styled.input`
  border-radius: 50%;
  border: 1px solid #ccc;
  height: 1.5rem;
  position: relative;
  width: 1.5rem;
  -webkit-appearance: none;
  appearance: none;
  &:checked::after {
    content: '✔'; 
    color: green;
    font-size: 1rem;
    transform: translate(-50%, -50%);
    position: absolute;
    top:50%;
    left:50%;
  }
`

export const TaskListFooter = styled.div`
  display: flex;
  min-height: 1rem;
  padding: 0.3em 0;
  border-top: 1px solid #ccc;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: relative; 
  z-index: 2;
  padding: 0px 4px;
`;

export const ShadowLayer = styled.div`
  position: absolute;
  width: 98%; 
  height: 10px;
  left: 50%; 
  transform: translateX(-50%);
  bottom: -12px; 
  background-color: white;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05); 
  z-index: 1; 
`;


export const TaskLabel = styled.div<TaskLabelProps>`
  text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
  color: ${(props) => (props.done ? '#888' : '#000')}; 
`;

export const TaskPlaceholder = styled.div`
  background-color: white;
  margin: 0.8rem; 
  font-weight: 100
`