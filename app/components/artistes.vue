<template>
  <Page>
      <ActionBar title="Détails"/>
      <StackLayout>
          <Image src="~/assets/images/home.png" stretch="none" />
          <Label :text="item.title"/>
      </StackLayout>
  </Page>
</template>

<script>
import Item from "../models/Groupe";

export default {
  name: "ItemDetails",
  props: {
    item: Item,
  }
};
</script>

<style>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
</style>