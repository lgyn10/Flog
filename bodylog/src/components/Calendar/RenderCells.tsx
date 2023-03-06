import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import axios from 'axios';
import withReactContent from 'sweetalert2-react-content';

interface CProps {
  currentMonth: any;
  selectedDate: any;
  onDateClick: any;
}
//format(date, "yy-MM-dd");
function RenderCells({ currentMonth, selectedDate, onDateClick }: CProps) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const [selectedType, setSelectedType] = useState<String>(''); //  INSTANT, BALANCE, HEALTH
  const [selectedAmount, setSelectedAmount] = useState(''); // OVEREATING, FITNESS, LIGHT
  let typeValue = '';
  let amountValue = '';
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  const MySwal = withReactContent(Swal);
  useEffect(() => {
    //! axios,get 저장할 때 마다 get 요청 보내기
    //axios.get();
  }, [selectedType, selectedAmount]);

  const onClickTypeHealth = () => {
    // setSelectedType('HEALTH'); => 생각하는 대로 동작하지 않음
    // console.log(selectedType);
    typeValue = 'HEALTH';
    console.log(`typeValue: ${typeValue}`);
  };
  const onClickTypeBalance = () => {
    // setSelectedType('BALANCE');
    // console.log(selectedType);
    typeValue = 'BALANCE';
    console.log(`typeValue: ${typeValue}`);
  };
  const onClickTypeInstance = () => {
    // setSelectedType('INSTANT');
    // console.log(selectedType);
    typeValue = 'INSTANT';
    console.log(`typeValue: ${typeValue}`);
  };

  const onClickAmountLight = () => {
    amountValue = 'LIGHT';
    console.log(`amountValue: ${amountValue}`);
  };
  const onClickAmountFitness = () => {
    amountValue = 'FITNESS';
    console.log(`amountValue: ${amountValue}`);
  };
  const onClickAmountOvereating = () => {
    amountValue = 'OVEREATING';
    console.log(`amountValue: ${amountValue}`);
  };
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      const cloneDay = format(day, 'MM-dd-yyyy'); // Date 형식 지정
      // modal 창이 열려야 하는 로직
      const onClick = () => {
        console.log('선택된 날짜: ' + cloneDay);

        MySwal.fire({
          title: <strong>FLOG</strong>,
          html: (
            <ModalContainerIn>
              <p>{cloneDay}</p>
              <h4>MEAL TYPE</h4>
              <ImageContainer>
                <StyledTile onClick={onClickTypeHealth}>
                  <InputCB type='radio' name='type' id='type1' className='type1' />
                  <StyledLabel htmlFor='type1'>
                    <h6>Health</h6>
                  </StyledLabel>
                </StyledTile>
                <StyledTile onClick={onClickTypeBalance}>
                  <InputCB type='radio' name='type' id='type2' className='type2' />
                  <StyledLabel htmlFor='type2'>
                    <h6>Balance</h6>
                  </StyledLabel>
                </StyledTile>
                <StyledTile onClick={onClickTypeInstance}>
                  <InputCB type='radio' name='type' id='type3' className='type3' />
                  <StyledLabel htmlFor='type3'>
                    <h6>Instant</h6>
                  </StyledLabel>
                </StyledTile>
              </ImageContainer>

              <h4>MEAL AMOUNT</h4>
              <ImageContainer>
                <StyledTile onClick={onClickAmountLight}>
                  <InputCB type='radio' name='amount' id='amount1' className='amount1' />
                  <StyledLabel htmlFor='amount1'>
                    <h6>Light</h6>
                  </StyledLabel>
                </StyledTile>
                <StyledTile onClick={onClickAmountFitness}>
                  <InputCB type='radio' name='amount' id='amount2' className='amount2' />
                  <StyledLabel htmlFor='amount2'>
                    <h6>Fitness</h6>
                  </StyledLabel>
                </StyledTile>
                <StyledTile onClick={onClickAmountOvereating}>
                  <InputCB type='radio' name='amount' id='amount3' className='amount3' />
                  <StyledLabel htmlFor='amount3'>
                    <h6>Overeating</h6>
                  </StyledLabel>
                </StyledTile>
              </ImageContainer>
            </ModalContainerIn>
          ),
          confirmButtonColor: '#5cc189',
          denyButtonColor: '#FE724C',
          showDenyButton: true,
          confirmButtonText: 'Save',
          denyButtonText: 'Cancel',
        }).then((result) => {
          setSelectedType(typeValue);
          setSelectedAmount(amountValue);
          console.log(`최종 선택 타입: ${typeValue}`);
          console.log(`최종 선택 식사량: ${amountValue}`);
          if (result.isConfirmed) {
            // axios.post
            const dayPost = async () => {
              const response = await axios
                .post('/api/meals', {
                  type: typeValue,
                  quantity: amountValue,
                  selectedDate: cloneDay,
                })
                .then((response) => {
                  console.log(response.data);
                  console.log(cloneDay);
                })
                .catch((e) => {
                  alert(e);
                });
            };
            dayPost();
            Swal.fire({
              icon: 'success',
              title: 'saved!',
              confirmButtonColor: '#5cc189',
            });
          }
        });
      };
      days.push(
        <StyledDay className={`col cell ${!isSameMonth(day, monthStart) ? 'disabled' : isSameDay(day, selectedDate) ? 'selected' : format(currentMonth, 'M') !== format(day, 'M') ? 'notvalid' : 'valid'}`}>
          {/** key={key}가 원래 있었지만 배포 중 오류나서 지워 봄 */}
          <p className={format(currentMonth, 'M') !== format(day, 'M') ? 'text not-valid' : ''}>{formattedDate}</p>
          <StyledImg className={`Img ${!isSameMonth(day, monthStart) ? 'none' : ''}`} src={'/CalendarPic/default.png'} alt={'test'} width={30} height={30} onClick={onClick} />
        </StyledDay>
      );
      day = addDays(day, 1);
    }
    rows.push(<StyledRow>{days}</StyledRow>);
    // 위에서도 key={key}를 생략함
    days = [];
  }
  return <StyledBody>{rows}</StyledBody>;
}

export default RenderCells;

// image div
const StyledImg = styled.img`
  &:hover {
    background-color: red;
    cursor: pointer;
  }
  &.none {
    opacity: 0;
    pointer-events: none;
  }
`;

// day
const StyledDay = styled.div`
  cursor: default;
  margin: 0;
  padding: 0;

  // valid: selected month's days
  &.cell.valid {
    color: black;
  }
  // notvalid: 먹통임
  &.notvalid {
    color: blue;
  }
  // selected: today 오늘 날짜는 green으로 보임
  &.cell.selected {
    color: orangered;
    font-weight: bold;
  }
  // cell: 달력에 보이는 모든 day들
  &.cell {
    color: #fff;
  }
  // col: 달력에 보이는 모든 day들
  &.col {
  }
`;

const StyledRow = styled.div`
  margin: 0.3rem 0 0 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const StyledBody = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const ModalContainerIn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ImageContainer = styled.div`
  margin-bottom: 2rem;
  height: 7rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const StyledTile = styled.div`
  height: 5rem;
  width: 4rem;
`;

const InputCB = styled.input`
  -webkit-appearance: none;
  height: 80%;
  width: 100%;
  position: relative;
  background-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  border: 3px solid transparent;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  &:after {
    font-weight: 400;
    color: #e2e6f3;
  }
  &:checked {
    border: 3px solid #5cc189;
    transition: all 0.5s;
  }
  &.type1 {
    background-image: url('/CalendarPic/type1.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  &.type2 {
    background-image: url('/CalendarPic/type2.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  &.type3 {
    background-image: url('/CalendarPic/type3.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  &.amount1 {
    background-image: url('/CalendarPic/amount1.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  &.amount2 {
    background-image: url('/CalendarPic/amount2.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  &.amount3 {
    background-image: url('/CalendarPic/amount3.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
