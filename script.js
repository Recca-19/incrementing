let number = 0;

    function addOrSub(value){

        if (value === '+'){
            if (number === 25){
                return; // early return
            }
            number++;
        }else{
            if (number === 0){
                return; // early return
            }
            number--;
        }

        document.querySelector(".js-number").innerHTML = number;
        
    }