import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ 
      '../../assets/bootstrap/css/bootstrap.min.css',
      '../../assets/styles.css']
})
export class SearchComponent {
    @ViewChild('toggleBtn', {static: false}) toggle: ElementRef;
    showMoreOptions = false;

    onToggle(event: Event) {
        if(this.showMoreOptions){
            this.toggle.nativeElement.className = "glyphicon glyphicon-chevron-down"
            this.showMoreOptions = !this.showMoreOptions;
        }
        else {
            this.toggle.nativeElement.className = "glyphicon glyphicon-chevron-up"
            this.showMoreOptions = !this.showMoreOptions;
        }
        
        
    }
}
