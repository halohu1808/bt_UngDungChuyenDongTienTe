function myFunction(){

    let amount = document.getElementById('amountInput').value;
    let from = document.getElementById('formInput').value;
    let to = document.getElementById('toInput').value;

    let result;



    if (from == 'vnd' && to == 'usd2'){
        result = amount / 23000;
        document.getElementById('result').innerHTML=result;
    }

    if (from == 'usd'  && to == 'vnd2'){
        result = amount*23000;
        document.getElementById('result').innerHTML=result;
    }
    if (from == 'vnd' && to == 'vnd2'){
        result =amount;
        document.getElementById('result').innerHTML=result;
    }
    if (from == 'usd' && to =='usd2') {
        result =amount;
        document.getElementById('result').innerHTML=result;
    }

}
    

