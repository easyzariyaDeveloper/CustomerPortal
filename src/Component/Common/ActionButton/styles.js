import styled from "styled-components";

export const Button = styled.button`
    font-size: 12px;
    color: ${({ active = true }) => (active ? "white" : "#ddd")};
    background: ${({ active = true }) => (active ? "#296d98" : "grey")};
    margin: 1em;
    width:fix-content;
    padding 15px 30px 15px 20px;
    border: 0;
    text-decoration:none;
    text-transform:uppercase;
    cursor:pointer;
`;
