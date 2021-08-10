let bands=['band1','band2','band3']
let userAnswer=prompt('which band do you like')
let userAnswerLower=userAnswer.toLocaleLowerCase()

if(bands.indexOf(userAnswerLower)!=-1){
alert('i love too')
}
else{
    alert(' i dont love')
}