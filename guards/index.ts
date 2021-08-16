function strip(x:string| number) {
    if (typeof x ==='number') {
        return x.toFixed(2)
    }
    return x.trim()
}

class A{
    header = 'head'
    res = 'res'
}
class B{
    header = 'head'
    message = 'message'
}

function handle(res: A| B){
    if(res instanceof A){
        return{
            Info: res.header + res.res
        }
    }
    else{
        return{
            info: res.header + res.message
        }
    }
}

type Aler = 'success' | 'danger' | 'warning'
function setAlertType(type:Aler)
{
    console.log(type)
}