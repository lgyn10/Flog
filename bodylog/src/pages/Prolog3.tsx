import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Nav from '@/components/Nav';

function Prolog3() {
  const router = useRouter();

  const onProlog2 = () => {
    router.push({
      pathname: '/Prolog2',
    });
  };

  const onHome = () => {
    router.push({
      pathname: '/Home',
    });
  };

  return (
    <>
      <Nav />
      <section>
        <article>
          <StyledImgWrapper>
            <Image src={'/foodlog.jpeg'} alt={'foodlog'} width={400} height={300} />
          </StyledImgWrapper>
          <StyledP>Food Log</StyledP>
        </article>
        <StyledArrow>
          <Image src={'/back.png'} alt={'arrow'} width={50} height={50} onClick={onProlog2} />
        </StyledArrow>
        <StyledClick onClick={onHome}>Start your FLOG</StyledClick>
      </section>
    </>
  );
}

export default Prolog3;

const StyledImgWrapper = styled.div`
  margin: 2rem 0;
  border-top: 0.5rem solid white;
  border-bottom: 0.3rem solid white;
  box-shadow: rgba(0, 0, 0, 0.24) 0rem 0.2rem 0.5rem;
`;

const StyledP = styled.p`
  font-size: 1.5rem;
  font-weight: 550;
  text-align: center;
`;

const StyledArrow = styled.div`
  margin-left: 44%;
  margin-top: 8%;
`;

const StyledClick = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 550;
  text-align: center;
  color: #5cc189;
`;
