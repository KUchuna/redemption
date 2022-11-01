const last = document.getElementById('last');
var counter = 0;


last.addEventListener('click', () => {

    var x = Math.floor((Math.random() * 200) - 200)
    var y = Math.floor((Math.random() * 500) - 400)
    var rotate = Math.floor((Math.random() * 180) - 180)

    last.style.transform = 'translate('+x+'px'+','+y+'px) rotate('+rotate+'deg)'

    counter = counter+1;
    if(counter == 5) {
        last.style.display = 'none'
        back.style.width = '400px'
        back.style.height = '200px'
        back.style.fontSize = '40px'
    }
})