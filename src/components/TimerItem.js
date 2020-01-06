import React from "react";
import styled from "styled-components";
import { ReactComponent as Clock } from "../images/clock.svg";

const TimerItem = styled.div`
  display: flex;
  align-items: center;
  input {
    margin-right: 0.8rem;
  }
`;

const StyledTimerItem = styled.label`
  display: flex;
  width: 100%;
  border-radius: 10px;
  padding: 0.5rem;
  border: 1px solid black;
  align-items: center;
  font-size: 1.6rem;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
`;

export default ({ id, changed, label, isSelected }) => (
  <TimerItem key={id}>
    <input
      id={id}
      onChange={changed}
      value={id}
      type="radio"
      checked={isSelected}
    />
    <StyledTimerItem htmlFor={id}>
      <div>
        <Clock />
      </div>
      <div>{label}:00</div>
    </StyledTimerItem>
  </TimerItem>
);
