import { Observable, EventData, Page } from '@nativescript/core';

let page: Page;

export function navigatingTo(args: EventData) {
	page = <Page>args.object;
	page.bindingContext = new PracticeModel();
}

export class PracticeModel extends Observable {
	myTitles = [
		{ title: 'The Da Vinci Code' },
		{ title: 'Harry Potter and the Chamber of Secrets' },
		{ title: 'The Godfather', showSomethingElse: true },
		{ title: 'The Alchemist' },
		{ title: 'Goodnight Moon' },
		{ title: 'The Da Vinci Code', showSomethingElse: true },
		{ title: 'The Hobbit' },
		{
			title: 'Harry Potter and the Chamber of Secrets',
			showSomethingElse: true,
		},
		{ title: 'The Alchemist', showSomethingElse: true },
		{ title: 'The Godfather' },
		{ title: 'Goodnight Moon', showSomethingElse: true },
		{ title: 'The Hobbit', showSomethingElse: true },
		{ title: 'The Da Vinci Code' },
		{ title: 'Harry Potter and the Chamber of Secrets' },
		{ title: 'The Hobbit' },
		{
			title: 'Harry Potter and the Chamber of Secrets',
			showSomethingElse: true,
		},
		{ title: 'The Alchemist', showSomethingElse: true },
		{ title: 'The Godfather' },
		{ title: 'Goodnight Moon', showSomethingElse: true },
		{ title: 'The Hobbit', showSomethingElse: true },
		{ title: 'The Da Vinci Code' },
		{ title: 'Harry Potter and the Chamber of Secrets' },
		{ title: 'The Godfather', showSomethingElse: true },
		{ title: 'The Alchemist' },
		{ title: 'Goodnight Moon' },
		{ title: 'The Da Vinci Code', showSomethingElse: true },
		{ title: 'The Hobbit' },
		{
			title: 'Harry Potter and the Chamber of Secrets',
			showSomethingElse: true,
		},
		{ title: 'The Alchemist', showSomethingElse: true },
		{ title: 'The Godfather' },
		{ title: 'Goodnight Moon', showSomethingElse: true },
		{ title: 'The Hobbit', showSomethingElse: true },
		{ title: 'The Da Vinci Code' },
		{ title: 'Harry Potter and the Chamber of Secrets' },
		{ title: 'The Hobbit' },
		{
			title: 'Harry Potter and the Chamber of Secrets',
			showSomethingElse: true,
		},
		{ title: 'The Alchemist', showSomethingElse: true },
		{ title: 'The Godfather' },
		{ title: 'Goodnight Moon', showSomethingElse: true },
		{ title: 'The Hobbit', showSomethingElse: true },
	];
}
