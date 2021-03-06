/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('teacher-component', require('./components/TeacherComponent.vue').default);
Vue.component('teacher-selector-component', require('./components/TeacherSelect.vue').default);
Vue.component('teacher-edit-component', require('./components/TeacherEditor.vue').default);
Vue.component('subjects-list', require('./components/SubjectList.vue').default);
Vue.component('sub-room', require('./components/SubRoom.vue').default);
Vue.component('sub-room-list', require('./components/SubRoomList.vue').default);
Vue.component('on-class-room', require('./components/OnClassRoom.vue').default);
Vue.component('scan-on-class', require('./components/ScanOnClass.vue').default);
Vue.component('register-class', require('./components/RegisterClass.vue').default);
Vue.component('room-detail', require('./components/RoomDetail.vue').default);
Vue.component('view-room', require('./components/ViewOnRoom.vue').default);


import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
