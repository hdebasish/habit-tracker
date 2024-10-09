// Import necessary components and hooks from React and Redux
import WeeklyHabit from "../../components/WeeklyHabit/WeeklyHabit";
import { useSelector } from "react-redux";
import { habitSelector } from "../../redux/reducers/habitReducer";

// Define and export the Weekly component
export default function Weekly() {

    // Use the habitSelector to retrieve habits from the Redux store
    const { habits } = useSelector(habitSelector);

    // Array of day names for easier reference
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get the current date
    const today = new Date();
    // Create new Date objects for the previous days
    const yesterday = new Date();
    const twoDaysAgo = new Date();
    const threeDaysAgo = new Date();
    const fourDaysAgo = new Date();
    const fiveDaysAgo = new Date();
    const sixDaysAgo = new Date();

    // Set the date for each previous day
    yesterday.setDate(today.getDate() - 1);
    twoDaysAgo.setDate(today.getDate() - 2);
    threeDaysAgo.setDate(today.getDate() - 3);
    fourDaysAgo.setDate(today.getDate() - 4);
    fiveDaysAgo.setDate(today.getDate() - 5);
    sixDaysAgo.setDate(today.getDate() - 6);

    return (
        <div>
            {/* Header for the weekly progress section */}
            <h1 className="display-6 fw-bold" style={{ color: "#003434" }}>My Weekly Progress</h1>
            <br />
            {/* Responsive table to display habits and their status over the week */}
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className="table-success">
                        <tr>
                            <th scope="col">Habits</th>
                            {/* Table headers for each day of the week */}
                            <th scope="col">{day[sixDaysAgo.getDay()]}-{sixDaysAgo.getDate()}/{sixDaysAgo.getMonth() + 1}</th>
                            <th scope="col">{day[fiveDaysAgo.getDay()]}-{fiveDaysAgo.getDate()}/{fiveDaysAgo.getMonth() + 1}</th>
                            <th scope="col">{day[fourDaysAgo.getDay()]}-{fourDaysAgo.getDate()}/{fourDaysAgo.getMonth() + 1}</th>
                            <th scope="col">{day[threeDaysAgo.getDay()]}-{threeDaysAgo.getDate()}/{threeDaysAgo.getMonth() + 1}</th>
                            <th scope="col">{day[twoDaysAgo.getDay()]}-{twoDaysAgo.getDate()}/{twoDaysAgo.getMonth() + 1}</th>
                            <th scope="col">Yesterday-{yesterday.getDate()}/{yesterday.getMonth() + 1}</th>
                            <th scope="col">Today-{today.getDate()}/{today.getMonth() + 1}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // Map through habits to render a WeeklyHabit component for each one
                            habits.map((habit, index) => (
                                <WeeklyHabit key={index} habit={habit} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
