<template>

    <div>
        <loading v-if="loading"></loading>

        <errorBox v-if="errorBox"></errorBox>

        <result-box v-if="resultBox" :data="posts" :oid="oid"></result-box>
    </div>

</template>

<script>

    import Loading from '../components/loading.vue';
    import ErrorBox from '../components/errorBox.vue';
    import ResultBox from '../components/resultBox.vue';
    import config from '../assets/config/index'

    export default {
        components: {
            ErrorBox,
            ResultBox,
            Loading
        },
        name: 'preview',
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
                oid: ''
            }
        },

        created() {
            this.Preview()
        },

        watch: {
            '$route': 'Preview'
        },

        methods: {
            Preview() {
                this.posts = [];
                this.errorBox = false;
                this.respo = '';
                this.respoTitle = '';
                this.respoText = '';
                this.resultBox = false;
                this.initForm = false;
                this.loading = true;
                this.confirm = false;

                this.oid = this.$route.params.id;

                this.$http.get(this.url + this.$route.params.id + '/preview').then(response => {
                    this.posts = response;

                    this.resultBox = true;
                    this.errorBox = false;
                    this.confirm = true;
                    this.loading = false;

                }, response => {
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
