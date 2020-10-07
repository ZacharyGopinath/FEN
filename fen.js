var board2 = ChessBoard('board2',);

function loadfen(){
    var fennum = document.getElementById('getFEN').value;
    var config = {
      draggable:true,
      dropOffBoard:'trash',
      position:fennum
    };
  
    board2 = ChessBoard('board2',config);
  }