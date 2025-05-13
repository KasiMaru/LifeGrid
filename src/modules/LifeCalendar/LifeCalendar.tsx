import { getTimePassedSince, getAllMonths } from 'app/utils/timeUtils';



export const LifeCalendar = () => {
    const age = getTimePassedSince('1990-01-01');
    const months = getAllMonths();

    return (
        <div>
            <h2>Life Calendar</h2>
            {/* Future components or features can be added here */}

            <ul>
                {months.map((month) => (
                    <li key={month.number}>{`${month.name} ${month.number}`}</li>
                ))}
            </ul>
            <p>Age: {age.days}</p>
        </div>
    );
};