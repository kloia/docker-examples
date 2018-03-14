<template>

    <div>
        <loading v-if="loading"></loading>

        <errorBox v-if="errorBox"></errorBox>

        <result-box v-if="resultBox" :data="posts"></result-box>
    </div>

</template>

<script>

    import Loading from "../components/loading.vue";
    import ErrorBox from "../components/errorBox.vue";
    import ResultBox from '../components/resultBox.vue';
    import config from '../assets/config/index';

    export default {
        components: {
            ErrorBox,
            ResultBox,
            Loading
        },
        name: 'confirm',
        data () {
            return {
                posts: [],
                errors: [],
                errorBox: false,
                postBody: '',
                respo: '',
                respoTitle: '',
                respoText: '',
                loading: true,
                initForm: true,
                resultBox: false,
                confirm: false,
                url: config.API_HOST + ':' + config.API_PORT + config.API_PATH,
            }
        },

        created() {
            this.Сonfirm()
        },

        watch: {
            '$route': 'confirm'
        },
        methods: {

            Сonfirm() {

                this.posts = [];
                this.errorBox = false;
                this.respo = '';
                this.respoTitle = '';
                this.respoText = '';
                this.initForm = true;
                this.resultBox = false;
                this.loading = true;
                this.confirm = false;

                let $data = {oid: this.$route.params.id};


                this.$http.post(this.url + 'confirm', $data, {
                    headers: {
                        Accept: "application/json"
                    }
                }, {
                    emulateJSON: true,
                    emulateHTTP: true
                }).then(response => {
                    this.posts = response;

                    this.resultBox = true;
                    this.errorBox = false;
                    this.confirm = true;
                    this.loading = false;

                }, response => {

                    console.log('error 1: ', response);
                    console.log('error body: ', response.body);
                    console.log('error body.title: ', response.body.title);
                    console.log('error body.description: ', response.body.description);

                    this.resultBox = false;
                    this.errorBox = true;
                    this.confirm = false;
                    this.loading = false;

                })
            }

        }

    }

</script>

<style>

</style>
