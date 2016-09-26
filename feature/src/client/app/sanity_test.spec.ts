import { TestBed } from '@angular/core/testing';

import { By }             from '@angular/platform-browser';

describe("sanity checks", () => {
	it("should be able to test", () => {
		expect(true).toBe(true);
	});

	xit("should skip this", () => {
		expect(4).toEqual(40);
	});
});
