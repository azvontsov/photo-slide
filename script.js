const BASE_URL = 'https://api.unsplash.com/search/photos?per_page=9';
const ACCESS_KEY = 'VoHccXXYCed_4Z4O3I8pqg5EY3BRyhnDgQNyebO06uU';
const SECRET_KEY = 'JTYfOsrpI6MBDV42p-TcSXtt83_yFROgpi0kezvRel0';


// State Variables
let searchInput = '';
let photoData;



// Cached Element References

const $form = $('form');
const $input = $('input');
const $main = $('main');

// Event Listeners
$form.on('submit', handleSubmit);
$input.on('click', 'submit', handleSubmit);


// Functions

function handleSubmit(evt) {
    evt.preventDefault();
    // console.log($input.val());
    searchInput = $input.val();
    $.ajax(BASE_URL + '&query=' + searchInput + '&client_id=' + ACCESS_KEY)
        .then(data => {
            photoData = data;
            render();
            // console.log('data', data);
        }, function (error) {

        });

}

            function render() {
                const resultHtml = photoData.results.map((result) => {
                  return `
                  <article style="background-image: url(${result.urls.raw})">
                <h4>${result.alt_description}</h4>
                 </article>`
                }).join('');
                  
                 $main.html(resultHtml);
                }