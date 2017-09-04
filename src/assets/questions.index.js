const bioQuestions = require('./questions.biologia.json');
const coQuestions = require('./questions.cozrobic.json');
const gatQuestions = require('./questions.gatunki.json');
const gosQuestions = require('./questions.gospodarka.json');
const ochQuestions = require('./questions.ochrona.json');
const regQuestions = require('./questions.regulamin.json');
const sprQuestions = require('./questions.sprzet.json');
const zagQuestions = require('./questions.zagadnienia.json');


const data = {
  bio: bioQuestions,
  co: coQuestions,
  gat: gatQuestions,
  gos: gosQuestions,
  reg: regQuestions,
  och: ochQuestions,
  spr: sprQuestions,
  zag: zagQuestions,
};

export default data;
export const questionsAreas = Object.keys(data);