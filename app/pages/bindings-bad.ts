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
		return `${title} ${doPointlessComputationsWithBlocking()[1]}`;
	}
}

const iterations = 50;
const multiplier = 100000000;

function calculatePrimes(iterations, multiplier) {
	var primes = [];
	for (var i = 0; i < iterations; i++) {
		var candidate = i * (multiplier * Math.random());
		var isPrime = true;
		for (var c = 2; c <= Math.sqrt(candidate); ++c) {
			if (candidate % c === 0) {
				// not prime
				isPrime = false;
				break;
			}
		}
		if (isPrime) {
			primes.push(candidate);
		}
	}
	return primes;
}

function doPointlessComputationsWithBlocking() {
	var primes = calculatePrimes(iterations, multiplier);
	console.log(primes);
	return primes;
}
