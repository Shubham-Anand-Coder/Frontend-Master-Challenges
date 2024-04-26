function next(button) {
    var currentForm = button.closest('.parent-conatiner');
    var nextForm = currentForm.nextElementSibling;
    var currentStep = nextForm.querySelector('.step');
    var classNames = currentStep.classList;
    var steps = currentStep.querySelectorAll('.steps');
    let currClass = String(classNames[1])[4];

    
       // Convert the class name to the index of the current step
       var ind = parseInt(currClass.replace('step', ''));
       console.log(ind);
              // Change color of current step to blue
       steps.forEach(function(step, index) {
           if (index + 1 === ind) {
          
               step.style.backgroundColor = 'blue';
           }
           else{
            step.style.backgroundColor = 'tomato';
           }
           console.log(step);
       });

    // Hide current form
    currentForm.style.display = 'none';

    // Display next form
    if (nextForm) {
        nextForm.style.display = 'block';
    }
}

function prev(button) {
    var currentForm = button.closest('.parent-conatiner');
    var prevForm = currentForm.previousElementSibling;
    var currentStep = prevForm.querySelector('.step');

    var classNames = currentStep.classList;
    var steps = currentStep.querySelectorAll('.steps');
    let currClass = String(classNames[1])[4];

    
       // Convert the class name to the index of the current step
       var ind = parseInt(currClass.replace('step', ''));
       console.log(ind);
              // Change color of current step to blue
       steps.forEach(function(step, index) {
           if (index + 1 === ind) {
          
               step.style.backgroundColor = 'blue';
           }
           else{
            step.style.backgroundColor = 'tomato';
           }
           console.log(step);
       });




    currentForm.style.display = 'none';
    if (prevForm) {
        prevForm.style.display = 'block';
    }
}

