import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: 10px;
  outline: transparent;
  padding: 1rem 2rem;
  font-size: 1.6rem;
`;

export default ({
  value,
  onChange,
  type = "text",
  style,
  required,
  disabled
}) => (
  <StyledInput
    type={type}
    value={value}
    onChange={onChange}
    style={style}
    disabled={disabled}
    required={required}
  />
);
