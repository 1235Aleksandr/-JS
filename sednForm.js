const form = document.querySelector('.form-test-drive')

form.addEventListener('submit',(event) =>{
    event.preventDefault()
    //alert('submit')

    let data = {}

    for(let {name,value} of form.elements) {
        if(name)    {
            data[name]=value
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(Response =>{

        if (Response.status === 200 ||Response.status === 201){
            return Response.json()
        } else {
            throw new Error(Response.status)// иначе. исключение обработка ошибок
        }
    //console.log(Response);
    })
    .then(data =>{
        alert ('данные сохранены') // оповещалка вывод ошибок
        form.reset()
    })
     .catch(Error =>{
        alert ('Произошла ошибка'+ Error.massage)// оповещалка вывод ошибок
    })
})


//https://jsonplaceholder.typicode.com