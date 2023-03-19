// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "input",
    name: "title",
    message: "What's the title?",
  },
  {
    type: "select",
    name: "level",
    message: "What's the level?",
    choices: ["beginner", "intermediate", "advanced"],
  },
  {
    type: "select",
    name: "category",
    message: "What's the category?",
    choices: ["html/css", "js/ts", "react/next", "other"],
  },
];
