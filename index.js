//! Welcome SEction
function welcome() {
    const welcomeMessage = document.getElementById('welcomeMessage')
    const today = new Date();
    welcomeMessage.textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today.toDateString()}`;
};
welcome();



let isDuplicate = false; //will be used for validating checkDuplicates functions
//! Workout Section
function displayWorkoutRoutine() {
    const workoutInput = document.querySelector('#workoutInput').value.toLowerCase();
    if (workoutInput === '') {  //stops user from adding empty input value
        return;
    }
    if (checkDuplicates1(workoutInput)) {
        alert("You have already submitted this workout, pick a different one");
        return; // Stops execution if it's a duplicate
    }
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');

    newWorkout.innerHTML = workoutInput;
    workoutList.appendChild(newWorkout);
    newWorkout.addEventListener('click', () => {
        workoutList.removeChild(newWorkout);
    });
};

function checkDuplicates1(workoutInput) {
    const workoutList = document.querySelector('#workoutList');

    for (let i = 0; i < workoutList.children.length; i++) {  //for loop used to iterate through each list item
        if (workoutList.children[i].textContent === workoutInput) {
             return true; //Will return true if a duplicate is found
        }
    }
    return false; //Will return false if no duplicate is found
}

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

/*function clearInput1() {
    document.getElementById('workoutInput').value = " "; //TODO Was supposed to clear the input field
}*/

//! Goals section
function addNewGoal() {
    const goalInput = document.querySelector('#goalInput').value.toLowerCase();
    if (goalInput === '') {
        return;
    }
    if (checkDuplicates2(goalInput)) {
        alert("You have already submitted this goal, pick a different one");
        return; // Stops execution if it's a duplicate
    }

    const goalList = document.querySelector('#goalList');
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);

    newGoal.addEventListener('click', () => {
        goalList.removeChild(newGoal);
    });
}

function checkDuplicates2(goalInput) {
    const goalList = document.querySelector('#goalList');

    for (let i = 0; i < goalList.children.length; i++) {  
        if (goalList.children[i].textContent === goalInput) {
            return true;
        }
    }
    return false;
}


document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

/*function clearInput2() {
    document.getElementById('goalInput').value = " "; //TODO was supposed to clear input field
}*/

//! Everything Else
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
