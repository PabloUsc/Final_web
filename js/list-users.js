document.querySelector('#btper').addEventListener('click',create);

function create()
{
    var newUser=[], 
        emailUS=[],
        nameUS=[];
    emailUS = document.querySelector('#email').value;
    nameUS = document.querySelector('#names').value;

    newUser.push(emailUS,nameUS);
    listP(newUser);
}
function showData()
{
    var people= getListP(),
    tbod=document.querySelector()
}