import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../data-access.service'
import { HttpModule } from '@angular/http';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  serverList;
  
  constructor(private dataService:DataAccessService) { 
  }

  ngOnInit() {
	  
	  let btn = document.getElementById("addServer");
      btn.addEventListener("click", (e:Event) => this.add_server());
	  
	  
	  this.serverList = this.dataService.getServerList().then(serverList => this.serverList = serverList);
	  

  }
  
  add_server(){
     var added = this.dataService.addServer();
	 
	 if (added["status"] == "ok")
	 {
		  $( "#success-server-add" ).show( "slow" );
		 setTimeout(function(){  $( "#success-server-add" ).hide( "slow" ); }, 2000);
	 }
	 else {
		 $( "#error-server-add" ).show( "slow" );
		 setTimeout(function(){  $( "#error-server-add" ).hide( "slow" ); }, 2000);
	 }
  }

  deleteServer(name) {
	alert("Deleted: " + name)
	var deleted = this.dataService.deleteServer(name);

  }
}
