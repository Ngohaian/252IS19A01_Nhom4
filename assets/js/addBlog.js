// addBlog.js

const blogManager = new BlogManager();

blogManager.loadFromLocalStorage();

if (blogManager.blogs.length === 0) {

    blogManager.addBlog(

    new Blog(

    1,

    "Cách chăm sóc cây Kim Tiền",

    "Phong thủy",

    "assets/images/kimtien2.jpg",

    "Hướng dẫn chăm sóc cây Kim Tiền đúng cách giúp cây luôn xanh tốt, phát triển khỏe mạnh và mang lại nhiều tài lộc cho không gian sống.",

    // 1. Giới thiệu chung
    "Cây Kim Tiền",
    "Zamioculcas zamiifolia",
    "Cây Kim Tiền nổi bật với những tán lá xanh bóng, thân mọng nước và khả năng sinh trưởng bền bỉ trong nhiều điều kiện môi trường khác nhau. Đây là một trong những loại cây cảnh trong nhà được yêu thích nhất hiện nay.",
    "Theo quan niệm phong thủy, cây Kim Tiền tượng trưng cho sự giàu sang, thịnh vượng và may mắn. Vì vậy cây thường được đặt tại phòng khách, quầy lễ tân hoặc văn phòng làm việc để thu hút tài lộc.",
    "Dễ",

    // 2. Ánh sáng
    "Kim Tiền phát triển tốt trong điều kiện ánh sáng gián tiếp hoặc ánh sáng tán xạ nhẹ. Cây có khả năng chịu bóng bán phần nên rất thích hợp trồng trong nhà.",
    "Nên đặt cây gần cửa sổ, ban công có rèm che hoặc những khu vực nhận được ánh sáng tự nhiên từ 3–5 giờ mỗi ngày.",
    "Tránh đặt cây dưới ánh nắng gay gắt trong thời gian dài vì nhiệt độ cao có thể làm cháy lá, khô đầu lá và ảnh hưởng đến khả năng sinh trưởng.",

    // 3. Tưới nước
    "Thông thường chỉ cần tưới khoảng 1 lần mỗi tuần. Vào mùa mưa hoặc thời tiết ẩm có thể giảm tần suất tưới.",
    "Trước khi tưới nên kiểm tra độ ẩm của đất bằng cách chạm tay vào bề mặt. Chỉ tưới khi lớp đất phía trên đã khô.",
    "Kim Tiền là cây chịu hạn tốt nên việc tưới ít thường tốt hơn tưới quá nhiều.",
    "Nếu đất luôn ẩm ướt, rễ cây dễ bị thối khiến lá vàng, thân mềm và cây suy yếu nhanh chóng.",

    // 4. Đất & chậu
    "Cây thích hợp với loại đất tơi xốp, giàu dinh dưỡng và có khả năng thoát nước tốt để hạn chế tình trạng úng rễ.",
    "Có thể phối trộn đất thịt với xơ dừa, tro trấu, phân hữu cơ hoai mục hoặc đá perlite để tăng độ thông thoáng.",
    "Chậu trồng cần có lỗ thoát nước ở đáy để nước không bị đọng lại sau mỗi lần tưới.",

    // 5. Nhiệt độ & độ ẩm
    "Nhiệt độ lý tưởng cho cây Kim Tiền dao động từ 18–30°C. Đây là khoảng nhiệt độ phổ biến trong điều kiện khí hậu Việt Nam.",
    "Cây thích môi trường có độ ẩm trung bình và không yêu cầu độ ẩm quá cao.",
    "Vào những ngày thời tiết khô nóng, có thể phun sương nhẹ quanh tán lá để giúp cây tươi tốt hơn.",

    // 6. Phân bón
    "Nên bổ sung dinh dưỡng bằng phân hữu cơ hoặc phân NPK cân đối để cây duy trì màu lá xanh đẹp và phát triển ổn định.",
    "Bón phân định kỳ từ 1–2 tháng một lần với lượng vừa phải.",
    "Không nên lạm dụng phân bón vì nồng độ dinh dưỡng quá cao có thể gây cháy rễ và làm cây chậm phát triển.",

    // 7. Cắt tỉa & vệ sinh
    "Thường xuyên loại bỏ lá vàng, lá già hoặc cành bị hư hỏng để cây tập trung dinh dưỡng nuôi các chồi mới.",
    "Dùng khăn mềm lau bụi trên bề mặt lá định kỳ giúp cây quang hợp hiệu quả hơn và giữ được vẻ ngoài bóng đẹp.",
    "Sau khoảng 1–2 năm nên thay chậu và bổ sung đất mới để tạo không gian cho bộ rễ phát triển.",

    // 8. Sâu bệnh
    "Một số vấn đề thường gặp trên Kim Tiền là rệp sáp, nấm mốc hoặc thối rễ do tưới quá nhiều nước.",
    "Dấu hiệu nhận biết bao gồm lá vàng, lá xuất hiện đốm nâu, thân mềm hoặc cây có mùi hôi từ gốc.",
    "Khi phát hiện bệnh nên cắt bỏ phần bị hư, cải thiện độ thông thoáng và sử dụng các chế phẩm sinh học phù hợp.",

    // 9. Lưu ý quan trọng
    "Sai lầm phổ biến nhất khi chăm sóc Kim Tiền là tưới nước quá thường xuyên.",
    "Nhựa cây có chứa một lượng nhỏ tinh thể oxalat nên cần hạn chế để trẻ nhỏ hoặc thú cưng tiếp xúc trực tiếp.",
    "Không nên đặt cây ở những vị trí quá ẩm thấp hoặc thiếu lưu thông không khí trong thời gian dài.",

    // 10. Vấn đề thường gặp
    "Hiện tượng vàng lá, cây phát triển chậm hoặc thân mềm thường xuất phát từ việc tưới quá nhiều nước hoặc thiếu ánh sáng.",
    "Cần điều chỉnh chế độ tưới hợp lý, chuyển cây đến nơi sáng hơn và kiểm tra hệ thống thoát nước của chậu.",

    // 11. Mẹo chăm sóc nâng cao
    "Trong mùa mưa nên giảm lượng nước tưới để hạn chế nguy cơ úng rễ.",
    "Thời điểm thích hợp nhất để thay chậu là đầu mùa xuân khi cây bước vào giai đoạn sinh trưởng mạnh.",
    "Có thể bổ sung phân hữu cơ hoặc phân tan chậm vào mùa phát triển để kích thích cây ra nhiều chồi mới.",
    "Kim Tiền được nhân giống hiệu quả bằng phương pháp tách bụi hoặc giâm lá trong môi trường ẩm thích hợp.",

    // 12. Không gian sống & phong cách
    "Kim Tiền phù hợp với phòng khách, văn phòng, quầy lễ tân hoặc các không gian hiện đại cần điểm nhấn xanh.",
    "Cây đặc biệt nổi bật khi kết hợp cùng các loại chậu gốm trắng, chậu xi măng hoặc chậu gỗ tối màu.",
    "Theo phong thủy, cây được cho là phù hợp với người mệnh Mộc và mệnh Hỏa.",
    "Kiểu dáng thanh lịch cùng tán lá xanh bóng giúp cây dễ dàng hòa hợp với phong cách decor hiện đại và tối giản.",

    "Admin",

    "2026-05-19"
)
);

blogManager.addBlog(

    new Blog(

    2,

    "Bí quyết chăm sóc cây Monstera",

    "Trong nhà",

    "assets/images/monstera.jpg",

    "Hướng dẫn chi tiết cách chăm sóc cây Monstera giúp lá luôn xanh khỏe, xẻ đẹp tự nhiên và phát triển mạnh trong không gian sống hiện đại.",

    // 1. Giới thiệu chung
    "Cây Monstera",
    "Monstera deliciosa",
    "Monstera là loài cây nhiệt đới nổi tiếng với những chiếc lá lớn có các khe xẻ độc đáo. Hình dáng tự nhiên đầy nghệ thuật giúp cây trở thành lựa chọn yêu thích trong trang trí nội thất hiện đại.",
    "Loài cây này mang đến cảm giác thư giãn, gần gũi thiên nhiên và tạo điểm nhấn nổi bật cho không gian sống. Trong phong thủy, Monstera còn tượng trưng cho sự phát triển bền vững và sức sống mạnh mẽ.",
    "Trung bình",

    // 2. Ánh sáng
    "Monstera phát triển tốt nhất trong điều kiện ánh sáng gián tiếp mạnh hoặc ánh sáng tán xạ tự nhiên. Môi trường đủ sáng giúp cây ra lá mới to và hình thành các đường xẻ đẹp mắt.",
    "Nên đặt cây gần cửa sổ hướng Đông hoặc hướng Nam có rèm che để nhận đủ ánh sáng mà không bị nắng gắt chiếu trực tiếp.",
    "Nếu thiếu sáng trong thời gian dài, lá mới thường nhỏ hơn, màu xanh nhạt và xuất hiện ít khe xẻ hơn bình thường.",

    // 3. Tưới nước
    "Thông thường nên tưới khoảng 1–2 lần mỗi tuần tùy điều kiện thời tiết và độ ẩm môi trường. Mùa hè có thể cần tưới thường xuyên hơn mùa đông.",
    "Trước khi tưới, hãy kiểm tra lớp đất mặt khoảng 2–3cm. Nếu đất đã khô thì có thể bổ sung nước cho cây.",
    "Monstera thích đất hơi ẩm nhưng không chịu được tình trạng ngập úng kéo dài.",
    "Việc tưới quá nhiều nước có thể khiến bộ rễ bị thối, lá vàng và cây chậm phát triển.",

    // 4. Đất & chậu
    "Cây cần giá thể tơi xốp, giàu hữu cơ và có khả năng thoát nước tốt để bộ rễ luôn thông thoáng.",
    "Có thể phối trộn đất sạch với vỏ thông, xơ dừa, perlite hoặc than hoạt tính để tăng khả năng giữ ẩm và thoát nước.",
    "Nên sử dụng chậu có kích thước phù hợp cùng hệ thống lỗ thoát nước ở đáy để tránh tích tụ nước.",

    // 5. Nhiệt độ & độ ẩm
    "Nhiệt độ lý tưởng cho Monstera dao động từ 20–32°C. Đây là khoảng nhiệt độ giúp cây sinh trưởng mạnh và ra lá mới đều đặn.",
    "Monstera đặc biệt ưa môi trường có độ ẩm cao từ 60–80%, tương tự điều kiện sống tự nhiên trong rừng nhiệt đới.",
    "Vào những ngày hanh khô, có thể phun sương nhẹ hoặc đặt khay nước gần cây để tăng độ ẩm không khí.",

    // 6. Phân bón
    "Monstera cần được bổ sung dinh dưỡng định kỳ để duy trì màu lá xanh đậm và kích thước lá lớn.",
    "Nên bón phân hữu cơ, phân tan chậm hoặc NPK cân đối khoảng mỗi tháng một lần trong giai đoạn sinh trưởng.",
    "Không nên bón quá liều vì lượng muối khoáng dư thừa có thể làm cháy rễ và vàng mép lá.",

    // 7. Cắt tỉa & vệ sinh
    "Nên loại bỏ các lá già, lá vàng hoặc phần cây bị hư hại để tập trung dinh dưỡng cho chồi mới.",
    "Thường xuyên lau sạch bụi trên bề mặt lá giúp cây quang hợp hiệu quả và giữ được vẻ ngoài bóng đẹp.",
    "Khi bộ rễ phát triển kín chậu, nên thay chậu lớn hơn để tạo không gian cho cây tiếp tục sinh trưởng.",

    // 8. Sâu bệnh
    "Monstera đôi khi bị tấn công bởi rệp sáp, nhện đỏ hoặc một số loại nấm gây bệnh trên lá.",
    "Các dấu hiệu thường gặp bao gồm lá xuất hiện đốm nâu, mép lá khô hoặc bề mặt lá có lớp bột trắng bất thường.",
    "Khi phát hiện sâu bệnh, cần cách ly cây, cắt bỏ phần bị ảnh hưởng và sử dụng các chế phẩm sinh học phù hợp.",

    // 9. Lưu ý quan trọng
    "Không nên để cây tiếp xúc trực tiếp với ánh nắng gay gắt vào buổi trưa vì dễ gây cháy lá.",
    "Tránh đặt cây ở nơi nhiệt độ quá thấp hoặc gần máy lạnh hoạt động liên tục.",
    "Việc duy trì chế độ tưới hợp lý và môi trường thông thoáng là yếu tố quan trọng giúp cây phát triển khỏe mạnh.",

    // 10. Vấn đề thường gặp
    "Một số người trồng thường gặp tình trạng lá vàng, lá không xẻ hoặc cây phát triển chậm dù vẫn ra lá mới.",
    "Nguyên nhân chủ yếu là thiếu ánh sáng, thiếu dinh dưỡng hoặc tưới nước không phù hợp. Điều chỉnh các yếu tố này thường giúp cây phục hồi nhanh chóng.",

    // 11. Mẹo chăm sóc nâng cao
    "Sử dụng cọc rêu hoặc cọc xơ dừa giúp Monstera leo bám tốt hơn và cho lá lớn hơn đáng kể.",
    "Nên xoay chậu định kỳ mỗi vài tuần để cây phát triển cân đối về mọi hướng.",
    "Bón phân trong mùa xuân và mùa hè sẽ kích thích cây ra lá mới nhanh hơn.",
    "Monstera có thể được nhân giống dễ dàng bằng phương pháp giâm cành có mắt ngủ và rễ khí sinh.",

    // 12. Không gian sống & phong cách
    "Monstera phù hợp với phòng khách, studio, quán cà phê hoặc các không gian làm việc cần điểm nhấn xanh nổi bật.",
    "Những chiếc lá lớn kết hợp hài hòa với nội thất gỗ, tông màu trắng hoặc phong cách Scandinavian hiện đại.",
    "Theo phong thủy, cây thường được xem là phù hợp với người mệnh Mộc và góp phần mang lại nguồn năng lượng tích cực.",
    "Vẻ đẹp nhiệt đới đặc trưng giúp Monstera trở thành biểu tượng của phong cách tropical và decor hiện đại.",

    "Admin",

    "2026-05-21"
)
);

blogManager.addBlog(

    new Blog(

    3,

    "Cách chăm sóc cây Lưỡi Hổ cho người bận rộn",

    "Phong thủy",

    "assets/images/luoiho.jpg",

    "Cây Lưỡi Hổ là một trong những loại cây cảnh trong nhà dễ chăm sóc nhất. Bài viết này sẽ hướng dẫn chi tiết cách chăm sóc để cây luôn xanh tốt, khỏe mạnh và phát huy tối đa giá trị thẩm mỹ cũng như phong thủy.",

    // 1. Giới thiệu chung
    "Cây Lưỡi Hổ",
    "Sansevieria trifasciata",
    "Lưỡi Hổ nổi bật với những chiếc lá dài, cứng cáp, mọc thẳng đứng và có các đường vân xanh xen vàng đặc trưng. Cây có khả năng chịu hạn tốt, thích nghi với nhiều môi trường khác nhau nên rất được ưa chuộng trong trang trí nội thất.",
    "Trong phong thủy, cây Lưỡi Hổ tượng trưng cho sức mạnh, sự bảo vệ và may mắn. Nhiều người tin rằng cây giúp xua đuổi năng lượng tiêu cực, mang lại sự bình an và tài lộc cho gia chủ.",
    "Dễ",

    // 2. Ánh sáng
    "Lưỡi Hổ có khả năng thích nghi tốt với nhiều điều kiện ánh sáng khác nhau, từ nơi có ánh sáng gián tiếp đến khu vực bán râm trong nhà.",
    "Nên đặt cây gần cửa sổ, ban công có mái che hoặc những vị trí nhận được ánh sáng tự nhiên vài giờ mỗi ngày để cây phát triển khỏe mạnh và giữ màu lá đẹp.",
    "Mặc dù chịu nắng khá tốt nhưng việc tiếp xúc với ánh nắng gay gắt trong thời gian dài có thể khiến lá bị cháy, khô mép hoặc mất màu.",

    // 3. Tưới nước
    "Lưỡi Hổ là loài cây mọng nước nên nhu cầu nước không cao. Thông thường chỉ cần tưới khoảng một lần mỗi tuần hoặc ít hơn tùy điều kiện thời tiết.",
    "Trước khi tưới nên kiểm tra độ ẩm của đất và chỉ tưới khi đất đã khô hoàn toàn để tránh tình trạng dư nước.",
    "Việc tưới quá thường xuyên không giúp cây phát triển nhanh hơn mà còn làm tăng nguy cơ thối rễ.",
    "Úng nước là nguyên nhân phổ biến nhất khiến lá mềm, vàng úa và cây bị chết sau một thời gian ngắn.",

    // 4. Đất & chậu
    "Lưỡi Hổ phát triển tốt trong môi trường đất tơi xốp, thông thoáng và có khả năng thoát nước nhanh.",
    "Có thể phối trộn đất sạch với cát, đá pumice, perlite hoặc tro trấu để tăng độ thoáng khí cho bộ rễ.",
    "Nên sử dụng chậu có lỗ thoát nước ở đáy nhằm hạn chế nước đọng và giúp bộ rễ luôn khỏe mạnh.",

    // 5. Nhiệt độ & độ ẩm
    "Khoảng nhiệt độ lý tưởng cho cây dao động từ 18–35°C. Đây là mức nhiệt phù hợp với điều kiện khí hậu nhiệt đới của Việt Nam.",
    "Cây không yêu cầu độ ẩm cao và vẫn sinh trưởng tốt trong môi trường có độ ẩm trung bình của gia đình hoặc văn phòng.",
    "Không cần phun sương thường xuyên, tuy nhiên có thể lau lá bằng khăn ẩm để giữ cây sạch sẽ và tươi mới.",

    // 6. Phân bón
    "Mặc dù không cần nhiều dinh dưỡng, Lưỡi Hổ vẫn nên được bổ sung phân bón định kỳ để duy trì tốc độ sinh trưởng ổn định.",
    "Có thể sử dụng phân hữu cơ, phân tan chậm hoặc NPK loãng khoảng 2 tháng một lần trong mùa phát triển.",
    "Bón quá nhiều phân có thể gây cháy rễ, vàng lá hoặc làm cây phát triển mất cân đối.",

    // 7. Cắt tỉa & vệ sinh
    "Thường xuyên loại bỏ các lá già, lá vàng hoặc phần cây bị tổn thương để giữ vẻ đẹp thẩm mỹ và hạn chế sâu bệnh phát sinh.",
    "Dùng khăn mềm lau sạch bụi bám trên lá giúp cây quang hợp hiệu quả hơn và luôn giữ được màu sắc tươi sáng.",
    "Định kỳ thay đất hoặc thay chậu khi bộ rễ phát triển quá dày sẽ giúp cây tiếp tục sinh trưởng khỏe mạnh.",

    // 8. Sâu bệnh
    "Lưỡi Hổ khá ít sâu bệnh nhưng đôi khi vẫn có thể gặp rệp sáp, nấm hoặc thối rễ nếu môi trường quá ẩm.",
    "Các dấu hiệu thường thấy là lá mềm, đổi màu, xuất hiện đốm nâu hoặc gốc cây có mùi bất thường.",
    "Khi phát hiện bệnh, cần cắt bỏ phần bị ảnh hưởng, giảm tưới nước và sử dụng thuốc sinh học phù hợp nếu cần thiết.",

    // 9. Lưu ý quan trọng
    "Không nên tưới nước theo lịch cố định mà cần quan sát độ khô của đất trước mỗi lần tưới.",
    "Tránh đặt cây ở những vị trí quá tối trong thời gian dài vì cây có thể phát triển chậm và màu lá kém đẹp.",
    "Luôn đảm bảo chậu có khả năng thoát nước tốt để hạn chế nguy cơ thối rễ và các bệnh liên quan đến nấm.",

    // 10. Vấn đề thường gặp
    "Tình trạng lá mềm, ngả vàng hoặc xuất hiện các vùng úng thường xảy ra khi cây được tưới quá nhiều nước hoặc đất giữ ẩm quá lâu.",
    "Để khắc phục, cần giảm lượng nước tưới, thay đất nếu cần và đặt cây ở nơi có ánh sáng tự nhiên tốt hơn.",

    // 11. Mẹo chăm sóc nâng cao
    "Đặt cây ở nơi thông thoáng sẽ giúp hạn chế nấm bệnh và tạo điều kiện cho cây phát triển ổn định quanh năm.",
    "Xoay chậu định kỳ giúp các mặt của cây nhận được lượng ánh sáng đồng đều, từ đó giữ dáng cây cân đối hơn.",
    "Bổ sung phân vào đầu mùa xuân hoặc đầu mùa hè là thời điểm cây hấp thụ dinh dưỡng hiệu quả nhất.",
    "Có thể nhân giống bằng phương pháp tách bụi hoặc giâm lá, đây đều là những cách đơn giản và có tỷ lệ thành công cao.",

    // 12. Không gian sống & phong cách
    "Lưỡi Hổ phù hợp với phòng ngủ, phòng khách, văn phòng làm việc hoặc khu vực sảnh đón tiếp nhờ khả năng thích nghi cao.",
    "Kiểu dáng thẳng đứng và hiện đại giúp cây dễ dàng kết hợp với các phong cách nội thất tối giản, hiện đại hoặc công nghiệp.",
    "Theo quan niệm phong thủy, cây đặc biệt phù hợp với người mệnh Kim và mệnh Thổ, tượng trưng cho sự vững vàng và thịnh vượng.",
    "Sự đơn giản nhưng mạnh mẽ của Lưỡi Hổ khiến nó trở thành một trong những lựa chọn hàng đầu cho không gian sống hiện đại.",

    "Admin",

    "2026-05-21"
)
);

blogManager.addBlog(
    new Blog(

        4,

        "Cách chăm sóc cây Vạn Lộc luôn đỏ đẹp quanh năm",

        "Phong thủy",

        "assets/images/vanloc.jpg",

        "Cây Vạn Lộc nổi bật với sắc lá đỏ hồng rực rỡ và ý nghĩa tài lộc. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và giữ màu sắc đẹp mắt.",

        // 1. Giới thiệu chung
        "Cây Vạn Lộc",
        "Aglaonema rotundum",
        "Vạn Lộc là loài cây cảnh nội thất nổi tiếng với những chiếc lá pha trộn giữa sắc đỏ, hồng và xanh tạo nên vẻ đẹp nổi bật khó nhầm lẫn. Cây có kích thước vừa phải, phù hợp với nhiều không gian khác nhau từ bàn làm việc đến phòng khách hoặc khu vực lễ tân. Nhờ khả năng thích nghi tốt với điều kiện trong nhà nên Vạn Lộc ngày càng được nhiều người yêu thích.",
        "Theo quan niệm phong thủy, màu đỏ trên lá tượng trưng cho tài lộc, may mắn và nguồn năng lượng tích cực. Nhiều người tin rằng việc đặt cây trong nhà hoặc nơi làm việc sẽ giúp thu hút vận may, thuận lợi trong công việc và cuộc sống. Vì vậy Vạn Lộc thường được chọn làm quà tặng khai trương, tân gia hoặc các dịp đặc biệt.",
        "Dễ",

        // 2. Ánh sáng
        "Vạn Lộc phát triển tốt nhất trong môi trường có ánh sáng gián tiếp hoặc ánh sáng tán xạ nhẹ. Ánh sáng phù hợp giúp cây duy trì màu lá đỏ hồng rực rỡ và kích thích quá trình sinh trưởng ổn định. Nếu được cung cấp đủ ánh sáng, lá cây sẽ lên màu đẹp và rõ nét hơn.",
        "Nên đặt cây gần cửa sổ có rèm che, ban công có mái hoặc những vị trí nhận được ánh sáng tự nhiên trong nhiều giờ mỗi ngày. Với môi trường văn phòng, nên đưa cây ra nơi có ánh sáng tự nhiên vài lần mỗi tuần để cây phát triển tốt hơn.",
        "Không nên để cây tiếp xúc trực tiếp với ánh nắng gay gắt trong thời gian dài vì có thể gây cháy lá, khô mép lá và làm giảm độ tươi tắn của màu sắc tự nhiên.",

        // 3. Tưới nước
        "Vạn Lộc có nhu cầu nước ở mức trung bình và thích môi trường đất hơi ẩm. Thông thường có thể tưới khoảng 2–3 lần mỗi tuần tùy theo nhiệt độ và độ ẩm môi trường xung quanh.",
        "Trước mỗi lần tưới nên kiểm tra bề mặt đất bằng tay. Nếu lớp đất phía trên đã se khô thì có thể bổ sung nước cho cây. Việc kiểm tra thường xuyên sẽ giúp hạn chế tình trạng tưới quá nhiều hoặc quá ít.",
        "Nên tưới đều quanh gốc và tránh để nước đọng quá lâu trong chậu. Việc duy trì độ ẩm cân bằng sẽ giúp bộ rễ khỏe mạnh và lá luôn giữ được vẻ bóng đẹp.",
        "Tưới quá nhiều nước là nguyên nhân phổ biến gây vàng lá, thối rễ và làm cây suy yếu. Khi phát hiện đất quá ẩm hoặc có dấu hiệu úng nước, cần giảm lượng nước tưới ngay lập tức.",

        // 4. Đất & chậu
        "Cây Vạn Lộc phát triển tốt trong loại đất giàu dinh dưỡng, tơi xốp và có khả năng thoát nước hiệu quả. Môi trường đất phù hợp giúp bộ rễ hấp thụ dinh dưỡng tốt hơn và hạn chế các bệnh liên quan đến nấm.",
        "Có thể phối trộn đất sạch với xơ dừa, trấu hun, perlite hoặc phân hữu cơ hoai mục để tăng độ thông thoáng và bổ sung dưỡng chất cần thiết cho cây.",
        "Chậu trồng nên có lỗ thoát nước ở đáy để tránh hiện tượng tích tụ nước. Ngoài ra, lựa chọn kích thước chậu phù hợp với bộ rễ cũng giúp cây sinh trưởng ổn định hơn trong thời gian dài.",

        // 5. Nhiệt độ & độ ẩm
        "Nhiệt độ lý tưởng cho cây Vạn Lộc dao động từ 20–30°C. Đây là khoảng nhiệt độ phù hợp với điều kiện khí hậu nhiệt đới tại Việt Nam nên cây có thể phát triển tốt quanh năm.",
        "Vạn Lộc yêu thích môi trường có độ ẩm trung bình đến cao. Độ ẩm phù hợp giúp lá luôn mềm mại, bóng đẹp và giữ được màu sắc rực rỡ đặc trưng.",
        "Trong những ngày thời tiết khô nóng hoặc sử dụng điều hòa thường xuyên, có thể phun sương nhẹ lên lá hoặc đặt khay nước gần cây để tăng độ ẩm không khí.",

        // 6. Phân bón
        "Để duy trì màu lá đẹp và thúc đẩy quá trình sinh trưởng, cây cần được bổ sung dinh dưỡng định kỳ. Các loại phân hữu cơ, phân trùn quế hoặc NPK cân đối đều phù hợp cho Vạn Lộc.",
        "Nên bón phân khoảng một lần mỗi tháng trong giai đoạn cây phát triển mạnh. Việc cung cấp dinh dưỡng đầy đủ giúp lá lên màu đẹp hơn và hạn chế hiện tượng còi cọc.",
        "Không nên bón quá nhiều phân trong một lần vì có thể làm cháy rễ hoặc khiến cây bị sốc dinh dưỡng. Luôn tuân thủ liều lượng khuyến nghị của nhà sản xuất.",

        // 7. Cắt tỉa & vệ sinh
        "Thường xuyên loại bỏ lá già, lá vàng hoặc những phần bị hư hỏng giúp cây tập trung dinh dưỡng cho lá mới khỏe mạnh hơn. Đây cũng là cách giữ cho cây luôn gọn gàng và đẹp mắt.",
        "Lau sạch bụi trên bề mặt lá bằng khăn mềm giúp cây quang hợp hiệu quả hơn và duy trì độ bóng tự nhiên của lá.",
        "Sau khoảng 1–2 năm nên thay đất hoặc thay chậu để bổ sung dinh dưỡng mới và tạo không gian cho bộ rễ tiếp tục phát triển.",

        // 8. Sâu bệnh
        "Mặc dù khá khỏe mạnh nhưng Vạn Lộc vẫn có thể gặp một số loại sâu bệnh như rệp sáp, nhện đỏ hoặc nấm lá nếu môi trường quá ẩm và thiếu thông thoáng.",
        "Những dấu hiệu thường gặp bao gồm lá xuất hiện đốm vàng, đốm nâu, mép lá khô hoặc có lớp bột trắng bám trên bề mặt.",
        "Khi phát hiện sâu bệnh, cần nhanh chóng cắt bỏ phần bị ảnh hưởng và vệ sinh khu vực trồng cây. Có thể sử dụng các chế phẩm sinh học phù hợp để xử lý và phòng ngừa tái phát.",

        // 9. Lưu ý quan trọng
        "Không nên đặt cây dưới ánh nắng trực tiếp trong nhiều giờ liên tục vì dễ làm cháy lá và mất màu.",
        "Tránh để đất luôn trong tình trạng quá ẩm hoặc đọng nước kéo dài vì đây là nguyên nhân chính dẫn đến thối rễ.",
        "Duy trì môi trường thông thoáng, sạch sẽ và có độ ẩm phù hợp sẽ giúp cây phát triển khỏe mạnh và hạn chế sâu bệnh.",

        // 10. Vấn đề thường gặp
        "Một số người trồng thường gặp tình trạng lá nhạt màu, mất sắc đỏ hoặc cây phát triển chậm hơn bình thường. Nguyên nhân chủ yếu là thiếu ánh sáng hoặc thiếu dinh dưỡng cần thiết.",
        "Khi gặp tình trạng này, nên đưa cây đến nơi sáng hơn, đồng thời bổ sung phân bón định kỳ và kiểm tra lại chế độ tưới nước để cây nhanh chóng phục hồi.",

        // 11. Mẹo chăm sóc nâng cao
        "Xoay chậu định kỳ giúp các mặt của cây nhận được lượng ánh sáng đồng đều, từ đó tạo dáng cân đối và đẹp mắt hơn.",
        "Sử dụng nước sạch hoặc nước đã để qua đêm sẽ giúp hạn chế lượng clo ảnh hưởng đến bộ rễ.",
        "Bổ sung phân hữu cơ trong mùa sinh trưởng giúp lá lên màu đỏ đậm hơn và tăng sức sống cho cây.",
        "Khi cây trưởng thành, có thể nhân giống bằng phương pháp tách bụi để tạo thêm nhiều chậu cây mới khỏe mạnh và giữ nguyên đặc tính của cây mẹ.",

        // 12. Không gian sống & phong cách
        "Vạn Lộc phù hợp với nhiều không gian như phòng khách, phòng ngủ, bàn làm việc, quầy lễ tân hoặc khu vực tiếp khách. Màu sắc nổi bật giúp cây dễ dàng trở thành điểm nhấn trong bất kỳ không gian nào.",
        "Cây đặc biệt đẹp khi kết hợp với các loại chậu gốm trắng, chậu sứ cao cấp hoặc chậu xi măng hiện đại. Sự tương phản giữa màu lá và màu chậu tạo nên hiệu ứng trang trí rất ấn tượng.",
        "Theo phong thủy, Vạn Lộc được xem là biểu tượng của tài lộc, sự thịnh vượng và nguồn năng lượng tích cực. Đây là lựa chọn được nhiều người yêu thích khi muốn tăng thêm sinh khí cho không gian sống.",
        "Với vẻ đẹp nổi bật cùng khả năng thích nghi tốt, Vạn Lộc phù hợp với phong cách nội thất hiện đại, sang trọng và gần gũi thiên nhiên.",

        "Admin",

        "2026-05-22"
    )
);

blogManager.addBlog(
    new Blog(

    5,

    "Bí quyết chăm sóc cây Hồng Môn ra hoa đẹp",

    "Trong nhà",

    "assets/images/hongmon.jpg",

    "Cây Hồng Môn nổi tiếng với những bông hoa rực rỡ và vẻ đẹp sang trọng. Bài viết này sẽ giúp bạn chăm sóc cây đúng cách để hoa nở đẹp và bền lâu.",

    // 1. Giới thiệu chung
    "Cây Hồng Môn",
    "Anthurium andraeanum",
    "Hồng Môn là loài cây cảnh nhiệt đới có nguồn gốc từ khu vực Trung và Nam Mỹ. Điểm nổi bật của cây là những chiếc lá xanh đậm bóng mượt kết hợp cùng hoa có màu sắc rực rỡ như đỏ, hồng hoặc trắng. Hình dáng hoa giống trái tim giúp cây trở thành biểu tượng của tình yêu và sự gắn kết.",
    "Không chỉ mang giá trị thẩm mỹ, Hồng Môn còn được đánh giá là loại cây có khả năng cải thiện chất lượng không khí trong không gian sống. Trong phong thủy, cây tượng trưng cho may mắn, hạnh phúc, sự sung túc và các mối quan hệ bền vững.",
    "Trung bình",

    // 2. Ánh sáng
    "Hồng Môn sinh trưởng tốt nhất trong điều kiện ánh sáng gián tiếp hoặc ánh sáng tán xạ tự nhiên. Cây cần đủ ánh sáng để duy trì quá trình quang hợp và kích thích ra hoa đều đặn quanh năm.",
    "Vị trí lý tưởng là gần cửa sổ hướng Đông hoặc những nơi có ánh sáng nhẹ vào buổi sáng. Nếu trồng trong văn phòng, nên đặt cây ở khu vực sáng và thỉnh thoảng cho cây tiếp xúc với ánh sáng tự nhiên.",
    "Ánh nắng gay gắt chiếu trực tiếp có thể làm lá bị cháy xém, xuất hiện các đốm nâu và khiến hoa nhanh phai màu hoặc héo úa.",

    // 3. Tưới nước
    "Hồng Môn cần lượng nước vừa phải để duy trì độ ẩm ổn định cho bộ rễ. Thông thường nên tưới khoảng 2–3 lần mỗi tuần tùy điều kiện thời tiết và môi trường đặt cây.",
    "Trước mỗi lần tưới, nên kiểm tra bề mặt đất. Nếu lớp đất phía trên đã khô khoảng 2–3cm thì có thể bổ sung nước cho cây.",
    "Đất cần được giữ ẩm nhẹ nhưng không quá sũng nước. Việc cân bằng lượng nước là yếu tố quan trọng giúp cây phát triển ổn định và ra hoa thường xuyên.",
    "Tưới quá nhiều hoặc để nước đọng lâu ngày trong chậu có thể làm rễ bị thối, lá vàng và giảm khả năng ra hoa của cây.",

    // 4. Đất & chậu
    "Cây Hồng Môn thích hợp với loại đất giàu hữu cơ, tơi xốp và có khả năng giữ ẩm vừa phải nhưng vẫn đảm bảo thoát nước tốt.",
    "Một hỗn hợp lý tưởng có thể bao gồm đất sạch, xơ dừa, vỏ thông, trấu hun và perlite. Thành phần này giúp bộ rễ luôn thông thoáng và hấp thụ dinh dưỡng hiệu quả.",
    "Nên sử dụng chậu có lỗ thoát nước ở đáy để hạn chế hiện tượng ngập úng. Khi cây phát triển lớn hơn, nên thay chậu định kỳ để tạo không gian cho bộ rễ mở rộng.",

    // 5. Nhiệt độ & độ ẩm
    "Nhiệt độ thích hợp cho Hồng Môn dao động từ 20–30°C. Đây là khoảng nhiệt độ giúp cây sinh trưởng ổn định, phát triển lá khỏe và duy trì khả năng ra hoa liên tục.",
    "Là loài cây nhiệt đới, Hồng Môn đặc biệt yêu thích môi trường có độ ẩm cao. Không khí quá khô có thể khiến mép lá bị khô hoặc hoa nhanh tàn.",
    "Có thể phun sương nhẹ vào buổi sáng hoặc sử dụng máy tạo độ ẩm trong phòng điều hòa để duy trì môi trường sống lý tưởng cho cây.",

    // 6. Phân bón
    "Để cây ra hoa đẹp và duy trì màu sắc rực rỡ, cần bổ sung dinh dưỡng định kỳ trong suốt quá trình sinh trưởng.",
    "Nên sử dụng phân hữu cơ, phân trùn quế hoặc các loại phân chuyên dùng cho cây ra hoa với hàm lượng kali và lân phù hợp.",
    "Chu kỳ bón phân khoảng 3–4 tuần một lần sẽ giúp cây phát triển ổn định, cho nhiều nụ và kéo dài thời gian nở hoa.",
    "Bón quá nhiều phân hoặc sử dụng phân đậm đặc có thể gây cháy rễ, vàng lá và làm cây suy yếu.",

    // 7. Cắt tỉa & vệ sinh
    "Việc cắt bỏ lá già, lá úa và hoa đã tàn giúp cây tập trung nguồn dinh dưỡng cho các chồi non và đợt hoa tiếp theo.",
    "Thường xuyên lau bụi trên bề mặt lá bằng khăn mềm giúp tăng khả năng quang hợp, đồng thời giữ cho cây luôn sạch đẹp.",
    "Nếu phát hiện lá bị sâu bệnh hoặc tổn thương, nên loại bỏ sớm để hạn chế lây lan sang các bộ phận khỏe mạnh khác.",
    "Định kỳ thay đất và vệ sinh chậu trồng cũng giúp hạn chế nấm bệnh phát triển trong môi trường rễ.",

    // 8. Sâu bệnh
    "Hồng Môn tương đối khỏe nhưng vẫn có thể bị ảnh hưởng bởi rệp sáp, nhện đỏ hoặc các bệnh do nấm khi môi trường quá ẩm hoặc thiếu thông thoáng.",
    "Những biểu hiện thường gặp bao gồm lá xuất hiện đốm nâu, mép lá khô, hoa nhỏ bất thường hoặc cây phát triển chậm.",
    "Khi phát hiện dấu hiệu sâu bệnh, cần nhanh chóng cắt bỏ phần bị ảnh hưởng và điều chỉnh lại chế độ chăm sóc.",
    "Có thể sử dụng các chế phẩm sinh học hoặc thuốc bảo vệ thực vật phù hợp để xử lý nếu tình trạng nghiêm trọng.",

    // 9. Lưu ý quan trọng
    "Không nên đặt cây ở nơi có luồng gió lạnh từ máy điều hòa hoặc vị trí nhiệt độ thay đổi đột ngột.",
    "Tránh để cây tiếp xúc trực tiếp với ánh nắng buổi trưa vì có thể làm cháy lá và giảm tuổi thọ của hoa.",
    "Duy trì độ ẩm ổn định, tưới nước hợp lý và đảm bảo đất thoát nước tốt là ba yếu tố quan trọng nhất trong việc chăm sóc Hồng Môn.",
    "Nên quan sát cây thường xuyên để kịp thời phát hiện các dấu hiệu bất thường và có biện pháp xử lý phù hợp.",

    // 10. Vấn đề thường gặp
    "Một trong những vấn đề phổ biến nhất là cây không ra hoa hoặc số lượng hoa ít hơn mong đợi. Nguyên nhân thường đến từ việc thiếu ánh sáng hoặc thiếu dinh dưỡng.",
    "Ngoài ra, lá vàng có thể xuất hiện do tưới quá nhiều nước hoặc bộ rễ bị tổn thương bởi nấm bệnh.",
    "Nếu cây phát triển chậm, cần kiểm tra lại chất lượng đất, chế độ bón phân và điều kiện ánh sáng hiện tại.",
    "Việc điều chỉnh đúng nguyên nhân thường giúp cây phục hồi và phát triển trở lại sau một thời gian ngắn.",

    // 11. Mẹo chăm sóc nâng cao
    "Đặt cây ở vị trí có độ ẩm tương đối cao sẽ giúp lá luôn xanh bóng và hoa giữ được màu sắc lâu hơn.",
    "Trong mùa sinh trưởng mạnh, có thể bổ sung thêm phân hữu cơ hoặc phân kích thích ra hoa với liều lượng phù hợp.",
    "Loại bỏ hoa đã tàn ngay khi cần thiết giúp cây tiết kiệm năng lượng và tiếp tục hình thành nụ mới.",
    "Khi cây trưởng thành và phát triển thành nhiều bụi, có thể tách bụi để nhân giống và tạo thêm những chậu cây mới khỏe mạnh.",
    "Việc xoay chậu định kỳ cũng giúp các mặt của cây nhận ánh sáng đồng đều và phát triển cân đối hơn.",

    // 12. Không gian sống & phong cách
    "Hồng Môn phù hợp với nhiều không gian như phòng khách, bàn làm việc, phòng họp, quầy lễ tân hoặc khu vực tiếp khách.",
    "Những bông hoa rực rỡ tạo điểm nhấn nổi bật, giúp không gian trở nên sinh động và tràn đầy sức sống.",
    "Theo quan niệm phong thủy, cây mang đến may mắn, hạnh phúc và nguồn năng lượng tích cực cho gia chủ.",
    "Khi kết hợp với các loại chậu gốm sứ, chậu xi măng hoặc nội thất gỗ hiện đại, Hồng Môn tạo nên vẻ đẹp sang trọng và tinh tế.",
    "Đây là lựa chọn lý tưởng cho những ai yêu thích phong cách sống xanh nhưng vẫn muốn giữ nét thanh lịch trong không gian sống.",

    "Admin",

    "2026-05-22"
)
);
blogManager.addBlog(
new Blog(

    6,

    "Hướng dẫn chăm sóc cây Trầu Bà Xanh luôn xanh tốt quanh năm",

    "Trong nhà",

    "assets/images/trauba.jpg",

    "Cây Trầu Bà Xanh là loại cây nội thất được yêu thích nhờ khả năng thanh lọc không khí, dễ chăm sóc và thích nghi tốt với nhiều môi trường sống. Bài viết hướng dẫn chi tiết cách chăm sóc cây phát triển khỏe mạnh.",

    // 1. Giới thiệu chung
    "Cây Trầu Bà Xanh",
    "Epipremnum aureum",
    "Trầu Bà Xanh là loài cây dây leo có lá hình tim màu xanh bóng đặc trưng. Cây sinh trưởng nhanh, dễ chăm sóc và có thể trồng trong chậu treo, chậu để bàn hoặc cho leo cột trang trí trong nhà.",
    "Trong phong thủy, Trầu Bà Xanh tượng trưng cho sự phát triển, thịnh vượng và nguồn năng lượng tích cực. Loài cây này thường được lựa chọn để trang trí văn phòng, nhà ở hoặc làm quà tặng ý nghĩa.",
    "Dễ",

    // 2. Ánh sáng
    "Trầu Bà Xanh phát triển tốt trong điều kiện ánh sáng gián tiếp hoặc ánh sáng tán xạ nhẹ. Đây là môi trường lý tưởng giúp cây giữ được màu lá xanh đẹp và phát triển ổn định.",
    "Nên đặt cây gần cửa sổ, ban công có mái che hoặc những vị trí trong nhà nhận được ánh sáng tự nhiên mỗi ngày.",
    "Không nên để cây tiếp xúc trực tiếp với ánh nắng gay gắt vì có thể làm lá cháy xém, vàng lá và mất độ bóng tự nhiên.",

    // 3. Tưới nước
    "Trầu Bà Xanh có nhu cầu nước ở mức trung bình. Thông thường nên tưới khoảng 2–3 lần mỗi tuần tùy điều kiện thời tiết và độ ẩm môi trường.",
    "Nên kiểm tra độ ẩm của đất trước khi tưới. Khi lớp đất mặt đã khô khoảng 2–3cm thì có thể bổ sung nước cho cây.",
    "Duy trì độ ẩm ổn định giúp cây phát triển lá mới liên tục và bộ rễ khỏe mạnh.",
    "Tưới quá nhiều nước có thể gây úng rễ, vàng lá hoặc tạo điều kiện cho nấm bệnh phát triển.",

    // 4. Đất & chậu
    "Cây thích hợp với đất tơi xốp, giàu hữu cơ và có khả năng thoát nước tốt. Điều này giúp bộ rễ hấp thụ dinh dưỡng hiệu quả và hạn chế tình trạng úng nước.",
    "Có thể phối trộn đất sạch với xơ dừa, tro trấu, phân hữu cơ và đá perlite để tăng độ thông thoáng.",
    "Chậu trồng cần có lỗ thoát nước ở đáy để tránh tình trạng nước đọng làm ảnh hưởng đến rễ cây.",

    // 5. Nhiệt độ & độ ẩm
    "Nhiệt độ lý tưởng cho Trầu Bà Xanh dao động từ 18–30°C. Trong điều kiện nhiệt độ phù hợp, cây sẽ phát triển nhanh và cho nhiều lá đẹp.",
    "Cây thích môi trường có độ ẩm trung bình đến cao, đặc biệt phù hợp với khí hậu nhiệt đới.",
    "Có thể phun sương nhẹ vào những ngày thời tiết khô nóng để tăng độ ẩm và giúp lá luôn xanh mướt.",

    // 6. Phân bón
    "Trầu Bà Xanh cần được bổ sung dinh dưỡng định kỳ để duy trì tốc độ sinh trưởng và màu sắc lá đẹp.",
    "Có thể sử dụng phân hữu cơ, phân trùn quế hoặc NPK cân đối khoảng 1 tháng một lần.",
    "Không nên bón quá nhiều phân vì có thể gây cháy rễ hoặc làm cây phát triển mất cân đối.",

    // 7. Cắt tỉa & vệ sinh
    "Thường xuyên cắt bỏ các lá già, lá vàng hoặc cành yếu để cây tập trung dinh dưỡng cho các chồi mới.",
    "Lau sạch bụi bám trên lá bằng khăn mềm giúp cây quang hợp hiệu quả và giữ được vẻ ngoài tươi sáng.",
    "Khi cây phát triển quá dài có thể cắt tỉa và tận dụng các đoạn thân khỏe mạnh để nhân giống.",

    // 8. Sâu bệnh
    "Trầu Bà Xanh có thể gặp các loại sâu bệnh như rệp sáp, nhện đỏ hoặc bệnh nấm khi môi trường quá ẩm và thiếu thông thoáng.",
    "Biểu hiện thường gặp là lá vàng, xuất hiện đốm nâu hoặc cây phát triển chậm bất thường.",
    "Cần loại bỏ bộ phận bị ảnh hưởng và sử dụng các chế phẩm sinh học phù hợp để xử lý kịp thời.",

    // 9. Lưu ý quan trọng
    "Không nên đặt cây dưới ánh nắng trực tiếp trong thời gian dài vì sẽ làm giảm chất lượng lá.",
    "Tránh để đất luôn trong tình trạng quá ẩm hoặc nước đọng trong chậu.",
    "Đảm bảo môi trường thông thoáng giúp cây khỏe mạnh và hạn chế các loại sâu bệnh.",

    // 10. Vấn đề thường gặp
    "Lá vàng, lá héo hoặc cây phát triển chậm là những hiện tượng thường gặp khi chăm sóc Trầu Bà Xanh chưa đúng cách.",
    "Điều chỉnh lượng nước tưới, bổ sung ánh sáng phù hợp và bón phân định kỳ sẽ giúp cây phục hồi nhanh chóng.",

    // 11. Mẹo chăm sóc nâng cao
    "Xoay chậu định kỳ giúp các mặt của cây nhận được lượng ánh sáng đồng đều hơn.",
    "Sử dụng nước sạch hoặc nước đã để qua đêm giúp hạn chế tác động của clo đến bộ rễ.",
    "Bón thêm phân hữu cơ vào mùa sinh trưởng giúp lá xanh đậm và phát triển mạnh hơn.",
    "Có thể nhân giống dễ dàng bằng phương pháp giâm cành trong nước hoặc trong giá thể ẩm.",

    // 12. Không gian sống & phong cách
    "Trầu Bà Xanh phù hợp với nhiều không gian như phòng khách, phòng ngủ, bàn làm việc, văn phòng hoặc quán cà phê.",
    "Dáng cây mềm mại kết hợp cùng những chiếc lá xanh bóng tạo cảm giác thư giãn và gần gũi với thiên nhiên.",
    "Theo phong thủy, cây tượng trưng cho sự phát triển bền vững, may mắn và tài lộc.",
    "Đây là lựa chọn hoàn hảo cho phong cách nội thất xanh hiện đại, tối giản hoặc tropical.",

    "Admin",

    "2026-05-23"
)
);
    blogManager.saveToLocalStorage();
}

// ================= FILTER =================
const categoryFilter = document.querySelector("#categoryFilter");
const sortFilter = document.querySelector("#sortFilter");
const searchInput = document.querySelector("#searchInput");

// ================= RENDER =================
function renderBlogs() {
    if (!document.querySelector(".blog-list")) return;

    let blogs = [...blogManager.blogs];

    // CATEGORY
    if (categoryFilter) {
        const category = categoryFilter.value;
        if (category !== "all") {
            blogs = blogs.filter(blog => blog.category === category);
        }
    }

    // SEARCH
    if (searchInput) {
        const keyword = searchInput.value.toLowerCase();
        if (keyword) {
            blogs = blogs.filter(blog =>
                blog.title.toLowerCase().includes(keyword) ||
                blog.shortDesc.toLowerCase().includes(keyword) ||
                blog.category.toLowerCase().includes(keyword)
            );
        }
    }

    // SORT
    if (sortFilter) {
        const sortValue = sortFilter.value;
        if (sortValue === "newest") {
            blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        if (sortValue === "oldest") {
            blogs.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        }
        if (sortValue === "a-z") {
            blogs.sort((a, b) => a.title.localeCompare(b.title));
        }
        if (sortValue === "z-a") {
            blogs.sort((a, b) => b.title.localeCompare(a.title));
        }
    }

    // RENDER
    BlogRender.renderBlogList(blogs, ".blog-list");
}

// ================= EVENT =================

if (categoryFilter) categoryFilter.addEventListener("change", renderBlogs);
if (sortFilter) sortFilter.addEventListener("change", renderBlogs);
if (searchInput) searchInput.addEventListener("input", renderBlogs);

// ================= FIRST RENDER =================
if (document.querySelector(".blog-list")) {
    renderBlogs();
}
