import {_x,XUI,_xd,_xem} from 'xpell'
import "../public/style/rps.css"


_x.verbose = true
_x.info()
_x.loadModule(XUI)
_x.start()


const player = XUI.createPlayer("xplayer","xplayer" )

const mainView = {
    _type: "view",
    _id: "main-view",
    class: "main-view",
    _text: "Rock Paper Scissors",
    _on: {
        "myevent" : (xobj:any,data:string | number) => {
            xobj._text = data
        }
    }
    
}


function addTwoNumbers(a:number,b:number){
    //numbers comes in base64, convert to number
    a = parseInt(a.toString())
}




const mainViewXobj = XUI.add(mainView)
console.log(mainViewXobj);
await _x.delay(1000)
_xem.fire("myevent","Event Fired")




