/*1. Создать функцию, генерирующую шахматную доску.
При этом можно использовать любые html-теги по своему желанию.
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.*/

function getSymbol(index) {
    switch (index) {
        case 1: return "A"
        case 2: return "B"
        case 3: return "C"
        case 4: return "D"
        case 5: return "E"
        case 6: return "F"
        case 7: return "G"
        case 8: return "H"
    }
}

const ChessBoard = {
    cellElements: [],        //клетки
    containerElement: null,   //контейнер элементов


    init() {
        this.containerElement = document.querySelector('#ChessBoard'); // храним ссылку на таблицу
        this.initCells();

    },




    initCells() { //генерируем доску
        this.containerElement.innerHTML = ' '; // обнулили таблицу
        this.cellElements = [];

        const trElem = document.createElement('td');
        trElem.className = "white"
        // trElem.classList.add("numbers")  добавить класс
        this.containerElement.appendChild(trElem);

        for (let row = 0; row < 8; row++) {
            const symbol = document.createElement('td');
            symbol.className = "white"
            symbol.innerText = getSymbol(row + 1)
            this.containerElement.appendChild(symbol);


        }



        for (let row = 0; row < 8; row++) {
            const trElem = document.createElement('tr'); //создаем строку, добавляем в таблицу
            this.containerElement.appendChild(trElem);

            const num = document.createElement('td');
            num.innerText = row + 1;
            trElem.appendChild(num);

            for (let col = 0; col < 8; col++) {


                const cell = document.createElement('td'); //продуцируем клетки td добавляем в строку

                if (row % 2 == col % 2) {
                    cell.className = "white";
                } else {
                    cell.className = "black";
                }

                trElem.appendChild(cell); //клетку добавляем в строку

                this.cellElements.push(cell);
            }
        }


    }

}

ChessBoard.init();
