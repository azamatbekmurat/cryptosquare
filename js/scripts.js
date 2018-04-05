//business logic

function generateSquare(text) {
  var square = [];
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
      square.push(thisRow);
      startPos += rowLength;
    }
    return square;
  }

function encode(squareArray) {

  var encodedCol = [];
  var cryptoText = [];
  for (var i = 0; i < squareArray.length; i++) {
    for (var j=0; j<squareArray.length; j++) {
      if (squareArray[j][i] == undefined) {
        continue;
      } else {
      encodedCol.push(squareArray[j][i]);
      }
    }
  }
  cryptoText.push(encodedCol);
  // console.log(cryptoText);
  return cryptoText;
}

//user interface logic
$(document).ready(function() {
  $("form#crypto").submit(function(event) {

    event.preventDefault();
    var inputText = $("#text").val();

    var arraySquare = generateSquare(inputText);
    console.log(arraySquare);
    var cryptoEncoded = encode(arraySquare);
    console.log(cryptoEncoded);
    var encodeString = cryptoEncoded.join("");
    console.log(encodeString);

    var fixedString = encodeString.split(",").join("");
    // console.log(fixedString);

    $(".output").text(fixedString);
    $("#result").show();

  });
});
