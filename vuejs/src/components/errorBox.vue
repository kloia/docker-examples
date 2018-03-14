<template>
    <div class="page-item-wrapper col-10 col-sm-9 col-md-8 col-lg-7 col-xl-5 active">
        <div class="wrapper">
            <div class="form-row">
                <div class="col-12">
                    <h1>Transaction not exist</h1>
                </div>
                <div class="col-12">
                    <router-link :to="{name: 'Home Page'}">
                        <b-button class="col-12">Back to Form</b-button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'errorBox',
        data () {
            return {}
        },
    }
</script>

<style>

</style>