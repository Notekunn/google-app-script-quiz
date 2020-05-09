function createForm(name = "Bài trắc nghiệm online", questions) {
  /* 
   * questions : [{
   *  question: <String>,
   *  answers: [<String>]
   *  trueAnswer: Interger
   * }]
   */
  if (!validateQuestions(questions)) return Logger.log("Quiz tao khong hop le");
  var form = FormApp.create(`Quiz || ${name.trim()}`);
  const countQuestion = questions.length;
  for (let i = 0; i < countQuestion; i++) {
    const item = form.addCheckboxItem();
    item.setTitle(`Câu ${i + 1}: ${questions[i].question.trim()}`);
    item.setChoices(questions[i].answers.map(answer => item.createChoice(answer)));
  }
  return form.getId();
}

function validateQuestions(questions) {
  if (typeof questions !== 'object' || !questions.length || questions.length == 0) return false;
  const countQuestion = questions.length;
  for (let i = 0; i < countQuestion; i++) {
    if (!questions[i].question || !questions[i].trueAnswer || !questions[i].answers || !questions[i].answers.length) return false;
  }
  return true;

}

function moveFormToFolder(name, formId, folderId){
  const folder = DriveApp.getFolderById(folderId);
  const form = DriveApp.getFileById(formId);

  const newFile = form.makeCopy(folder);
  form.setTrashed(true);
  FormApp.openById(newFile.getId()).setTitle(`Quiz || ${name.trim()}`)
  return newFile.getId();

}

function main() {
  // Test
  const folderId = "17EaqhBnie1FuJSbLz4HHzNTF2Uz2rLRP";
  const name = "Bài kiểm tra số 1";
  const questions = [{
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['brother', 'think', 'there', 'weather'],
    trueAnswer: 1
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }, {
    question: 'Find the word which has a different sound in the underlined part',
    answers: ['show', 'slow', 'comedy', 'motor'],
    trueAnswer: 2
  }]
  const tempId = createForm(name, questions);
  const formId = moveFormToFolder(name, tempId, folderId);
  Logger.log(formId);
}