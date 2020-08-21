<template>
    <Page>
        <ActionBar title="Artistes / Groupes">
          <StackLayout orientation="horizontal">
                <Label text="Artistes / Groupes" font-size="15px" verticalAlignment="center" />
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
          new Item("1", "u2", "U2", "Irlande", "U2 est un groupe rock irlandais originaire de Dublin, formé en 1976.Il est composé de Bono au chant et occasionnellement à la guitare ; The Edge à la guitare, au piano et au chant ; Adam Clayton à la basse ; et Larry Mullen Jr. à la batterie.", 1,5,true),
          new Item("2", "acdc", "AC/DC", "Australie", "AC/DC est un groupe de hard rock australien, originaire de Sydney. Il est formé en 1973 par les frères écossais Angus et Malcolm Young. Bien que classé dans le hard rock et considéré comme un pionnier de ce genre musical ainsi que parfois du heavy metal2,3, les membres du groupe ont toujours qualifié leur musique de « rock 'n' roll »4. Elle pourrait aussi être catégorisée comme hard blues.", 1,5,true),
          new Item("3", "queen", "Queen", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipisc tetur adipiscing elsit amet, consectetur Lorem ipsum dolor sit amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elit tetur adipiscinit", 1,5,false),
          new Item("4", "bowie", "David Bowie", "Lorem ipsum dolor sit amet, consectetur ", "Lorem ipsum dolor sit amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elitLorem ipsum dolor sit amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elitLorem ipsum dolor sit amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elitLorem ipsum dolor sit amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elitLorem ipsum dolor sit amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elitLorem ipsum dolor sit amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elitLorem ipsum dolor sit amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elitLorem ipsum dolor sit amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elitLorem ipsum dolor sit amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elitLorem ipsum dolor sit amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elitLorem ipsum dolor sit amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elitLorem ipsum dolor sit amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elit", 1,5,false),
          new Item("5", "stone", "The Rolling Stone", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sisit amet, consectetur adipisc tetur adipiscint amet, consectetur adipisc tetur etur adipiscint, consectetur adipisc tetur adipiscing elit tetur ad elit", 1,5,true),
          new Item("6", "clapton", "Eric Clapton", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsit amet, consectetur adipisc tetusit amet, consectetur adipisc tetur adipiscinr adipiscinsum dolor sit amsit amet, consectetur adipisc tetur adipiscinet, consectetur adipisc tetur adipiscing elit", 1,5,true),
          new Item("7", "aerosmith", "Aerosmith", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipisc tetur adisit amet, consectetur adipisc tetur adipiscinpiscing onsectetur adipisc tetur adipiscinr adipi", 1,5,true),
          new Item("8", "free", "Free", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, conssit amet, consectetur adipisc tetur adipiscinectetur Lorem ipsum dolor onsectetur adipisc tetur adipiscinr adipi amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elit tetur adipiscing elit", 1,4,false),
          new Item("9", "wings", "Wings", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consecsit amet, consectetur adipisc tetur adipiscintetur adipisc tetur adipiscing elit", 1,5,false),
          new Item("10", "dire", "Dire Straits", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipissit amet, Lorem ipsum dolor sit amesit amet, consectetur onsectetur adipisc tetur adipiscinr adipi tetur adipiscint, consectetur adipisc tetur adipiscing elit adipisc tetur adipiscinc tetur adipiscing elit", 1,5,false),
          new Item("11", "super", "Supertramp", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor Lorem ipsum dolor sit amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elit amet, Lorem ipsum dolor sit amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elit amet, consectetur adipisc tetur adipiscinconsectetur adipisc tetur adipiscing elit", 1,4,false),
          new Item("12", "mj", "Michael Jackson", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adsit amet, consectetur adipisc tetur adipiscinipisc tetur adipiscing elit", 1,5,false),
          new Item("13", "prince", "Prince", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, sitetur adipiscint, consectetur adipisc tetur adipiscing elit tetur adetur adipiscint, consectetur adipisc tetur adipiscing elit tetur adur adipiscinconsectetur adipisc tetur adipiscing elit", 1,5,false),
          new Item("14", "jovi", "Bon Jovi", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolsit amet, consectetur adipisc tetur adipiscinor sit amet, consectetetur adipiscint, consectetur adipisc tetur adipiscing elit tetur adcing elit", 1,5,true),
          new Item("15", "abba", "ABBA", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectsit amet, consectetur Lorem ipsum dolor sit amesit amet, consectetur adipisc tetur adipiscint, consectetur adipisc tetur adipiscing elit tetur adipiscinetur adipisc tetur adipiscing elit", 1,5,false),
        ]
      }
    },
    methods: {
      goToDetailsPage(args) {
        const item = args.item;
        this.$navigateTo(ItemDetails, { 
          props: { 
            item: item 
          },
          transition: {
            
          }
        });
      }
    }
  }
</script>

<style scoped>
    .ActionBar {
        background-color: #53ba82;
        color: #ffffff;
        font-weight: bold;
        font-size: 15px;
    }

    .titre {
      padding: 50px;
      font-size: 20px;      
      font-weight: bold;
    }

    label{
      color:white;
      padding: 50px;
    }
</style>
