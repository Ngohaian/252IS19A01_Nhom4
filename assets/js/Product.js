class Product {
    constructor(
        id,
        name,
        price,
        image,
        category,
        description,
        stock,
        isFavorite = false,
        images = [],
        shortDescription = "",
        fullDescription = "",
        attributes = {},
        careGuide = {},
        rating = 0,
        reviews = []
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.category = category;
        this.description = description;
        this.stock = stock;
        this.isFavorite = isFavorite;

        this.images = images;
        this.shortDescription = shortDescription;
        this.fullDescription = fullDescription;

        this.attributes = attributes;
        this.careGuide = careGuide;

        this.rating = rating;
        this.reviews = reviews;
    }
}