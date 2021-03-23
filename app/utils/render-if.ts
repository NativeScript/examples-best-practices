import { Property, View, Utils, CustomLayoutView } from '@nativescript/core';

export class Render extends CustomLayoutView {
	when: any;
	viewAdded = false;
	template: View;

	constructor() {
		super();
		console.log('Creating a brand new view! This can hurt performance while scrolling if made repeatedly.');
	}

	refresh() {
		if (this.when) {
			console.log('Adding the view template to the visual tree');
			this._addView(this.template);
			this.viewAdded = true;
		} else if (this.viewAdded) {
			console.log('Removing the view template from the visual tree');
			this._removeView(this.template);
			this.viewAdded = false;
		}
	}

	onLayout(left, top, right, bottom) {
		if (this.when && this.viewAdded) {
			View.layoutChild(this, this.template, 0, 0, right - left, bottom - top);
		}
	}

	onMeasure(widthMeasureSpec, heightMeasureSpec) {
		if (this.when) {
			const result = View.measureChild(this, this.template, widthMeasureSpec, heightMeasureSpec);

			const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
			const widthMode = Utils.layout.getMeasureSpecMode(widthMeasureSpec);

			const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
			const heightMode = Utils.layout.getMeasureSpecMode(heightMeasureSpec);

			const widthAndState = View.resolveSizeAndState(result.measuredWidth, width, widthMode, 0);
			const heightAndState = View.resolveSizeAndState(result.measuredHeight, height, heightMode, 0);

			this.setMeasuredDimension(widthAndState, heightAndState);
		} else {
			this.setMeasuredDimension(0, 0);
		}
	}
}

const when = new Property<any, Render>({
	name: 'when',
	affectsLayout: true,
	valueChanged: (target) => {
		target.refresh();
	},
});
when.register(Render);

export const templateProperty = new Property<any, Render>({
	name: 'template',
	affectsLayout: true,
	valueChanged: (target) => {
		target.refresh();
	},
});
templateProperty.register(Render);

Render.prototype.recycleNativeView = 'auto';
