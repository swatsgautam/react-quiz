// src/questions.js
const questions = [
    {
      question: "Which of the following definitions best describes React.js?",
      options: [
        'A library to build user interfaces with help of declarative code.',
        'A library for managing state in web applications.',
        'A framework to build user interfaces with help of imperative code.',
        'A library used for building mobile applications only.',
      ],
      answer: 0
    },
    {
      question: "What purpose do React hooks serve?",
      options: [
        'Enabling the use of state and other React features in functional components.',
        'Creating responsive layouts in React applications.',
        'Handling errors within the application.',
        'Part of the Redux library for managing global state.',
      ],
      answer: 0
    },
    {
      question: "Can you identify what JSX is?",
      options: [
        'A JavaScript extension that adds HTML-like syntax to JavaScript.',
        'A JavaScript library for building dynamic user interfaces.',
        'A specific HTML version that was explicitly created for React.',
        'A tool for making HTTP requests in a React application.',
      ],
      answer: 0
    },
    {
      question: "What is the most common way to create a component in React?",
      options: [
        'By defining a JavaScript function that returns a renderable value.',
        'By defining a custom HTML tag in JavaScript.',
        'By creating a file with a .jsx extension.',
        'By using the "new" keyword followed by the component name.',
      ],
      answer: 0
    },
    {
      question: 'What does the term "React state" imply?',
      options: [
        'An object in a component that holds values and may cause the component to render on change.',
        'The lifecycle phase a React component is in.',
        'The overall status of a React application, including all props and components.',
        'A library for managing global state in React applications.',
      ],
      answer: 2
    },
    {
      question: "How do you typically render list content in React apps?",
      options: [
        'By using the map() method to iterate over an array of data and returning JSX.',
        'By using the for() loop to iterate over an array of data and returning JSX.',
        'By using the forEach() method to iterate over an array of data and returning JSX.',
        'By using the loop() method to iterate over an array of data and returning JSX.',
      ],
      answer: 3
    },
    {
      question: "Which approach can NOT be used to render content conditionally?",
      options: [
        'Using the #if template syntax.',
        'Using a ternary operator.',
        'Using the && operator.',
        'Using an if-else statement.',
      ],
      answer: 0
    }
  ];
  
  export default questions;
  