function hasLowercase(str) {
  return Array.from(str).some(char => char >= 'a' && char <= 'z');
}
function hasUppercase(str) {
  return Array.from(str).some(char => char >= 'A' && char <= 'Z');
}
function hasSpecialCharacter(str) {
  const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;
  return specialCharacterPattern.test(str);
}
function hasDigit(str) {
  const digitPattern = /\d/;
  return digitPattern.test(str);
}
let submitButton = document.getElementById('submit');
submitButton.addEventListener('click',()=>{
  let password = document.getElementById('password').value;
  if(hasLowercase(password) && hasUppercase(password) && hasSpecialCharacter(password)
  && hasDigit(password) && password.length>=8){
    document.getElementById('result').innerHTML = 'password is strong';
    setTimeout(()=>{
      document.getElementById('result').innerHTML = '';
      document.getElementById('password').value = '';
    }, 4000);
  }
  else{
    document.getElementById('result').innerHTML = 'password is not strong';
  }
})
