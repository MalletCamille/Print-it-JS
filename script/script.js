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

	document.body.onload=function () {
		let p=0 // position à 0 sur la 1ère image //
		container=document.getElementById("banner"); // on définit le container du carrousel //
		const arrow_left=document.getElementById("arrow_left"); // on définit l'élément flèche gauche //
		const arrow_right=document.getElementById("arrow_right"); // on définit l'élément flèche droite //

		function updateSlide() {
			console.log(slides[p].image);
			let imageSlide = document.getElementsByClassName("banner-img")[0];
			imageSlide.setAttribute ("src","./assets/images/slideshow/" + slides[p].image);
			 
		





			// switch (p) {
			// 	case 0: 
			// 		imageSlide.setAttribute ("src",'./assets/images/slideshow/slide1.jpg');
			// 		console.log(imageSlide)
			// 		break;
			// 	case 1:
			// 		imageSlide.setAttribute("src",'./assets/images/slideshow/slide2.jpg');
			// 		console.log(imageSlide)
			//    		break;	
			// 	case 2:
			// 		imageSlide.setAttribute("src",'./assets/images/slideshow/slide3.jpg');
			// 		console.log(imageSlide)
			//    		break;
			// 	case 3:
			// 		imageSlide.setAttribute("src",'./assets/images/slideshow/slide4.png');
			// 		console.log(imageSlide)
			// 		break;
		
		}
		
		function clickFlecheGauche () {
			p-=1;
			if (p<0) {
				p=nbrSlides-1;
			}
			console.log(p)	
			updateSlide();
			console.log("ok")
		}
		
		function clickFlecheDroite () {
			p+=1;
			if (p>=nbrSlides) {
				p=0;

			}
			console.log(p);	
			updateSlide();
			console.log("ok")
		}	

		arrow_left.addEventListener("click", clickFlecheGauche);
		arrow_right.addEventListener("click", clickFlecheDroite);

		let elementDots = document.getElementsByClassName("dots")[0]; // On vient sélectionner le 1er élément à l'index 0 //
		let nbrSlides = slides.length // On compte le nombre d'éléments dans le tableau slides //
		// console.log(nbrSlides)
		for (let i=0; i<nbrSlides; i++) { 
			let nouvelleDiv = document.createElement("div");
			elementDots.appendChild(nouvelleDiv);
			nouvelleDiv.classList.add('dot');
			if (i===p) { // dans le cas où il s'agit de la 1ère div, c'est celle-ci à laquelle on va vouloir attribuer la classe dot_selected //
				nouvelleDiv.classList.add('dot_selected'); // sinon rien donc pas besoin d'indiquer un else //
			} 		
		} 
	} 



