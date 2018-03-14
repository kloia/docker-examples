<template>
    <div>
        <loading v-if="loading"></loading>

        <errorBox v-if="errorBox"></errorBox>

        <div class="page-item-wrapper col-10 col-sm-9 col-md-8 col-lg-7 col-xl-5" v-bind:class="{ active: initForm }">
            <div class="wrapper">
                <div class="form-row">
                    <div class="col-12" v-if="errors">
                        <div v-for="error in errors">
                            <h1 class="alert alert-danger">{{ error }}</h1>
                        </div>
                    </div>
                    <div class="col col-7 col-sm-9">
                        <input class="form-control" type="text"
                               minlength="1" maxlength="40" v-on:input="CheckValue()"
                               v-model="postBody" placeholder="Enter Your Code"/>
                    </div>
                    <div class="col col-5 col-sm-3">
                        <button class="btn btn-primary col-12" type="submit" @click="Preview()">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Loading from "../components/loading.vue";
    import ErrorBox from "../components/errorBox.vue";

    export default {
        components: {
            ErrorBox,
            Loading
        },
        name: 'HomePage',
        data () {
            return {
                posts: [],
                errors: [],
                errorBox: false,
                postBody: '',
                respo: '',
                respoTitle: '',
                respoText: '',
                loading: false,
                initForm: true,
                resultBox: false,
                confirm: false
            }
        },

        methods: {
            Preview() {
                if(this.postBody) {
                    this.$router.push('/preview/'+ this.postBody);
                } else {
                    this.errors = ["You must enter some value"]
                    setTimeout(() => {
                        this.errors.pop();
                    }, 2000);
                }
            },
            CheckValue() {
                this.postBody = this.postBody.replace(/[^0-9\n/]+/g, '');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
