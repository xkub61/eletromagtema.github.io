let resposta_1 = document.getElementById("resposta_1")
let pergunta_1 = document.getElementById("pergunta_1")


let resposta_23 = document.getElementById("resposta_23")
let pergunta_23 = document.getElementById("pergunta_23");


let resposta_4 = document.getElementById("resposta_4")
let pergunta_4 = document.getElementById("pergunta_4")



pergunta_1.onclick = function () {
    if (resposta_1.style.display === 'none')
    {
        resposta_1.style.display = 'inline';
        mais_1.textContent = "[-]";
    }
    else{
        resposta_1.style.display = 'none';
        mais_1.textContent = "[+]";
    }
}

pergunta_23.onclick = function () {
    if (resposta_23.style.display === "none")
    {
        resposta_23.style.display = "inline";
        mais_23.textContent = "[-]";
    }
    else{
        resposta_23.style.display = "none";
        mais_23.textContent = "[+]";
    }
}

pergunta_4.onclick = function () {
    if (resposta_4.style.display === "none")
    {
        resposta_4.style.display = "inline";
        mais_4.textContent = "[-]";
    }
    else{
        resposta_4.style.display = "none";
        mais_4.textContent = "[-]"
    }
}
