const questionModel = require("../models/questions.model");

exports.getAllQuestions = async (req, res) => {
  try {
    const [questions] = await questionModel.getAll();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
