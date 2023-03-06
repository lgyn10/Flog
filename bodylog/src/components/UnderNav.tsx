import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

function UnderNav() {
  const router = useRouter();

  const onHome = () => {
    router.push({
      pathname: '/Home',
    });
  };

  const onMylog = () => {
    router.push({
      pathname: '/Home',
    });
  };

  const onCalendar = () => {
    router.push({
      pathname: '/Home',
    });
  };

  const onLog = () => {
    if (localStorage.getItem('logintoken') != null) {
      localStorage.removeItem('logintoken');
      router.push('/');
    }
  };

  return (
    <>
      <StyledNav>
        <StyledIcon>
          <StyledImgBox>
            <Image src={'/home.png'} alt={'Home'} width={35} height={35} onClick={onHome} />
          </StyledImgBox>
          <StyledText>HOME</StyledText>
        </StyledIcon>

        <StyledIcon>
          <StyledImgBox>
            <Image src={'/statistic.png'} alt={'MY LOG'} width={35} height={35} onClick={onMylog} />
          </StyledImgBox>
          <StyledText>LOG</StyledText>
        </StyledIcon>

        <StyledIcon>
          <StyledImgBox>
            <Image src={'/calendar.png'} alt={'CALENDAR'} width={35} height={35} onClick={onCalendar} />
          </StyledImgBox>
          <StyledText>CALENDAR</StyledText>
        </StyledIcon>

        <StyledIcon>
          <StyledImgBox>
            <Image src={'/logout.png'} alt={'LOGOUT'} width={35} height={35} onClick={onLog} />
          </StyledImgBox>
          <StyledText>LOGOUT</StyledText>
        </StyledIcon>
      </StyledNav>
    </>
  );
}

export default UnderNav;

const StyledNav = styled.nav`
  width: 100vw;
  display: flex;
  background-color: #3e7a60;
  position: fixed;
  bottom: 0;
`;

const StyledIcon = styled.div`
  margin: 1rem 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImgBox = styled.div`
  display: flex;
`;

const StyledText = styled.div`
  color: white;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
`;
