
function change(){
    document.getElementById("buttonStyle").style.backgroundColor="green"
    arr=[
        {textName:"“Be the change that you wish to see in the world.” ", author:"― Mahatma Gandhi"},
        {textName:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ", author:"― Dr. Seuss"},
        {textName:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", author:"Marilyn Monroe"},
        {textName:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", author:"Albert Einstein"},
        {textName:"Be yourself; everyone else is already taken.” ", author:"― Oscar Wilde"},
        {textName:"“It is better to be hated for what you are than to be loved for what you are not.”", author:"― Andre Gide, Autumn Leaves"},
        {textName:"“Without music, life would be a mistake.”", author:"― Friedrich Nietzsche, Twilight of the Idols"},
        {textName:"“A room without books is like a body without a soul.” ", author:" ― Marcus Tullius Cicero"},
        {textName:"“A friend is someone who knows all about you and still loves you.” ", author:" ― Elbert Hubbard"},
        {textName:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", author:"― Oscar Wilde"}

    ]
    for(var i=0;i<arr.length;i++){
        //  console.log(arr[i].textName)
        //  console.log(arr[i].author)
   }
    var randomNumber=Math.floor(Math.random() * arr.length)
    // console.log(randomNumber)
    console.log(arr[randomNumber].textName)
    console.log(arr[randomNumber].author)

    document.getElementById("quoteValue").innerHTML= arr[randomNumber].textName 
    document.getElementById("quoteValue2").innerHTML = arr[randomNumber].author
 

   
}

































