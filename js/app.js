(function(){
	var app = angular.module('book',[]);
	




	var books =[
		{
			id: '0',
			name:'El Inquisidor',
			price: 400 ,
			author: 'Patricio Sturlese',
			editorial: 'SUMA',
			description: 'Un thriller trepidante en el turbulento final del siglo XVI. Un libro sagrado, prohibido y que puede hacer cimbrar los cimientos de la Iglesia. El inquisidor Angelo DeGrasso emprende una apasionante búsqueda que conduce al lector por un mundo de conspiraciones y sectas. Tras las huellas del Necronomicón, una intriga trepidante y un protagonista fascinante. Thriller, historia, religión y aventura. Un intenso ritmo de la narración, la fascinación que ejerce el personaje principal y la inesperada resolución de las conspiraciones que constantemente se van entrecruzando, mantienen al lector en vilo hasta el inesperado final de la novela. Una novela que sorprende por su originalidad y el poder de evocación de un mundo intrigante y lleno de misterios.',
			images:[{
				full: 'img/inquisidor.jpg',
				
			}
			],
			

		},
		{
			id: '1',
			name:'IT El payaso asesino',
			price: 300,
			author: 'Stephen King',
			editorial: 'deBolsillo',
			description: '¿Quién o qué mutila y mata a los niños de un pequeño pueblo norteamericano? ¿Por qué llega cíclicamente el horror a Derry en forma de un payaso siniestro que va sembrando la destrucción a su paso? Esto es lo que se proponen averiguar los protagonistas de esta novela. Tras veintisiete años de tranquilidad y lejanía una antigua promesa infantil les hace volver al lugar en el que vivieron su infancia y juventud como una terrible pesadilla. Regresan a Derry para enfrentarse con su pasado y enterrar definitivamente la amenaza que los amargó durante su niñez. Saben que pueden morir, pero son conscientes de que no conocerán la paz hasta que aquella cosa sea destruida para siempre. It es una de las novelas más ambiciosas de Stephen King, donde ha logrado perfeccionar de un modo muy personal las claves del género de terror.',
			images:[{
				full: 'img/eso.jpg',
				
			}
			],
			
		},
		{
			id: '3',
			name:'El resplandor',
			price: 350,
			author: 'Stephen King',
			editorial: 'deBolsillo',
			description: 'REDRUM. Esa es la palabra que Danny había visto en el espejo. Y aunque no sabía leer, entendió que era un mensaje de horror. Danny tenía cinco años. Y a esa edad pocos niños saben que los espejos invierten las imágenes y menos aún saben diferenciar entre realidad y fantasía. Pero Danny tenía pruebas de que sus fantasías relacionadas con el resplandor del espejo acabarían cumpliéndose: REDRUM… MURDER, asesinato. Pero su padre necesitaba aquel trabajo en el hotel. Danny sabía que su madre pensaba en el divorcio y que su padre se obsesionaba con algo muy malo, tan malo como la muerte y el suicidio. Sí, su padre necesitaba aceptar la propuesta de cuidar de aquel hotel de lujo de más de cien habitaciones, aislado por la nieve durante seis meses. Hasta el deshielo iban a estar solos. ¿Solos?...',
			images:[{
				full: 'img/elresplandor.jpg',
				
			}
			],
			
		}
	]

	app.controller('BookController', function(){
		this.products = books;
	});
	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		}
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});
	

})();