
    let table1 = document.querySelector("#table1")
    let input1 = document.querySelector("#input1")
    let tablerow2 =document.querySelector("#tablerow2")
    let table2 = document.querySelector("#table2")
    let tbody = document.querySelector("#tbody")
    let email1 = document.querySelector('#email1')
    let age1 = document.querySelector("#age1")
    let del = document.createElement("button")
    let trage = document.querySelector("#trage")
    function vi(){
        let tr = document.createElement("tr")
        let printname = document.createElement("td")
        tbody.append(tr)
        printname.textContent = input1.value
        tr.append(printname)
       let emailname = document.createElement("td")
       emailname.textContent = email1.value
        tr.append(emailname)
        let agenum =document.createElement("td")
        agenum.textContent = age1.value
        tr.append(agenum)
        let del = document.createElement("button")
        del.setAttribute("onclick","m()")
        del.innerHTML= "delete"
        tr.append(del)
    }
    function m(){
        event.target.parentElement.remove()
    }

