debugger;
function welcome() {
    const welcomeMessage = document.getElementById('welcomeMessage')
    const today = new Date();
    welcomeMessage.textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today.toDateString()}`;
};
welcomeMessage();

function displayWorkoutRoutine() {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);
    
    newGoal.addEventListener('click', () => {
        goalList.removeChild(newGoal);
    });

    function checkDuplicates(){
        debugger;
        var duplicateGoalInput = false;
        if (goalInput != null){
            if (goalInput.value === goalList.textContent){
                duplicateGoalInput = true;
            }
        }
        if (duplicateGoalInput === true) {
            throw new Error("You have already set this goal")
        }
    }

};