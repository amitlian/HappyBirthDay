function ageindays(){
    var birthyear = prompt('Enter your BirthYear...');
    var birthmonth = prompt('Enter Birth Month....');
    var birthday = prompt('Enter Birth Day.......');
    var year = (2020 - birthyear);
    if(birthmonth>9){
        console.log('Your Birthday Already Gone');
        var h1 = document.createElement('h1');
        var text = document.createTextNode('Your Birthday Already Gone\n'+'You are '+ (year+1) + ' Year old');
        h1.setAttribute('id','ageindays');
        h1.appendChild(text);
        document.getElementById('container2-result').appendChild(h1);
        return;
    }
    else{
        birthmonth = 9 - birthmonth;
        birthmonth*=30;
        birthday = Math.abs(birthday - 10);
        birthmonth+=birthday;
        console.log('Happy Bithday');
        var h1 = document.createElement('h1');
        var text = document.createTextNode('Your Birthday Left'+birthmonth+' Days'+'\n'+'You will be '+ (year+1) + ' Year old');
        h1.setAttribute('id','ageindays');
        h1.appendChild(text);
        document.getElementById('container2-result').appendChild(h1);
        return;
    }
    //console.log(year);
    //var h1 = document.createElement('h1');
    //var text = document.createTextNode('You are '+ year + ' Year old')
    //h1.setAttribute('id','ageindays');
    //h1.appendChild(text);
    //document.getElementById('container2-result').appendChild(h1);

}

function reset(){
    document.getElementById('ageindays').remove();

}