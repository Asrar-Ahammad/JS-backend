use("CrudDB")

db.createCollection("courses")

//* Inserting documents
// db.courses.insertOne({
//     "name":"Asrar's web dev free course",
//     "price":0,
//     "assignments":12,
//     "projects":45
// })

// db.courses.insertMany([
//     {"name":"Asrar's web dev free course", "price":0, "assignments":12, "projects":45},
//     {"name":"Advanced JavaScript Bootcamp", "price":10, "assignments":15, "projects":30},
//     {"name":"Python for Data Science", "price":0, "assignments":18, "projects":25},
//     {"name":"Machine Learning with Python", "price":20, "assignments":10, "projects":20},
//     {"name":"React & Redux Masterclass", "price":15, "assignments":8, "projects":35},
//     {"name":"Full Stack Development", "price":30, "assignments":20, "projects":40},
//     {"name":"Django Web Development", "price":0, "assignments":14, "projects":22},
//     {"name":"Cloud Computing Basics", "price":25, "assignments":10, "projects":18},
//     {"name":"Cybersecurity Essentials", "price":0, "assignments":12, "projects":15},
//     {"name":"DevOps & CI/CD Pipeline", "price":35, "assignments":16, "projects":28},
//     {"name":"AI & Deep Learning", "price":40, "assignments":9, "projects":32},
//     {"name":"Mobile App Development with Flutter", "price":0, "assignments":11, "projects":27},
//     {"name":"Data Structures & Algorithms", "price":20, "assignments":25, "projects":20},
//     {"name":"C++ Programming Mastery", "price":10, "assignments":17, "projects":19},
//     {"name":"Game Development with Unity", "price":50, "assignments":8, "projects":45},
//     {"name":"SQL & Database Management", "price":5, "assignments":14, "projects":20},
//     {"name":"Ethical Hacking for Beginners", "price":0, "assignments":9, "projects":18},
//     {"name":"Blockchain & Cryptocurrency", "price":60, "assignments":7, "projects":12},
//     {"name":"AR/VR Development", "price":55, "assignments":6, "projects":30},
//     {"name":"Big Data & Analytics", "price":45, "assignments":15, "projects":25}
// ]
// )

//* Finding document
let a = db.courses.findOne({price:0})
console.log(a);

//* Update document
// db.courses.updateOne({price:0},{$set:{price:1000}})

// db.courses.updateMany({price:0},{$set:{price:1000}})

//* Delete
// db.courses.deleteOne({price:1000})

// db.courses.deleteMany({price:1000})
