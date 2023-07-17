// Add listener to all nextSectionTrigger buttons
nextSectionTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (e) => nextSectionClickListener(e))
})


// Add listeners to all the answer buttons
answers.forEach((answer) => {
  answer.addEventListener('click', (e) => toggleSelectIndicator(e))
})


// Add input and blur listeners to username input field
usernameInput.addEventListener('input', checkUsernameValidity)
usernameInput.addEventListener('blur', checkUsernameValidity)


// Add a click listener to the Play Again button
playAgainBtn.addEventListener('click', () => window.location.reload())
