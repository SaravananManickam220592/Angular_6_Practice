import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl : './server.component.html',
    styleUrls : ['./server.component.css']
})
export class ServerComponent{

    serverNames:string[]= [];
    createMessageStatus=false;

    constructor(){

    }

    addingValue(event){
        if(event.keyCode == 13){
            var value=event.target.value;
            this.serverNames.push(value);
            event.target.value="";
            console.log(this.serverNames);
        }
    }

    saveValue(inputValue){
        console.log(inputValue);
        var value=inputValue.value;
        this.serverNames.push(value);
        inputValue.value="";
        console.log(this.serverNames);
        this.createMessageStatus=true;
        var me=this;
        setTimeout(()=>{
        me.createMessageStatus=false;
        },2000);
        
    }

  
}