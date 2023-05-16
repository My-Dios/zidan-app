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
    //event binding with data
    serverName: string = 'anonymous';
    serverCreated: boolean = false;

    constructor(){
      setTimeout(() => {
          {this.allowNewServer = true;}
      }, 3000);
    }


    getServerStat(){
        return this.serverStat;
    }

    onServerCreate(){
      this.serverCreationStat = this.serverName + 'Server created...';
      this.serverCreated = true;
    }

    //dapat dihapus jika menggunakan two-way binding
    //event binding with data
    // onUpdateNameServer(event : Event){
    //     this.serverName = (<HTMLInputElement>event.target).value
    // }
 }
