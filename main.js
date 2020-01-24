// Slide date
let animals = [
    {
        img: "./img/Cao1.jpg",
        nome: "Luna",
        idade: "5 meses"
    },
    {
        img: "./img/Cao2.jpg",
        nome: "Duque",
        idade: "2 anos"
    },
    {
        img: "./img/Cao3.jpg",
        nome: "Pérola",
        idade: "1 ano e 4 meses"
    },
    {
        img: "./img/Cao4.jpg",
        nome: "Thor",
        idade: "3 meses"
    },
    {
        img: "./img/Cao5.jpg",
        nome: "Vilma",
        idade: "3 anos"
    },
    {
        img: "./img/Cao6.jpg",
        nome: "Princesa",
        idade: "2 meses"
    },
    {
        img: "./img/Cao10.jpg",
        nome: "Eva",
        idade: "3 anos"
    },
    {
        img: "./img/Cao11.jpg",
        nome: "Rex",
        idade: "1 ano"
    },
]
let contador = 4;
let imgNumber = 0;  
let saidaCao = [
    {
        img: document.getElementById('firstDog'),
        nome: document.getElementById('firstName'),
        idade: document.getElementById('firstAge')
    },
    {
        img: document.getElementById('secondDog'),
        nome: document.getElementById('secondName'),
        idade: document.getElementById('secondAge')
    },
    {
        img: document.getElementById('thirdDog'),
        nome: document.getElementById('thirdName'),
        idade: document.getElementById('thirdAge')
    },
    {
        img: document.getElementById('fourthDog'),
        nome: document.getElementById('fourthName'),
        idade: document.getElementById('fourthAge')
    }
];
let boxFrame = document.querySelector('.boxSlide-boxFrame')

// Slide function next
function nextSlide() {
    var litleDesck = window.matchMedia("(max-width: 1024px)")
    if (contador <= 8){
        contador = 4    
        imgNumber = 0
        let setaNext = document.getElementById('arowNext');
        let setaBack = document.getElementById('arowBack');
        
        console.log(contador, imgNumber);
        saidaCao[imgNumber].img.setAttribute('src', animals[contador].img);
        saidaCao[imgNumber].nome.innerHTML = animals[contador].nome;
        saidaCao[imgNumber].idade.innerHTML = animals[contador].idade;
        contador++ 
        imgNumber++ 
        saidaCao[imgNumber].img.setAttribute('src', animals[contador].img);
        saidaCao[imgNumber].nome.innerHTML = animals[contador].nome;
        saidaCao[imgNumber].idade.innerHTML = animals[contador].idade;
        contador++ 
        imgNumber++ 
        saidaCao[imgNumber].img.setAttribute('src', animals[contador].img);
        saidaCao[imgNumber].nome.innerHTML = animals[contador].nome;
        saidaCao[imgNumber].idade.innerHTML = animals[contador].idade;
        contador++ 
        imgNumber++ 
        saidaCao[imgNumber].img.setAttribute('src', animals[contador].img);
        saidaCao[imgNumber].nome.innerHTML = animals[contador].nome;
        saidaCao[imgNumber].idade.innerHTML = animals[contador].idade;
        console.log('entrou')
        console.log(contador, imgNumber)
        if (setaNext.style.display == "") {
            setaNext.style.display = "none"
            setaBack.style.display = "block"
            boxFrame.style.margin = "1rem 0 0 5.6rem"
            if (litleDesck.matches) {
                boxFrame.style.margin = "1rem 0 0 4.6rem"
            }
        }
        else {
            setaNext.style.display = ""
            setaBack.style.display = "none"
            boxFrame.style.margin = "1rem 0 0 4.2rem"
        }
	}
	else {
        contador = 3
        imgNumber = 0
        saidaCao[imgNumber].img.setAttribute('src', animals[contador].img);
        saidaCao[imgNumber].nome.innerHTML = animals[contador].nome;
        saidaCao[imgNumber].idade.innerHTML = animals[contador].idade;
        console.log(contador, imgNumber)
		console.log('não entrou');
	}

}

// Slide function back
function backSlide() {
    var litleDesck = window.matchMedia("(max-width: 1024px)")
    if (contador > 0){
        contador = 3
        imgNumber = 3
        let setaNext = document.getElementById('arowNext')
        let setaBack = document.getElementById('arowBack')
        
        saidaCao[imgNumber].img.setAttribute('src', animals[contador].img);
        saidaCao[imgNumber].nome.innerHTML = animals[contador].nome;
        saidaCao[imgNumber].idade.innerHTML = animals[contador].idade;
        contador-- 
        imgNumber-- 
        saidaCao[imgNumber].img.setAttribute('src', animals[contador].img);
        saidaCao[imgNumber].nome.innerHTML = animals[contador].nome;
        saidaCao[imgNumber].idade.innerHTML = animals[contador].idade;
        contador-- 
        imgNumber-- 
        saidaCao[imgNumber].img.setAttribute('src', animals[contador].img);
        saidaCao[imgNumber].nome.innerHTML = animals[contador].nome;
        saidaCao[imgNumber].idade.innerHTML = animals[contador].idade;
        contador-- 
        imgNumber-- 
        saidaCao[imgNumber].img.setAttribute('src', animals[contador].img)
        saidaCao[imgNumber].nome.innerHTML = animals[contador].nome;
        saidaCao[imgNumber].idade.innerHTML = animals[contador].idade;
        console.log('entrou')
        console.log(contador, imgNumber)
        if (setaBack.style.display == "block"){
            setaNext.style.display = ""
            setaBack.style.display = "none"
            boxFrame.style.margin = "1rem 0 0 4.2rem"
            if (litleDesck.matches) {
                boxFrame.style.margin = "1rem 0 0 3.2rem"
            }
        }
        else {
            setaNext.style.display = ""
            setaBack.style.display = "none"
            boxFrame.style.margin = "1rem 0 0 5.6rem"
        }
	}
	else {
        contador = 7
        imgNumber = 3
        saidaCao[imgNumber].img.setAttribute('src', animals[contador].img);
        saidaCao[imgNumber].nome.innerHTML = animals[contador].nome;
        saidaCao[imgNumber].idade.innerHTML = animals[contador].idade;
        console.log(contador, imgNumber)
		console.log('não entrou');
	}
}