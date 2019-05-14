window.addEventListener("load", function() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5", true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText);
            console.log(data)

            const body = document.body;

            const wrapper = document.createElement("div");
            wrapper.classList.add("wrapper");
            body.appendChild(wrapper);

            data.forEach(element => {
                const card = document.createElement("div");
                card.classList.add("card", "col-6");

                const card_img = document.createElement("img");
                card_img.classList.add("card-img-top");
                card_img.src = element.hdurl;
                card.appendChild(card_img);

                const card_body = document.createElement("div");
                card_body.classList.add("card-body");
                card.appendChild(card_body);

                const card_title = document.createElement("h5");
                card_title.classList.add("card-title");
                card_title.innerText = element.title;
                card_body.appendChild(card_title);

                const card_text = document.createElement("p");
                card_text.classList.add("card-text");
                card_text.innerText = element.explanation;
                card_body.appendChild(card_text);


                wrapper.appendChild(card);
            });


        };
    }
})