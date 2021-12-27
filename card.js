$(document).ready(function() {
    $.get("https://jsonplaceholder.typicode.com/todos/", function(data) {
        var i;
        var boja;
        var dugme;
        for(i=0;i<data.length;i++) {
            if (data[i].completed == true) {
                boja = 'border: 1px solid green; color:green';
                dugme= '<button type="button" class="btn btn-danger">Completed</button>';
            }
            else {
                boja ='border: 1px solid red; color:red';
                dugme= '<button type="button" class="btn btn-danger">Not Completed</button>';
            }
            $("#card").append(`
            <div class= "col-lg-4 col-md-3 col-xs-12 mt-3">
            <div class="card" style="${boja}">
                <div class="card-header">
                <h2 style="color:black">User id: ${data[i].userId} </h2> 
                </div>
                <div class="card-body">
                <h5>Id: ${data[i].id} </h5>
                <p> ${data[i].title}</p> 
                </div>
                <div class="card-footer text-center"> ${dugme} </div>
            </div>
            </div>       
            `)
        }
    })
})

