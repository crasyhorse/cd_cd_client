<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/AppHeader/AppHeader.vue";
import Accountings from "@/components/Accountings/Accountings.vue";
import InputForm from "@/components/InputForm/InputForm.vue";

export default defineComponent({
    name: "online-banking-app",
    components: {
        Accountings,
        InputForm,
        AppHeader
    }
});
</script>

<template>
    <AppHeader />
    <main class="content ">
        <div class="columns is-centered">
            <div class="column is-4">
                <InputForm />
            </div>
        </div>
        <div class="columns is-centered">
            <div class="column is-three-quarters">
                <Accountings />
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>
