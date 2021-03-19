import { Observable, EventData, Page } from '@nativescript/core';

let page: Page;

export function navigatingTo(args: EventData) {
	page = <Page>args.object;
	page.bindingContext = new PracticeModel();
}

export class PracticeModel extends Observable {
	myTitles = [
		{ getTitle: this.getTitle.bind(this, 'The Da Vinci Code') },
		{ getTitle: this.getTitle.bind(this, 'Harry Potter and the Chamber of Secrets') },
		{ getTitle: this.getTitle.bind(this, 'The Godfather') },
		{ getTitle: this.getTitle.bind(this, 'The Alchemist') },
		{ getTitle: this.getTitle.bind(this, 'Goodnight Moon') },
		{ getTitle: this.getTitle.bind(this, 'The Da Vinci Code') },
		{ getTitle: this.getTitle.bind(this, 'The Hobbit') },
		{
			getTitle: this.getTitle.bind(this, 'Harry Potter and the Chamber of Secrets'),
		},
		{ getTitle: this.getTitle.bind(this, 'The Alchemist') },
		{ getTitle: this.getTitle.bind(this, 'The Godfather') },
		{ getTitle: this.getTitle.bind(this, 'Goodnight Moon') },
		{ getTitle: this.getTitle.bind(this, 'The Hobbit') },
		{ getTitle: this.getTitle.bind(this, 'The Da Vinci Code') },
		{ getTitle: this.getTitle.bind(this, 'Harry Potter and the Chamber of Secrets') },
		{ getTitle: this.getTitle.bind(this, 'The Hobbit') },
		{
			getTitle: this.getTitle.bind(this, 'Harry Potter and the Chamber of Secrets'),
		},
		{ getTitle: this.getTitle.bind(this, 'The Alchemist') },
		{ getTitle: this.getTitle.bind(this, 'The Godfather') },
		{ getTitle: this.getTitle.bind(this, 'Goodnight Moon') },
		{ getTitle: this.getTitle.bind(this, 'The Hobbit') },
		{ getTitle: this.getTitle.bind(this, 'The Da Vinci Code') },
		{ getTitle: this.getTitle.bind(this, 'Harry Potter and the Chamber of Secrets') },
		{ getTitle: this.getTitle.bind(this, 'The Godfather') },
		{ getTitle: this.getTitle.bind(this, 'The Alchemist') },
		{ getTitle: this.getTitle.bind(this, 'Goodnight Moon') },
		{ getTitle: this.getTitle.bind(this, 'The Da Vinci Code') },
		{ getTitle: this.getTitle.bind(this, 'The Hobbit') },
		{
			getTitle: this.getTitle.bind(this, 'Harry Potter and the Chamber of Secrets'),
		},
		{ getTitle: this.getTitle.bind(this, 'The Alchemist') },
		{ getTitle: this.getTitle.bind(this, 'The Godfather') },
		{ getTitle: this.getTitle.bind(this, 'Goodnight Moon') },
		{ getTitle: this.getTitle.bind(this, 'The Hobbit') },
		{ getTitle: this.getTitle.bind(this, 'The Da Vinci Code') },
		{ getTitle: this.getTitle.bind(this, 'Harry Potter and the Chamber of Secrets') },
		{ getTitle: this.getTitle.bind(this, 'The Hobbit') },
		{
			getTitle: this.getTitle.bind(this, 'Harry Potter and the Chamber of Secrets'),
		},
		{ getTitle: this.getTitle.bind(this, 'The Alchemist') },
		{ getTitle: this.getTitle.bind(this, 'The Godfather') },
		{ getTitle: this.getTitle.bind(this, 'Goodnight Moon') },
		{ getTitle: this.getTitle.bind(this, 'The Hobbit') },
		{ getTitle: this.getTitle.bind(this, 'The Da Vinci Code') },
		{ getTitle: this.getTitle.bind(this, 'Harry Potter and the Chamber of Secrets') },
		{ getTitle: this.getTitle.bind(this, 'The Godfather') },
		{ getTitle: this.getTitle.bind(this, 'The Alchemist') },
		{ getTitle: this.getTitle.bind(this, 'Goodnight Moon') },
		{ getTitle: this.getTitle.bind(this, 'The Da Vinci Code') },
		{ getTitle: this.getTitle.bind(this, 'The Hobbit') },
		{
			getTitle: this.getTitle.bind(this, 'Harry Potter and the Chamber of Secrets'),
		},
		{ getTitle: this.getTitle.bind(this, 'The Alchemist') },
		{ getTitle: this.getTitle.bind(this, 'The Godfather') },
		{ getTitle: this.getTitle.bind(this, 'Goodnight Moon') },
		{ getTitle: this.getTitle.bind(this, 'The Hobbit') },
		{ getTitle: this.getTitle.bind(this, 'The Da Vinci Code') },
		{ getTitle: this.getTitle.bind(this, 'Harry Potter and the Chamber of Secrets') },
		{ getTitle: this.getTitle.bind(this, 'The Hobbit') },
		{
			getTitle: this.getTitle.bind(this, 'Harry Potter and the Chamber of Secrets'),
		},
		{ getTitle: this.getTitle.bind(this, 'The Alchemist') },
		{ getTitle: this.getTitle.bind(this, 'The Godfather') },
		{ getTitle: this.getTitle.bind(this, 'Goodnight Moon') },
		{ getTitle: this.getTitle.bind(this, 'The Hobbit') },
		{ getTitle: this.getTitle.bind(this, 'The Da Vinci Code') },
		{ getTitle: this.getTitle.bind(this, 'Harry Potter and the Chamber of Secrets') },
		{ getTitle: this.getTitle.bind(this, 'The Godfather') },
		{ getTitle: this.getTitle.bind(this, 'The Alchemist') },
		{ getTitle: this.getTitle.bind(this, 'Goodnight Moon') },
		{ getTitle: this.getTitle.bind(this, 'The Da Vinci Code') },
		{ getTitle: this.getTitle.bind(this, 'The Hobbit') },
		{
			getTitle: this.getTitle.bind(this, 'Harry Potter and the Chamber of Secrets'),
		},
		{ getTitle: this.getTitle.bind(this, 'The Alchemist') },
		{ getTitle: this.getTitle.bind(this, 'The Godfather') },
		{ getTitle: this.getTitle.bind(this, 'Goodnight Moon') },
		{ getTitle: this.getTitle.bind(this, 'The Hobbit') },
		{ getTitle: this.getTitle.bind(this, 'The Da Vinci Code') },
		{ getTitle: this.getTitle.bind(this, 'Harry Potter and the Chamber of Secrets') },
		{ getTitle: this.getTitle.bind(this, 'The Hobbit') },
		{
			getTitle: this.getTitle.bind(this, 'Harry Potter and the Chamber of Secrets'),
		},
		{ getTitle: this.getTitle.bind(this, 'The Alchemist') },
		{ getTitle: this.getTitle.bind(this, 'The Godfather') },
		{ getTitle: this.getTitle.bind(this, 'Goodnight Moon') },
		{ getTitle: this.getTitle.bind(this, 'The Hobbit') },
	];

	private getTitle(title) {
		console.log('whoah, I keep executing for:', title);
		return title;
	}
}
