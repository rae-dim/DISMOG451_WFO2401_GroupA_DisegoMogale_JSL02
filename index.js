
function welcome() {
    const welcomeMessage = document.getElementById('welcomeMessage')
    const today = new Date();
    welcomeMessage.textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today.toDateString()}`;
};
welcome();

function displayWorkoutRoutine() {
    const workoutInput = document.querySelector('#workoutInput').value;
    if (workoutInput === '') {  //stops user from adding empty input value
        return;
    }
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');

    checkDuplicates1(workoutInput)

    newWorkout.innerHTML = workoutInput;
    workoutList.appendChild(newWorkout);
};
function checkDuplicates1(workoutInput) {
    const workoutList = document.querySelector('#workoutList');

    for (let i = 0; i < workoutList.children.length; i++) {
        if (workoutList.children[i].textContent.trim() === workoutInput) {
            isDuplicate = true;
            throw {toString: function() { return "You have already submitted this workout, pick a different one"; } }
        }
    }
}

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

let isDuplicate = false; // move this declaration outside the function

function addNewGoal() {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');

    checkDuplicates2(goalInput);

    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);
    
    newGoal.addEventListener('click', () => {
        goalList.removeChild(newGoal);
    });
}

function checkDuplicates2(goalInput) {
    if (goalInput === '') {
        // Skip empty values
        return;
    }

    const goalList = document.querySelector('#goalList');

    for (let i = 0; i < goalList.children.length; i++) {
        if (goalList.children[i].textContent.trim() === goalInput) {
            isDuplicate = true;
            throw new Error("You have already set this goal");
        }
    }
}

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
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
