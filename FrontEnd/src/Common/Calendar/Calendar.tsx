import React, { useState } from 'react';
import ReactCalendar from 'react-calendar'; // Rename the import to avoid conflicts
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const MyCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <>
            <ReactCalendar onChange={onChange} value={value} className="m-auto" />
        </>
    );
};

export default MyCalendar;
