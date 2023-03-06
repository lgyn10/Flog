import styled from 'styled-components';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Link from 'next/link';
import UnderNav from '@/components/UnderNav';

function Home() {
  return (
    <>
      <Nav />
      <section>
        <StyledArticle>
          <StyledTitle>WHAT IS FLOG?</StyledTitle>
          <StyledImgWrapper>
            <Image src={'/FoodLog.webp'} alt={'foodlog'} width={400} height={300} />
          </StyledImgWrapper>
          <StyledTextBox>
            <StyledP>For your Health</StyledP>
            <StyledP>Record your Food Routine!</StyledP>
          </StyledTextBox>
        </StyledArticle>
        <article>
          <StyledBox>
            <StyledIcon>
              <Image src={'/smile.png'} alt={'smile'} width={30} height={30} />
            </StyledIcon>
            <StyledDiv>Eating Habits</StyledDiv>
          </StyledBox>
          <StyledImgWrapper>
            <Link href='https://www.cdc.gov/healthyweight/losing_weight/eating_habits.html'>
              <Image src={'/eating habits.webp'} alt={'eating'} width={400} height={300} />
            </Link>
          </StyledImgWrapper>
        </article>
      </section>
      <UnderNav />
    </>
  );
}

export default Home;

const StyledArticle = styled.article`
  margin-bottom: 5rem;
`;

const StyledTitle = styled.p`
  margin-top: 10%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 550;
`;

const StyledImgWrapper = styled.div`
  margin: 2rem 0;
  border-top: 0.5rem solid white;
  border-bottom: 0.3rem solid white;
  box-shadow: rgba(0, 0, 0, 0.24) 0rem 0.2rem 0.5rem;
`;

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 2rem;
`;

const StyledP = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
`;

const StyledBox = styled.div`
  display: flex;
`;

const StyledDiv = styled.div`
  margin-left: 0.5rem;
  font-size: 1.5rem;
  font-weight: 550;
`;

const StyledIcon = styled.div`
  margin-left: 25%;
  margin-top: 0.1rem;
`;
