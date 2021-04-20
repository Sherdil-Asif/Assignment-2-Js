 var previous = document.getElementById('previous');
 var next = document.getElementById('next');

var array = ["download (1).jpg","download (2).jpg","download (3).jpg","download (4).jpg","download (5).jpg"];

var a = 0;

next.addEventListener('click', function(){
    a++;
    if(a > array.length-1){
        a=0;
    }
    document.getElementById('img').src = array[a];

})

previous.addEventListener('click', function(){
    a--;
    if(a < 0){
        a = array.length-1;
    }
    document.getElementById('img').src = array[a];
})


