//This file is part of the e2e project.We are using this file to test the Sign Up page of the app.
//The file contains the locators for the Sign Up page.

const date = new Date();
const day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth() + 1).padStart(2, '0');
const year = date.getFullYear();
const currentDate = `${day}/${month}/${year}`;

output.SignUp = {
    firsTimeBtn: 'First time? Get started', 
    minCharacterText: "Minimum 4 characters",
    maxCharacterText: "Maximum 20 characters",
    minCharacterPasswordText: "6 characters",
    onlyCharacterText: "Only alphanumeric characters",
    lowercaseLetterText: "One lowercase letter",
    uppercaseLetterText: "One uppercase letter",
    nameField: 'Your name',
    emailField: 'Email',
    passwordField: 'Password',
    maleOption: 'Male',
    continueBtn: 'Continue',
    signUpTitle: "Sign up",
    createAccountBtn: "Create account",
    verificationSentText: "Verification email sent",
    emailVerifiedBtn: "I have verified my email",
    chooseGoalText: "Choose your first personal goal.",
    gonnaDoItBtn: "I'm gonna do it!",
    creatingRoutineText: "You're creating your routine, Lucas Oliveira",
    dontMissAchievementText: "Don't miss any achievement!",
    activateBtn: "Activate",
    planText: "Plan",
    greetingText: "Hi, Lucas Oliveira!",
    trainerIntroText: "I'm João and I'll be your personal trainer.",
    emailAlreadyInUseText: "This email is already in use!",
    invalidEmailText: "Please enter a valid email address",
    birthdateText: currentDate,
    yearText: "android:id/date_picker_header_year",
    messageBirthdate: "You must be at least 13 years old to create an account",
  };