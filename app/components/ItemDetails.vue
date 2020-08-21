<template>
  <Page>
      <ActionBar title="Détails" >
        <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="onNavBtnTap"/>
    </ActionBar>
    <StackLayout>
        <Image :src="item.get_image()" stretch="none"></Image>
        <Label id="title" :text="item.title"/>
        <Label :text="item.desc"/>
        <Label :text="item.content"/>
        <Label :text="item.category"/>
        <Label :text="item.rating"/>
        <Label :text="item.status"/>

    </StackLayout>
  </Page>
</template>

<script>
import Item from "../models/Item";
import App from "../components/App";

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
    }
    label{
      color:white;
      padding: 50px;
    }
    #title{
        text-align: center;
        font-weight: bold;
    }
</style>