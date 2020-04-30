import styled from "styled-components";

export const Button = styled.button`
    font-size: 12px;
    color: ${({ disabled = false }) => (!disabled ? "white" : "#ddd")};
    background: ${({ disabled = false }) => (!disabled ? "#296d98" : "grey")};
    margin: 1em;
    width:fix-content;
    padding 15px 30px 15px 20px;
    border: 0;
    text-decoration:none;
    text-transform:uppercase;
    cursor: ${({ disabled = false }) =>
      disabled ? "not-allowed" : "pointer"};;
`;
