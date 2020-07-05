
export function setCookie(cname, cvalue){
    console.log(process.env.NODE_ENV);
    // console.log("****** SetCookie",cname,cvalue);
    //const domain = window.location.host != "localhost" ? ".easyzariya.com" : "";
    document.cookie = `${cname}=${cvalue}; path=/;`;
}

export function readCookie(cname){
    // console.log(process.env.NODE_ENV);
    const cookieList = document.cookie.split(";");
    const value = cookieList.find((cookie = "") => {
        const [cookieName] = cookie.split("=");
        return cookieName === cname;
    });
    return value || "";
}

export function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}