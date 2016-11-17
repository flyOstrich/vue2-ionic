import ionTabs from  "./components/ionTabs/ionTabs.vue";
import ionTab from "./components/ionTabs/ionTab.vue";
import ionTabContent from "./components/ionTabs/ionTabContent.vue";
import ionHeaderBar from "./components/ionHeaderBar/ionHeaderBar.vue";
new Vue({
    el: "#vueApp",
    components: {
        ionTabs,
        ionTab,
        ionTabContent,
        ionHeaderBar
    },
    template: `<ion-tabs tab-position="bottom" tab-style="positive">
                   <template slot="tab-nav">
                       <ion-tab tab-id="study" title="学习" icon="ion-ios-filing-outline"></ion-tab>
                       <ion-tab tab-id="more" title="更多" icon="ion-ios-filing-outline"></ion-tab>
                       <ion-tab tab-id="me" title="我" icon="ion-ios-filing-outline"></ion-tab>
                   </template>
                   <template slot="nav-view">
                       <ion-tab-content for="study">
                         <ion-header-bar class="bar-positive">
                           <div class="buttons">
                                <button class="button" ng-click="doSomething()">左侧按钮</button>
                            </div>
                            <h1 class="title">Title!</h1>
                            <div class="buttons">
                                <button class="button">右侧按钮</button>
                            </div>
                         </ion-header-bar>
                       </ion-tab-content>
                       <ion-tab-content for="more">BBB</ion-tab-content>
                       <ion-tab-content for="me">CCC</ion-tab-content>
                   </template>
               </ion-tabs>`
});
