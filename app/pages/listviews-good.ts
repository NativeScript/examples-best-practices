import { Observable, EventData, Page } from '@nativescript/core';
import { items } from '~/utils/items';

let page: Page;

export function navigatingTo(args: EventData) {
	page = <Page>args.object;
	page.bindingContext = new PracticeModel();
}

export class PracticeModel extends Observable {
	myTitles = items.concat(items).concat(items);

	selectItemTemplate(item, index, items) {
		return item && item.showSomethingElse ? 'anotherlayout' : 'onelayout';
	}
}
