let inputText;
    let typedText;

    function startTest() {
      inputText = document.getElementById("inputText").value;
    //   document.getElementById("textToType").textContent = inputText;
      document.getElementById("testContainer").style.display = 'block';
      document.getElementById("typedText").value = '';
      document.getElementById("result").textContent = '';
    }

    function checkText() {
      typedText = document.getElementById("typedText").value;
      if (typedText === inputText) {
        document.getElementById("result").textContent = 'Correct!';
      } else if (inputText.indexOf(typedText) !== 0) {
        document.getElementById("result").textContent = 'Incorrect!';
      } else {
        document.getElementById("result").textContent = '';
      }
    }