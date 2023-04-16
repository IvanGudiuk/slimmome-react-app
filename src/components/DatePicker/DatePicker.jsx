import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { CustomDatePicker } from './DatePicker.styled';
import { useDispatch } from 'react-redux';
import { diaryDayInfo } from 'redux/diary/operations';
import { setSelectedDate } from 'redux/diary/slice';

const DatePicker = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const date = startDate.toISOString().slice(0, 10);

    dispatch(diaryDayInfo(date));
    dispatch(setSelectedDate(date));
  }, [dispatch, startDate]);

  return (
    <CustomDatePicker
      dateFormat="dd.MM.yyyy"
      selected={startDate}
      onChange={setStartDate}
    />
  );
};

export default DatePicker;