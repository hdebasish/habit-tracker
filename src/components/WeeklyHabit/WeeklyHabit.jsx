// Import the Status component for displaying daily habit statuses
import Status from "../Status/Status";

// Define and export the WeeklyHabit component
export default function WeeklyHabit(props) {

    // Constants for status options
    const UNANSWERED = "unanswered";

    // Initialize dates for today and the past six days
    const today = new Date();
    const yesterday = new Date();
    const twoDaysAgo = new Date();
    const threeDaysAgo = new Date();
    const fourDaysAgo = new Date();
    const fiveDaysAgo = new Date();
    const sixDaysAgo = new Date();

    // Set each date to its corresponding day (yesterday, two days ago, etc.)
    yesterday.setDate(today.getDate() - 1);
    twoDaysAgo.setDate(today.getDate() - 2);
    threeDaysAgo.setDate(today.getDate() - 3);
    fourDaysAgo.setDate(today.getDate() - 4);
    fiveDaysAgo.setDate(today.getDate() - 5);
    sixDaysAgo.setDate(today.getDate() - 6);

    // Initialize variables for the status of each day
    let todayStatus = null;
    let yesterdayStatus = null;
    let twoDaysAgoStatus = null;
    let threeDaysAgoStatus = null;
    let fourDaysAgoStatus = null;
    let fiveDaysAgoStatus = null;
    let sixDaysAgoStatus = null;

    // Extract the habit data from props
    const habit = props.habit;

    // If there are no weekly entries, set all days to UNANSWERED
    if (habit.weekly.length === 0) {
        todayStatus = UNANSWERED;
        yesterdayStatus = UNANSWERED;
        twoDaysAgoStatus = UNANSWERED;
        threeDaysAgoStatus = UNANSWERED;
        fourDaysAgoStatus = UNANSWERED;
        fiveDaysAgoStatus = UNANSWERED;
        sixDaysAgoStatus = UNANSWERED;
    } else {
        // Loop over each entry in habit.weekly to assign statuses based on dates
        habit.weekly.forEach((item) => {
            // Check the item date and update the corresponding status variable
            switch (item.date) {
                case today.toISOString().slice(0, 10):
                    todayStatus = item.status;
                    break;
                case yesterday.toISOString().slice(0, 10):
                    yesterdayStatus = item.status;
                    break;
                case twoDaysAgo.toISOString().slice(0, 10):
                    twoDaysAgoStatus = item.status;
                    break;
                case threeDaysAgo.toISOString().slice(0, 10):
                    threeDaysAgoStatus = item.status;
                    break;
                case fourDaysAgo.toISOString().slice(0, 10):
                    fourDaysAgoStatus = item.status;
                    break;
                case fiveDaysAgo.toISOString().slice(0, 10):
                    fiveDaysAgoStatus = item.status;
                    break;
                case sixDaysAgo.toISOString().slice(0, 10):
                    sixDaysAgoStatus = item.status;
                    break;
                default:
                    break;
            }
        });

        // Set any remaining null statuses to UNANSWERED
        if (todayStatus === null) todayStatus = UNANSWERED;
        if (yesterdayStatus === null) yesterdayStatus = UNANSWERED;
        if (twoDaysAgoStatus === null) twoDaysAgoStatus = UNANSWERED;
        if (threeDaysAgoStatus === null) threeDaysAgoStatus = UNANSWERED;
        if (fourDaysAgoStatus === null) fourDaysAgoStatus = UNANSWERED;
        if (fiveDaysAgoStatus === null) fiveDaysAgoStatus = UNANSWERED;
        if (sixDaysAgoStatus === null) sixDaysAgoStatus = UNANSWERED;
    }

    // Render the habit row with Status components for each day
    return (
        <tr>
            <th scope="row">
                <div>
                    <h5>{habit.name}</h5>  {/* Display the habit name */}
                    <p>{habit.description}</p>  {/* Display the habit description */}
                </div>
            </th>

            {/* Render Status components for each day */}
            <td>
                <Status status={sixDaysAgoStatus} date={sixDaysAgo} id={habit.id} />
            </td>
            <td>
                <Status status={fiveDaysAgoStatus} date={fiveDaysAgo} id={habit.id} />
            </td>
            <td>
                <Status status={fourDaysAgoStatus} date={fourDaysAgo} id={habit.id} />
            </td>
            <td>
                <Status status={threeDaysAgoStatus} date={threeDaysAgo} id={habit.id} />
            </td>
            <td>
                <Status status={twoDaysAgoStatus} date={twoDaysAgo} id={habit.id} />
            </td>
            <td>
                <Status status={yesterdayStatus} date={yesterday} id={habit.id} />
            </td>
            <td>
                <Status status={todayStatus} date={today} id={habit.id} />
            </td>
        </tr>
    );
}
