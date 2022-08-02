// print 0-9
i = 0;
function f1(){
    if (i==10){
        return
    }
    else {
        console.log(i) 
        return f1(i++)
    }
}f1()

//----------------------------------------------------------------------------------------------------------------------------------

// multiples of 3 (50=150)
i = 50;
function f2(i){
    if (i==151){
        return
    }
    else {
        if ((i%3)==0){
            console.log(i)
        }return f2(i++)
    }
}f2()
