
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  color: #fff;
  text-align: center;
  padding: 50px;
  background-color: #333;

`;

const TestimonialCard = styled.div`
  width: 45%;
  margin: 0 auto 30px auto;
  text-align: center;
  padding: 80px;
  margin-top: 20px;
  color: #333;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Testimonials = () => {
  return (
    <TestimonialsContainer id="testimonials">
      <h2>What Our Customers Are Saying</h2>
      <TestimonialCard>
        <p>Keita-Fashion has completely transformed my wardrobe. I love the variety and the recommendations are always spot on!</p>
        <h4>- Grace Belinda</h4>
      </TestimonialCard>
      <TestimonialCard>
        <p>The exclusive collections are a game-changer. I always find unique pieces that I cant get anywhere else.</p>
        <h4>- Aminata Sissoko</h4>
      </TestimonialCard>
    </TestimonialsContainer>
  );
};

export default Testimonials;
