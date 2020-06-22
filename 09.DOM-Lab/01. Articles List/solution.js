function createArticle() {

    let createTitleInput = document.getElementById('createTitle');
    let createContent = document.getElementById('createContent');
    let articleSection = document.getElementById('articles');

    let titleInputValue = createTitleInput.value;
    let contentValue = createContent.value;

    if (!titleInputValue || !contentValue) {
        return;
    }
    let newArticle = document.createElement('article');
    let articleHeading = document.createElement('h3');
    let articleParagraph = document.createElement('p');

    newArticle.appendChild(articleHeading);
    newArticle.appendChild(articleParagraph);

    articleSection.appendChild(newArticle);

    articleHeading.innerText = titleInputValue;
    articleParagraph.innerText = contentValue;


    createTitleInput.value = '';
    createContent.value = '';
}