import { Component, Input, ViewChild, ElementRef, Output, OnInit, EventEmitter} from '@angular/core'


export enum Fill {
    EMPTY,
    HALF,
    FULL
}

@Component({
    selector: 'app-rate',
    templateUrl: './rate.component.html',
    styleUrls: [
        '../../assets/bootstrap/css/bootstrap.min.css',
        '../../assets/styles.css']
})

export class RateComponent {
    stars = [];
    userRate: number = null;
    @Input() currentRate: number;
    showingRate: number = null;
    rateReactive: boolean = false;

    @ViewChild('first', {static: false}) first: ElementRef;
    @ViewChild('second', {static: false}) second: ElementRef;
    @ViewChild('third', {static: false}) third: ElementRef;
    @ViewChild('fourth', {static: false}) fourth: ElementRef;
    @ViewChild('fifth', {static: false}) fifth: ElementRef;
    

    @Output() addNewRate = new EventEmitter<number>();
    @Output() changedRate = new EventEmitter<any>();

    onStarClick(newRate: number) {
        if(!this.rateReactive)return;
        this.userRate = newRate;
        this.showingRate = this.userRate;
        this.changedRate.emit();
    }

    ngOnDestroy(){
        this.addNewRate.emit(this.userRate);
    }
    
    ngAfterViewInit() {
        this.stars.push(this.first);
        this.stars.push(this.second);
        this.stars.push(this.third);
        this.stars.push(this.fourth);
        this.stars.push(this.fifth);
        
        this.showingRate = this.currentRate;
        this.setRate(this.showingRate)  
    }

    

    setRate(rate: number) {
        let index = 0;
        let num = rate;
        while(num >= 1){
            this.fillStar(this.stars[index], Fill.FULL);
            num --;
            index ++;
        }
        if(num != 0) {
            if(num > 0 && num < 0.3)this.fillStar(this.stars[index], Fill.EMPTY);
            if(num >= 0.3 && num < 0.7)this.fillStar(this.stars[index], Fill.HALF);
            if(num >= 0.7 && num < 1)this.fillStar(this.stars[index], Fill.FULL);
            index ++;
        }
        for(index; index < 5; index++) {
            this.fillStar(this.stars[index], Fill.EMPTY);
        }
    }

    fillStar(star: ElementRef, state: Fill) {
        switch(state) {
            case Fill.EMPTY: {
                star.nativeElement.src = "../../assets/imgs/empty-star.png";
                break;
            }
            case Fill.HALF: {
                star.nativeElement.src = "../../assets/imgs/half-star.png";
                break;
            }
            case Fill.FULL: {
                star.nativeElement.src = "../../assets/imgs/filled-star.png";
                break;
            }
            default: {
                console.log("Something went wrong");
            }
        }
    }

    mouseOver(index:number) {
        if(!this.rateReactive)return;
        for(let i = index; i >= 0; i--){
            this.fillStar(this.stars[i], Fill.FULL);
        }
        for(let i = index + 1; i < 5; i++){
            this.fillStar(this.stars[i], Fill.EMPTY);
        }
    }
    mouseOut(index:number) {
        if(!this.rateReactive)return;
        this.setRate(this.showingRate);
    }
}