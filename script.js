// Creare uno slider di immagini: potete usare le immagini che desiderate. 
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera.
// Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider.

const app = new Vue({
    el: '#root',

    data: {

        activeImage: 0,

        petImages: [
            {
                imgPath: 'img/boxer.jpg',
                description: 'Boxer'
            },
            {
                imgPath: 'img/frenchbuldog.jpg',
                description: 'FrenchBulldog'
            },
            {
                imgPath: 'img/jackrussel.jpg',
                description: "JackRussel"
            },
            {
                imgPath: 'img/labrador.jpg',
                description: 'Labrador'
            }
        ],
    },
    methods : {
        nextImg(){
            if (this.activeImage >= this.petImages.length -1){
                this.activeImage = 0;
            } else {
            this.activeImage ++
            }
        },
        prevImg(){
            if (this.activeImage <= 0 ){
                this.activeImage = this.petImages.length  -1;
            } else {
            this.activeImage --
            }
        },
        onDotClick(index){
           this.activeImage = index;
        }
    }
})