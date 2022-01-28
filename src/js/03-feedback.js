import throttle from 'lodash.throttle';

const feedbackRef = document.querySelector('.feedback-form');
const textareaREf = document.querySelector('.feedback-form  textarea');
const inputREf = document.querySelector('.feedback-form  input');

const formData = {};
const STORAGE_KEY = 'feedback-form-state';
getStorageValue();

feedbackRef.addEventListener('input', throttle(onTextareaInput, 500))
feedbackRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

 if(textareaREf.value === '' || inputREf.value === '') {
   alert('Не все поля заполнены');
    return;
  }
    console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {

 formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
  
}


function getStorageValue() {
  const savedValue = localStorage.getItem(STORAGE_KEY);
   
   try {
   const parse = JSON.parse(savedValue);
     if (savedValue) {
        inputREf.value = parse.email || "";
       textareaREf.value = parse.message || "";
    }
  } catch (error) {
console.log("Error parse", error);
  }
 
}
       
        
