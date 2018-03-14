<template>

    <div class="loading">
        <svg class="spinner" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
        </svg>
    </div>

</template>

<script>
    export default {
        name: 'loading',
        data () {
            return {}
        },
    }
</script>

<style>

    .loading {
        height: 100% !important;
        width: 100% !important;
        z-index: 999;
    }

    .loading .spinner {
        height: 60px;
        width: 60px;
        animation: rotate 2s linear infinite;
        transform-origin: center center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

    .loading .spinner .path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        animation: dash 1.5s ease-in-out infinite;
        stroke-linecap: round;
        stroke: #fff;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }

</style>
