const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

	document.body.onload = function () {
		let p=0 // position à 0 sur la 1ère image //

		// Récupération des éléments de la page //
		container = document.getElementById("banner"); // on définit le container du carrousel //
		const arrow_left = document.getElementById("arrow_left"); // on définit l'élément flèche gauche //
		const arrow_right = document.getElementById("arrow_right"); // on définit l'élément flèche droite //

		// Ajout des Event listeners //
		arrow_left.addEventListener("click", clickFlecheGauche);
		arrow_right.addEventListener("click", clickFlecheDroite);

		// Fonction qui update les images, les taglines et les bullet points //
		function updateSlide() {
			// Récupération des éléments de la page //
			let imageSlide = document.getElementsByClassName("banner-img")[0];
			let tagLine = document.querySelector("#banner p");
			// Attribution des nouvelles valeurs //
			imageSlide.setAttribute ("src","./assets/images/slideshow/" + slides[p].image);
			tagLine.innerHTML=slides[p].tagLine;
			// Update du Bullet Point //
			// On retire la sélection actuelle //
			let dotSelected = document.querySelector(".dot_selected");
			dotSelected.classList.remove('dot_selected');
			// On sélectionne la nouvelle position //
			let updateDotSelected = document.querySelector(".dots :nth-child("+(p+1)+")");
			updateDotSelected.classList.add("dot_selected");

		}
		
		function clickFlecheGauche () {
			p -= 1;
			if (p < 0) {
				p = nbrSlides - 1;
			}	
			updateSlide();
		}
		
		function clickFlecheDroite () {
			p += 1;
			if (p >= nbrSlides) {
				p = 0;

			}
			updateSlide();
		}	

		// Ajout des bullet points //
		let elementDots = document.getElementsByClassName("dots")[0]; // On vient sélectionner le 1er élément à l'index 0 //
		let nbrSlides = slides.length // On compte le nombre d'éléments dans le tableau slides //
		for (let i=0; i<nbrSlides; i++) { 
			let nouvelleDiv = document.createElement("div");
			elementDots.appendChild(nouvelleDiv);
			nouvelleDiv.classList.add('dot');
			if (i===p) { // si l'index est égal à p alors c'est la 1ère slide qu'on sélectionne par défaut donc on ajoute la classe css dot_selected //
				nouvelleDiv.classList.add('dot_selected'); // sinon rien donc pas besoin d'indiquer un else //
			} 		
		} 
	} 



