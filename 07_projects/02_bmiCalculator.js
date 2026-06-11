// selecting the form as it has submit button event here is submit type event not a click event 
const form = document.querySelector('form')

// when form get submit it gets submitted by get or post type the values goes to url or server we have to stop them 
// so we have to stop default action of form event listener has a method for it to do so 
form.addEventListener('submit', function(e){
  e.preventDefault();

  // now we want values of height and weight using id 
  const height = parseInt(document.querySelector('#height').value); // string value convert in int 
  const weight = parseInt(document.querySelector('#weight').value);

  // can get some error so we have to check the input values
  const results = document.querySelector('#results');
  
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    // calculate the BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    // show results with the correct category
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span> - Under Weight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi}</span> - Normal Range`;
    } else {
      
      results.innerHTML = `<span>${bmi}</span> - Overweight`;
    }
  }
});