# Color-Guess-Game-with-JS 
# Go for a Test Drive - https://color-guess-game-with-js.vercel.app
Guess the correct RGB color from multiple choices in this interactive game. Features live score &amp; tries counters, persistent storage with localStorage, and a restart option to start fresh anytime.

This project is a Color Guessing Game built using HTML, CSS, and JavaScript. The player is shown a random RGB color code and must guess the correct color from six options. The game keeps track of the player’s score and tries using localStorage, ensuring the data remains even after refreshing the page. A Restart button allows players to reset their progress anytime.

# Features:
  - Generates a random RGB color code for each round.
  - Player selects the correct color from six clickable options.
  - Score increases when the player selects the correct color.
  - Tries increase when the player selects the wrong color.
  - Real-time score and tries tracking.
  - Persistent storage using localStorage – scores and tries remain after refreshing.
  - Restart button clears localStorage and resets the game.
  - Simple, responsive, and user-friendly design.

# Working:
  - The game displays a random RGB color code (e.g., rgb(120, 45, 200)).
  - Six color boxes are generated, one of which matches the given RGB code.
  - The player clicks on the box they think matches the code.
    - If correct → Score increases by 1.
    - If wrong → Tries increase by 1.
  - Scores and tries are stored in localStorage, so they remain even after refreshing the browser tab.
  - Clicking the Restart button resets everything (score, tries, and localStorage).

# Screenshots:

<img width="265" height="465" alt="Screenshot 2025-09-23 184600" src="https://github.com/user-attachments/assets/327cd229-6429-4918-b93b-f53348451250" />
<img width="270" height="468" alt="Screenshot 2025-09-23 184504" src="https://github.com/user-attachments/assets/b02985df-1483-4873-a13c-ad246c575711" />
<img width="268" height="468" alt="Screenshot 2025-09-23 184440" src="https://github.com/user-attachments/assets/bbf6346d-eec8-46fa-b473-5c13a73b43e6" />

