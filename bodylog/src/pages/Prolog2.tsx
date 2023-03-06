import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Nav from '@/components/Nav';

function Prolog2() {
  const router = useRouter();

  const onProlog1 = () => {
    router.push({
      pathname: '/Prolog1',
    });
  };

  const onProlog3 = () => {
    router.push({
      pathname: '/Prolog3',
    });
  };

  return (
    <>
      <Nav />
      <section>
        <article>
          <StyledImg>
            <Image src={'/eating habits.webp'} alt={'eating'} width={400} height={300} />
          </StyledImg>
          <StyledP>Good Meal</StyledP>
        </article>
        <StyledArrow>
          <StyledBack>
            <Image src={'/back.png'} alt={'arrow'} width={50} height={50} onClick={onProlog1} />
          </StyledBack>
          <StyledNext>
            <Image src={'/next.png'} alt={'arrow'} width={50} height={50} onClick={onProlog3} />
          </StyledNext>
        </StyledArrow>
      </section>
    </>
  );
}

export default Prolog2;

const StyledImg = styled.div`
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
  display: flex;
`;

const StyledBack = styled.div`
  margin-left: 33%;
  margin-top: 8%;
`;

const StyledNext = styled.div`
  margin-left: 8%;
  margin-top: 8%;
`;
