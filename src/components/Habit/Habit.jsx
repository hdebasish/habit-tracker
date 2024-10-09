// Import the useDispatch hook from react-redux to dispatch actions
import { useDispatch } from "react-redux";
// Import specific actions from the habitReducer to modify habit state
import { habitActions } from "../../redux/reducers/habitReducer";

// Define the Habit component, which receives props
export default function Habit(props) {

    // Destructure the habit properties from props
    const { id, name, description, weekly } = props.habit;
    // Use the useDispatch hook to get the dispatch function
    const dispatch = useDispatch();

    // Function to handle deleting a habit by dispatching the removeHabit action with the habit ID
    const handleDelete = () => {
        dispatch(habitActions.removeHabit(id));
    }

    // Function to count the number of completed tasks in the weekly array
    const completedTaskCount = () => {
        const completedTasks = weekly.filter(item => item.status === "yes");
        return completedTasks.length;
    }

    return (
        <li class="list-group-item d-flex justify-content-between align-items-start customListItemStyle">
            {/* Display habit name and description */}
            <div class="ms-2 me-auto">
                <div class="fw-bold">{name}</div>
                {description}
            </div>

            {/* Display the completed task count and delete button */}
            <div class="d-flex justify-content-between align-items-center" style={{ width: '60px' }}>

                <div>
                    {/* Badge showing the count of completed tasks */}
                    <span class="badge text-bg-success rounded-pill">{completedTaskCount()}</span>
                </div>

                {/* Delete button with trash icon */}
                <div className="closeButton" onClick={() => handleDelete(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                    </svg>
                </div>

            </div>
        </li>
    );
}
