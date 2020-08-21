export default class Groupe {
    constructor(p_id, p_image, p_title, p_desc, p_content, p_category, p_rating, p_status) {
        this.is = p_id;
        this.image = p_image;
        this.title = p_title;
        this.desc = p_desc;
        this.content = p_content;
        this.category = p_category;
        this.rating = p_rating;
        this.status = p_status;
    }

    // get_image() {
    //     return `${this.image}.png`;
    // }
}