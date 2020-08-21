<template>
    <Page>
        <ActionBar title="Artistes / Groupes">
          <StackLayout orientation="horizontal">
                <Label text="Artistes / Groupes" font-size="24" verticalAlignment="center" />
            </StackLayout>
      </ActionBar>
        <ListView for="(item, index) in items" @itemTap="goToDetailsPage" height="100%">
          <v-template >           
            <Label class="titre" :text="item.title"/>
          </v-template>
        </ListView>
    </Page>
</template>

<script>
  import Vue from 'nativescript-vue';

  import ItemDetails from "../components/ItemDetails";
  import Item from '../models/Item';

  export default {
    components: {
      ItemDetails
    },
    data() {
      return {
        items: [
          new Item("1", "u2", "U2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adisit amet, consectetur adipisc tetur adipiscinpisc tetur adipiscing elit", 1,5,true),
          new Item("2", "acdc", "AC/DC", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dosit amet, consectetur adipisc tetur adipiscinlor sit amet, consectesit amet, consectetur adipisc tetur adipiscintur adipisc tetur adipiscing elit", 1,5,true),
          new Item("3", "queen", "Queen", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipisc tetur adipiscing elsit amet, consectetur adipisc tetur adipiscinit", 1,5,false),
          new Item("4", "bowie", "David Bowie", "Lorem ipsum dolor sit amet, consectetur ", "Lorem ipsum dolor sit amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elit", 1,5,false),
          new Item("5", "stone", "The Rolling Stone", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sisit amet, consectetur adipisc tetur adipiscint amet, consectetur adipisc tetur adipiscing elit", 1,5,true),
          new Item("6", "clapton", "Eric Clapton", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsit amet, consectetur adipisc tetusit amet, consectetur adipisc tetur adipiscinr adipiscinsum dolor sit amsit amet, consectetur adipisc tetur adipiscinet, consectetur adipisc tetur adipiscing elit", 1,5,true),
          new Item("7", "aerosmith", "Aerosmith", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipisc tetur adisit amet, consectetur adipisc tetur adipiscinpiscing elit", 1,5,true),
          new Item("8", "free", "Free", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, conssit amet, consectetur adipisc tetur adipiscinectetur adipisc tetur adipiscing elit", 1,4,false),
          new Item("9", "wings", "Wings", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consecsit amet, consectetur adipisc tetur adipiscintetur adipisc tetur adipiscing elit", 1,5,false),
          new Item("10", "dire", "Dire Straits", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipissit amet, consectetur adipisc tetur adipiscinc tetur adipiscing elit", 1,5,false),
          new Item("11", "super", "Supertramp", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, sit amet, consectetur adipisc tetur adipiscinconsectetur adipisc tetur adipiscing elit", 1,4,false),
          new Item("12", "mj", "Michael Jackson", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adsit amet, consectetur adipisc tetur adipiscinipisc tetur adipiscing elit", 1,5,false),
          new Item("13", "prince", "Prince", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, sit amet, consectetur adipisc tetur adipiscinconsectetur adipisc tetur adipiscing elit", 1,5,false),
          new Item("14", "jovi", "Bon Jovi", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolsit amet, consectetur adipisc tetur adipiscinor sit amet, consectetur adipisc tetur adipiscing elit", 1,5,true),
          new Item("15", "abba", "ABBA", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectsit amet, consectetur adipisc tetur adipiscinetur adipisc tetur adipiscing elit", 1,5,false),
        ]
      }
    },
    methods: {
      goToDetailsPage(args) {
        const item = args.item;
        this.$navigateTo(ItemDetails, { props: { item: item } });
      }
    }
  }
</script>

<style scoped>
    .ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    #layout .titre {
      padding: 50px;
    }

    label{
      color:white;
      padding: 50px;
    }
</style>
