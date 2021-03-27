import { Observable, EventData, Page } from '@nativescript/core';
import { items } from '~/utils/items';

let page: Page;

export function navigatingTo(args: EventData) {
	page = <Page>args.object;
	page.bindingContext = new PracticeModel();
}

export class PracticeModel extends Observable {
	myTitles = items;
}
