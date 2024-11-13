export const usePostAnswers = () => {
  const post = (data: Slide[]) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      body: JSON.stringify(data),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return { post };
};
