mediumZoom('.post-img',{
    margin: 10,
    background: '#FFF',
    scrollOffset: 0,
})


const url = new URL(window.location)


document.querySelector("meta[property='og:url']").setAttribute('content',window.location.href)

if(document.getElementById("share-btn")) {
    document.getElementById("share-btn").setAttribute('data-url',window.location.href)
}

const id = ["blog","others","home"]

function firstWord(str) {
    str = String(str)

    if(str == "/") {
        str = "/home"
    }

    let activeLink = [];

    for(let i=1;i<str.length;i++) {
        if(str[i]=='/')
        {
            break;
        }
        activeLink.push(str[i]);
    }

    str = activeLink.join("")

    for(let i=0;i<id.length;i++) {
        var doc = document.getElementById(id[i])
        if(id[i] === str) {
            doc.classList.add("active")
        } else {
            if(doc.classList.contains("active")) {
              doc.classList.remove("active")
            }
        }
    }
}


firstWord(url.pathname)