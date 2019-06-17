import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Emailtolist } from './emailtolist';
import { EmailListService } from './emaillist.service';

@Component({
	selector: 'app-email',
	templateUrl: './email-list.component.html',
	styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {
	constructor(private emaillistService: EmailListService) { }


	emailtolist: Emailtolist = new Emailtolist();
	listemails: Emailtolist[] = [];


	loadList(): void {
		this.emaillistService.getList()
			.then(ab => {
				console.log(ab);
				if (ab) {
					this.listemails = ab;
				}
			})
			.catch(erro => alert(erro));

	}

	deleteEmail(id): void {
		this.emaillistService.deleteEmail(id)
			.then(ab => {
				if (ab) {
					const index = this.listemails.findIndex(x => x === id);
					if (index > -1) { this.listemails.splice(index, 1) }
				}
			})
			.catch(erro => alert(erro));

	}


	ngOnInit(): void {

		this.loadList();
	}


}