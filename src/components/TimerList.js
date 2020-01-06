import React from "react";
import TimerItem from "./TimerItem";
import styled from "styled-components";

const StyledTimerList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin: 2rem 0;
`;

export default ({ data, changed }) => (
  <StyledTimerList>
    {data.map(i => (
      <TimerItem
        key={i.id}
        id={i.id}
        changed={changed}
        label={i.label}
        isSelected={i.isSelected}
      />
    ))}
  </StyledTimerList>
);
