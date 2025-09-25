export class InvoiceId {
	constructor(public readonly value: number) {
		if (value <= 0) throw new Error('Invalid Invoice ID');
	}
}

export class Invoice {
	constructor(
		public readonly id: InvoiceId,
		public amount: number,
		public description: string,
	) {}
}
