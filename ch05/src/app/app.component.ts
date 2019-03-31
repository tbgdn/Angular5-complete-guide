import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newServerElements = [{
    type: 'server',
    name: 'server',
    content: 'content'
  }, {
    type: 'blueprint',
    name: 'server',
    content: 'content'
  }];

  onServerAdded(serverData: {name: string, content: string}) {
    this.newServerElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }
  onBlueprintAdded(serverData: {name: string, content: string}) {
    this.newServerElements.push({
      type: 'blueprint',
      name: serverData.name,
      content: serverData.content
    });
  }
}
