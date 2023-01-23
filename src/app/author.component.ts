import {Component} from '@angular/core'

@Component({
    selector: "author-list",
    template:`
        <h2>{{authorList.length + authors}}</h2>
        <ul>
            <li *ngFor= "let singleauthor of authorList">
                {{singleauthor}}
            </li>        
        </ul>
    `
})

export class AuthorComponent {
    authors = "Authors";
    authorList = ["Author1", "Author2", "Author3", "author4"];
}