const request = require("request");
const fs = require("fs");
const url = process.argv[2];
const filepath = process.argv[3];

request(url, (error, response, body) => {
  fs.writeFile(filepath, body, error => {
    if (error) {
      console.log("File not downloaded");
    } else {
      console.log("File downloaded");
    }
  });
});

/*"const request = require("request");" imports the "request" library, which allows the program to make network requests (such as downloading a file from the internet).
"const fs = require("fs");" imports the "fs" (file system) library, which allows the program to interact with the computer's file system (such as saving a file to the hard drive).
"const url = process.argv[2];" assigns the value of the second command line argument (when the program is run from the command line) to the variable "url". This argument should be the URL of the file to be downloaded.
"const filepath = process.argv[3];" assigns the value of the third command line argument (when the program is run from the command line) to the variable "filepath". This argument should be the file path where the downloaded file should be saved.
"request(url, (error, response, body) => {" makes a request to the URL specified in the "url" variable and when the request is complete, it calls an anonymous function with parameters "error", "response" and "body".
"fs.writeFile(filepath, body, error => {" writes the contents of "body" (which is the contents of the file downloaded from the internet) to the file specified by "filepath". If there is an error it calls an anonymous function with parameter "error".
"if (error) {" checks if there is an error in the previous step, if true, it execute the following statement "console.log("File not downloaded");" which prints the message "File not downloaded" in the console.
"else {" if there is no error, it execute the following statement "console.log("File downloaded");" which prints the message "File downloaded" in the console.
"});" ends the anonymous function.
"});" ends the first anonymous function. */