// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const test = {
  name: 'kanta',
  age: 24,
  findout: function () {
    console.log(`${this.age}age and name is ${this.name}`);
  },
};

test.findout();
