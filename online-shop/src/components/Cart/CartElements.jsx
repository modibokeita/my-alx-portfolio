import styled from 'styled-components';

export const CartContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 300px;
  position: fixed;
  right: 20px;
  top: 20px;
  background-color: #fff;
`;

export const CartItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;
export const CheckoutButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
