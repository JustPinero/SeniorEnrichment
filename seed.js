const db = require('./db');
const Campus = require('./db/models/campuses');
const Student = require('./db/models/students');
const Bluebird = require('bluebird');

const campuses = [{
  name: 'Mars University',
  photo: "https://vignette1.wikia.nocookie.net/en.futurama/images/2/24/MarsUniversity.png/revision/latest?cb=20071224022054"
}, {
  name: 'Venus Tech',
  photo: 'https://theinfosphere.org/images/thumb/e/ef/Braino.png/175px-Braino.png'
}, {
  name: 'Jedi Code Academy',
  photo: 'https://vignette3.wikia.nocookie.net/starwars/images/5/55/Temple_Interior.png/revision/latest?cb=20150803133149'
}, {
  name: 'Neptunian Aquacoding College',
  photo: 'http://www.collegerag.net/wp-content/uploads/2014/05/21.jpg'
}];

const students = [
  {
    firstName: 'Arthur',
    lastName: 'MacNugget',
    email: "aMacnugs@earthlink.com",
    campus: campuses[1]
  }, {
    firstName: 'Gilly',
    lastName: 'Fishman',
    email: "fishyG@waterlink.com",
    campus: campuses[0]
  }, {
    firstName: 'Scotty',
    lastName: 'Bacula',
    email: "beyoncefan1@aol.com",
    campus: campuses[2]
  }, {
    firstName: 'Peter',
    lastName: 'Park',
    email: "mrpp@optimumonline.com",
    campus: campuses[3]
  }
  , {
    firstName: 'Nathan',
    lastName: 'Explosion',
    email: "natex@dethklok.com",
    campus: 1
  }, {
    firstName: 'Yoda',
    lastName: 'Gremlin',
    email: "gizmo@jedi.gov",
    campus: 2
  }, {
    firstName: 'Santa',
    lastName: 'Claus',
    email: "kkringle@npole.com",
    campus: 3
  }, {
    firstName: 'Slim',
    lastName: 'Biggins',
    email: "bigslim@gmail",
    campus: 3
  }, {
    firstName: 'Jonas',
    lastName: 'Venture',
    email: "rustyv@venture.com",
    campus: 4
  }, {
    firstName: 'Leslie',
    lastName: 'Knope',
    email: "lknope@pawnee.com",
    campus: 1
  }, {
    firstName: 'Nikko',
    lastName: 'Hallora',
    email: "robocoplives@ocp.net",
    campus: 2
  }, {
    firstName: 'Touranga',
    lastName: 'Leela',
    email: "tleels@planex.com",
    campus: 3
  }, {
    firstName: 'Carmencita',
    lastName: 'Ibañez',
    email: "cIbañez@earth.net",
    campus: 4
  }, {
    firstName: 'Beatrix',
    lastName: 'Kiddo',
    email: "thebride@aol.com",
    campus: 1
  }, {
    firstName: 'Natalya',
    lastName: 'Simonova',
    email: "ninasimone@goldeneye.uk",
    campus: 2
  }, {
    firstName: 'Armitage',
    lastName: 'Wintermute',
    email: "nueromancer@razornet.com",
    campus: 3
  }, {
    firstName: 'John',
    lastName: 'Decker',
    email: "deck@shadow.net",
    campus: 4
  }
];

const seed = () =>
  Bluebird.map(students, student =>
    Student.create(student, {include:[Campus]})
  );

  const main = () => {
    console.log('Syncing db...');
    db.sync({ force: true })
      .then(() => {
        console.log('Seeding databse...');
        return seed();
      })
      .catch(err => {
        console.log('Error while seeding');
        console.log(err.stack);
      })
      .then(() => {
        db.close();
        return null;
      });

  };

  main();
