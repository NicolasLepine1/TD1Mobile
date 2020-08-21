export default class Item {
    constructor(p_id, p_image, p_title, p_desc, p_content, p_category, p_rating, p_status) {
        this.is = p_id;
        this.title = p_title;
        this.desc = p_desc;
        this.content = p_content;
        this.image = p_image 
        this.rating = p_rating +" étoiles";
        this.status = p_status ? "En activité" : "Fin d'activité"

        if(p_category == 1){
            this.category = "Rock";  
        }

    }

    get_image() {
        return `~/assets/images/flags/${this.image}.png`;
    }
}