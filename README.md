# Limiting Layers

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [Personal Discussion](#personal-discussion)
- [Sources](#sources)

---

## Description

This web app chooses 7 images and 1 canvas element to represent state. 4 of the images are background states and 3 of the images are foreground states, the canvas element is a foreground state. The goal of the markov chain is to have a previous and a current state in which one will always be a background and one will always be a foreground; together they will compose a single image.

---

## How To Use

### Visiting

Click [here](https://distracted-goldberg-df775c.netlify.app/) to visit the working webpage(no installation needed).

### Installation

1. On GitHub, navigate to the main page of the repository.

2. Under the repository name, click **Clone or download**.

3. To clone the repository using HTTPS, under "Clone with HTTPS" copy link provided. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click **Use SSH**.

4. Open Git Bash.

5. Change the current working directory to the location where you want the cloned directory.

6. Type `git clone`, and then paste the URL you copied earlier.
   `$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`

7. Press **Enter** to create your local clone.

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

[Back To The Top](#limiting-layers)

---

## Personal Discussion

This system is meaningful to me because I was able to play with two concepts I am very interested with, composition and agency. For composition, I really wanted to create a probability matrix that always included a background and a foreground because I wanted to see how out of place an object(the foreground) would be in a random setting(the background). The second interest, agency, actually shows up in multiple ways. The data, or the matrix, was pre-determined, thus even if the scenes were set up randomly there is still lots of bias in the probabilities; an example is my thoughts of never seeing a horse in space show up in the .1 probabiliy that a horse state leads to a space background. However, because of the lack of agency as the matrix of probabilities is biased, I wanted to give the user a chance to create a completely unique scene by using a canvas, even though the only reason they are able to do so is also because of the way I set up the probabilities.

--
This was a really fun project but I did struggle with the logic of having static images and one dynamic canvas. Because of the canvas, thhis project has the most unique event listeners that I have ever used as I usually just listen to button clicks for submiting forms or searches. It would have been really easy for me to have a matrix where the canvas background and the canvas foreground loop infinitely as the once either is reached as a current state but for the user experience in the "next state" button I had to do include extra logic. The next steps for me would probably be finding a way to include a wider variety of data, in this case images, to avoid some of the repetition that I see when using my webapp.

[Back To The Top](#limiting-layers)

---

## Sources

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

[Back To The Top](#limiting-layers)
