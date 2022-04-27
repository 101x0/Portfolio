let cards = document.getElementsByClassName("card_container");

cards[0].addEventListener("click", openTasks);
cards[1].addEventListener("click", openCesar);
cards[2].addEventListener("click", openChess);
cards[3].addEventListener("click", openComments);
cards[4].addEventListener("click", openMineSweeper);


function openTasks(){
    window.open("https://101x0.github.io/Gestor_Tareas/", "", "width=500, height=600, top=50,left=400");
}

function openCesar(){
    window.open("https://101x0.github.io/CifradoCesar/", "", "width=850, height=1000, top=50,left=400");
}

function openChess(){
    window.open("https://101x0.github.io/Tablero_Ajedrez/", "", "width=700, height=650, top=50,left=400");
}

function openComments(){
    window.open("https://101x0.github.io/Sistema_de_comentarios/", "", "width=700, height=650, top=50,left=400");
}

function openMineSweeper(){
    window.open("https://101x0.github.io/BuscaMinas/", "", "width=700, height=750, top=20,left=400");
}