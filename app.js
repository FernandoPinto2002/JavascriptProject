// ===============================================
// 1. DATA
// This is where we store all exercises
// ===============================================

const exerciseData = [
  {
    category: "Upper Body",
    groups: [

      // ================= CHEST =================
      {
        muscle: "chest",
        exercises: [
          { name: "Push Ups", difficulty: "Beginner", equipment: "Bodyweight", tips: ["Keep body straight.", "Lower chest fully.", "Do not flare elbows too wide."] },
          { name: "Incline Push Ups", difficulty: "Beginner", equipment: "Bodyweight", tips: ["Hands elevated.", "Stay tight.", "Control the descent."] },
          { name: "Decline Push Ups", difficulty: "Intermediate", equipment: "Bodyweight", tips: ["Feet elevated.", "Engage core.", "Keep neck neutral."] },
          { name: "Bench Press", difficulty: "Intermediate", equipment: "Barbell", tips: ["Feet flat.", "Control bar down.", "Press explosively."] },
          { name: "Incline Bench Press", difficulty: "Intermediate", equipment: "Barbell", tips: ["Bench 30°-45°.", "Do not over-arch.", "Control tempo."] },
          { name: "Dumbbell Bench Press", difficulty: "Intermediate", equipment: "Dumbbells", tips: ["Neutral grip possible.", "Control stretch.", "Press evenly."] },
          { name: "Chest Dips", difficulty: "Advanced", equipment: "Bodyweight", tips: ["Lean forward.", "Keep elbows tucked.", "Full depth if safe."] },
          { name: "Cable Fly", difficulty: "Intermediate", equipment: "Cable", tips: ["Soft elbows.", "Squeeze chest.", "Slow return."] },
          { name: "Pec Deck", difficulty: "Beginner", equipment: "Machine", tips: ["Seat adjusted properly.", "Squeeze at center.", "Control eccentric."] },
          { name: "Dumbbell Fly", difficulty: "Advanced", equipment: "Dumbbells", tips: ["Light weight.", "Deep stretch.", "Controlled motion."] }
        ]
      },

      // ================= SHOULDERS =================
      {
        muscle: "shoulders",
        exercises: [
          { name: "Overhead Press", difficulty: "Intermediate", equipment: "Barbell", tips: ["Brace core.", "Press straight up.", "Avoid arching back."] },
          { name: "Dumbbell Press", difficulty: "Intermediate", equipment: "Dumbbells", tips: ["Press evenly.", "Do not flare elbows.", "Control weight down."] },
          { name: "Arnold Press", difficulty: "Intermediate", equipment: "Dumbbells", tips: ["Rotate smoothly.", "Stay controlled.", "Full range."] },
          { name: "Lateral Raises", difficulty: "Beginner", equipment: "Dumbbells", tips: ["Lead with elbows.", "Stop at shoulder height.", "Use light weight."] },
          { name: "Cable Lateral Raise", difficulty: "Intermediate", equipment: "Cable", tips: ["Keep tension.", "No swinging.", "Control motion."] },
          { name: "Front Raise", difficulty: "Beginner", equipment: "Dumbbells", tips: ["Raise to shoulder height.", "No body swing.", "Slow tempo."] },
          { name: "Face Pulls", difficulty: "Beginner", equipment: "Cable", tips: ["Pull to forehead.", "Elbows high.", "Squeeze rear delts."] },
          { name: "Reverse Pec Deck", difficulty: "Beginner", equipment: "Machine", tips: ["Control movement.", "Squeeze rear delts.", "Stay upright."] },
          { name: "Pike Push Ups", difficulty: "Intermediate", equipment: "Bodyweight", tips: ["Hips high.", "Lower head down.", "Control tempo."] },
          { name: "Handstand Push Ups", difficulty: "Advanced", equipment: "Bodyweight", tips: ["Strong shoulders.", "Controlled descent.", "Wall support if needed."] }
        ]
      },

      // ================= TRICEPS =================
      {
        muscle: "triceps",
        exercises: [
          { name: "Diamond Push Ups", difficulty: "Advanced", equipment: "Bodyweight", tips: ["Hands close.", "Elbows tight.", "Full lockout."] },
          { name: "Bench Dips", difficulty: "Beginner", equipment: "Bodyweight", tips: ["Shoulders stable.", "Control depth.", "Do not shrug."] },
          { name: "Triceps Pushdown", difficulty: "Beginner", equipment: "Cable", tips: ["Elbows fixed.", "Full extension.", "Slow return."] },
          { name: "Rope Pushdown", difficulty: "Beginner", equipment: "Cable", tips: ["Split rope at bottom.", "Squeeze hard.", "Control up."] },
          { name: "Overhead Extension", difficulty: "Intermediate", equipment: "Dumbbells", tips: ["Elbows up.", "Stretch at bottom.", "Control tempo."] },
          { name: "Skull Crushers", difficulty: "Advanced", equipment: "Barbell", tips: ["Lower to forehead.", "Keep elbows tight.", "Use moderate weight."] },
          { name: "Close-Grip Bench Press", difficulty: "Intermediate", equipment: "Barbell", tips: ["Narrow grip.", "Elbows tucked.", "Press straight."] },
          { name: "Cable Overhead Extension", difficulty: "Intermediate", equipment: "Cable", tips: ["Stretch fully.", "Squeeze at lockout.", "Stable core."] },
          { name: "Kickbacks", difficulty: "Beginner", equipment: "Dumbbells", tips: ["Upper arm steady.", "Full extension.", "Slow tempo."] },
          { name: "Dip Machine", difficulty: "Intermediate", equipment: "Machine", tips: ["Control depth.", "Lock out fully.", "Stay upright."] }
        ]
      },

      // ================= LATS =================
      {
        muscle: "lats",
        exercises: [
          { name: "Pull Ups", difficulty: "Advanced", equipment: "Bodyweight", tips: ["Full stretch.", "Elbows down.", "No swinging."] },
          { name: "Lat Pulldown", difficulty: "Beginner", equipment: "Machine", tips: ["Pull to chest.", "Control return.", "Do not lean back too far."] },
          { name: "Neutral Grip Pulldown", difficulty: "Beginner", equipment: "Machine", tips: ["Neutral grip easier on elbows.", "Slow negative.", "Full range."] },
          { name: "Straight Arm Pulldown", difficulty: "Intermediate", equipment: "Cable", tips: ["Arms straight.", "Feel lats.", "Control tempo."] },
          { name: "Single Arm Pulldown", difficulty: "Intermediate", equipment: "Cable", tips: ["Elbow to hip.", "Pause squeeze.", "Controlled motion."] },
          { name: "Chin Ups", difficulty: "Advanced", equipment: "Bodyweight", tips: ["Underhand grip.", "Chest up.", "Full range."] },
          { name: "Band Pulldown", difficulty: "Beginner", equipment: "Band", tips: ["Anchor overhead.", "Control return.", "Squeeze lats."] },
          { name: "Machine Pullover", difficulty: "Beginner", equipment: "Machine", tips: ["Slow reps.", "Full stretch.", "Controlled."] },
          { name: "Dumbbell Pullover", difficulty: "Intermediate", equipment: "Dumbbells", tips: ["Stretch carefully.", "Control weight.", "Engage lats."] },
          { name: "Wide Grip Pulldown", difficulty: "Intermediate", equipment: "Machine", tips: ["Wide grip.", "Pull to chest.", "No momentum."] }
        ]
      },

      // ================= BACK =================
      {
        muscle: "back",
        exercises: [
          { name: "Seated Cable Row", difficulty: "Beginner", equipment: "Cable", tips: ["Pull to ribs.", "Chest tall.", "Slow return."] },
          { name: "Barbell Row", difficulty: "Advanced", equipment: "Barbell", tips: ["Flat back.", "Pull to stomach.", "No jerking."] },
          { name: "Dumbbell Row", difficulty: "Beginner", equipment: "Dumbbells", tips: ["Elbow to hip.", "Neutral spine.", "Pause at top."] },
          { name: "T-Bar Row", difficulty: "Intermediate", equipment: "Machine", tips: ["Brace core.", "Pull controlled.", "Full stretch."] },
          { name: "Chest Supported Row", difficulty: "Beginner", equipment: "Machine", tips: ["No momentum.", "Squeeze scapula.", "Control tempo."] },
          { name: "Inverted Row", difficulty: "Intermediate", equipment: "Bodyweight", tips: ["Rigid body.", "Pull chest up.", "Control descent."] },
          { name: "Deadlift", difficulty: "Advanced", equipment: "Barbell", tips: ["Brace before lift.", "Bar close to legs.", "Push through heels."] },
          { name: "Back Extension", difficulty: "Beginner", equipment: "Machine", tips: ["Neutral spine.", "Do not hyperextend.", "Control."] },
          { name: "Face Pull", difficulty: "Beginner", equipment: "Cable", tips: ["Elbows high.", "Squeeze upper back.", "Slow negative."] },
          { name: "Rear Delt Row", difficulty: "Intermediate", equipment: "Dumbbells", tips: ["Wide elbows.", "Light weight.", "Strict form."] }
        ]
      }

    ]
  },

  {
    category: "Lower Body",
    groups: [

      // ================= HAMSTRINGS =================
      {
        muscle: "hamstrings",
        exercises: [
          { name: "Romanian Deadlift", difficulty: "Intermediate", equipment: "Barbell", tips: ["Hinge hips.", "Stretch hamstrings.", "Flat back."] },
          { name: "Leg Curl", difficulty: "Beginner", equipment: "Machine", tips: ["Control movement.", "Squeeze at top.", "Slow negative."] },
          { name: "Nordic Curl", difficulty: "Advanced", equipment: "Bodyweight", tips: ["Control descent.", "Strong hamstrings.", "Assisted if needed."] },
          { name: "Good Morning", difficulty: "Advanced", equipment: "Barbell", tips: ["Light weight.", "Hip hinge.", "Flat back."] },
          { name: "Single Leg RDL", difficulty: "Intermediate", equipment: "Dumbbells", tips: ["Balance controlled.", "Hips square.", "Slow reps."] },
          { name: "Cable Pull Through", difficulty: "Beginner", equipment: "Cable", tips: ["Hinge hips.", "Squeeze glutes.", "Control return."] },
          { name: "Kettlebell Swing", difficulty: "Intermediate", equipment: "Kettlebell", tips: ["Explosive hips.", "Arms relaxed.", "Flat back."] },
          { name: "Glute Ham Raise", difficulty: "Advanced", equipment: "Machine", tips: ["Control movement.", "Slow tempo.", "Strong contraction."] },
          { name: "Hamstring Walkout", difficulty: "Intermediate", equipment: "Bodyweight", tips: ["Hips up.", "Controlled steps.", "Engage hamstrings."] },
          { name: "Band RDL", difficulty: "Beginner", equipment: "Band", tips: ["Light resistance.", "Hinge properly.", "Flat back."] }
        ]
      },

      // ================= GLUTES =================
      {
        muscle: "glutes",
        exercises: [
          { name: "Hip Thrust", difficulty: "Intermediate", equipment: "Barbell", tips: ["Chin tucked.", "Drive through heels.", "Pause at top."] },
          { name: "Glute Bridge", difficulty: "Beginner", equipment: "Bodyweight", tips: ["Squeeze glutes.", "Control tempo.", "Do not arch back."] },
          { name: "Bulgarian Split Squat", difficulty: "Intermediate", equipment: "Dumbbells", tips: ["Front knee stable.", "Lean slightly forward.", "Full depth."] },
          { name: "Step Ups", difficulty: "Beginner", equipment: "Dumbbells", tips: ["Drive through heel.", "Control descent.", "Stay upright."] },
          { name: "Cable Kickback", difficulty: "Beginner", equipment: "Cable", tips: ["Squeeze at top.", "Control return.", "Keep core tight."] },
          { name: "Sumo Deadlift", difficulty: "Advanced", equipment: "Barbell", tips: ["Wide stance.", "Push knees out.", "Drive hips forward."] },
          { name: "Walking Lunges", difficulty: "Intermediate", equipment: "Dumbbells", tips: ["Long stride.", "Balance controlled.", "Full depth."] },
          { name: "Goblet Squat", difficulty: "Beginner", equipment: "Dumbbells", tips: ["Chest up.", "Knees track out.", "Full range."] },
          { name: "Frog Pumps", difficulty: "Beginner", equipment: "Bodyweight", tips: ["Feet together.", "Small pulses.", "Squeeze glutes."] },
          { name: "Banded Walks", difficulty: "Beginner", equipment: "Band", tips: ["Stay low.", "Small steps.", "Tension constant."] }
        ]
      },

      // ================= QUADS =================
      {
        muscle: "quads",
        exercises: [
          { name: "Back Squat", difficulty: "Intermediate", equipment: "Barbell", tips: ["Brace core.", "Knees track out.", "Full depth."] },
          { name: "Front Squat", difficulty: "Advanced", equipment: "Barbell", tips: ["Elbows high.", "Stay upright.", "Strong brace."] },
          { name: "Leg Press", difficulty: "Beginner", equipment: "Machine", tips: ["Control depth.", "Do not lock knees.", "Slow reps."] },
          { name: "Hack Squat", difficulty: "Intermediate", equipment: "Machine", tips: ["Back flat.", "Control tempo.", "Full depth."] },
          { name: "Split Squat", difficulty: "Beginner", equipment: "Dumbbells", tips: ["Stay upright.", "Control descent.", "Full range."] },
          { name: "Step Downs", difficulty: "Intermediate", equipment: "Bodyweight", tips: ["Slow descent.", "Knee aligned.", "Controlled."] },
          { name: "Leg Extension", difficulty: "Beginner", equipment: "Machine", tips: ["Pause at top.", "Slow return.", "Controlled."] },
          { name: "Wall Sit", difficulty: "Beginner", equipment: "Bodyweight", tips: ["Knees 90°.", "Back flat.", "Hold steady."] },
          { name: "Sissy Squat", difficulty: "Advanced", equipment: "Bodyweight", tips: ["Hold support.", "Controlled range.", "Slow reps."] },
          { name: "Walking Lunges (Quad Focus)", difficulty: "Intermediate", equipment: "Dumbbells", tips: ["Short stride.", "Stay upright.", "Full depth."] }
        ]
      },

      // ================= CALVES =================
      {
        muscle: "calves",
        exercises: [
          { name: "Standing Calf Raise", difficulty: "Beginner", equipment: "Bodyweight", tips: ["Full stretch.", "Pause at top.", "Slow reps."] },
          { name: "Seated Calf Raise", difficulty: "Beginner", equipment: "Machine", tips: ["Control motion.", "Pause top.", "Full stretch."] },
          { name: "Single Leg Calf Raise", difficulty: "Intermediate", equipment: "Bodyweight", tips: ["Balance steady.", "Full range.", "Slow reps."] },
          { name: "Calf Raise on Step", difficulty: "Beginner", equipment: "Bodyweight", tips: ["Deep stretch.", "Controlled tempo.", "Pause top."] },
          { name: "Donkey Calf Raise", difficulty: "Intermediate", equipment: "Machine", tips: ["Hinge hips.", "Stretch deep.", "Controlled reps."] },
          { name: "Smith Calf Raise", difficulty: "Intermediate", equipment: "Machine", tips: ["Stable base.", "Slow reps.", "Pause contraction."] },
          { name: "Jump Rope", difficulty: "Beginner", equipment: "Bodyweight", tips: ["Light bounce.", "Stay relaxed.", "Quick rhythm."] },
          { name: "Tibialis Raise", difficulty: "Beginner", equipment: "Bodyweight", tips: ["Lift toes up.", "Slow reps.", "Control."] },
          { name: "Farmer Walk (Tip Toe)", difficulty: "Intermediate", equipment: "Dumbbells", tips: ["Walk tall.", "Stay on toes.", "Controlled steps."] },
          { name: "Calf Press on Leg Press", difficulty: "Beginner", equipment: "Machine", tips: ["Ankles move only.", "Full stretch.", "Pause top."] }
        ]
      }

    ]
  },

  {
    category: "Core",
    groups: [
      {
        muscle: "abs",
        exercises: [
          { name: "Plank", difficulty: "Beginner", equipment: "Bodyweight", tips: ["Body straight.", "Core tight.", "No sagging hips."] },
          { name: "Side Plank", difficulty: "Beginner", equipment: "Bodyweight", tips: ["Stack shoulders.", "Lift hips.", "Breathe steady."] },
          { name: "Dead Bug", difficulty: "Beginner", equipment: "Bodyweight", tips: ["Low back down.", "Move slow.", "Control breathing."] },
          { name: "Hanging Knee Raise", difficulty: "Intermediate", equipment: "Bodyweight", tips: ["No swinging.", "Lift knees high.", "Control down."] },
          { name: "Hanging Leg Raise", difficulty: "Advanced", equipment: "Bodyweight", tips: ["Strict reps.", "Slow tempo.", "Strong core."] },
          { name: "Cable Crunch", difficulty: "Beginner", equipment: "Cable", tips: ["Curl spine.", "Slow reps.", "Full contraction."] },
          { name: "Ab Wheel Rollout", difficulty: "Advanced", equipment: "Wheel", tips: ["Ribs down.", "Go slow.", "Strong brace."] },
          { name: "Russian Twist", difficulty: "Intermediate", equipment: "Bodyweight", tips: ["Rotate torso.", "Control tempo.", "Keep chest tall."] },
          { name: "Mountain Climbers", difficulty: "Beginner", equipment: "Bodyweight", tips: ["Quick pace.", "Core tight.", "No bouncing hips."] },
          { name: "Reverse Crunch", difficulty: "Beginner", equipment: "Bodyweight", tips: ["Lift hips.", "Control motion.", "Slow negative."] }
        ]
      }
    ]
  }
];
// ===============================================
// 2. RECURSION FUNCTION
// This finds exercises by muscle group
// ===============================================

function collectExercises(data, muscle, results = []) {

  for (const item of data) {

    // If this object has the muscle we want
    if (item.muscle === muscle) {
      results.push(...item.exercises);
    }

    // If it has groups inside, go deeper
    if (item.groups) {
      collectExercises(item.groups, muscle, results);
    }
  }

  return results;
}


// ===============================================
// 3. THIS COLLECTS ALL EXERCISES
// Used for global search
// ===============================================

function collectAllExercises(data, results = []) {

  for (const item of data) {

    if (item.exercises) {
      results.push(...item.exercises);
    }

    if (item.groups) {
      collectAllExercises(item.groups, results);
    }
  }

  return results;
}


// ===============================================
// 4. FILTER BY DIFFICULTY
// Uses ES6 filter()
// ===============================================

function filterByDifficulty(exercises, level) {
  if (!level) return exercises;

  return exercises.filter(ex => ex.difficulty === level);
}


// ===============================================
// 5. SORT ALPHABETICALLY
// Uses ES6 sort()
// ===============================================

function sortExercises(exercises) {
  return exercises.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}


// ===============================================
// 6. COUNT EXERCISES
// Uses ES6 reduce()
// ===============================================

function countExercises(exercises) {
  return exercises.reduce((total) => total + 1, 0);
}


// ===============================================
// 7. DISPLAY EXERCISES ON SCREEN
// ===============================================

function displayExercises(exercises) {

  const output = document.getElementById("output");
  const countDiv = document.getElementById("exerciseCount");

  if (exercises.length === 0) {
    output.innerHTML = "No exercises found.";
    countDiv.textContent = "";
    return;
  }

  countDiv.textContent =
    "Total Exercises: " + countExercises(exercises);

  const sorted = sortExercises(exercises);

  output.innerHTML = sorted.map(ex => {

    const levelClass = ex.difficulty.toLowerCase();

    const tipsHTML =
      ex.tips.map(t => "<li>" + t + "</li>").join("");

    return `
      <div class="card">
        <h3>${ex.name}</h3>

        <div>
          <span class="badge ${levelClass}">
            ${ex.difficulty}
          </span>

          <span class="pill">
            ${ex.equipment}
          </span>
        </div>

        <ul class="tips">
          ${tipsHTML}
        </ul>
      </div>
    `;

  }).join("");
}


// ===============================================
// 8. MAIN FUNCTION (RUNS WHEN USER CHANGES THINGS)
// ===============================================

function updateExercises() {

  const muscle =
    document.getElementById("muscleSelect").value;

  const difficulty =
    document.getElementById("difficultySelect").value;

  const searchQuery =
    document.getElementById("searchInput").value.trim();

  let exercises;

  // If user types something, search EVERYTHING
  if (searchQuery.length > 0) {

    const allExercises =
      collectAllExercises(exerciseData);

    const fuse = new Fuse(allExercises, {
      keys: ["name", "equipment", "tips"],
      threshold: 0.3
    });

    exercises =
      fuse.search(searchQuery)
      .map(result => result.item);

  } else {

    if (!muscle) {
      displayExercises([]);
      return;
    }

    exercises =
      collectExercises(exerciseData, muscle);

    exercises =
      filterByDifficulty(exercises, difficulty);
  }

  displayExercises(exercises);
}


// ===============================================
// 9. EVENT LISTENERS
// These listen for user changes
// ===============================================

document.getElementById("muscleSelect")
  .addEventListener("change", updateExercises);

document.getElementById("difficultySelect")
  .addEventListener("change", updateExercises);

document.getElementById("searchInput")
  .addEventListener("input", updateExercises);