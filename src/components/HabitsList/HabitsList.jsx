// Import the useSelector hook from react-redux to access the Redux state
import { useSelector } from "react-redux";
// Import the Habit component for rendering each habit
import Habit from "../Habit/Habit";
// Import the habitSelector from the habitReducer to select habit-related state
import { habitSelector } from "../../redux/reducers/habitReducer";

// Define the HabitsList component
export default function HabitsList() {

    // Use useSelector to get the habits array from the Redux state
    const { habits } = useSelector(habitSelector);

    return (
        <ol class="list-group list-group-numbered">
            {
                // Map over the habits array and render a Habit component for each habit
                // Pass the habit object as a prop to each Habit component
                habits.map((habit, index) => <Habit key={index} habit={habit} />)
            }
        </ol>
    );
}
