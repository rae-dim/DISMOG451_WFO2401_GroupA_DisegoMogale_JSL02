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
    const workoutInput = document.querySelector('#workoutInput').value;
    if (workoutInput === '') {  //stops user from adding empty input value
        return;
    }
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');

    checkDuplicates1(workoutInput)

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
            isDuplicate = true;
            alert("You have already submitted this workout, pick a different one");
        }
    }
}

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

//! Goals section
function addNewGoal() {
    const goalInput = document.querySelector('#goalInput').value;
    if (goalInput === '') {
        return;
    }

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
    const goalList = document.querySelector('#goalList');

    for (let i = 0; i < goalList.children.length; i++) {  
        if (goalList.children[i].textContent === goalInput) {
            isDuplicate = true;
            alert("You have already set this goal, add a different one");
        }
    }
}


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
