export interface PostingRecord {
    [index: number]: {
        payee: string|null;
        iban: string|null;
        bic: string|null;
        amount: number;
        use: string|null;
        date: string|null;
    }
    payee: string|null;
    iban: string|null;
    bic: string|null;
    amount: number;
    use: string|null;
    date: string|null;
}