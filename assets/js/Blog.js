class Blog {
    constructor(
        id,
        title,
        category,
        image,
        shortDesc,

        // 1. Giới thiệu chung
        vietnameseName,
        scientificName,
        features,
        meaning,
        difficulty,

        // 2. Ánh sáng
        light,
        location,
        lightProblem,

        // 3. Tưới nước
        watering,
        moistureCheck,
        wateringNote,
        wateringProblem,

        // 4. Đất & chậu
        soil,
        soilMix,
        pot,

        // 5. Nhiệt độ & độ ẩm
        temperature,
        humidity,
        humidityTip,

        // 6. Phân bón
        fertilizer,
        fertilizerFrequency,
        fertilizerNote,

        // 7. Cắt tỉa & vệ sinh
        pruning,
        cleaning,
        repotting,

        // 8. Sâu bệnh
        pests,
        pestSigns,
        pestSolution,

        // 9. Lưu ý quan trọng
        mistakes,
        petSafe,
        unsuitableCondition,

        // 10. Vấn đề thường gặp
        commonProblems,
        solutions,

        // 11. Mẹo chăm sóc nâng cao
        seasonalCare,
        repotGuide,
        fertilizingGuide,
        propagation,

        // 12. Không gian sống & phong cách
        placement,
        decorIdeas,
        fengShui,
        trends,

        author,
        createdAt
    ) {

        this.id = id;
        this.title = title;
        this.category = category;
        this.image = image;
        this.shortDesc = shortDesc;

        // 1
        this.vietnameseName = vietnameseName;
        this.scientificName = scientificName;
        this.features = features;
        this.meaning = meaning;
        this.difficulty = difficulty;

        // 2
        this.light = light;
        this.location = location;
        this.lightProblem = lightProblem;

        // 3
        this.watering = watering;
        this.moistureCheck = moistureCheck;
        this.wateringNote = wateringNote;
        this.wateringProblem = wateringProblem;

        // 4
        this.soil = soil;
        this.soilMix = soilMix;
        this.pot = pot;

        // 5
        this.temperature = temperature;
        this.humidity = humidity;
        this.humidityTip = humidityTip;

        // 6
        this.fertilizer = fertilizer;
        this.fertilizerFrequency = fertilizerFrequency;
        this.fertilizerNote = fertilizerNote;

        // 7
        this.pruning = pruning;
        this.cleaning = cleaning;
        this.repotting = repotting;

        // 8
        this.pests = pests;
        this.pestSigns = pestSigns;
        this.pestSolution = pestSolution;

        // 9
        this.mistakes = mistakes;
        this.petSafe = petSafe;
        this.unsuitableCondition = unsuitableCondition;

        // 10
        this.commonProblems = commonProblems;
        this.solutions = solutions;

        // 11
        this.seasonalCare = seasonalCare;
        this.repotGuide = repotGuide;
        this.fertilizingGuide = fertilizingGuide;
        this.propagation = propagation;

        // 12
        this.placement = placement;
        this.decorIdeas = decorIdeas;
        this.fengShui = fengShui;
        this.trends = trends;

        this.author = author;
        this.createdAt = createdAt;
    }
}