// Import necessary modules from React and Redux
import { useDispatch } from "react-redux";
import { habitActions } from "../../redux/reducers/habitReducer";

// Define the Status component, which takes props as input
export default function Status(props) {
    
    // Create a dispatch function to send actions to the Redux store
    const dispatch = useDispatch();

    // Define status values for tasks
    const YES = "yes";
    const NO = "no";
    const UNANSWERED = "unanswered";

    // Destructure id, date, and status from props
    const { id, date, status } = props;

    // Define handler functions for each status action
    const handleStatusYes = () => {
        dispatch(habitActions.setWeeklyStatus({
            id,
            date: date.toISOString().slice(0, 10),
            status: YES,
        }));
    }

    const handleStatusNo = () => {
        dispatch(habitActions.setWeeklyStatus({
            id,
            date: date.toISOString().slice(0, 10),
            status: NO,
        }));
    }

    const handleStatusUnanswered = () => {
        dispatch(habitActions.setWeeklyStatus({
            id,
            date: date.toISOString().slice(0, 10),
            status: UNANSWERED,
        }));
    }

    // Return JSX based on the current status of the task

    if (status === YES) {

        return (
            <div className="status">
                <div className="status__item">
                    <div className="status__item__icon text-success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                    </div>
                </div>
                <div className="status__item" onClick={handleStatusUnanswered}>
                    <div className="status__item__icon none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg>
                    </div>
                </div>
                <div className="status__item" onClick={handleStatusNo}>
                    <div className="status__item__icon cross">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                </div>
            </div>
        );

    }

    if (status === NO) {

        return (
            <div className="status">
                <div className="status__item" onClick={handleStatusYes}>
                    <div className="status__item__icon check">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                        </svg>
                    </div>
                </div>
                <div className="status__item">
                    <div className="status__item__icon none" onClick={handleStatusUnanswered}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg>
                    </div>
                </div>
                <div className="status__item">
                    <div className="status__item__icon text-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                        </svg>
                    </div>
                </div>
            </div>
        );

    }

    if (status === UNANSWERED) {

        return (
            <div className="status">
                <div className="status__item" onClick={handleStatusYes}>
                    <div className="status__item__icon check">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                        </svg>
                    </div>
                </div>
                <div className="status__item">
                    <div className="status__item__icon text-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
                        </svg>
                    </div>
                </div>
                <div className="status__item">
                    <div className="status__item__icon cross" onClick={handleStatusNo}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                </div>
            </div>
        );

    }






}