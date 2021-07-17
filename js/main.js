
$.ajax({
    url: 'https://jsonplaceholder.typicode.com/photos',
    success: function (response) {
        let img = response;
        addImg(img);
    },
    error: function (error) {
        console.log(error);
    }
});
function addImg(img) {
    for (let i = 1; i < 40; i++) {
        let imgEl = $('<img>').attr('src', img[i].thumbnailUrl);
        let imgEl2 = $('<img>').attr('src', img[i].thumbnailUrl);
        let textEl = $('<p></p>').append(img[i].title).addClass("styleClass");
        let textEl2 = $('<p></p>').append(img[i].title).addClass("styleClass2");
        let blockWithPhoto = $('<div></div>').append(textEl, imgEl2).addClass("blockStyle2");
        let textEl3 = $('<p></p>').append(img[i].title).addClass("styleClass2 styleClass3");
        let blockEl = $('<div></div>').append(imgEl, blockWithPhoto, textEl2, textEl3).addClass("blockStyle");
        $('#block').append(blockEl);
    }
}