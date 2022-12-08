<script lang="ts">
import { defineComponent } from "vue";
import type { PostingRecord } from "@/ts/PostingRecord";

interface ComponentData {
    values: PostingRecord
};

const defaults: PostingRecord = {
    payee: null,
    iban: null,
    bic: null,
    amount: 0.00,
    use: null,
    date: null
};

export default defineComponent({
    name: "InputForm",
    data(): ComponentData {
        return {
            values: { ...defaults }
        };
    },
    methods: {
        abort() {
            const payeeInput: HTMLInputElement = (this.$refs.payee as HTMLInputElement);

            this.values = { ...defaults };
            payeeInput.focus();
        },
        save() {

        }
    }
});
</script>

<template>
    <div class="columns">
        <div class="column is-full">
            <div class="field">
                <label class="label" for="payee">Payee:</label>
                <div class="control has-icons-left">
                    <input ref="payee" class="input is-primary" type="text" id="payee" v-model.lazy="values.payee" />
                    <span class="icon is-small is-left">
                        <i class="fa fa-user"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="columns">
        <div class="column is-half">
            <div class="field">
                <label class="label" for="iban">IBAN:</label>
                <div class="control has-icons-left">
                    <input class="input is-primary" type="text" id="iban" v-model.lazy="values.iban" />
                    <span class="icon is-small is-left">
                        <i class="fa fa-credit-card"></i>
                    </span>
                </div>
            </div>
        </div>
        <div class="column is-half">
            <div class="field">
                <label class="label" for="iban">BIC:</label>
                <div class="control has-icons-left">
                    <input class="input is-primary" type="text" id="bic" v-model.lazy="values.bic" />
                    <span class="icon is-small is-left">
                        <i class="fa fa-university"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="columns">
        <div class="column is-8">
            <div class="field">
                <label class="label" for="iban">Amount:</label>
                <div class="control has-icons-left">
                    <input class="input is-primary has-text-right" type="text" id="amount"
                        v-model.number.lazy="values.amount" />
                    <span class="icon is-small is-left">
                        <i class="fa fa-money"></i>
                    </span>
                </div>
            </div>
        </div>
        <div class="column is-4">
            <div class="field">
                <label class="label" for="iban">Date:</label>
                <div class="control has-icons-left">
                    <input class="input is-primary" type="text" id="date" v-model.lazy="values.date" />
                    <span class="icon is-small is-left">
                        <i class="fa fa-calendar"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="columns">
        <div class="column is-full">
            <div class="field">
                <label class="label" for="iban">Use:</label>
                <div class="control has-icons-left">
                    <input class="input is-primary" type="text" id="use" v-model="values.use" />
                    <span class="icon is-small is-left">
                        <i class="fa fa-comment-o"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="columns">
        <div class="column is-offset-8 is-full">
            <div class="level">
                <div class="level-right">
                    <div class="level-item">
                        <button class="button is-primary" type="button">OK</button>
                    </div>
                    <div class="level-item">
                        <button class="button is-danger" type="button" @click="abort">Abort</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
