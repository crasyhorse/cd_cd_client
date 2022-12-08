<script lang="ts">
import { defineComponent } from "vue";
import Entry from "@/components/Accountings/Entry.vue";
import type { PostingRecord } from "@/ts/PostingRecord";

interface ComponentData {
    items: PostingRecord[]
};

export default defineComponent({
    name: "accountings",
    components: {
        Entry
    },
    data(): ComponentData {
        return {
            items: [
                {
                    payee: "REDE Markt",
                    iban: "DE22790200760027913168",
                    bic: "HYVEDEMM455",
                    amount: -28.97,
                    date: "2022-11-14T20:33:04",
                    use: "14.11.2022 20.33.04 OFFLIN EUR 28,97EC"
                },
                {
                    payee: "Rosa Schlüpfer",
                    iban: "DE08300500000001118341",
                    bic: "WELADEDDXXX",
                    amount: -17.50,
                    date: "2022-11-02T17:14:58",
                    use: "SEPA-ÜBERWEISUNG"
                },
                {
                    payee: "Amazonas payments Europe",
                    iban: "DE87300308801908262006",
                    bic: "TUBDDEDDXXX",
                    amount: -10.98,
                    date: "2022-10-29T12:52:01",
                    use: "SEPA-BASISLASTSCHRIFT"
                },
                {
                    payee: "PayGal Europe",
                    iban: "DE78300308802604252106",
                    bic: "TUBDDEDDXXX",
                    amount: -17.50,
                    date: "2022-10-18T10:23:25",
                    use: "Your purchase from AT&T DSL"
                },
                {
                    payee: "Cheap energy Ltd",
                    iban: "DE04370205000009866415",
                    bic: "BFSWDE33XXX",
                    amount: -94.00,
                    date: "2022-10-15T14:46:16",
                    use: "Advance payment 11/22"
                },
                {
                    payee: "Rundfunk ARD, ZDF; DRadio",
                    iban: "DE51320500000000321752",
                    bic: "SPKRDE33XXX",
                    amount: -55.08,
                    date: "2022-10-01T09:08:07",
                    use: "Broadcasting fees 10.2022 - 12.2022"
                },
                {
                    payee: "anana software corp.",
                    iban: "DE27370100500876275517",
                    bic: "PBNKDEFFXXX",
                    amount: 3200.00,
                    date: "2022-09-15T23:14:15",
                    use: "Wage/Salary 09/2022"
                }
            ]
        };
    }
});
</script>

<template>
    <table class="table is-striped">
        <thead>
            <th>Payee</th>
            <th>IBAN</th>
            <th>BIC</th>
            <th>Amount</th>
            <th>Use</th>
            <th>Date</th>
        </thead>
        <tbody>
            <Entry :records="items" />
        </tbody>
    </table>
</template>