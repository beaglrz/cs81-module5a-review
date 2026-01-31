/*
Beatriz Galarza
Repository: https://github.com/beaglrz/cs81-module5a-review
*/

// This array holds a list of hobby sessions for the week
// Each object representing a weekday, hobby, time spent and mood
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

//Function: Total Time
//Purpose: Adds up all the minutes from every hobby session
function totalTime(log) {
    //reduce() goes through the array and keeps a running total
    //Starts with 0 and add the minutes from each session
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

//Function: Unique Hobbies
//Purpose: Creates a list of hobby names without duplicates
function uniqueHobbies(log) {
    //map() makes a new array which includes only hobby names
  const names = log.map(entry => entry.hobby);
  //Set removes duplicate values
  return [...new Set(names)];
}

//Function: Long Sessions
//Purpose: Get sessions that last longer than the given minutes
function longSessions(log, minMinutes) {
    //filter() keeps only the sessions that meet the conditions
  return log.filter(entry => entry.minutes > minMinutes);
}

//Function: Mood Count
//Purpose: Counts how many sessions match a specific mood
function countMood(log, moodType) {
    //filter() selects matching moods, and length counts them
  return log.filter(entry => entry.mood === moodType).length;
}

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));