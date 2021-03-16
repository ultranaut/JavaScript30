const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');

let prevChecked = null;

const handleCheck = (e) => {
  const currChecked = e.target;
  // we only need to do anything if the shift key is pressed
  if (e.shiftKey) {
    let inRange = false;

    // if we haven't actually done anything yet, set prevChecked to first one
    if (!prevChecked) {
      prevChecked = checkboxes[0];
    }

    checkboxes.forEach((checkbox) => {
      if (checkbox === prevChecked || checkbox === currChecked) {
        inRange = !inRange;
      }
      if (inRange) {
        checkbox.checked = true;
      }
    })
    
  }

  prevChecked = currChecked; 
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck);
})
