import styled from 'styled-components';
import Image from 'next/image';

function Nav() {
  return (
    <>
      <StyledNav>
        <StyledLogo>
          <Image src={'/Flogo.png'} alt={'logoimg'} width={50} height={50} />
        </StyledLogo>
        <StyledText>FLOG</StyledText>
      </StyledNav>
    </>
  );
}

export default Nav;

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  height: 8%;
  display: flex;
  background-color: #5cc189;
`;

const StyledLogo = styled.div`
  margin: auto 0 auto 0.2rem;
`;

const StyledText = styled.div`
  margin-top: 1rem;
  color: white;
  font-size: 1.7rem;
  font-weight: 550;
  letter-spacing: 0.1rem;
`;
