
//selector
var table_body=document.querySelector("#user_data");
var details_placeholder=document.querySelector("#details_part");

//get request
//table part
fetch('https://jsonplaceholder.typicode.com/users')
  .then(convert => convert.json())
  .then(json =>{
    json.forEach(user=>{
        var row=`
            <tr>
                <td> ${user.id} </td>
                <td> ${user.name} </td>
                <td> ${user.phone} </td>
                <td><a href="#" onclick="fetchUserDetails(${user.id})">Details</a></td>
            </tr>

        `;
    table_body.innerHTML+=row;
    });

});
//details part

function fetchUserDetails(id) {
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(convert =>convert.json())
    .then(data =>{
        var details_part=`
            <h1 class="user_details_heading">User Details:</h1>
            <h2>Name:${data.name} </h2>
            <h5> Username:@${data.username} </h5>
            <p> Phone:${data.phone} </p>
            <p> Email:${data.email} </p>
            <p>
               address:${data.address.street}, ${data.address.city}, ${data.address.zipcode}
            </p>
        `;
        details_placeholder.innerHTML=details_part;
    });
}