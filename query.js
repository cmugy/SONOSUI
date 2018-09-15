function getJCode() {
    let url = "https://api.sonos.com/login/v3/oauth/access";
    let data={
        "grant_type":"authorization_code",
        "code": "54973e5e-b789-4619-bdc6-e42287fbe79b",
        "redirect_uri":"http%3A%2F%2Flocalhost%3A63342%2F"
    };
    $.ajax({
        url : url,
        dataType: 'jsonp',
        data : data,
        async : true,
        method : 'POST',
        type : 'POST',
        contentType : "application/x-www-form-urlencoded;charset=utf-8",
        crossDomain :true,
        headers :
            {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                "Access-Control-Allow-Origin":"*",
                "accept": "application/json",
                "Authorization": "Basic MzYwODg0N2MtOTcyOS00YTk4LTg4YWItNDA4OWQzNmY5NDA3OjRhYzViYWJmLWY1NWQtNDEzMS04YzAyLWZmMGJjZDRjMmViYg=="
            },
        setRequestHeader: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            "Authorization": "Basic MzYwODg0N2MtOTcyOS00YTk4LTg4YWItNDA4OWQzNmY5NDA3OjRhYzViYWJmLWY1NWQtNDEzMS04YzAyLWZmMGJjZDRjMmViYg=="
        },



    }).done(function(data){
        console.log(data);
    })

}

function viewresponse(response, status, xhr){
    console.log(response);
}