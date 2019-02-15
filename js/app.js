
document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-run-form')
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#delete-btn');
  button.addEventListener('click', handleDeleteClick);

});


const handleFormSubmit = function(event){
  event.preventDefault()

  const listElement = document.createElement('li');

  const name = document.createElement('p');
  name.textContent = this.name.value;
  listElement.appendChild(name);

  const country = document.createElement('p');
  country.textContent = this.country.value;
  listElement.appendChild(country);

  const resort = document.createElement('p');
  resort.textContent = this.resort.value;
  listElement.appendChild(resort);

  const length = document.createElement('p');
  length.textContent = this.length.value;
  listElement.appendChild(length);

  const grade = document.createElement('p');
  grade.textContent = this.grade.value;
  listElement.appendChild(grade);


  const my_runs = document.querySelector('#my_runs');
my_runs.appendChild(listElement);

this.reset();

};

const handleDeleteClick = function(event){
  const my_runs = document.querySelector('#my_runs');
  my_runs.innerHTML = '';
}
//
// const button = document.querySelector('#delete-btn');
// button.addEventListener('click', handleDeleteClick);
//
//
// });
//
//
// const handleFormSubmit = function(event){
//   event.preventDefault()
//
// const listElement = document.createElement('li')
//
// const title = document.createElement('p')
// title.textContent = this.title.value
// listElement.appendChild(title)
//
// const author = document.createElement('p')
// author.textContent = this.author.value
// listElement.appendChild(author)
//
// const category = document.createElement('p')
// category.textContent = this.category.value
// listElement.appendChild(category)
//
//
// const readingList = document.querySelector('#reading-list')
// readingList.appendChild(listElement)
//
// this.reset()
// };
//
// const handleDeleteClick = function(event){
//   const readingList = document.querySelector('#reading-list');
//   readingList.innerHTML = '';
// }
