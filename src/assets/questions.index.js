const questions = require('./questions.all.json');

const data = {
  all: questions,
};

export default data;

export const questionsAreas = Object.keys(data);