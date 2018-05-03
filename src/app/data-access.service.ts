import { Injectable } from '@angular/core';
 import {Http, Response} from "@angular/http";
 import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'

declare var jquery:any;
declare var $ :any;

  interface serverJSON {
	  name:    		string;
	  minecraft:	string;
	  rcon: 		string;
  };
@Injectable()
export class DataAccessService {

  constructor(private http: Http) { }
  
  sendAjaxRequest(_type: string, _url: string, _params: string, _callback) {

    var request = $.ajax({
        type: _type,
        url: _url,
        data: _params,
        contentType: 'json'
    });
    request.done(function(res) {
        return res;
    });
    request.fail(function(jqXHR, textStatus) {
        console.error(jqXHR);
        return textStatus;//_callback({ err: true, message: "Request failed: " + textStatus });
    });
  }
  
  
  getServerList() : Promise<Array<any>> {
	
return this.http.get("http://13.82.83.3:5000/api/v1/getPods")
					.map((res) => {
						return res.json()
					})
					.toPromise();


/*var ret = [
	  {
		"name": "tenant1",
		"endpoints": {
		  "minecraft": "128.124.90.15:25565",
		  "rcon": "128.124.90.15:25575"
		}
	  },
	  {
		"name": "tenant2",
		"endpoints": {
		  "minecraft": "128.194.90.16:25565",
		  "rcon": "128.194.90.16:25575"
		}
	  },
	  {
		"name": "tenant3",
		"endpoints": {
		  "minecraft": "128.194.90.16:25566",
		  "rcon": "128.194.90.16:25576"
		}
	  }
	];
	return ret;*/
  }
  
  addServer() : Object {
	  var x = 0;
	  if (x == 0)
		return { "status" : "ok", "message" : "Added server successfully." }
	  else
		return { "status" : "error", "message" : "Error adding new server." }
  }
  
  deleteServer(name) : Object {
	  var x = 0;
	  if (x == 0)
		return { "status" : "ok", "message" : "Added server successfully." }
	  else
		return { "status" : "error", "message" : "Error adding new server." }	  
  }
}
