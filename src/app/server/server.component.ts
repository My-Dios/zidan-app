import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
    serverId: number = 1;
    serverStat: string = 'online';
    //code yang ditambahkan
    allowNewServer: boolean = false;

    constructor(){
      setTimeout(() => {
          {this.allowNewServer = true;}
      }, 3000);
    }
    //akhir code yang ditambahkan

    getServerStat(){
        return this.serverStat;
    }
 }