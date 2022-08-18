import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    background: transparent;
    border: 1px solid ${({ theme }) => theme["green-300"]};
    border-radius: 6px;

    color: ${({ theme }) => theme["green-300"]};
    padding: 0.875rem 2rem;

    font-size: 1rem;
    font-weight: 700;

    cursor: pointer;
    transition: all 200ms;

    &:hover {
      background: ${({ theme }) => theme["green-500"]};
      border: 1px solid ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme["white"]};
    }
  }
`;
