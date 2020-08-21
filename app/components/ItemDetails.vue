<template >
  <Page>
      <ActionBar title="Détails" >
        <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="onNavBtnTap"/>
    </ActionBar>
    <ScrollView>
        <StackLayout background-color= "green">
            <Image class="image" horizontalAlignment="center" :src="item.get_image()"></Image>
            <Label id="title" :text="item.title"/>
            <TextView :text="item.desc" editable="false"/>
            <TextView :text="item.content" editable="false"/>
            <TextView :text="item.category" editable="false"/>
            <TextView :text="item.status" editable="false"/>            
        </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Item from "../models/Item";
import App from "../components/App";
import { Fontawesome } from 'nativescript-fontawesome';

export default {
    components: {
      App,
    },
    name: "ItemDetails",
    props: {
        item: Item, 
    },
    methods: {
        image() {
         return `@/assets/images/flags/${this.item.get_image()}`; //résolution dynamique d'url
        },
        onNavBtnTap() {
            this.$navigateTo(App);
        }
    }
};

</script>

<style>
    ActionBar {
        background-color: lightcoral;
        color: #ffffff;
        font-weight: bold;
        font-size: 15px;
    }
    label{
      color:white;
      padding: 50px;
    }
    #title{
        text-align: center;
        font-weight: bold;
        font-size: 20px;
    }
</style>