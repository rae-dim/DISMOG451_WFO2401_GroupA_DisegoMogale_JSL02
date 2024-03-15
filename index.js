
function welcome() {
    const welcomeMessage = document.getElementById('welcomeMessage')
    const today = new Date();
    welcomeMessage.textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today.toDateString()}`;
};
welcome();

function displayWorkoutRoutine() {
    debugger;
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

function addNewGoal() {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    checkDuplicates(goalInput);
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);

    let duplicateGoalInput = false;  //set initial value of false which will be validated in function 
    
    function checkDuplicates(goalInput) {
        if (goalInput == null || goalInput.value.trim() === '') {
            // Skip empty values
            return;
        }

            for (let i = 0; i < goalList.children.length; i++) { adds 
                if (goalList.children[i].textContent.trim() === goalInput.value.trim()) {
                    duplicateGoalInput = true;
                    throw new Error("You have already set this goal");
                }
            }
    }

        goalList.appendChild(newGoal);
        newGoal.addEventListener('click', () => {
        goalList.removeChild(newGoal);
    });
};

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
