const exercisesTestData = [
  {
    id: 4,
    name: "Incline Barbell Bench Press",
    image:
      "https://static.strengthlevel.com/images/illustrations/incline-bench-press-1000x1000.jpg",
    instructions:
      "Lie with your glutes and shoulders in contact with the bench, feet flat on the ground. Grip the bar slighly wider than shoulder width. Squeeze your shoulder blades together. Lower the bar with control until contact is made with your upper chest, then extend your elbows until they are locked.",
    primaryTarget: "chest",
    secondaryTarget: ["shoulders", "triceps"],
  },
  {
    id: 5,
    name: "Incline Dumbell Bench Press",
    image:
      "https://static.strengthlevel.com/images/illustrations/incline-dumbbell-bench-press-1000x1000.jpg",
    instructions:
      "Set the bench at a 30-45 degree angle. Lie with your glutes and shoulders in contact with the bench, feet flat on the ground. Squeeze your shoulder blades together. Lower the dumbells with control until contact is made with the side of your chest, then extend your elbows until they are locked.",
    primaryTarget: "chest",
    secondaryTarget: ["shoulders", "triceps"],
  },
  {
    id: 6,
    name: "Pull Up",
    image:
      "https://static.strengthlevel.com/images/illustrations/pull-ups-1000x1000.jpg",
    instructions:
      "Grip the bar at shoulder width with an overhand grip, with elbows fully extended at a dead hang. With legs straight and knees locked, pull yourself up at least until your chin is above the bar. Descend in a controlled manner.",
    primaryTarget: "lats",
    secondaryTarget: ["biceps"],
  },
  {
    id: 7,
    name: "Bent Over Row",
    image:
      "https://static.strengthlevel.com/images/illustrations/bent-over-row-1000x1000.jpg",
    instructions:
      "Grip the bar at shoulder width with an overhand grip. Assume a bent over position, with your back arched and shoulder blades squeezed togehter. Begin with the bar hanging just below your knees. Raise the barbell by bending and raising your elbows as high as possible, until the barbell makes contact with your belly. Avoid using momentum or assisting with your legs. Try to keep your torse parallel to the floor throughout the entire set.",
    primaryTarget: "lats",
    secondaryTarget: ["lower back", "biceps"],
  },
  {
    id: 8,
    name: "Dumbell Row",
    image:
      "https://static.strengthlevel.com/images/illustrations/dumbbell-row-1000x1000.jpg",
    instructions:
      "Lean on the bench with your kneww and arm, keeping your torso parallel to the ground. Arch your back. Pull the dumbell towards your hip by lifting your elbow as high as you can. Row with the dumbell close to your side with the intention of bringing it to your pocket. Descend with control.",
    primaryTarget: "lats",
    secondaryTarget: ["biceps", "shoulders"],
  },
  {
    id: 9,
    name: "T Bar Row",
    image:
      "Hold the barbell using a cable V handle placed under the bar. Assume a bent over position, with your back arched and shoulder blades squeezed together. Begin with your elbows straight. Raise the barbell by bending and raising your elbows as high as possible, until the barbell makes contact with your belly. Avoid using momentum or assisting your legs. Try to keep your torso parallel to the floor throughout the entire set.",
    instructions:
      "https://static.strengthlevel.com/images/illustrations/t-bar-row-1000x1000.jpg",
    primaryTarget: "lats",
    secondaryTarget: ["lower back", "biceps"],
  },
  {
    id: 10,
    name: "Machine Row",
    image:
      "https://static.strengthlevel.com/images/illustrations/machine-row-1000x1000.jpg",
    instructions:
      "Set the chair so the handkes are level with your chest. Hold the handles at shoulder width with an overhand grip. Begin with your elbows fully locked and shoulder blades loose and protracted. Begin the repitition by squeezing your shoulder blades and pulling the handles as far back as possible. Hold the end position for a moment. Return to the starting position in a slow and controlled manner. While rowing, flare your elbows slightly out.",
    primaryTarget: "lats",
    secondaryTarget: ["biceps", "traps"],
  },
  {
    id: 11,
    name: "Standing Barbell Shoulder Press",
    image:
      "https://static.strengthlevel.com/images/illustrations/shoulder-press-1000x1000.jpg",
    instructions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    primaryTarget: "shoulders",
    secondaryTarget: ["triceps", "traps"],
  },
  {
    id: 12,
    name: "Standing Dumbell Shoulder Press",
    image:
      "https://static.strengthlevel.com/images/illustrations/dumbbell-shoulder-press-1000x1000.jpg",
    instructions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    primaryTarget: "shoulders",
    secondaryTarget: ["triceps", "traps"],
  },
  {
    id: 13,
    name: "Standing Dumbell Lateral Raise",
    image:
      "https://static.strengthlevel.com/images/illustrations/dumbbell-lateral-raise-1000x1000.jpg",
    instructions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    primaryTarget: "shoulders",
    secondaryTarget: ["traps"],
  },
  {
    id: 14,
    name: "Cable Lateral Raise",
    image:
      "https://static.strengthlevel.com/images/illustrations/cable-lateral-raise-1000x1000.jpg",
    instructions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    primaryTarget: "shoulders",
    secondaryTarget: ["traps"],
  },
  {
    id: 15,
    name: "Standing Dumbell Front Raise",
    image:
      "https://static.strengthlevel.com/images/illustrations/dumbbell-front-raise-1000x1000.jpg",
    instructions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    primaryTarget: "shoulders",
    secondaryTarget: ["chest"],
  },
];

export default exercisesTestData