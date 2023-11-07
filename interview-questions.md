# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the virtual DOM in React?

Your answer: 

DOM stands for Document Object Model. The virtual DOM is created by React when a React app is run. It tracks the updates made to the webpage. For example, when a Facebook post is liked, the virtual DOM reflects that change to that specific piece of the app's webpage. 

Researched answer:

The DOM is a representation of the elements present on a webpage or React application, with the data structured like a tree. The treelike structure is useful to developers for modifying specific elements of a user interface. When a DOM is updated, the entire UI must be rerendered which is expensive in developer terms. The virtual DOM on the otherhand, is a copy of the DOM that is much faster to update as there are no visible changes made to the UI. When actions or changes are made on an application, a virtual DOM tree that contains the node for the updated element is created. This tree is compared to the tree of the actual DOM, and the virtual DOM decides the best way to make changes to the actual DOM. This comparison makes it so only the updated element on the webpage is rerendered and the rest of the UI is left alone. For example, when a Facebook post is liked, the virtaul DOM creates a data tree that contains the node reflecting the like on the post. This is then compared with the actual DOM, and the webpage updates to reflect the like while the rest of Facebook remains unchanged and unaffected. 

2. Ruby has an implicit return. What does that mean?

Your answer:

In JavaScript, each function must have a return or an error message is returned. With the implicit return in Ruby, the developer can skip the step of inputting a return line in the code. The output of an implicit return will be the line following the function keyword such as "if", "while" and "unless". 

Researched answer:

Ruby utilizes the keyword return, but it is not necerssary due to Ruby's implicit return. If the word return is not present, Ruby will automatically return the value of the last line of a method. In the below code block, the impicit return when invoking the function "greeter" is 'Hello World' as the last line following the method keyword "def". 

def greeter
  'Hello World!'
end


3. Compare and contrast JavaScript and Ruby. What are three things they have in common and what are three differences?

Your answer:

Similarities: JavaScript and Ruby both have a plethora of built-in methods for developers to use for efficiency. Second, functions from JavaScript and Ruby must be printed to the console using the methods "console.log" or "p"/"puts" respectively. Lastly, they are both scripted, interpreted languages. 

Differences: While JavaScript can be used for fullstack web development, Ruby is specifically a backend language. The syntax differs in terms of organization and simplicity; Ruby has a more readable syntax with fewer brackets and parentheses, but JavaScript requires organization that Ruby does not. Lastly, Ruby is an object-oriented language while JavaScript has 6 primitive data types and additional collection data types.

Researched answer:

Similarities: JavaScript and Ruby are both interpreted, scripted, and dynamically typed, meaning they are both executed at runtime. Both languages have strong communities in the web developer world. Lastly, both Ruby and JavaScript have numerous third-party libraries that can be used for more efficient programming. 

Differences: Ruby is object-oriented programming while JavaScript does not adhere to all four pillars of OOP, specifically inheritance. Second, Ruby is an open-source language, meaning any outside developers can contribute to the language. JavaScirpt is not open-source and only a designated group of developers contribute to updates and additions. Third, Javascript can be used for both front and backend, while Ruby is only for backend functionality. 

4. STRETCH: What is a version manager?

Your answer: A version manager ensures that a developer can use the most up-to-date methods in the chosen language when programming. 

Researched answer: Version managers allow developers to install different versions of a language and switch between for different projects. Examples of version managers in Ruby include rbenv, rvm, and chruby. 

## Looking Ahead: Terms for Next Week

1. RSpec: RSpec is a domain-specific language to Ruby that allows developers to test the behavior of objects. RSpec enables developers to create specifications known as specs that describe the output desired from the object. RSpec requires some dependancies  to write tests in Ruby.

2. Test-driven development: Test-driven development (TDD) describes the process of writing a test, watching it fail, and then creating the code that makes the test pass. TDD ensures that the test and the code are linked. 

3. CRUD: CRUD stands for create, read, update, delete. It is a fun acronym for developers to remember the four actions we can perform on data. While read comes second in tje acronym, it is always the first step in data manipulation. 
