//add product.js

const manager = new ProductManager();

manager.loadFromLocalStorage();

if (manager.products.length === 0) {
const productsData = [
    new Product(

        1,

        "Cây Kim Tiền",

        450000,

        "assets/images/kimtien.jpg",

        "Phong thủy",

        "Cây phong thủy dễ chăm sóc",

        8,

        false,

        [
           "assets/images/kimtien2.jpg",
           "assets/images/kimtien.jpg"
        ],

        "Cây mang ý nghĩa tài lộc và may mắn trong phong thủy, thường được đặt trong nhà hoặc văn phòng để thu hút năng lượng tích cực. Với màu xanh tươi và sức sống bền bỉ, cây còn tượng trưng cho sự phát triển, thành công và thịnh vượng lâu dài.",

        "Cây Kim Tiền tượng trưng cho sự giàu có, thịnh vượng và phát đạt trong cuộc sống. Theo quan niệm phong thủy, loại cây này có khả năng thu hút tài lộc, mang lại may mắn về tài chính và giúp công việc làm ăn trở nên thuận lợi hơn. Với những chiếc lá xanh bóng, mọc đối xứng và đầy sức sống, cây còn đại diện cho sự sinh sôi, phát triển bền vững và nguồn năng lượng tích cực. Vì vậy, cây Kim Tiền thường được đặt trong phòng khách, văn phòng làm việc hoặc quầy lễ tân để tạo cảm giác tươi mới và tăng tính thẩm mỹ cho không gian. Ngoài ra, đây cũng là một trong những loại cây được lựa chọn phổ biến làm quà tặng trong các dịp khai trương, tân gia hay chúc mừng thành công với ý nghĩa cầu mong tài lộc và may mắn cho người nhận.",

        {
            height: "40-80cm",
            type: "Cây nội thất",
            difficulty: "Dễ"
        },

        {
            light: "Cây thích hợp với ánh sáng nhẹ hoặc ánh sáng gián tiếp, có thể phát triển tốt trong môi trường trong nhà, văn phòng hoặc nơi có bóng râm nhẹ. Tránh để cây tiếp xúc trực tiếp với ánh nắng gắt trong thời gian dài vì có thể làm cháy lá.",
            water: "Chỉ cần tưới khoảng 1 lần mỗi tuần để giữ độ ẩm vừa phải cho đất. Vào mùa mưa hoặc thời tiết ẩm, có thể giảm lượng nước tưới để tránh cây bị úng.",
            soil: "Đất trồng nên tơi xốp, giàu dinh dưỡng và có khả năng thoát nước tốt để giúp rễ cây phát triển khỏe mạnh. Có thể trộn thêm xơ dừa, tro trấu hoặc đá perlite để tăng độ thông thoáng cho đất.",
            note: "Không nên tưới quá nhiều nước vì cây dễ bị úng rễ và vàng lá. Chỉ cần giữ đất hơi ẩm, đảm bảo chậu có lỗ thoát nước tốt và thường xuyên lau sạch lá để cây luôn xanh khỏe, bóng đẹp."
        },

        4
    ),

    new Product(

        2,

        "Cây Monstera",

        700000,

       "assets/images/monstera.jpg",

        "Trong nhà",

        "Cây lá xẻ hiện đại",

        5,

        false,

        [
            "assets/images/monstera2.jpg",
            "assets/images/monstera.jpg"
        ],

       "Cây Monstera (Trầu Bà Lá Xẻ) là một trong những loại cây nội thất được ưa chuộng nhất trong thiết kế hiện đại nhờ hình dáng lá xẻ độc đáo, mang phong cách tropical sang trọng và nghệ thuật.",

    "Monstera, hay còn gọi là Trầu Bà Lá Xẻ, là một trong những loại cây nội thất mang tính biểu tượng trong thiết kế không gian hiện đại. Điểm đặc trưng của cây là những chiếc lá lớn có hình dạng xẻ tự nhiên độc đáo, tạo nên vẻ đẹp nhiệt đới (tropical) đầy nghệ thuật và thu hút ánh nhìn. Nhờ vẻ ngoài ấn tượng, Monstera thường xuất hiện trong các quán cà phê, khách sạn, văn phòng sáng tạo và các không gian mang phong cách tối giản hoặc Scandinavian. Ngoài giá trị thẩm mỹ, Monstera còn giúp cải thiện chất lượng không khí bằng cách hấp thụ một số chất độc hại nhẹ trong môi trường sống. Cây có khả năng sinh trưởng tốt trong điều kiện trong nhà, phù hợp với người yêu cây nhưng không có nhiều thời gian chăm sóc. Khi trưởng thành, cây có thể phát triển rất mạnh, tạo điểm nhấn xanh nổi bật cho không gian.",


        {
            height: "50-100cm",
            type: "Cây nội thất",
            difficulty: "Trung bình"
        },

        {
             light: "Ưa ánh sáng gián tiếp, sáng vừa. Tránh ánh nắng trực tiếp vì dễ làm cháy lá hoặc mất màu xanh tự nhiên. Có thể đặt gần cửa sổ có rèm hoặc nơi có ánh sáng khuếch tán.",
        water: "Tưới khoảng 2 lần/tuần tùy vào độ ẩm môi trường. Giữ đất hơi ẩm nhưng không bị sũng nước. Nên để đất khô nhẹ giữa các lần tưới để tránh thối rễ.",
        soil: "Cần đất giàu dinh dưỡng, thoát nước tốt và có độ tơi xốp cao. Có thể bổ sung than bùn, xơ dừa hoặc vỏ thông để tăng khả năng thoáng khí cho rễ.",
        note: "Nên thường xuyên lau bụi trên lá để tăng khả năng quang hợp. Tránh đặt cây gần điều hòa thổi trực tiếp hoặc nơi có gió lạnh mạnh."
        },

        5
    ),

    new Product(

        3,

        "Cây Lưỡi Hổ",

        320000,

        "assets/images/luoiho.jpg",

        "Phong thủy",

        "Thanh lọc không khí",

        12,

        false,

        [
            "assets/images/luoiho2.jpg",
            "assets/images/luoiho.jpg"
        ],

        "Cây Lưỡi Hổ là loại cây cảnh phổ biến với khả năng sống bền bỉ trong nhiều điều kiện khác nhau, đồng thời mang ý nghĩa phong thủy xua đuổi tà khí và bảo vệ không gian sống.",

    "Cây Lưỡi Hổ là một trong những loại cây cảnh được ưa chuộng nhất nhờ khả năng sinh tồn mạnh mẽ và ý nghĩa phong thủy tích cực. Với hình dáng lá dài, cứng cáp và vươn thẳng, cây tượng trưng cho sự mạnh mẽ, kiên định và khả năng bảo vệ gia chủ khỏi những nguồn năng lượng xấu. Ngoài ý nghĩa phong thủy, Lưỡi Hổ còn nổi tiếng với khả năng thanh lọc không khí, đặc biệt là hấp thụ các chất độc hại và nhả oxy vào ban đêm, rất phù hợp để đặt trong phòng ngủ. Đây là loại cây cực kỳ dễ chăm sóc, gần như không yêu cầu kỹ thuật cao, phù hợp với người mới bắt đầu chơi cây hoặc những người bận rộn.",

        {
            height: "30-60cm",
            type: "Cây phong thủy",
            difficulty: "Dễ"
        },

        {
            light: "Cây chịu được nhiều điều kiện ánh sáng, từ ánh sáng mạnh đến ánh sáng yếu. Tuy nhiên, phát triển tốt nhất trong ánh sáng gián tiếp hoặc bóng râm nhẹ.",
        water: "Chỉ cần tưới 1 lần/tuần hoặc ít hơn. Cây chịu hạn tốt, không nên tưới quá nhiều vì rất dễ gây thối rễ.",
        soil: "Ưu tiên đất khô thoáng, thoát nước cực tốt. Có thể trộn đất với cát hoặc perlite để giảm độ ẩm dư thừa.",
        note: "Không nên tưới theo lịch cố định mà cần kiểm tra đất trước khi tưới. Đây là loại cây càng ít chăm càng dễ sống."
        },

        3
    ),
    new Product(
    4,
    "Cây Trầu Bà Xanh",
    250000,
    "assets/images/trauba.jpg",
    "Trong nhà",
    "Cây leo trang trí nội thất",
    10,
    false,
    ["assets/images/trauba2.jpg", "assets/images/trauba.jpg"],
    "Cây Trầu Bà xanh là loại cây leo phổ biến trong trang trí nội thất nhờ khả năng phát triển mạnh và dễ chăm sóc.",

    "Cây Trầu Bà Xanh (Epipremnum aureum) là một trong những loại cây cảnh nội thất được ưa chuộng nhất hiện nay nhờ vẻ đẹp tự nhiên, khả năng sinh trưởng nhanh và thích nghi tốt trong nhiều điều kiện môi trường khác nhau. Cây có thân leo mềm, lá hình tim xanh mướt, đôi khi có ánh vàng nhẹ tùy giống, tạo cảm giác tươi mát và dễ chịu cho không gian sống. Trầu Bà thường được trồng trong chậu treo, leo cột hoặc đặt trên kệ cao để tạo điểm nhấn xanh trong phòng khách, văn phòng, quán cà phê hoặc khu vực làm việc. Ngoài giá trị thẩm mỹ, cây còn có khả năng hấp thụ một số khí độc trong không khí như formaldehyde, benzene và toluene, góp phần cải thiện chất lượng không khí trong nhà.",

    {
        height: "20-100cm",
        type: "Cây leo nội thất",
        difficulty: "Dễ"
    },

    {
        light: "Ưa ánh sáng gián tiếp, có thể sống trong bóng râm nhưng tránh ánh nắng trực tiếp gay gắt",
        water: "Tưới 2 lần/tuần hoặc khi đất se khô, tránh để đất quá ẩm gây úng rễ",
        soil: "Đất tơi xốp, giàu dinh dưỡng, thoát nước tốt (có thể trộn xơ dừa, trấu, than bùn)",
        note: "Không đặt cây dưới nắng gắt lâu dài; nên lau lá định kỳ để cây quang hợp tốt hơn"
    },
    4
),

new Product(
    5,
    "Cây Cau Tiểu Trâm",
    280000,
    "assets/images/cautieutram.jpg",
    "Phong thủy",
    "Cây cảnh mini để bàn",
    7,
    false,
    ["assets/images/cautieutram2.jpg", "assets/images/cautieutram.jpg"],
    "Cau Tiểu Trâm là cây phong thủy mini mang vẻ đẹp thanh lịch, phù hợp không gian nhỏ.",

    "Cây Cau Tiểu Trâm (Chamaedorea elegans) là một loại cây cảnh mini rất phổ biến trong trang trí nội thất và phong thủy. Cây có dáng nhỏ gọn, thân mọc thành bụi với nhiều nhánh lá mảnh, xanh đậm và mềm mại, tạo cảm giác thanh thoát và nhẹ nhàng cho không gian. Nhờ kích thước nhỏ, cây rất thích hợp đặt trên bàn làm việc, bàn học, quầy lễ tân hoặc kệ trang trí trong các không gian hạn chế diện tích. Trong phong thủy, Cau Tiểu Trâm được xem là biểu tượng của sự bình an, may mắn và sự thăng tiến trong công việc. Ngoài ra, cây còn giúp lọc bụi mịn trong không khí và hỗ trợ cân bằng độ ẩm trong phòng, góp phần tạo môi trường sống trong lành hơn.",

    {
        height: "20-40cm",
        type: "Cây để bàn",
        difficulty: "Dễ"
    },

    {
        light: "Ưa ánh sáng gián tiếp hoặc ánh sáng nhẹ, tránh ánh nắng trực tiếp vì có thể làm cháy lá",
        water: "Tưới 1-2 lần/tuần, giữ đất hơi ẩm nhưng không được để úng nước",
        soil: "Đất tơi xốp, thoát nước tốt, giàu mùn hữu cơ",
        note: "Nên lau lá thường xuyên để tránh bụi và giúp cây quang hợp tốt hơn"
    },
    4
),

new Product(
    6,
    "Cây Phát Tài",
    300000,
    "assets/images/phattai.jpg",
    "Phong thủy",
    "Cây mang tài lộc",
    9,
    false,
    ["assets/images/phattai2.jpg", "assets/images/phattai.jpg"],
    "Cây Phát Tài mang ý nghĩa may mắn và tài lộc trong kinh doanh và cuộc sống.",

    "Cây Phát Tài (Dracaena fragrans) là một trong những loại cây phong thủy được ưa chuộng nhất nhờ ý nghĩa tượng trưng cho tài lộc, thịnh vượng và sự phát triển bền vững. Cây có thân thẳng, chắc khỏe, lá dài xanh đậm mọc tập trung ở đỉnh, tạo hình dáng vững chãi và sang trọng. Trong phong thủy, cây thường được đặt ở phòng khách, văn phòng làm việc, sảnh công ty hoặc quầy lễ tân để thu hút may mắn và năng lượng tích cực. Ngoài ý nghĩa phong thủy, Cây Phát Tài còn có khả năng thanh lọc không khí, giúp giảm bụi và một số chất độc hại, góp phần tạo môi trường sống trong lành hơn.",

    {
        height: "50-150cm",
        type: "Cây phong thủy",
        difficulty: "Dễ"
    },

    {
        light: "Ưa ánh sáng gián tiếp, có thể chịu bóng bán phần, tránh ánh nắng trực tiếp mạnh",
        water: "Tưới 1 lần/tuần hoặc khi đất khô bề mặt, tránh tưới quá nhiều gây thối rễ",
        soil: "Đất tơi xốp, giàu dinh dưỡng, thoát nước tốt",
        note: "Nên xoay chậu định kỳ để cây phát triển đều; lau lá để tăng khả năng quang hợp"
    },
    4
),

new Product(
    7,
    "Cây Lan Ý",
    270000,
    "assets/images/lan_y.jpg",
    "Văn phòng",
    "Cây hoa trắng thanh lọc không khí",
    6,
    false,
    ["assets/images/lan_y2.jpg", "assets/images/lan_y.jpg"],
    "Lan Ý là cây hoa nội thất nổi bật với hoa trắng tinh khôi và khả năng lọc không khí tốt.",

    "Cây Lan Ý (Spathiphyllum) là một trong những loại cây cảnh nội thất được ưa chuộng nhờ vẻ đẹp thanh lịch và khả năng thích nghi tốt trong môi trường thiếu sáng. Cây nổi bật với hoa màu trắng tinh khôi mọc vươn lên từ tán lá xanh đậm, tạo cảm giác nhẹ nhàng, tinh khiết và sang trọng. Lan Ý thường được sử dụng để trang trí phòng khách, phòng ngủ, văn phòng hoặc các không gian cần sự thư giãn. Ngoài giá trị thẩm mỹ, cây còn có khả năng hấp thụ các chất độc hại trong không khí như formaldehyde, benzene, ammonia, giúp cải thiện chất lượng không khí và mang lại môi trường sống trong lành hơn.",

    {
        height: "30-70cm",
        type: "Cây hoa nội thất",
        difficulty: "Trung bình"
    },

    {
        light: "Ưa ánh sáng gián tiếp, có thể sống trong bóng râm nhưng sẽ ít ra hoa nếu thiếu sáng",
        water: "Tưới 2 lần/tuần, giữ đất luôn ẩm nhẹ nhưng không để úng nước",
        soil: "Đất giàu dinh dưỡng, tơi xốp và thoát nước tốt",
        note: "Nên cắt bỏ lá úa, hoa tàn để kích thích cây ra hoa mới; tránh đặt nơi gió lạnh hoặc nắng gắt"
    },
    4
),

new Product(
    8,
    "Cây Ngọc Bích",
    220000,
    "assets/images/ngocbich.jpg",
    "Phong thủy",
    "Cây tài lộc mini",
    15,
    false,
    ["assets/images/ngocbich2.jpg", "assets/images/ngocbich.jpg"],
    "Ngọc Bích là cây mini tượng trưng cho tiền tài và sự may mắn.",

    "Cây Ngọc Bích (Crassula ovata) là một loại cây mọng nước rất được ưa chuộng trong phong thủy nhờ hình dáng lá tròn dày, xanh bóng, trông như những đồng xu tượng trưng cho tài lộc và sự thịnh vượng. Cây có kích thước nhỏ gọn, thân gỗ hóa theo thời gian, dễ tạo dáng bonsai mini nên thường được đặt trên bàn làm việc, quầy thu ngân hoặc không gian kinh doanh. Ngoài ý nghĩa phong thủy mang lại may mắn và tiền tài, Ngọc Bích còn có sức sống bền bỉ, thể hiện sự ổn định và phát triển lâu dài.",


    {
        height: "10-30cm",
        type: "Cây mini",
        difficulty: "Dễ"
    },

    {
        light: "Ưa ánh sáng gián tiếp hoặc nắng nhẹ buổi sáng, không chịu được bóng râm hoàn toàn",
        water: "1 lần/tuần hoặc khi đất khô hoàn toàn, tránh tưới quá nhiều vì cây dễ úng rễ",
        soil: "Đất khô thoáng, thoát nước cực tốt, phù hợp đất xương rồng hoặc đất pha cát",
        note: "Không để cây bị úng nước; nên đặt nơi thoáng gió và có ánh sáng ổn định"
    },
    4
),

new Product(
    9,
    "Cây Bàng Singapore",
    750000,
    "assets/images/bangsingapore.jpg",
    "Trong nhà",
    "Cây nội thất sang trọng",
    3,
    false,
    ["assets/images/bangsingapore2.jpg", "assets/images/bangsingapore.jpg"],
    "Cây Bàng Singapore là cây nội thất cao cấp được dùng trong thiết kế hiện đại.",

    "Cây Bàng Singapore (Ficus lyrata) là một trong những loại cây nội thất cao cấp được ưa chuộng trong thiết kế không gian hiện đại nhờ hình dáng nổi bật và vẻ đẹp sang trọng. Cây có lá lớn, bản rộng, màu xanh đậm và gân lá rõ ràng, tạo điểm nhấn mạnh mẽ trong không gian sống. Với dáng cây thẳng đứng và tán lá xòe đều, Bàng Singapore thường được sử dụng trong phòng khách, sảnh lớn, văn phòng công ty hoặc các không gian mang phong cách tối giản, hiện đại. Ngoài giá trị thẩm mỹ, cây còn giúp tạo cảm giác cân bằng, giảm sự khô cứng của nội thất và mang lại không gian xanh tự nhiên.",

    {
        height: "100-200cm",
        type: "Cây nội thất lớn",
        difficulty: "Trung bình"
    },

    {
        light: "Cần ánh sáng gián tiếp mạnh, gần cửa sổ là lý tưởng; tránh bóng râm quá lâu",
        water: "Tưới 1-2 lần/tuần tùy độ ẩm đất, không để đất quá khô hoặc quá ướt",
        soil: "Đất giàu dinh dưỡng, tơi xốp, thoát nước tốt",
        note: "Cần không gian rộng để phát triển; xoay chậu định kỳ để cây không bị nghiêng về một phía"
    },
    4
),

new Product(
    10,
    "Cây Xương Rồng",
    98000,
    "assets/images/xuongrong.jpg",
    "Phong thủy",
    "Cây chịu hạn tốt",
    20,
    false,
    ["assets/images/xuongrong2.jpg", "assets/images/xuongrong.jpg"],
    "Xương rồng là loại cây biểu tượng cho sức sống mạnh mẽ và bền bỉ.",

    "Cây Xương Rồng là nhóm thực vật mọng nước có khả năng sinh tồn mạnh mẽ trong môi trường khô hạn và khắc nghiệt. Với thân cây chứa nước, lớp vỏ dày và gai thay cho lá, cây có thể hạn chế thoát hơi nước tối đa để duy trì sự sống. Xương rồng không chỉ mang vẻ đẹp độc đáo, đa dạng về hình dáng và kích thước mà còn được xem là biểu tượng của sự kiên cường, vượt qua khó khăn trong cuộc sống. Trong phong thủy, cây còn mang ý nghĩa bảo vệ, giúp xua đuổi năng lượng xấu và tạo cảm giác vững chắc, ổn định cho không gian.",

    {
        height: "10-50cm",
        type: "Cây sa mạc",
        difficulty: "Rất dễ"
    },

    {
        light: "Cần ánh sáng mạnh trực tiếp, ưu tiên đặt nơi có nắng như cửa sổ hoặc ban công",
        water: "1 lần/2 tuần hoặc ít hơn, chỉ tưới khi đất khô hoàn toàn",
        soil: "Đất cực kỳ thoát nước tốt, thường dùng đất xương rồng hoặc đất pha cát, đá perlite",
        note: "Tránh tưới quá nhiều nước vì dễ gây thối rễ; nên dùng chậu có lỗ thoát nước tốt"
    },
    4
),
    new Product(
    11,
    "Cây Kim Ngân",
    320000,
    "assets/images/kimngan.jpg",
    "Phong thủy",
    "Tài lộc và may mắn",
    10,
    false,
    ["assets/images/kimngan2.jpg", "assets/images/kimngan.jpg"],
    "Cây Kim Ngân là loại cây phong thủy tượng trưng cho tài lộc, may mắn và sự ổn định tài chính.",

    "Cây Kim Ngân (Pachira aquatica) là một trong những loại cây phong thủy phổ biến nhất, thường được xem như biểu tượng của tài lộc, thịnh vượng và sự ổn định lâu dài trong tài chính. Cây có thân thường được xoắn lại thành bím đặc trưng, kết hợp với tán lá xanh tươi mọc xòe đều, tạo cảm giác vững chắc nhưng vẫn mềm mại và hài hòa. Trong phong thủy, Kim Ngân được tin rằng có khả năng thu hút năng lượng tích cực, hỗ trợ công việc kinh doanh thuận lợi và mang lại may mắn cho gia chủ. Cây thường được đặt ở phòng khách, bàn làm việc, sảnh công ty hoặc quầy thu ngân để tăng cường sinh khí cho không gian.",


    {
        height: "50-120cm",
        type: "Cây phong thủy",
        difficulty: "Dễ"
    },

    {
        light: "Ưa ánh sáng gián tiếp, có thể chịu bóng bán phần nhưng phát triển tốt hơn khi có ánh sáng tự nhiên",
        water: "Tưới 1 lần/tuần, giữ đất ẩm nhẹ nhưng không để úng nước",
        soil: "Đất tơi xốp, giàu dinh dưỡng và thoát nước tốt",
        note: "Nên xoay chậu định kỳ để cây phát triển cân đối; tránh đặt nơi quá tối trong thời gian dài"
    },
    4
),

new Product(
    12,
    "Cây Vạn Lộc",
    280000,
    "assets/images/vanloc.jpg",
    "Phong thủy",
    "May mắn và thịnh vượng",
    8,
    false,
    ["assets/images/vanloc2.jpg", "assets/images/vanloc.jpg"],
    "Cây Vạn Lộc nổi bật với lá màu đỏ hồng, mang ý nghĩa phong thủy về may mắn và tài lộc.",

    "Cây Vạn Lộc (Aglaonema sp.) là loại cây cảnh phong thủy nổi bật với sắc lá đỏ hồng xen xanh rực rỡ, tượng trưng cho sự may mắn, thịnh vượng và thành công trong cuộc sống. Nhờ màu sắc nổi bật, cây thường được sử dụng để trang trí nội thất hiện đại, văn phòng, phòng khách hoặc làm quà tặng trong các dịp khai trương, tân gia. Trong phong thủy, Vạn Lộc được xem là loại cây mang lại năng lượng tích cực, giúp thu hút tài lộc và tạo điểm nhấn sinh động cho không gian sống.",

    {
        height: "30-60cm",
        type: "Cây nội thất",
        difficulty: "Trung bình"
    },

    {
        light: "Ưa ánh sáng gián tiếp, ánh sáng nhẹ; tránh nắng gắt trực tiếp vì dễ làm cháy lá",
        water: "Tưới 2 lần/tuần hoặc khi bề mặt đất khô, giữ độ ẩm vừa phải",
        soil: "Đất giàu dinh dưỡng, tơi xốp và thoát nước tốt",
        note: "Nên lau lá thường xuyên để giữ màu sắc tươi đẹp; tránh đặt nơi quá lạnh hoặc gió mạnh"
    },

    4
),

new Product(
    13,
    "Cây Hồng Môn",
    300000,
    "assets/images/hongmon.jpg",
    "Trong nhà",
    "Hoa đỏ trang trí",
    6,
    false,
    ["assets/images/hongmon2.png", "assets/images/hongmon.jpg"],
    "Hồng Môn là cây hoa nội thất nổi bật với màu đỏ rực rỡ và hình dáng hoa độc đáo.",

    "Cây Hồng Môn (Anthurium andraeanum) là loại cây cảnh hoa nội thất nổi bật với vẻ đẹp sang trọng và màu sắc rực rỡ, thường là đỏ, hồng hoặc trắng. Phần hoa thực chất là mo hoa hình trái tim bóng mịn, kết hợp với nhụy hoa vươn dài tạo nên vẻ ngoài rất đặc trưng và thu hút. Cây mang ý nghĩa phong thủy về tình yêu, sự may mắn và hạnh phúc viên mãn, vì vậy thường được dùng làm quà tặng trong các dịp đặc biệt hoặc trang trí không gian sống, văn phòng để tạo điểm nhấn nổi bật.",

    {
        height: "40-70cm",
        type: "Cây hoa nội thất",
        difficulty: "Trung bình"
    },

    {
        light: "Ưa ánh sáng gián tiếp, sáng nhẹ; tránh ánh nắng trực tiếp vì dễ làm cháy lá và hoa",
        water: "Tưới 2-3 lần/tuần, giữ đất luôn ẩm nhẹ nhưng không được úng nước",
        soil: "Đất tơi xốp, giàu mùn hữu cơ, thoát nước tốt",
        note: "Nên phun sương giữ độ ẩm không khí; cắt bỏ hoa héo để cây ra hoa mới"
    },

    4
),

new Product(
    14,
    "Cây Thiết Mộc Lan",
    520000,
    "assets/images/thietmoclan.jpg",
    "Phong thủy",
    "Cây phát tài lớn",
    5,
    false,
    ["assets/images/thietmoclan2.jpg", "assets/images/thietmoclan.jpg"],
    "Thiết Mộc Lan là cây phong thủy lớn, mang ý nghĩa phát tài và thịnh vượng.",

    "Cây Thiết Mộc Lan (Dracaena fragrans) là một loại cây phong thủy kích thước lớn, thường được sử dụng trong các không gian rộng như sảnh công ty, khách sạn, nhà hàng hoặc văn phòng cao cấp. Cây có thân gỗ chắc khỏe, lá dài xanh đậm mọc tập trung ở ngọn, tạo dáng vững chãi và sang trọng. Trong phong thủy, Thiết Mộc Lan được xem là biểu tượng của sự phát tài, thịnh vượng và may mắn lâu dài; đặc biệt khi cây ra hoa được cho là dấu hiệu của vận may đến với gia chủ.",

    {
        height: "100-250cm",
        type: "Cây nội thất lớn",
        difficulty: "Trung bình"
    },

    {
        light: "Ưa ánh sáng gián tiếp mạnh, có thể chịu nắng nhẹ buổi sáng; tránh ánh nắng gắt trực tiếp",
        water: "Tưới 1-2 lần/tuần tùy độ ẩm môi trường, tránh để đất bị úng nước",
        soil: "Đất giàu dinh dưỡng, tơi xốp và thoát nước tốt",
        note: "Cần không gian rộng để phát triển; nên lau lá định kỳ và xoay chậu để cây phát triển đều"
    },

    4
),

new Product(
    15,
    "Cây Trúc Nhật",
    240000,
    "assets/images/trucnhat.jpg",
    "Văn phòng",
    "Cây thanh lọc không gian",
    11,
    false,
    ["assets/images/trucnhat2.jpg", "assets/images/trucnhat.jpg"],
    "Cây Trúc Nhật là loại cây cảnh thanh thoát, tượng trưng cho sự bình an và cân bằng trong cuộc sống.",

    "Cây Trúc Nhật là một loại cây cảnh nội thất mang vẻ đẹp thanh thoát và nhẹ nhàng với thân thẳng đứng, lá nhỏ xanh mướt mọc đối xứng theo từng tầng. Nhờ dáng cây gọn gàng nhưng vẫn đầy sức sống, Trúc Nhật thường được sử dụng trong các không gian như phòng khách, văn phòng, hành lang hoặc khu vực thiền định để tạo cảm giác thư giãn và hài hòa. Cây không chỉ mang tính thẩm mỹ cao mà còn giúp cân bằng không gian sống, mang lại sự yên tĩnh và cảm giác gần gũi với thiên nhiên. Trong phong thủy, Trúc Nhật được xem là biểu tượng của sự bình an, may mắn và tinh thần kiên định, giúp gia chủ duy trì sự ổn định trong công việc và cuộc sống.",

    {
        height: "30-100cm",
        type: "Cây thân thẳng",
        difficulty: "Dễ"
    },

    {
        light: "Ưa ánh sáng gián tiếp hoặc ánh sáng nhẹ, có thể sống tốt trong môi trường thiếu sáng nhưng phát triển chậm hơn",
        water: "Tưới 2 lần/tuần, giữ đất ẩm vừa phải, tránh để đất quá khô hoặc bị úng nước",
        soil: "Đất tơi xốp, giàu mùn hữu cơ và có khả năng thoát nước tốt để tránh thối rễ",
        note: "Nên đặt cây ở nơi thoáng khí và có ánh sáng ổn định; thường xuyên tỉa bỏ lá vàng để cây luôn khỏe và giữ dáng đẹp"
    },

    4
),

new Product(
    16,
    "Cây Dương Xỉ",
    180000,
    "assets/images/duongxi.jpg",
    "Trong nhà",
    "Cây xanh trang trí treo và để bàn",
    12,
    false,
    ["assets/images/duongxi2.jpg", "assets/images/duongxi.jpg"],
    "Dương Xỉ là cây xanh trang trí mang vẻ đẹp tự nhiên, mềm mại và dễ kết hợp không gian.",

    "Cây Dương Xỉ là một trong những loài thực vật có lịch sử tiến hóa lâu đời nhất trên Trái Đất, nổi bật với tán lá mềm mại, xòe rộng và màu xanh tươi mát đặc trưng. Cây không có hoa nhưng lại mang vẻ đẹp tự nhiên rất riêng, thường được sử dụng để tạo điểm nhấn xanh trong không gian nội thất theo phong cách nhiệt đới, vintage hoặc tối giản. Dương Xỉ có thể trồng chậu để bàn, treo giỏ hoặc trang trí góc phòng, giúp mang lại cảm giác gần gũi với thiên nhiên và làm dịu không gian sống. Ngoài giá trị thẩm mỹ, cây còn góp phần cân bằng độ ẩm và cải thiện chất lượng không khí trong nhà.",

    {
        height: "20-80cm",
        type: "Cây thân lá",
        difficulty: "Trung bình"
    },

    {
        light: "Ưa ánh sáng gián tiếp hoặc bóng râm, không chịu được ánh nắng trực tiếp",
        water: "2-3 lần/tuần, cần giữ đất luôn ẩm nhưng không bị úng nước",
        soil: "Đất giàu mùn, tơi xốp, giữ ẩm tốt nhưng phải thoát nước ổn định",
        note: "Ưa môi trường ẩm cao; nên phun sương thường xuyên và tránh nơi quá khô hoặc có gió nóng"
    },

    4
),

new Product(
    17,
    "Cây Ngọc Ngân",
    260000,
    "assets/images/ngocngan.jpg",
    "Trong nhà",
    "Cây lá xanh trắng đẹp",
    9,
    false,
    ["assets/images/ngocngan2.jpg", "assets/images/ngocngan.jpg"],
    "Ngọc Ngân là cây cảnh nội thất với lá xanh trắng độc đáo, mang vẻ đẹp thanh lịch.",

    "Cây Ngọc Ngân (Aglaonema ‘Silver Queen’) là loại cây cảnh nội thất được yêu thích nhờ vẻ đẹp thanh lịch với sự kết hợp hài hòa giữa màu xanh đậm và các mảng trắng bạc trên lá. Hình dáng lá mềm mại, mọc thành bụi giúp cây tạo cảm giác nhẹ nhàng nhưng vẫn nổi bật trong không gian. Trong phong thủy, Ngọc Ngân được xem là biểu tượng của may mắn, tài lộc và sự cân bằng trong cuộc sống. Cây thường được đặt ở bàn làm việc, phòng khách hoặc quầy lễ tân để tăng tính thẩm mỹ và tạo không gian tươi mát.",

    {
        height: "30-60cm",
        type: "Cây nội thất",
        difficulty: "Dễ"
    },

    {
        light: "Ưa ánh sáng gián tiếp hoặc ánh sáng nhẹ, tránh nắng trực tiếp vì dễ cháy lá",
        water: "Tưới 2 lần/tuần, giữ đất ẩm nhẹ nhưng không để úng nước",
        soil: "Đất tơi xốp, giàu mùn và thoát nước tốt",
        note: "Nên lau lá thường xuyên để giữ màu sắc đẹp; tránh đặt nơi quá lạnh hoặc gió mạnh"
    },

    4
),

new Product(
    18,
    "Cây Lan Chi",
    180000,
    "assets/images/lanchi.jpg",
    "Trong nhà",
    "Cây lọc không khí tốt",
    15,
    false,
    ["assets/images/lanchi2.jpg", "assets/images/lanchi.jpg"],
    "Lan Chi là cây treo nội thất có khả năng lọc không khí rất tốt.",

    "Cây Lan Chi (Chlorophytum comosum) là một trong những loại cây cảnh nội thất được đánh giá cao nhờ khả năng thanh lọc không khí hiệu quả, đặc biệt trong việc hấp thụ các chất độc hại như formaldehyde. Cây có lá dài, mảnh, mềm mại với sọc xanh trắng đặc trưng, thường mọc thành bụi và rũ xuống tạo hiệu ứng trang trí rất đẹp khi treo. Lan Chi phù hợp với nhiều không gian như phòng khách, phòng ngủ, ban công hoặc văn phòng, giúp mang lại cảm giác tươi mát và thư giãn.",

    {
        height: "20-50cm",
        type: "Cây treo",
        difficulty: "Dễ"
    },

    {
        light: "Ưa ánh sáng gián tiếp, có thể sống tốt trong bóng râm nhưng phát triển mạnh hơn khi có ánh sáng nhẹ",
        water: "2-3 lần/tuần, giữ đất ẩm vừa phải nhưng tránh úng nước",
        soil: "Đất tơi xốp, thoát nước tốt, giàu hữu cơ",
        note: "Dễ chăm sóc; nên tỉa bỏ lá già để cây phát triển khỏe và đẹp hơn"
    },

    4
),

new Product(
    19,
    "Cây Hạnh Phúc",
    390000,
    "assets/images/hanhphuc.jpg",
    "Văn phòng",
    "Cây nội thất mang ý nghĩa hạnh phúc",
    7,
    false,
    ["assets/images/hanhphuc2.jpg", "assets/images/hanhphuc.jpg"],
    "Cây Hạnh Phúc là loại cây nội thất mang ý nghĩa gắn kết, bình an và hạnh phúc trong gia đình.",

    "Cây Hạnh Phúc (Radermachera sinica) là loại cây cảnh nội thất có tán lá xanh mướt, mọc thành từng cụm nhỏ tạo cảm giác đầy đặn và hài hòa. Cây mang ý nghĩa phong thủy về sự gắn kết, bình an và hạnh phúc viên mãn trong gia đình. Nhờ hình dáng mềm mại nhưng vẫn có độ vững chắc, cây thường được sử dụng để trang trí phòng khách, văn phòng hoặc không gian sinh hoạt chung nhằm tạo cảm giác ấm áp và cân bằng.",

    {
        height: "60-150cm",
        type: "Cây nội thất",
        difficulty: "Dễ"
    },

    {
        light: "Cây ưa ánh sáng gián tiếp hoặc ánh sáng tự nhiên nhẹ, có thể đặt gần cửa sổ có rèm che để lọc bớt nắng gắt. Tránh ánh nắng trực tiếp kéo dài vì có thể làm cháy lá, bạc màu hoặc khiến cây bị héo nhanh. Trong môi trường thiếu sáng, cây vẫn sống được nhưng tốc độ phát triển sẽ chậm hơn.",
        water: "Tưới khoảng 2 lần/tuần tùy theo điều kiện thời tiết và độ ẩm môi trường. Nên kiểm tra lớp đất mặt trước khi tưới, chỉ tưới khi đất bắt đầu se khô. Tránh tưới quá nhiều nước liên tục vì có thể gây úng rễ và làm cây suy yếu.",
        soil: "Sử dụng loại đất tơi xốp, giàu dinh dưỡng và có khả năng thoát nước tốt. Có thể phối trộn đất thịt nhẹ với xơ dừa, trấu hun và phân hữu cơ để tăng độ thông thoáng. Đất cần giữ ẩm vừa phải nhưng không được đọng nước lâu.",
        note: "Nên đặt cây ở nơi thông thoáng, có ánh sáng ổn định để cây phát triển cân đối. Thường xuyên lau lá để loại bỏ bụi giúp cây quang hợp tốt hơn. Ngoài ra, nên tỉa bỏ cành lá già hoặc yếu định kỳ để duy trì hình dáng đẹp và kích thích cây ra chồi mới."
    },

    4
),

new Product(
    20,
    "Cây Sen Đá",
    95000,
    "assets/images/senda.jpg",
    "Văn phòng",
    "Cây mini dễ chăm",
    25,
    false,
    ["assets/images/senda2.jpg", "assets/images/senda.jpg"],
    "Sen Đá là loại cây mini tượng trưng cho tình yêu bền vững và sức sống mạnh mẽ.",

    "Cây Sen Đá (Succulent) là nhóm thực vật mọng nước nổi tiếng với khả năng tích trữ nước trong lá, giúp cây có thể sinh trưởng tốt trong điều kiện khô hạn và ít chăm sóc. Cây có hình dáng đa dạng, từ dạng rosette (hoa thị) đến dạng cụm nhỏ, với màu sắc phong phú như xanh, tím, hồng hoặc ánh đỏ tùy điều kiện ánh sáng. Sen Đá thường được sử dụng để trang trí bàn học, bàn làm việc, kệ sách hoặc làm quà tặng ý nghĩa, tượng trưng cho tình yêu bền vững, sự kiên trì và sức sống mạnh mẽ.",

    {
        height: "5-20cm",
        type: "Cây mini",
        difficulty: "Rất dễ"
    },

    {
        light: "Cần ánh sáng mạnh hoặc ánh sáng trực tiếp nhẹ, ưu tiên đặt ở cửa sổ hoặc nơi có nắng buổi sáng để cây lên màu đẹp",
        water: "Tưới 1 lần/2 tuần hoặc khi đất khô hoàn toàn, hạn chế tưới quá thường xuyên vì cây dễ bị úng",
        soil: "Đất thoát nước cực tốt, thường dùng đất xương rồng hoặc đất pha cát, đá perlite để tăng độ thoáng",
        note: "Không để nước đọng trong chậu; nên đặt nơi khô thoáng và có ánh sáng ổn định để cây phát triển tốt và giữ màu đẹp"
    },

    4
)

];
productsData.forEach(product => {
        manager.addProduct(product);
    });

    manager.saveToLocalStorage();
}

const pagination = new Pagination({
    perPage: 9,
    container: ".product-list",
    paginationBox: ".pagination",

    getData: () => manager.getVisibleProducts(),

    renderData: (products) => {
        UIRender.renderProductList(products, ".product-list");
    }
});



// ================= FILTER EVENTS =================
document.getElementById("categoryFilter")?.addEventListener("change", e => {
    manager.setCategory(e.target.value);
    pagination.currentPage = 1;
    pagination.update();
});

document.getElementById("priceFilter")?.addEventListener("change", e => {
    manager.setPrice(e.target.value);
    pagination.currentPage = 1;
    pagination.update();
});

document.getElementById("sortPrice")?.addEventListener("change", e => {
    manager.setSort(e.target.value);
    pagination.currentPage = 1;
    pagination.update();
});

// ================= FIRST RENDER =================

const urlParams = new URLSearchParams(window.location.search);
const searchKeyword = urlParams.get("search");
const categoryFromUrl = urlParams.get("category");
if (categoryFromUrl) {
    manager.setCategory(categoryFromUrl);

    const categoryFilter =
        document.getElementById("categoryFilter");

    if (categoryFilter) {
        categoryFilter.value = categoryFromUrl;
    }
}
if (searchKeyword) {
    manager.setSearch(searchKeyword);


    const toolbar = document.querySelector(".toolbar");
    if (toolbar) {
        const notice = document.createElement("p");
        notice.id = "search-notice";
        notice.style.cssText = "margin: 12px 0 16px 0; font-size: 14px; color: #666;";
        notice.innerHTML = `Kết quả tìm kiếm cho: <strong style="color: var(--color-nau-dat, #7a5c3a);">"${searchKeyword}"</strong>
            &nbsp;—&nbsp;<a href="pages/products/ProductList.html" style="color: #888; font-size: 13px;">Xóa tìm kiếm ✕</a>`;
        toolbar.insertAdjacentElement("afterend", notice);
    }

   
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.value = searchKeyword;
}





pagination.update();
