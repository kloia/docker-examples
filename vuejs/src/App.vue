<template>
    <div id="app">
        <div class="logo"></div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    body {
        background: #3b6396 url(assets/img/header-image.jpg) no-repeat 30% 50% fixed !important;
        background-size: cover !important;
        width: 100% !important;
        height: 100% !important;
        overflow: hidden !important;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .logo {
        height: 30px;
        width: 140px;
        position: absolute;
        left: 50%;
        top: 1em;
        z-index: 99;
        background: transparent 50% 50% no-repeat url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI2NjdweCIgaGVpZ2h0PSIxNDlweCIgdmlld0JveD0iMCAwIDY2NyAxNDkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+c2VuZGVyLWxvZ288L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJzZW5kZXItbG9nbyIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4gICAgICAgICAgICA8cGF0aCBkPSJNMzIuMDU0LDk5LjE4MiBDMzIuMDU0LDEwNy45MTMgNDIuMDU5LDExMi4yNzkgNTIuMjQ2LDExMi4yNzkgQzYxLjcwNSwxMTIuMjc5IDcxLjcxLDEwNy45MTQgNzEuNzEsMTAwLjI3MiBDNzEuNzEsODguMDg0IDU3LjUyMSw4Ny41NCA0OC4yNDQsODYuOTk0IEMyNC45NTksODUuNTM4IDEuNjc1LDc2LjI2IDEuNjc1LDQ5LjcwMyBDMS42NzUsMjIuMDUyIDI1LjE0MSw4LjA0NCA1MS4xNTQsOC4wNDQgQzc1LjcxMiw4LjA0NCAxMDAuNjM0LDIyLjA1MiAxMDAuMDg4LDQ5LjcwMyBMNjguOTgxLDQ5LjcwMyBDNjguOCw0MC45NzEgNjAuNjE0LDM3LjMzMiA1MS43LDM3LjMzMiBDNDQuMjQyLDM3LjMzMiAzNC40MTksMzkuMzMzIDM0LjQxOSw0OC45NzUgQzM0LjQxOSw1Ny41MjQgNDEuNjk1LDU5LjUyNCA1My44ODMsNjAuNzk4IEM4MC45ODgsNjMuMTYyIDEwNC42MzYsNjkuNTMgMTA0LjYzNiwxMDAuNDU0IEMxMDQuNjM2LDEyNy4xOTMgNzguNjIyLDE0MS4yMDIgNTIuNjEsMTQxLjIwMiBDMjUuNjg3LDE0MS4yMDIgLTAuMTQ0LDEyNy43NDEgMC40MDIsOTkuMTgxIEwzMi4wNTQsOTkuMTgxIEwzMi4wNTQsOTkuMTgyIFoiIGlkPSJTaGFwZSI+PC9wYXRoPiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSIyMDIuMzU4IDM5Ljg3NyAxNTYuMTU0IDM5Ljg3NyAxNTYuMTU0IDU4LjA2OCAxOTguNzIxIDU4LjA2OCAxOTguNzIxIDg3LjE3NCAxNTYuMTU0IDg3LjE3NCAxNTYuMTU0IDEwNy45MTMgMjAzLjk5NiAxMDcuOTEzIDIwMy45OTYgMTM4LjI5MiAxMjIuODY1IDEzOC4yOTIgMTIyLjg2NSAxMC45NTUgMjAyLjM1OCAxMC45NTUiPjwvcG9seWdvbj4gICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIHBvaW50cz0iMjU1Ljg0IDcyLjYyMSAyNTUuODQgMTM4LjI5MSAyMjIuNTUgMTM4LjI5MSAyMjIuNTUgMTAuNDEgMjIyLjY1NCAwLjQ2MiAyOTkuMzE1IDczLjE2NyAyOTkuMzE1IDEwLjk1NCAzMzIuNjA1IDEwLjk1NCAzMzIuNjA1IDEzOC42NTQgMzMyLjQwOCAxNDguMTExIj48L3BvbHlnb24+ICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1wYXRoIiB4PSI0ODEuMjciIHk9IjY0Ljk1NCIgd2lkdGg9IjU2LjA5NyIgaGVpZ2h0PSIyNi4xMTkiPjwvcmVjdD4gICAgICAgICAgICA8cGF0aCBkPSJNNjYzLjUyMywxMzMuMzM5IEw2MzguNjAxLDg3LjEwMiBDNjUxLjE1Myw3OC40NzkgNjU3LjMzNyw2OC44NTEgNjU3LjUyLDU0LjE3MSBDNjU3LjUyLDMxLjYwMyA2NDIuNDIsMTEuMTY3IDYxMS42NzgsMTEuMTY3IEM1OTIuOTQyLDEwLjk4NCA1NzQuNTcsMTEuMTY3IDU1NS42NTEsMTEuMTY3IEw1NTUuNjUxLDQwLjM0MiBDNTU1LjY1MSw0MC4zNDIgNjExLjg3Nyw0MC4zNCA2MTEuOTU5LDQwLjM0IEM2MjAuNjM5LDQwLjM0IDYyNy42NzYsNDQuMTUxIDYyNy42NzYsNTIuOTA5IEM2MjcuNjc2LDYwLjg0MSA2MjEuMTYsNjMuNDkxIDYxMi45NCw2NC4wMDQgQzYxMi40NjksNjQuMDQ5IDYxMS45OTUsNjQuMDgzIDYxMS40OTgsNjQuMDgzIEw1ODguMzk1LDY0LjA4MyBMNTU1LjY1Miw2NC4wOCBMNTU1LjY1MiwxMDkuMTYgTDQ4MC42NjQsMTA5LjE2IEw0NTIuNjU5LDEzOC4xMDkgTDU1NS42NTIsMTM4LjEwOSBMNTYwLjEwMSwxMzguMTA5IEw1ODguOTQxLDEzOC4xMDkgTDU4OC45NDEsOTIuNDIzIEw2MDYuNDA0LDkyLjQyMyBMNjI4LjIzMywxMzguMTA5IEw2NjYuNDQzLDEzOC4xMDkgTDY2My41MjMsMTMzLjMzOSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4gICAgICAgICAgICA8cGF0aCBkPSJNNTM3LjY0OCwxMS4xMzQgTDM1Mi44NzgsMTEuMTM3IEwzNTIuODc4LDEzOC4yOTEgTDQwMS40NDcsMTM4LjI5MSBDNDQzLjY0OSwxMzguMjkxIDQ2NC43NTIsMTA2LjA5MiA0NjQuMjA2LDc0LjA3NyBDNDY0LjIwNiw2Mi4yMTUgNDYxLjE0MSw1MC4zMDUgNDU1LjA4Miw0MC4wODQgTDUxMC41NTYsNDAuMDg0IEw1MzcuNjQ4LDExLjEzNCBaIE0zODYuMTY4LDEwOC4yNzUgTDM4Ni4xNjgsNDAuOTcgTDQwMS4wODUsNDAuOTcgQzQyMC43MzEsNDAuOTcgNDMwLjkxOCw1Ny43MDYgNDMwLjkxOCw3NC40NDEgQzQzMC45MTgsOTEuMzU4IDQyMS4yNzYsMTA4LjI3NSA0MDEuMDg1LDEwOC4yNzUgTDM4Ni4xNjgsMTA4LjI3NSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==);
        background-size: cover;
        transform: translate(-50%, 0);
    }

    .page-item-wrapper {
        position: absolute !important;
        left: 50%;
        bottom: -110%;
        max-height: 80%;
        padding: .8em .5em;
        background: rgba(0, 0, 0, .4);
        border-radius: 1.3em;
        transform: translateX(-50%);
        height: 1px;
        overflow: hidden;
    }

    .page-item-wrapper.active {
        bottom: 10%;
        height: auto;
        overflow: auto;
    }

    .wrapper {
        background: #ffffff;
        border-radius: 1em;
        padding: .5em 1em;
    }

    .collapse {
        display: block;
        max-height: 22rem;
        overflow: auto;
    }


</style>
