let array;
let liInput = 'shooter'
let content 
let id;
let gameId;
const navbar = document.getElementById('navbar')

// window.addEventListener('scroll',function () {
//     navbar.classList.add('sticky')
//     console.log('hi');
// })

async function gamesCategory(liInput) {
    try {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '721e4bb9a4mshbbef2a618b647bbp1305eejsn8bd0d85b34fe',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'

            },
        };
        const response = await fetch(
            `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${liInput}`,
            options
        );
        const finalData = await response.json();
        array = finalData;


        let box = ``;
        for (let i = 0; i < array.length; i++) {
            box += `<main id='${array[i].id}' class="col-md-3 text-white border border-2 border-dark rounded-2 scale position-relative">
            <div class="main-card py-2">
                <div class="image-container position-relative">
                    <div class="overlay"></div>
                    <img id="cardImg" src="${array[i].thumbnail}" class="w-100 rounded-top" alt="">
                </div>
            <div class="headline d-flex justify-content-between mt-2">
                <h5 id="gameTitle" class="text-white">${array[i].title}</h5>
                <span class="badge bg-primary align-self-center p-2 px-3">Free</span>
            </div>
            <p id="desc" class="text-white text-center pt-2 pb-5">${array[i].short_description}</p>
            
            </div>
            <div class="underline d-flex justify-content-between border-top border-dark py-2">
                <span id="genre" class="ms-2">${array[i].genre}</span>
                <span id="platform" class="me-2">${array[i].platform}</span>
            </div>
    </main>`
    
        }
    document.getElementById('content').innerHTML = box;

    elemntLoop()
    } catch (error) {
        console.log(error);
    }
}
gamesCategory(liInput)


async function gameDetails() {
    try {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '721e4bb9a4mshbbef2a618b647bbp1305eejsn8bd0d85b34fe',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            },
        };
        const response = await fetch(
            `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
            options
        );
        const finalData = await response.json();
        let box = `<div class="col-md-4">
                        <img src="${finalData.thumbnail}" class="w-100" alt="">
                    </div>
                    <div class="col-md-8">
                        <h3>Title: ${finalData.title}</h3>
                        <h4>Category : <span class="badge bg-info">${finalData.genre}</span> </h4>
                        <h4>Platform : <span class="badge bg-info">${finalData.platform}</span> </h4>
                        <h4>Status : <span class="badge bg-info">Live</span> </h4>
    
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Voluptatem dolore eaque at atque animi similique consectetur voluptatibus?
                            Neque numquam eius corrupti nemo explicabo illum molestiae reiciendis quaerat earum! Porro,
                            atque quia aperiam labore quasi sint assumenda eveniet nam ex officiis modi distinctio! Illo sit
                            ad vero repellat veniam deserunt officia. Necessitatibus eum porro, facere reiciendis illo est
                            odit quod modi sapiente ab pariatur consequuntur, ipsa placeat sint ut voluptatem reprehenderit
                            unde fugit.</p>
    
                        <button class="btn btn-outline-warning"><a class="text-decoration-none text-white" href="">Show
                                Game</a></button>
                    </div>`

        document.getElementById('specialGame').innerHTML=box

        
        
    } catch (error) {
        console.log(error);
    }
}

gameDetails()

function displayCategory() {
    let liInput;
    const liList = document.querySelectorAll('li')
    const navList = document.getElementsByClassName('nav-link')
    
    for (let i = 0; i < liList.length; i++) {
        liList[i].addEventListener('click', function () {
            
            liInput = liList[i].innerText
            gamesCategory(liInput)
        })
    }
   
}

   displayCategory()

   function elemntLoop() {
    let contentArray = document.querySelectorAll('main')
    for (let i = 0; i < contentArray.length; i++) {
        contentArray[i].addEventListener('click',function (e) {

        
        document.getElementById('gameDetails').classList.toggle('d-none') ;
        document.getElementById('gamesCategory').classList.toggle('d-none') 
        document.getElementById('close').addEventListener('click',function () {
        document.getElementById('gameDetails').classList.toggle('d-none') ;
        document.getElementById('gamesCategory').classList.toggle('d-none') 
            
        })
        

        gameId = this.getAttribute('id')
        console.log(gameId);
        gameDetails()
        })
    

    }
   }
