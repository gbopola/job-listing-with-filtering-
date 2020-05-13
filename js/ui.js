
class UI {
    addTag(tag){
        const div = document.createElement('div');
        div.className = 'type';

        const p = document.createElement('p');
        p.innerHTML = `${tag}`;

        div.appendChild(p);

        content.appendChild(div);

    }

    // filterList(arrFilter, jobListing){
    //     arrFilter.toLowerCase();
    // }

    removeTag(event){
        event.target.parentElement.remove();
    
    }

    clearTags(){
        while( content.hasChildNodes() ){
            content.removeChild(content.lastChild);
        }
        active.style.display = 'none';
    }
}

const ui = new UI();

