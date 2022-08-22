import styled, { useTheme } from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Roboto";
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.6;

  height: 50px;
  padding: 0 1.25rem;

  background: ${({ theme }) => theme["green-500"]};
  border-radius: 6px;
  border: none;
  color: ${({ theme }) => theme["white"]};

  cursor: pointer;
  transition: background 200ms;

  &:hover {
    background: ${({ theme }) => theme["green-300"]};
  }
`;
