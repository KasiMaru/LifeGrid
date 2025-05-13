import { useState } from 'react';
import { Input } from 'app/UI/Input'
import { Select } from 'app/UI/Select';
import { mapMonthNumberToName, getNow } from 'app/utils/timeUtils';

type DateInputProps = {
    value: string;
    onChange: (value: string) => void;
};

export function DateInput(props: DateInputProps) {
    const [month, setMonth] = useState<number | null>(null);
    const [day, setDay] = useState<number | null>(null);
    const [year, setYear] = useState<number | null>(null);

    // const handleChange = (string) => {

    // };

    const currentMonth = getNow().month;
    const formattedMonth = mapMonthNumberToName(month || currentMonth);

    return (
        <div>
            <Select name="dateMonths" value={formattedMonth} />
            <Input type="text" name="dateDays" value={value} />
            <Input type="text" name="dateYears" value={value} />
        </div>
    );
};