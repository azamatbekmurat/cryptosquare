
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

function encode(text) {


}


$(document).ready(function() {
  $("form#crypto").submit(function(event) {
    main = [];
    array = [];
    event.preventDefault();

    var inputText = $("#text").val();
    console.log(inputText);

    encode(inputText);
    console.log(array);

    console.log(main);


  });
});
