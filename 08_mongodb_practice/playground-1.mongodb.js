use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
  { "name": "Java", "Price": 20000, "Instructor": "Harry" },
  { "name": "Python", "Price": 18000, "Instructor": "Alice" },
  { "name": "JavaScript", "Price": 15000, "Instructor": "Bob" },
  { "name": "C++", "Price": 22000, "Instructor": "Charlie" },
  { "name": "Data Science", "Price": 25000, "Instructor": "David" },
  { "name": "Machine Learning", "Price": 30000, "Instructor": "Emma" },
  { "name": "Cyber Security", "Price": 28000, "Instructor": "George" },
  { "name": "Cloud Computing", "Price": 27000, "Instructor": "Sophia" },
  { "name": "AI & Deep Learning", "Price": 32000, "Instructor": "Liam" },
  { "name": "Blockchain", "Price": 29000, "Instructor": "Olivia" },
  { "name": "Web Development", "Price": 17000, "Instructor": "Noah" },
  { "name": "Mobile App Development", "Price": 23000, "Instructor": "Ava" },
  { "name": "Game Development", "Price": 26000, "Instructor": "William" },
  { "name": "Big Data Analytics", "Price": 31000, "Instructor": "James" },
  { "name": "IoT", "Price": 24000, "Instructor": "Charlotte" },
  { "name": "DevOps", "Price": 27000, "Instructor": "Benjamin" },
  { "name": "Kotlin", "Price": 19000, "Instructor": "Amelia" },
  { "name": "Swift", "Price": 20000, "Instructor": "Elijah" },
  { "name": "SQL & Databases", "Price": 16000, "Instructor": "Lucas" },
  { "name": "Software Testing", "Price": 21000, "Instructor": "Mia" }
]);


// Print a message to the output window.
console.log(`Done Inserting Data`);
