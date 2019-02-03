/*Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.*/

function chessBoard() {
    'use strict';
    var newTable = document.createElement('table');

    for (var i = 0, a = 9; i < 10, a >= 0; i++, a--) {
        var newTr = newTable.insertRow(i);
        for (var j = 0; j < 10; j++) {
            var newTd = newTr.insertCell(j);
            switch (i) {
                case 0:
                    if (j === 0 || j === 9) {
                        break;
                    } else {
                        newTd.innerText = String.fromCharCode(64 + j);
                        break;
                    }
                case 9:
                    if (j === 0 || j === 9) {
                        break;
                    } else {
                        newTd.innerText = String.fromCharCode(64 + j);
                        break;
                    }
                default:
                    if (j === 0 || j === 9) {
                        newTd.innerHTML = a;
                    }
                    break;
            }
        }
    }

    document.body.appendChild(newTable);
};
chessBoard();
