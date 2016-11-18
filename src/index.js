import ionTabs from  "./components/ionTabs/ionTabs.vue";
import ionTab from "./components/ionTabs/ionTab.vue";
import ionTabContent from "./components/ionTabs/ionTabContent.vue";
import ionHeaderBar from "./components/ionHeaderBar/ionHeaderBar.vue";
import template from './template.html';
import VueRouter from 'vue-router'


Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/main', component: {
            components: {
                ionTabs,
                ionTab,
                ionTabContent,
                ionHeaderBar
            },
            template: template
        }, children: [
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'profile',
                component: {
                    template:"<div>AAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>"
                }
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'posts',
                component: {
                    template:"<div>BVVVVVVVVVVVVVVVVVVVVVVVVVVVVV</div>"
                }
            }
        ]
        }
    ]
});
new Vue({
    router
}).$mount('#vueApp');
