
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
    phone: number=12345;
    isdisabled: string='true';
    headingspan: number=2;
    css_class:string="borderclass";
    header_italics:boolean=true;
    apply_border:boolean=true;
    isbold:boolean=true;
    color:string='red';
    size=30;
    show_number:boolean=false;
    multiple_css() {
        let classes={
            header_italics:this.header_italics,
            borderclass:this.apply_border,
        };
        return classes;
    }
    add_styles(){
        let styles={
            'color':this.color,
            'font-size': this.size
        }
        return styles;
    }
    show_alert(){
        alert('This is an example of event binding');
    }
    number_toggle(){
        this.show_number=!this.show_number;
    }
}
