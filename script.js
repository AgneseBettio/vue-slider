// Creare uno slider di immagini: potete usare le immagini che desiderate. 
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera.
// Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider.

const app = new Vue({
    el: '#root',

    data: {

        imgSrc : "https://picsum.photos/200",
        imagines : [{},{},{},{}],
    },
    methods: {

    }
})