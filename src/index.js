import ionTabs from  "./components/ionTabs/ionTabs.vue";
import ionTab from "./components/ionTabs/ionTab.vue";
new Vue({
    el: "#vueApp",
    components: {
        ionTabs,
        ionTab
    },
    template: `<ion-tabs tab-position="bottom" tab-style="positive">
                   <ion-tab title="学习" icon="ion-ios-filing-outline"></ion-tab>
                   <ion-tab title="更多" icon="ion-ios-filing-outline"></ion-tab>
                   <ion-tab title="我" icon="ion-ios-filing-outline"></ion-tab>
                   
               </ion-tabs>`
});