
import styled from 'styled-components';

const FeaturesContainer = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 50px;
  background-color: #fff;
`;

const Feature = styled.div`
  width: 30%;
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }

  p {
    color: #777;
  }
`;

const Features = () => {
  return (
    <FeaturesContainer id="features">
      <Feature>
        <h2>Top Brands</h2>
        <p>Shop from your favorite designers.</p>
      </Feature>
      <Feature>
        <h2>Exclusive Collections</h2>
        <p>Limited-edition items, just for you.</p>
      </Feature>
      <Feature>
        <h2>Personalized Recommendations</h2>
        <p>Discover products based on your style.</p>
      </Feature>
    </FeaturesContainer>
  );
};

export default Features;
