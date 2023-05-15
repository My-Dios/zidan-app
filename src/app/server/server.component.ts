import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
    serverId: number = 1;
    serverStat: string = 'online';
    allowNewServer: boolean = false;
    serverCreationStat: string = 'No server created...';
    serverName: string = 'anonymous ';

    constructor(){
      setTimeout(() => {
          {this.allowNewServer = true;}
      }, 3000);
    }


    getServerStat(){
        return this.serverStat;
    }

    onServerCreate(){
      this.serverCreationStat = 'Server created...'
    }

    onUpdateNameServer(event : Event){
      this.serverName = (<HTMLInputElement>event.target).value
    }
 }
