$(() => {
    
    let arrBeers = [];

    const getAllBeers = async () => {
        $.get('https://api.punkapi.com/v2/beers?page=1', beers => {
            console.log(beers);
            drawBeer(beers);
            for (const b of beers) {
                arrBeers.push(b);
            }
        })
    }

    const drawBeer = (beers) => {
        $('.listBeers').empty();
        for (const beer of beers) {          
            const hops = $("<p></p>");
            let x = "";

            for (const b of beer.ingredients.hops) {

                x += b.name + " ";
                hops.text(x);
            }

            const divBeer = $("<div></div>");
            const titleBeer = $("<h3></h3>");
            const imgBeer = $("<img></img>");
            const abvBeer = $("<p></p>");

            divBeer.addClass("divBeer");
            titleBeer.addClass("titleBeer");
            imgBeer.addClass("imgBeer");
            abvBeer.addClass("abvBeer");
            titleBeer.text(beer.name);
            abvBeer.text(beer.abv + "%");
            imgBeer.attr("src", beer.image_url);
            hops.addClass("hops");


            divBeer.append(titleBeer);
            divBeer.append(abvBeer);
            divBeer.append(hops);
            divBeer.append(imgBeer);
            $(".listBeers").append(divBeer);

        }
    }

    getAllBeers();




const next = (beers) => {
    for (const beer of beers) {
        const hops = $("<p></p>");
        let x = "";

        for (const b of beer.ingredients.hops) {

            x += b.name + " ";
            hops.text(x);
        }

        const divBeer = $("<div></div>");
        const titleBeer = $("<h3></h3>");
        const imgBeer = $("<img></img>");
        const abvBeer = $("<p></p>");

        divBeer.addClass("divBeer");
        titleBeer.addClass("titleBeer");
        imgBeer.addClass("imgBeer");
        abvBeer.addClass("abvBeer");
        titleBeer.text(beer.name);
        abvBeer.text(beer.abv + "%");
        imgBeer.attr("src", beer.image_url);
        hops.addClass("hops");


        divBeer.append(titleBeer);
        divBeer.append(abvBeer);
        divBeer.append(hops);
        divBeer.append(imgBeer);
        $(".listBeers").append(divBeer);

    }
}

let number = 1;
$("#btnNext").click(function () {
    number++;
    $.get(`https://api.punkapi.com/v2/beers?page=${number}`, beers => {
        console.log(number);
        console.log(beers);
        next(beers);
    })
})

$('#input').on("keyup", ()=> {
    const filterByNameBeer = arrBeers.filter(res=> res.name.toLowerCase().includes($('#input').val().toLowerCase()));
    console.log(filterByNameBeer);
        if (filterByNameBeer) {
        drawBeer(filterByNameBeer);
        }
});

})





