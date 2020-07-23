export const fetchQuestions = async (total: number) => {
  const response = await (
    await fetch(`https://opentdb.com/api.php?amount=${total}&type=multiple`)
  ).json();
  return response.results.map(
    (res: { incorrect_answers: string[]; correct_answer: string }) => ({
      ...res,
      answers: [...res.incorrect_answers, res.correct_answer],
    })
  );
};
