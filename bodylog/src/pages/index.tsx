import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Index() {
  // 로그인 되어있을 때 자동으로 mypage로 이동
  // useEffect(() => {
  //   if (localStorage.getItem('logintoken') != null) {
  //     router.push('/mypage');
  //   }
  // }, []);
  const router = useRouter();

  const onProlog = () => {
    router.push({
      pathname: '/Prolog1',
    });
  };
  return (
    <StyledIndexBox>
      <ImageBox>
        <Image src={'/Flogo.png'} alt={'logoimg'} width={170} height={170} />
        <br></br>
        <StyledText>FLOG</StyledText>
      </ImageBox>

      <StyledP onClick={onProlog}>Hi</StyledP>
    </StyledIndexBox>
  );
}

export default Index;

const StyledIndexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #5cc189;
  height: 100vh;
`;

const ImageBox = styled.div`
  margin: 10rem 0 0 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 9rem;
`;

const StyledText = styled.p`
  margin-left: 1.2rem;
  color: white;
  font-size: 3.3rem;
  font-weight: 550;
  letter-spacing: 0.2rem;
`;

const StyledP = styled.p`
  cursor: pointer;
  color: white;
  margin-bottom: 2rem;
  transition: width 2s, height 2s, background-color 2s, transform 2s;
`;
