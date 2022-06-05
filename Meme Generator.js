const command = document.querySelector('input[name="meme-image"]').value;
const memeImage = document.createElement('picture'); 
memeImage.className = 'picture';
memeImage.setAttribute('source', urlInput);

const topCaption = document.querySelector('input[name="top-caption"]').value;
const topContent = document.createElement('h2');
topContent.className="up";
topContent.innerText = topCaption;


const bottomCaption = document.querySelector('input[name="bottom-caption"]').value;
const bottomContent = document.createElement('h2');
bottomContent.classList="down";
bottomContent.innerText = bottomCaption;

const makeMeme = () => {
    const meme = document.createElement ('div')
    showcaseMeme.appendChild(meme)
    meme.className = 'meme'
}

form.addEventListener('upload', function(e){
    e.preventDefault();
    generateMeme();
    form.reset();
})

memeImage.addEventListener('click', (e) => {
    if(e.target.tagName === 'SUBMIT') {
        e.target.parentElement.remove()
    }
})

const form = document.querySelector('#form')
const showcaseMeme = document.querySelector('#showcase')

meme.appendChild(memeImage);
meme.appendChild(topContent);
meme.appendChild(bottomContent);


