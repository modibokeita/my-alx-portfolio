import styled from "styled-components";

export const ProductListContenair = styled.div`
  padding: 20px;
`;

export const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  width: 200px;
  text-align: center;

  img {
    max-width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer; /* Makes the image look clickable */
  }

  h3 {
    font-size: 1.2rem;
    margin: 10px 0;
  }

  p {
    margin: 5px 0;
  }
`;
