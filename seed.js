const db = require("./db");
const Campus = require("./db/models/campuses");
const Student = require("./db/models/students");
const Bluebird = require("bluebird");

const campuses = [{
  "name": "Mars University",
  "photo": "https://vignette1.wikia.nocookie.net/en.futurama/images/2/24/MarsUniversity.png/revision/latest?cb=20071224022054"
}, {
  "name": "Venus Tech",
  "photo": "https://theinfosphere.org/images/thumb/e/ef/Braino.png/175px-Braino.png"
}, {
  "name": "Jedi Code Academy",
  "photo": "https://vignette3.wikia.nocookie.net/starwars/images/5/55/Temple_Interior.png/revision/latest?cb=20150803133149"
}, {
  "name": "Neptunian Aquacoding College",
  "photo": "http://www.collegerag.net/wp-content/uploads/2014/05/21.jpg"
}];

const students = [
  {
    "firstName": "Arthur",
    "lastName": "MacNugget",
    "email": "aMacnugs@earthlink.com",
    "campusId": 3
  }, {
    "firstName": "Gilly",
    "lastName": "Fishman",
    "email": "fishyG@waterlink.com",
    "campusId": 1
  }, {
    "firstName": "Scotty",
    "lastName": "Bacula",
    "email": "beyoncefan1@aol.com",
    "campusId": 2
  }, {
    "firstName": "Peter",
    lastName: "Park",
    email: "mrpp@optimumonline.com",
    campus: 2
  }
  , {
    firstName: "Nathan",
    lastName: "Explosion",
    email: "natex@dethklok.com",
    campus: 4
  }, {
    "firstName": "Yoda",
    "lastName": "Gremlin",
    "email": "gizmo@jedi.gov",
    "campusId": 4
  }, {
    "firstName": "Sant",
    "lastName": "Claus",
    "email": "kkringle@npole.com",
    "campusId": 3
  }, {
    "firstName": "Slim",
    "lastName": "Biggis",
    "email": "bigslim@gmail",
    "campusId": 2
  }, {
    "firstName": "Jonas",
    "lastName": "Venture",
    "email": "rustyv@venture.com",
    "campusId": 1
  }, {
    "firstName": "Leslie",
    "lastName": "Knope",
    "email": "lknope@pawnee.com",
    "campusId": 1
  }, {
    "firstName": "Nikko",
    "lastName": "Halloa",
    "email": "robocoplives@ocp.net",
    "campusId": 2
  }, {
    "firstName": "Touranga",
    "lastName": "Leela",
    "email": "tleels@planex.com",
    "campusId": 2
  }, {
    "firstName": "Carmencita",
    "lastName": "Ibañez",
    "email": "cIbañez@earth.net",
    "campusId": 4
  }, {
    "firstName": "Beatrix",
    "lastName": "Kiddo",
    "email": "thebride@aol.com",
    "campusId": 4
  }, {
    "firstName": "Natalya",
    "lastName": "Simonova",
    "email": "ninasimone@goldeneye.uk",
    "campusId": 3
  }, {
    "firstName": "Armitage",
    "lastName": "Wintermute",
    "email": "nueromancer@razornet.com",
    "campusId": 3
  }, {
    "firstName": "John",
    "lastName": "Decker",
    "email": "deck@shadow.net",
    "campusId": 4
  }
];

const seed = () =>
  Bluebird.map(students, student =>
    Student.create(student, {include:[Campus]})
  );



  // Bluebird.map(campuses, c =>
  //   Campus.create(c)
  // );
  //


const main = () => {
  console.log("Syncing db...");
  db.sync({ force: true })
    .then(() => {
      console.log("Seeding databse...");
      return seed();
    })
    .catch(err => {
      console.log("Error while seeding");
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });

  };

  main();
