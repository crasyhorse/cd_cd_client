<script lang="ts">
import { defineComponent } from "vue";
import type { PostingRecord } from "@/ts/PostingRecord";
import type { PropType } from 'vue'

export default defineComponent({
    name: "entry",
    props: {
        records: {
            type: Array as PropType<PostingRecord[]>,
            required: false,
            validate: function (value: PostingRecord) {
                null;
            }
        }
    }
});
</script>

<template>
    <tr v-for="postingRecord in records">
        <td>{{ (postingRecord as PostingRecord)?.payee }}</td>
        <td>{{ (postingRecord as PostingRecord)?.iban }}</td>
        <td>{{ (postingRecord as PostingRecord)?.bic }}</td>
        <td>{{ (postingRecord as PostingRecord)?.amount }}</td>
        <td>{{ (postingRecord as PostingRecord)?.use }}</td>
        <td>{{ (postingRecord as PostingRecord)?.date }}</td>
    </tr>
</template>
<style scoped>
.table.is-striped tbody tr:not(.is-selected):nth-child(2n) {
    background-color: hsl(171, 100%, 96%) !important;
}
</style>