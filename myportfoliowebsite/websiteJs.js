dateload();
var basicneed = {
    reloadPage : function()
    {
        window.location.reload();
    }
}
function btnonclick()
{
    basicneed.reloadPage();
    var txbx = document.getElementById('txtbx').value;
    alert(txbx);
    document.body.style.backgroundColor='orange';
}
function dateload()
{
    var datetodayj = new Date();
    var elem = document.getElementById('datetoday');
}