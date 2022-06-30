const pictures = [{
        id: 1,
        price: 135,
        name: 'Sea',
        image: 'https://cdn.pixabay.com/photo/2022/03/08/07/08/water-7055153_960_720.jpg',
        artist: 'Bruno Brave',
        inStock: true,
    },
    {
        id: 2,
        price: 404,
        name: 'Sea',
        image: 'https://cdn.pixabay.com/photo/2022/03/08/07/08/water-7055153_960_720.jpg',
        artist: 'Bruno Brave',
        inStock: true,
    },
    {
        id: 3,
        price: 375,
        name: 'Ice cream',
        image: 'https://cdn.pixabay.com/photo/2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        artist: 'Bruno Brave',
        inStock: true,
    },
    {
        id: 4,
        price: 980,
        name: 'Another ice cream',
        image: 'https://cdn.pixabay.com/photo/2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        artist: 'Bruno Brave',
        inStock: false,
    },
];

function searchPhoto() {
    const searchField = document.getElementById('search-field');
    const searchTerm = searchField.value.trim();

    const searchResult = pictures.filter(picture => {
        return picture.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    });

    displayPictures(searchResult)
}
searchPhoto()

function displayPictures(picturesData) {

    const container = document.getElementById('gallery-container');

    let html = '';
    let stockStatus = '';

    picturesData.forEach(pic => {
        if(pic.inStock === true){
            stockStatus = '';
        }
        else{
            stockStatus = 'Not Available'
        }
        html +=
            `<div class="card" id="card-{id}" style="width: 18rem;">
                <img src="${pic.image}"
                    class="card-img-top" >
                <div class="card-body">
                    <h5 class="card-title">${pic.name}</h5>
                    <p class="card-text">$ ${pic.price}</p>
                    <p class="card-text"> ${pic.artist}</p>
                    <span class="text-danger"> ${stockStatus} </span>
                </div>
            </div>`;
    });

    container.innerHTML = html;
}

displayPictures(pictures);