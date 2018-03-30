//business logic

function generateSquare(text) {
  var main = [];
  var rowLength = Math.round(Math.sqrt(text.length));
  var rowNum = Math.ceil(Math.sqrt(text.length));
    var startPos = 0;
    for (var i = 0; i < rowNum; i++) {
      var count = 0;
      var thisRow = [];
      while(count<rowLength) {
        if(text[startPos+count] == undefined){
          thisRow.push("");
        } else {
        thisRow.push(text[startPos+count]);
      }
        count++;
      }
      main.push(thisRow);
      startPos += rowLength;
    }
    return main;
  }

//nuzhno proverit
function encode(text) {
  var encodedText = [];
  var cryptoText = "";
  for (var i = 0; i < text.length; i++) {
    for (var j=0; j<)
    encodedText.push(text[i]);

  }
  cryptoText = encodedText.join("");
}

//user interface logic
$(document).ready(function() {
  $("form#crypto").submit(function(event) {
    main = [];
    array = [];
    encodedText = [];
    cryptoText = "";
    event.preventDefault();

    var inputText = $("#text").val();


    generateSquare(inputText);
    console.log(main);

    encode(main);

    console.log(cryptoText);


  });
});
