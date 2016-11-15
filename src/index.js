import "./components/ionTabs/ionTabs";
import "./components/ionTabs/ionTab";
Vue.options.replace = true;
new Vue({
    el: "#vueApp",
    template: `<ion-tabs tab-position="bottom" tab-style="positive">
                   <ion-tab title="学习" icon="ion-ios-filing-outline"></ion-tab>
                   <ion-tab title="更多" icon="ion-ios-filing-outline"></ion-tab>
                   <ion-tab title="我" icon="ion-ios-filing-outline"></ion-tab>
               </ion-tabs>`
});