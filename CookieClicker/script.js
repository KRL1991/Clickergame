
const counter = document.getElementById("updateCookie");

var numberOfCookies = 1; 
        counter.innerHTML = numberOfCookies;
        document.getElementById("cookieButton").addEventListener("click", () => {
        counter.innerHTML = numberOfCookies++;


            
        });

        

        function save() {
            
            document.getElementById("saveButton").addEventListener("click", () => { document.cookie = `counter=${counter.innerText}; expires=Thu, 01 Jan 2022 00:00:00 UTC; path=/;`;  
            alert("Cookies saved!"); // show all cookies
        })};

            
           
            
              
         const load = (name) => {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let c = cookies[i].trim().split('=');
                if (c[0] === name) {
                    return c[1];
                }
            }
            return "";
        }
 
    function reset() {

        document.cookie = "counter=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; 

        alert("Cookie deleted"); // show all cookies


    }

document.getElementById("updateCookie").innerHTML = load("counter");

