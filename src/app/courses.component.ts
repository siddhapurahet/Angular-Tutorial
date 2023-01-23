import { Component } from "@angular/core";

@Component({
    selector: 'courses', //this is the html element and we can also create custom tags and use it as selector in component.
    //the ngfor command is used to manipulate the DOM according to the use. 
    template: `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let course of courses"> 
                {{course}}
            </li>        
        </ul>
    `
})

export class CourseComponent {
    title = "List of Courses";
    courses = ["course1", "course2", "course3"];
}