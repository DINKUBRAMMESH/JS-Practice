let time=()=>{
    let dt=new Date()
    let ct=dt.toLocaleTimeString()
    document.getElementsByTagName('p')[0].innerHTML =ct
}

setInterval(time , 500)