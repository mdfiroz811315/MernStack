# MernStack
Mern Stack Application


1. in cmd to goto the code  location

cd "Location"

example

cd C:\Users\MIRZA TAHSIN\Coding it will come to coding location in command line

2. to copy code from github

git clone "https location"

example

git clone https://github.com/mdfiroz811315/MernStack.git


3. how to push code to github from your local machine




 git merge conflict example


new error


// to go code history using commit
git reset --hard 085515d539f2c59d3b564fd1a0eab930900f2a33

// git pull

// to push code from cmd in git

git status

git add .


git commit -m "my changes through cmd"

git push


MERN 

Moogodb  // NOSQL database where our data get store in Dynamic Json Format
Express  // nodejs framework to write javascript code in server
React    // frontend library
Nodejs   // It Provide runtine environment for javascript framework

download nodejs from and install it
https://nodejs.org/en/download/

to know node version
node -v
to know NPM version
npm -v

npm(node package manager) : it contain libraries which will help us to build our application

to Create new nodejs project
go to that folder 
Step 1 :
npm init  (to start a fresh project fill all the details and name main as server.js)

Step 2:
npm install express


Step 3:
Create New File name as "server.js"

Step 4

paste the below code in express.js page
https://expressjs.com/en/starter/hello-world.html

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

Step 5

in Terminal Type
 npm start 

Step 6

Open any Browser chrome/Mozilla

http://127.0.0.1:3000/ or http://localhost:3000/