class HTTP {
    getListings(url){
        fetch(url)
        .then(res => res.json())
        .then(data => {
             console.log(data)
            let output = '';
             data.forEach(e => {

                let is_new = (e.new) ? '<span class="new">NEW!</span>' : '';
                let is_featured = (e.featured) ? '<span class="featured">FEATURED</span>' : '';
                 output += `
                 <div class="card">
            <div class="profile-section">
            <img class="profile-img" src="${e.logo}" alt="${e.company}">
            <div class="profile-info">
                <div class="profile-top">
                <p class="company">${e.company}</p>
                <p>${is_new}</p>
                <p>${is_featured}</p>
            </div>
                <p class="title">${e.position}</p>
                <div class="profile-bottom">
                <p>${e.postedAt}</p>
                <p>${e.contract}</p>
                <p>${e.location}</p>
            </div>
            </div>
        </div>
        <div id="profile-end-${e.id}" class="profile-end">
          <p class="tag-link" data-role="${e.role}">${e.role}</p>
          <p class="tag-link" data-level="${e.level}">${e.level}</p>
          ${dataToolsToHTML(e.tools)}
          ${dataLanguagesToHTML(e.languages)}
        </div>
        </div>
                 `;
                 document.querySelector('.cards').innerHTML = output;
             });
             
        })
        .catch(err => console.log(err))
    }

}

function dataLanguagesToHTML(arr) {
    if (!arr) {
      return '';
    }
  
    const html = arr.map(lang => `<p class="tag-link" data-lang="${lang}">${lang}</p>`).join('');
    return html;
  }
  
  function dataToolsToHTML(arr) {
    if (!arr) {
      return '';
    }
  
    return arr.map(tool => `<p class="tag-link" data-tool="${tool}">${tool}</p>`).join(''); 
  }

const http = new HTTP();




   
