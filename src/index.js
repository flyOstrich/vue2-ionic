import ionTabs from  "./components/ionTabs/ionTabs.vue";
import ionTab from "./components/ionTabs/ionTab.vue";
import ionTabContent from "./components/ionTabs/ionTabContent.vue";
new Vue({
    el: "#vueApp",
    components: {
        ionTabs,
        ionTab,
        ionTabContent
    },
    template: `<ion-tabs tab-position="bottom" tab-style="positive">
                   <template slot="tab-nav">
                       <ion-tab tab-id="study" title="学习" icon="ion-ios-filing-outline"></ion-tab>
                       <ion-tab tab-id="more" title="更多" icon="ion-ios-filing-outline"></ion-tab>
                       <ion-tab tab-id="me" title="我" icon="ion-ios-filing-outline"></ion-tab>
                   </template>
                   <template slot="nav-view">
                       <ion-tab-content for="study"></ion-tab-content>
                       <ion-tab-content for="more"></ion-tab-content>
                       <ion-tab-content for="me"></ion-tab-content>
                   </template>
               </ion-tabs>`
});