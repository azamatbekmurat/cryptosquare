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

//nuzhno dorabotat
function encode(text) {

  var encodedCol = [];
  var cryptoText = [];
  for (var i = 0; i < text.length; i++) {
    for (var j=0; j<text.length; j++) {
      if (text[j][i] == undefined) {
        encodedCol.push("");
      } else {
      encodedCol.push(text[j][i]);
      console.log(encodedCol);
      // encodedText.push(text[i][j]);
      }
    }
    cryptoText.push(encodedCol);
    console.log(cryptoText);

  }

}

//user interface logic
$(document).ready(function() {
  $("form#crypto").submit(function(event) {

    event.preventDefault();
    var cryptoEncoded = "";
    var inputText = $("#text").val();

    var arraySquare = generateSquare(inputText);
    console.log(arraySquare);
    cryptoEncoded = encode(arraySquare);

    $(".output").text(cryptoEncoded);
    $("#result").show();

  });
});
