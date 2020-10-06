
import { Component }  from '@angular/core'

@Component({
    selector:'emp', 
    templateUrl:'./emp.component.html',
    styleUrls:['./empstyles.css']
})
export class empcomponent {
    firstname:string='ashwin';
    lastname:string='babu';
    gender:string='male';
    age: number= 20;    
}