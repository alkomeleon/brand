import Vue from 'vue';
import app from './app.vue';

new Vue({
    el: '#root',
    render: h => h(app),
    components: {
        'app': app,
    },
    template: '<app/>',
})