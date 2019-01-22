function getRequest(recieveBookListCallBack) {
    let books_API_key = 'kkEaLGDkFaFGZAllWO7PomGWEPF4QWD6';
    let url = `http://api.nytimes.com/svc/books/v3/lists/overview.jsonp?callback=foobar&api-key=${books_API_key}`;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (e) {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            let resp = getFormattedResults(this.response);
            return recieveBookListCallBack(JSON.parse(resp).results.lists);
        }
    }
    xhttp.open("get", url, true);
    xhttp.send();
}

export function fetchBooksList(recieveBookListCallBack) {
    getRequest(recieveBookListCallBack);
}

export function getFormattedResults(result) {
    if(result !== undefined){
        let res = result.substring(result.indexOf("(") + 1);
        return res.substring(0, res.length-2);
    }
}
