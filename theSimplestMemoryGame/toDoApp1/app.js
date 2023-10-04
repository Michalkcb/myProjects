//Usuwanie elementów li
const removeTask = (e) => {
    // e.target.remove();
    // e.target.parentNode.remove();
    // console.log(e.target.parentNode);
    // e.target.parentNode.style.textDecoration = "line-through";
    // e.target.remove();
    const index = e.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).style.textDecoration = "line-through";
    e.target.remove();
   }
   
   document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask))

   //wysukiwanie elementów li
   const arr = [3,134134,1341,14,14,1434,145,2];
   
   //filter
   const oddNumbers = arr.filter((number) => number%2);
   const evenNumbers = arr.filter((number) => !(number%2));
   const biggerThan = arr.filter((number) => number > 100);
   // map
   const doubleNumbers = arr.map((number) => number*2);
   const people = arr.map(number => number / 2 + ' osob')
   // forEach
   arr.forEach((number, index) => arr[index] = number * 2)

   //search
   const input = document.querySelector('input');
   const ul = document.querySelector('ul');
   const liElements = document.querySelectorAll('li');

   const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter((task) => task.textContent.toLowerCase().includes(searchText)); 
   console.log(tasks);
   ul.textContent = '';
   tasks.forEach((task) => ul.appendChild(task));
}
   // 

   input.addEventListener('input', searchTask)

   //add task
