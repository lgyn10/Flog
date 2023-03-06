import Calendar from '@/components/Calendar/Calendar';
import Nav from '@/components/Nav';
import UnderNav from '@/components/UnderNav';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Mycalendar() {
  const [isLogin, setIsLogin] = useState('');

  useEffect(() => {
    const isLoginLogic = () => {
      if (localStorage.getItem('logintoken') != null) {
        setIsLogin('로그인 O');
      } else {
        setIsLogin('로그인 X');
      }
    };
    isLoginLogic();
  }, []);

  return (
    <>
      <Nav />
      <MyPageBox>
        <Calendar />
        <IsLoginBox>현재 로그인 여부: {isLogin}</IsLoginBox>
        <UnderNav />
      </MyPageBox>
    </>
  );
}

export default Mycalendar;

const IsLoginBox = styled.div`
  border: orange 2px solid;
`;
const MyPageBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
  height: 100%;
  width: 100%;
`;
