import inquirer from "inquirer";
let yourEmail = "youexample@gmail.com";
let yourPassword = "54321";
const answer = await inquirer.prompt([
    { message: "Enter your Email: ", type: "input", name: "username" },
    { message: "Enter your Password: ", type: "password", name: "Password" },
]);
if (answer.username === yourEmail && answer.Password === yourPassword) {
    console.log("You've signed in successfully");
}
else {
    console.log("Username or Password doesn't match");
}
