function btnn() {
  let result1 = document.getElementById("textarea").value;
  // let word = result1.trim().split(/\s+/, " ").length;
  let count = 0;
  let newString = result1.split(" ");
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] !== "") {
      count += 1;
    }
  }

  //console.log(num);
  document.getElementById("number").value = count;

  let numChar = result1.length;
  document.getElementById("character").value = numChar;

  let countVowels = result1.match(/[aeiouAEIOU]/gi).length;
  document.getElementById("vowel").value = countVowels;

  let countConsonant = result1.match(
    /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/gi
  ).length;
  document.getElementById("consonant").value = countConsonant;

  //let specialChars = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
  let specialCharacter = result1.match(
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi
  );
  let specialChars = specialCharacter.length;
  document.getElementById("special").value = specialChars;
}
function upper() {
  let uper = document.getElementById("textarea").value;
  let str1 = uper.toUpperCase();

  document.getElementById("textarea").value = str1;
}
function lower() {
  let lowr = document.getElementById("textarea").value;
  let str2 = lowr.toLowerCase();

  document.getElementById("textarea").value = str2;
}

function rest() {
  document.getElementById("textarea").value = " ";
  document.getElementById("number").value = " ";
  document.getElementById("character").value = " ";
  document.getElementById("special").value = " ";
  document.getElementById("vowel").value = " ";
  document.getElementById("consonant").value = " ";
}
