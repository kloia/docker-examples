<template>
    <div class="page-item-wrapper col-10 col-sm-9 col-md-8 col-lg-7 col-xl-5 active">
        <div class="wrapper">

            <b-card no-body class="mb-1">
                <b-card-header>
                    <h2 class="text-left">{{title}}</h2>
                </b-card-header>
                <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
                    <b-card-body>

                        <div v-for="(value, key) in content" class="row">
                            <div class="col-6 text-left"><b>{{ key }}: </b></div>
                            <div class="col-6 text-right">{{ value }}</div>
                        </div>

                    </b-card-body>
                </b-collapse>

                <b-card-footer header-tag="footer" class="p-1" role="tab">
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <router-link :to="{name: 'confirm', id: oid }" v-if="ready_to_confirm">
                                <b-button class="col-12" variant="primary">
                                    Сonfirm
                                </b-button>
                            </router-link>
                        </div>
                        <div class="col-12 col-md-4">
                            <b-btn block v-b-toggle.accordion1 variant="info">More Info</b-btn>
                        </div>
                        <div class="col-12 col-md-4">
                            <router-link :to="{name: 'Home Page'}">
                                <b-button class="col-12">Back to Form</b-button>
                            </router-link>
                        </div>
                    </div>
                </b-card-footer>

            </b-card>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'resultBox',
        props: {
            data: '',
            oid: ''
        },
        data () {
            return {
                title: 'Transaction confirmed',
                ready_to_confirm: false,
                content: []
            }
        },
        created() {
            if (this.data.body.confirm_status) {
                this.title = this.data.body.confirm_status.message;
                this.ready_to_confirm = this.data.body.confirm_status.ready_to_confirm;
            }
            if (this.data.body.remit_transaction) {
                this.content = this.data.body.remit_transaction;
            } else if (this.data.body.remit_one_info) {
                this.content = this.data.body.remit_one_info;
            }
        }
    }
</script>

<style>

</style>
