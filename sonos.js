function getToken(){

    let http = new XMLHttpRequest();
    http.withCredentials= false;
    let url = "https://api.sonos.com/login/v3/oauth/access";

    http.open("POST", url, true);

    http.onreadystatechange = function() {
        if (http.readyState === 2) {// do something}
            console.log("doing...");
        }
    }

        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        http.setRequestHeader("Access-Control-Allow-Origin", "*");
        //http.setRequestHeader("Access-Control-Request-Headers", "x-requested-with");
        http.setRequestHeader("Authorization", "Basic MzYwODg0N2MtOTcyOS00YTk4LTg4YWItNDA4OWQzNmY5NDA3IGFuZCA0YWM1YmFiZi1mNTVkLTQxMzEtOGMwMi1mZjBiY2Q0YzJlYmI=");

        let data = {
            "grant_type": "authorization_code",
            "code": "a96f3163-75d7-4b04-be02-00431eac402a",
            "redirect_uri": "http%3A%2F%2Flocalhost%3A63342%2F"
        };
        http.send(data);
    }
