import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Nav from '@/components/Nav';

function Prolog1() {
  const router = useRouter();

  const onProlog2 = () => {
    router.push({
      pathname: '/Prolog2',
    });
  };
  return (
    <>
      <Nav />
      <section>
        <article>
          <StyledImg>
            <Image src={'/vegetables.webp'} alt={'vegetables'} width={400} height={300} />
          </StyledImg>
          <StyledP>Good Food</StyledP>
        </article>
        <StyledNext>
          <Image src={'/next.png'} alt={'arrow'} width={50} height={50} onClick={onProlog2} />
        </StyledNext>
      </section>
    </>
  );
}

export default Prolog1;

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

const StyledNext = styled.div`
  margin-left: 44%;
  margin-top: 8%;
`;
