import { Component, OnInit } from '@angular/core';
import { Chat, ChatMessage } from '../chat.model';
import { UserService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  // styleUrls: ['./chat.component.css']
  styles: [`
    ::ng-deep nb-layout-column {
      display: flex;
      justify-content: center;
    }
    :host {
      display: flex;
    }
    nb-chat {
      width: 300px;
      margin: 1rem;
    }
  `],
})
export class ChatComponent implements OnInit {

  constructor(private userHttpService: UserService) { }

  ngOnInit(): void {
  }
  public messages:ChatMessage[] = [];

  sendMessage(event: any, userName: string, avatar: string, reply: boolean) {
    let chatMessage:ChatMessage = {
      body: event.message,
      subject: 'new message',
      toUserId: 'f78efd90-37d9-11ec-8d3d-0242ac130003',
      channelId: 'f78efd90-37d9-11ec-8d3d-0242ac130003',
      channelType: "0",
      reply: reply,
      sender: userName
    }

    let dbMessage:Chat = {
      body: event.message,
      subject: 'new message',
      toUserId: 'f78efd90-37d9-11ec-8d3d-0242ac130003',
      channelId: 'f78efd90-37d9-11ec-8d3d-0242ac130003',
      channelType: "0",
    }

    this.userHttpService.post(dbMessage)
      .subscribe( response => {
        console.log("User added");
        this.messages.push(chatMessage);
      }, error => {
        console.log("Error in form onSubmit() method", error);
      });
      
  }

}
