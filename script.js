const BASE_URL = 'https://api.unsplash.com/search/photos?per_page=24';
const ACCESS_KEY = 'VoHccXXYCed_4Z4O3I8pqg5EY3BRyhnDgQNyebO06uU';
const SECRET_KEY = 'JTYfOsrpI6MBDV42p-TcSXtt83_yFROgpi0kezvRel0';


// State Variables
let searchInput = '';
let photoData;



// Cached Element References

const $form = $('form');
const $input = $('input');
const $main = $('#main');

const $article = $('main[class="flex-center"]');

// Event Listeners

$form.on('submit', handleSubmit);
// $input.on('click', 'submit', handleSubmit);
$main.on('dblclick', 'article', grabImageUrl );

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
        }, function (error) {});     
}

function render() {
    const resultHtml = photoData.results.map((result) => {

        return `
                  <article style="background-image: url(${result.urls.regular})">
                <h6>${result.alt_description}</h6>
                <h4>❤ ${result.likes}</h4>
                 </article>`
    }).join('');
    $main.html(resultHtml);

    // console.log('dblclicked!', $main.get())

}

function grabImageUrl() {
    // window.open.results.link.download, '_blank'

    $(this).click(function(){
        window.open('url', 'window name', 'window settings');
        return false;
      });

  console.log('this', this,  $(this),  $(this).css('background-image') )
}