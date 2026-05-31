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
        "Cách chăm sóc cây Kim Ngân luôn xanh tốt",
        "Phong thủy",
        "assets/images/kimngan.jpg",

        "Cây Kim Ngân được yêu thích nhờ vẻ đẹp thanh lịch và ý nghĩa phong thủy về tài lộc, may mắn. Bài viết hướng dẫn cách chăm sóc cây đúng cách để luôn xanh tốt và phát triển khỏe mạnh.",

        // 1. Giới thiệu chung
        "Cây Kim Ngân",
        "Pachira aquatica",
        "Kim Ngân là loài cây cảnh nổi bật với thân bện độc đáo và tán lá xanh mướt. Cây có sức sống tốt, dễ thích nghi với nhiều môi trường khác nhau và thường được trồng trong nhà hoặc văn phòng.",
        "Theo phong thủy, Kim Ngân tượng trưng cho sự giàu có, may mắn và thịnh vượng. Nhiều người lựa chọn loại cây này để thu hút tài lộc và tạo nguồn năng lượng tích cực cho không gian sống.",
        "Dễ",

        // 2. Ánh sáng
        "Kim Ngân phát triển tốt trong điều kiện ánh sáng gián tiếp hoặc ánh sáng tự nhiên nhẹ.",
        "Nên đặt cây gần cửa sổ, ban công có mái che hoặc nơi thông thoáng để cây nhận đủ ánh sáng mỗi ngày.",
        "Ánh nắng gắt chiếu trực tiếp trong thời gian dài có thể làm cháy lá và khiến cây mất sức sống.",

        // 3. Tưới nước
        "Kim Ngân có khả năng dự trữ nước trong thân nên không cần tưới quá thường xuyên.",
        "Chỉ nên tưới khi lớp đất mặt đã khô khoảng 2–3 cm để tránh tình trạng úng rễ.",
        "Tưới đều quanh gốc với lượng nước vừa phải, tránh để nước đọng trong đĩa lót chậu.",
        "Tưới quá nhiều là nguyên nhân phổ biến gây vàng lá, rụng lá và thối rễ.",

        // 4. Đất trồng & chậu
        "Kim Ngân thích hợp với đất tơi xốp, giàu dinh dưỡng và có khả năng thoát nước tốt.",
        "Có thể phối trộn đất sạch với xơ dừa, trấu hun và phân hữu cơ để tăng độ thông thoáng.",
        "Nên sử dụng chậu có lỗ thoát nước để hạn chế ngập úng và giúp rễ phát triển khỏe mạnh.",

        // 5. Nhiệt độ & độ ẩm
        "Nhiệt độ lý tưởng cho cây Kim Ngân dao động từ 18–30°C.",
        "Cây thích môi trường có độ ẩm trung bình và thích nghi tốt với điều kiện trong nhà.",
        "Vào những ngày khô nóng có thể phun sương nhẹ lên lá để duy trì độ ẩm cần thiết.",

        // 6. Phân bón
        "Bổ sung dinh dưỡng định kỳ giúp Kim Ngân phát triển ổn định và ra lá xanh đẹp.",
        "Có thể sử dụng phân hữu cơ hoặc NPK cân đối khoảng 1–2 tháng một lần.",
        "Bón phân đúng liều lượng sẽ giúp cây sinh trưởng khỏe mạnh và tăng sức đề kháng.",

        // 7. Cắt tỉa & vệ sinh
        "Nên thường xuyên cắt bỏ lá vàng, lá già và cành khô để cây tập trung dinh dưỡng cho phần khỏe mạnh.",
        "Lau sạch bụi trên lá định kỳ giúp cây quang hợp hiệu quả và giữ vẻ ngoài xanh mát.",
        "Khi bộ rễ phát triển kín chậu nên thay sang chậu lớn hơn để tạo không gian sinh trưởng.",

        // 8. Sâu bệnh thường gặp
        "Kim Ngân có thể gặp rệp sáp, nhện đỏ hoặc nấm bệnh khi môi trường quá ẩm.",
        "Dấu hiệu thường thấy là lá vàng, xuất hiện đốm nâu hoặc cây phát triển chậm bất thường.",
        "Cần loại bỏ phần bị ảnh hưởng và sử dụng chế phẩm sinh học phù hợp để xử lý.",

        // 9. Lưu ý quan trọng
        "Không nên đặt cây ở nơi có nhiệt độ quá thấp hoặc thay đổi đột ngột.",
        "Tránh tưới quá nhiều nước vì bộ rễ của Kim Ngân rất dễ bị úng.",
        "Đảm bảo cây được nhận đủ ánh sáng tự nhiên để duy trì màu lá xanh đẹp.",

        // 10. Vấn đề thường gặp
        "Lá vàng, rụng lá hoặc phát triển chậm là những vấn đề thường gặp ở cây Kim Ngân.",
        "Điều chỉnh lượng nước tưới, ánh sáng và chế độ dinh dưỡng sẽ giúp cây phục hồi nhanh chóng.",

        // 11. Mẹo chăm sóc nâng cao
        "Xoay chậu định kỳ giúp các mặt của cây nhận ánh sáng đồng đều và phát triển cân đối.",
        "Thay đất mới khoảng 1–2 năm một lần để bổ sung dinh dưỡng và cải thiện môi trường sống.",
        "Bón phân hữu cơ vào mùa sinh trưởng giúp cây ra nhiều lá mới và phát triển mạnh.",
        "Có thể cắt tỉa tạo tán để giữ dáng đẹp và phù hợp với không gian trang trí.",

        // 12. Không gian sống & phong cách
        "Kim Ngân phù hợp đặt tại phòng khách, văn phòng làm việc, quầy lễ tân hoặc khu vực tiếp khách.",
        "Thân cây bện độc đáo cùng tán lá xanh tạo điểm nhấn sang trọng và gần gũi với thiên nhiên.",
        "Theo phong thủy, cây tượng trưng cho tài lộc, may mắn và sự phát triển bền vững.",
        "Kim Ngân dễ dàng kết hợp với nhiều phong cách nội thất từ hiện đại đến tối giản.",

        "Admin",
        "2026-05-22"
    )
);
blogManager.addBlog(
new Blog(

    5,

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

blogManager.addBlog(
    new Blog(

        6,
        "Cách chăm sóc cây Bàng Singapore xanh tốt và sang trọng",
        "Trong nhà",
        "assets/images/bangsingapore.jpg",
        "Cây Bàng Singapore là loại cây cảnh nội thất được yêu thích nhờ vẻ đẹp hiện đại, lá to bóng và dáng cây thanh lịch. Bài viết hướng dẫn cách chăm sóc giúp cây luôn xanh khỏe và phát triển đẹp trong không gian sống.",

        // 1. Giới thiệu chung
        "Cây Bàng Singapore",
        "Ficus lyrata",
        "Bàng Singapore là loại cây cảnh thuộc họ dâu tằm với đặc điểm nổi bật là những chiếc lá lớn, xanh đậm và bóng đẹp. Cây thường được sử dụng để trang trí phòng khách, văn phòng, quán cà phê hoặc không gian hiện đại.",
        "Theo phong thủy, Bàng Singapore tượng trưng cho sự phát triển, sung túc và khả năng thu hút năng lượng tích cực. Cây còn mang ý nghĩa về sự vững vàng và thịnh vượng trong công việc.",
        "Khá dễ",

        // 2. Ánh sáng
        "Bàng Singapore là cây ưa sáng gián tiếp và phát triển tốt trong môi trường có ánh sáng tự nhiên ổn định.",
        "Nên đặt cây gần cửa sổ, ban công hoặc nơi có ánh sáng nhẹ khoảng 4–6 giờ mỗi ngày.",
        "Ánh nắng gắt trực tiếp vào buổi trưa có thể làm cháy lá hoặc xuất hiện các đốm nâu trên bề mặt lá.",

        // 3. Tưới nước
        "Bàng Singapore có nhu cầu nước ở mức trung bình và không thích đất quá ẩm.",
        "Chỉ nên tưới khi lớp đất mặt đã khô khoảng 2–3 cm. Thông thường tưới khoảng 1–2 lần mỗi tuần tùy điều kiện thời tiết.",
        "Cần đảm bảo nước thoát tốt để tránh tình trạng úng rễ và vàng lá.",
        "Tưới quá nhiều nước là nguyên nhân phổ biến khiến cây bị rụng lá hoặc thối rễ.",

        // 4. Đất & chậu
        "Bàng Singapore thích hợp với loại đất tơi xốp, giàu dinh dưỡng và có khả năng thoát nước tốt.",
        "Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, trấu hun và perlite để tăng độ thông thoáng.",
        "Chậu trồng nên có lỗ thoát nước và kích thước phù hợp với bộ rễ để cây phát triển ổn định.",

        // 5. Nhiệt độ & độ ẩm
        "Nhiệt độ lý tưởng cho Bàng Singapore dao động từ 18–30°C.",
        "Cây phát triển tốt trong môi trường có độ ẩm trung bình đến cao và không khí thông thoáng.",
        "Nên tránh đặt cây ở nơi có gió lạnh mạnh hoặc gần máy lạnh vì có thể làm cây rụng lá.",

        // 6. Phân bón
        "Bàng Singapore cần được bổ sung dinh dưỡng định kỳ để duy trì màu lá đẹp và tăng trưởng ổn định.",
        "Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1–2 tháng một lần trong mùa sinh trưởng.",
        "Bón quá nhiều phân có thể gây cháy rễ hoặc làm cây phát triển mất cân đối.",

        // 7. Cắt tỉa & vệ sinh
        "Nên cắt bỏ lá già, lá úa hoặc cành yếu để cây tập trung dinh dưỡng cho phần khỏe mạnh.",
        "Dùng khăn ẩm lau sạch bụi trên lá định kỳ giúp lá bóng đẹp và tăng khả năng quang hợp.",
        "Thay đất mới khoảng 1–2 năm một lần giúp cải thiện dinh dưỡng và môi trường phát triển cho cây.",

        // 8. Sâu bệnh
        "Bàng Singapore có thể gặp các vấn đề như rệp sáp, nhện đỏ hoặc nấm lá nếu môi trường quá ẩm và bí khí.",
        "Các dấu hiệu thường gặp gồm lá vàng, lá rụng nhiều, xuất hiện đốm nâu hoặc mép lá khô.",
        "Khi phát hiện sâu bệnh cần cách ly cây, cắt bỏ lá hư và sử dụng thuốc sinh học phù hợp để xử lý.",

        // 9. Lưu ý quan trọng
        "Không nên thay đổi vị trí cây liên tục vì cây cần thời gian thích nghi với môi trường.",
        "Tránh tưới quá nhiều nước hoặc để đất luôn ẩm ướt.",
        "Nên xoay chậu định kỳ để cây phát triển cân đối và đẹp hơn.",

        // 10. Vấn đề thường gặp
        "Lá vàng, rụng lá hoặc xuất hiện đốm nâu là những vấn đề phổ biến khi chăm sóc Bàng Singapore.",
        "Điều chỉnh ánh sáng, lượng nước tưới và độ thông thoáng sẽ giúp cây phục hồi hiệu quả.",

        // 11. Mẹo chăm sóc nâng cao
        "Phun sương nhẹ vào những ngày hanh khô giúp tăng độ ẩm cho cây.",
        "Sử dụng chậu màu trung tính hoặc chậu xi măng giúp tôn lên vẻ hiện đại của cây.",
        "Bón phân vào đầu mùa xuân giúp kích thích cây ra lá mới và phát triển mạnh hơn.",
        "Có thể nhân giống Bàng Singapore bằng phương pháp giâm cành hoặc chiết cành.",

        // 12. Không gian sống & phong cách
        "Bàng Singapore phù hợp với phòng khách, văn phòng, quán cà phê hoặc các không gian nội thất hiện đại.",
        "Lá lớn và dáng cây thanh lịch giúp tạo điểm nhấn sang trọng và cảm giác gần gũi thiên nhiên.",
        "Theo phong thủy, cây tượng trưng cho tài lộc, sự phát triển và nguồn năng lượng tích cực.",
        "Đây là lựa chọn lý tưởng cho phong cách hiện đại, tối giản, Scandinavian hoặc tropical decor.",

        "Admin",
        "2026-05-22"
            )
        );
        blogManager.addBlog(
    new Blog(

        7,
        "Cách chăm sóc cây Cau Tiểu Trâm xanh tốt và bền đẹp",
        "Trong nhà",
        "assets/images/cautieutram.jpg",
        "Cây Cau Tiểu Trâm là loại cây cảnh mini được yêu thích nhờ vẻ ngoài nhỏ gọn, xanh mát và dễ chăm sóc. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và phù hợp với không gian sống hiện đại.",

        // 1. Giới thiệu chung
        "Cây Cau Tiểu Trâm",
        "Chamaedorea elegans",
        "Cau Tiểu Trâm là loại cây cảnh thuộc họ cau với kích thước nhỏ gọn, lá xanh mềm mại và khả năng thích nghi tốt trong môi trường trong nhà. Cây thường được dùng để trang trí bàn làm việc, phòng khách hoặc văn phòng.",
        "Theo phong thủy, Cau Tiểu Trâm tượng trưng cho sự may mắn, bình an và khả năng thu hút tài lộc. Cây còn mang ý nghĩa về sự kiên trì và phát triển bền vững.",
        "Rất dễ",

        // 2. Ánh sáng
        "Cau Tiểu Trâm là cây ưa ánh sáng nhẹ và phát triển tốt trong điều kiện ánh sáng gián tiếp.",
        "Nên đặt cây gần cửa sổ, ban công có rèm che hoặc nơi có ánh sáng tự nhiên dịu nhẹ.",
        "Ánh nắng gắt trực tiếp có thể làm cháy lá, vàng lá và khiến cây mất sức sống.",

        // 3. Tưới nước
        "Cau Tiểu Trâm có nhu cầu nước ở mức trung bình và thích đất hơi ẩm.",
        "Nên tưới khoảng 2–3 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
        "Cần đảm bảo đất thoát nước tốt để tránh tình trạng úng rễ.",
        "Tưới quá nhiều nước có thể khiến cây bị vàng lá, thối rễ và chậm phát triển.",

        // 4. Đất & chậu
        "Cau Tiểu Trâm thích hợp với loại đất tơi xốp, giàu dinh dưỡng và có khả năng thoát nước tốt.",
        "Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, tro trấu và perlite để tăng độ thông thoáng.",
        "Chậu trồng cần có lỗ thoát nước để hạn chế tình trạng đọng nước gây úng rễ.",

        // 5. Nhiệt độ & độ ẩm
        "Nhiệt độ lý tưởng cho Cau Tiểu Trâm dao động từ 20–30°C.",
        "Cây thích môi trường có độ ẩm trung bình đến cao và không khí thông thoáng.",
        "Nên tránh đặt cây gần máy lạnh hoặc nơi có gió mạnh vì có thể làm khô lá.",

        // 6. Phân bón
        "Cau Tiểu Trâm không cần quá nhiều dinh dưỡng nhưng vẫn nên bổ sung phân định kỳ để cây xanh tốt.",
        "Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1–2 tháng một lần.",
        "Bón quá nhiều phân có thể gây cháy rễ hoặc làm cây phát triển mất cân đối.",

        // 7. Cắt tỉa & vệ sinh
        "Nên loại bỏ lá vàng, lá khô hoặc cành hư hỏng để cây phát triển khỏe mạnh hơn.",
        "Dùng khăn ẩm lau nhẹ lá định kỳ giúp cây sạch bụi và tăng khả năng quang hợp.",
        "Thay đất mới khoảng 1–2 năm một lần giúp bổ sung dinh dưỡng cho cây.",

        // 8. Sâu bệnh
        "Cau Tiểu Trâm có thể gặp tình trạng rệp sáp, nhện đỏ hoặc nấm nếu môi trường quá ẩm và thiếu thông thoáng.",
        "Các dấu hiệu thường gặp gồm lá vàng, đầu lá khô hoặc xuất hiện các đốm nâu trên lá.",
        "Khi phát hiện sâu bệnh cần cách ly cây và sử dụng thuốc sinh học phù hợp để xử lý.",

        // 9. Lưu ý quan trọng
        "Không nên để cây dưới ánh nắng gắt trong thời gian dài.",
        "Tránh tưới quá nhiều nước hoặc để đất luôn sũng nước.",
        "Nên đặt cây ở nơi thông thoáng để hạn chế nấm bệnh.",

        // 10. Vấn đề thường gặp
        "Lá vàng, cháy đầu lá hoặc cây phát triển chậm là những vấn đề phổ biến khi chăm sóc Cau Tiểu Trâm.",
        "Điều chỉnh lượng nước tưới, ánh sáng và độ ẩm sẽ giúp cây phục hồi hiệu quả.",

        // 11. Mẹo chăm sóc nâng cao
        "Xoay chậu định kỳ giúp cây phát triển cân đối và đẹp hơn.",
        "Phun sương nhẹ vào những ngày hanh khô giúp duy trì độ ẩm cho cây.",
        "Bón phân vào đầu mùa xuân giúp kích thích cây ra lá mới.",
        "Có thể kết hợp cây với chậu sứ trắng hoặc chậu xi măng để tăng tính thẩm mỹ.",

        // 12. Không gian sống & phong cách
        "Cau Tiểu Trâm phù hợp với bàn làm việc, phòng ngủ, phòng khách hoặc quán cà phê nhỏ.",
        "Dáng cây mềm mại và xanh mát giúp tạo cảm giác thư giãn và gần gũi thiên nhiên.",
        "Theo phong thủy, cây tượng trưng cho sự bình an, may mắn và nguồn năng lượng tích cực.",
        "Đây là lựa chọn lý tưởng cho phong cách tối giản, hiện đại hoặc decor thiên nhiên.",

        "Admin",
        "2026-05-22"
            )
        );

        blogManager.addBlog(
    new Blog(

        8,
        "Cách chăm sóc cây Phát Tài xanh tốt và mang lại may mắn",
        "Trong nhà",
        "assets/images/phattai.jpg",
        "Cây Phát Tài là loại cây cảnh phong thủy được nhiều người yêu thích nhờ vẻ đẹp xanh mát, dễ chăm sóc và ý nghĩa mang lại tài lộc, may mắn. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và phát triển tốt.",

        // 1. Giới thiệu chung
        "Cây Phát Tài",
        "Dracaena fragrans",
        "Phát Tài là loại cây cảnh thuộc họ măng tây với thân thẳng, lá xanh bóng và khả năng thích nghi tốt trong môi trường trong nhà. Cây thường được dùng để trang trí phòng khách, văn phòng hoặc cửa hàng kinh doanh.",
        "Theo phong thủy, cây Phát Tài tượng trưng cho tài lộc, sự thịnh vượng và may mắn trong công việc cũng như cuộc sống.",
        "Rất dễ",

        // 2. Ánh sáng
        "Phát Tài là cây ưa ánh sáng nhẹ và có thể phát triển tốt trong môi trường bán râm.",
        "Nên đặt cây gần cửa sổ hoặc nơi có ánh sáng tự nhiên dịu nhẹ để lá xanh đẹp hơn.",
        "Ánh nắng gắt trực tiếp có thể làm cháy lá hoặc khiến mép lá bị khô.",

        // 3. Tưới nước
        "Phát Tài có nhu cầu nước ở mức trung bình và không cần tưới quá thường xuyên.",
        "Thông thường chỉ cần tưới khoảng 1–2 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
        "Cần đảm bảo đất có độ thoát nước tốt để hạn chế úng rễ.",
        "Tưới quá nhiều nước có thể khiến cây bị vàng lá và thối rễ.",

        // 4. Đất & chậu
        "Phát Tài thích hợp với loại đất tơi xốp, giàu dinh dưỡng và giữ ẩm vừa phải.",
        "Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, tro trấu và perlite để tăng độ thông thoáng.",
        "Chậu trồng cần có lỗ thoát nước để tránh tình trạng đọng nước.",

        // 5. Nhiệt độ & độ ẩm
        "Nhiệt độ lý tưởng cho cây Phát Tài dao động từ 20–32°C.",
        "Cây phát triển tốt trong môi trường có độ ẩm trung bình và không khí thông thoáng.",
        "Nên tránh đặt cây ở nơi có gió lạnh mạnh hoặc gần máy lạnh trong thời gian dài.",

        // 6. Phân bón
        "Phát Tài không cần quá nhiều phân bón nhưng nên bổ sung dinh dưỡng định kỳ để lá xanh khỏe.",
        "Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1–2 tháng một lần.",
        "Bón quá nhiều phân có thể làm cháy rễ hoặc khiến lá bị vàng.",

        // 7. Cắt tỉa & vệ sinh
        "Nên cắt bỏ lá vàng, lá khô hoặc cành hư để cây tập trung dinh dưỡng phát triển.",
        "Dùng khăn ẩm lau lá định kỳ giúp lá sạch bụi và bóng đẹp hơn.",
        "Thay đất mới khoảng 1–2 năm một lần giúp bổ sung dinh dưỡng và cải thiện môi trường sống cho cây.",

        // 8. Sâu bệnh
        "Phát Tài có thể gặp tình trạng rệp sáp, nhện đỏ hoặc nấm lá nếu môi trường quá ẩm và bí khí.",
        "Các dấu hiệu thường gặp gồm lá vàng, đốm nâu hoặc thân cây mềm yếu.",
        "Khi phát hiện sâu bệnh cần cắt bỏ phần hư hại và sử dụng thuốc sinh học phù hợp để xử lý.",

        // 9. Lưu ý quan trọng
        "Không nên để cây dưới ánh nắng gắt trực tiếp trong thời gian dài.",
        "Tránh tưới nước quá nhiều hoặc để nước đọng trong chậu.",
        "Nên đặt cây ở nơi thông thoáng để hạn chế nấm bệnh và giúp cây phát triển tốt hơn.",

        // 10. Vấn đề thường gặp
        "Lá vàng, mép lá khô hoặc cây chậm phát triển là những vấn đề phổ biến khi chăm sóc Phát Tài.",
        "Điều chỉnh ánh sáng, lượng nước tưới và thay đất mới sẽ giúp cây phục hồi hiệu quả.",

        // 11. Mẹo chăm sóc nâng cao
        "Xoay chậu định kỳ giúp cây phát triển cân đối và đẹp hơn.",
        "Phun sương nhẹ vào những ngày hanh khô giúp duy trì độ ẩm cho lá.",
        "Bón phân vào đầu mùa xuân giúp kích thích cây ra lá mới và phát triển mạnh hơn.",
        "Có thể nhân giống cây bằng phương pháp giâm cành khá đơn giản và hiệu quả.",

        // 12. Không gian sống & phong cách
        "Phát Tài phù hợp với phòng khách, văn phòng, quầy lễ tân hoặc cửa hàng kinh doanh.",
        "Dáng cây thanh lịch và màu xanh tươi giúp không gian trở nên hiện đại và gần gũi thiên nhiên.",
        "Theo phong thủy, cây tượng trưng cho tài lộc, may mắn và sự phát triển bền vững.",
        "Đây là lựa chọn lý tưởng cho phong cách hiện đại, tối giản hoặc decor thiên nhiên.",

        "Admin",
        "2026-05-22"
            )
        );
        blogManager.addBlog(
    new Blog(

        9,
        "Cách chăm sóc cây Ngọc Ngân luôn xanh đẹp và khỏe mạnh",
        "Trong nhà",
        "assets/images/ngocngan.jpg",
        "Cây Ngọc Ngân là loại cây cảnh phong thủy nổi bật với màu lá xanh pha trắng độc đáo và vẻ đẹp sang trọng. Bài viết hướng dẫn cách chăm sóc giúp cây luôn xanh tốt và phát triển bền đẹp trong không gian sống.",

        // 1. Giới thiệu chung
        "Cây Ngọc Ngân",
        "Aglaonema costatum",
        "Ngọc Ngân là loại cây cảnh thuộc họ ráy với đặc điểm nổi bật là lá xanh pha trắng bắt mắt và dáng cây mềm mại. Cây thường được sử dụng để trang trí phòng khách, bàn làm việc hoặc văn phòng.",
        "Theo phong thủy, cây Ngọc Ngân tượng trưng cho tài lộc, may mắn và tình cảm bền vững. Cây còn mang ý nghĩa về sự hài hòa và thu hút năng lượng tích cực.",
        "Rất dễ",

        // 2. Ánh sáng
        "Ngọc Ngân là cây ưa ánh sáng nhẹ và phát triển tốt trong môi trường bán râm.",
        "Nên đặt cây ở nơi có ánh sáng tự nhiên gián tiếp như gần cửa sổ hoặc ban công có rèm che.",
        "Ánh nắng gắt trực tiếp có thể làm cháy lá và khiến màu sắc trên lá bị nhạt đi.",

        // 3. Tưới nước
        "Ngọc Ngân có nhu cầu nước ở mức trung bình và thích đất hơi ẩm.",
        "Nên tưới khoảng 2–3 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
        "Cần đảm bảo đất thoát nước tốt để tránh tình trạng úng rễ.",
        "Tưới quá nhiều nước có thể khiến lá vàng, thân mềm và thối rễ.",

        // 4. Đất & chậu
        "Ngọc Ngân thích hợp với loại đất tơi xốp, giàu dinh dưỡng và có khả năng giữ ẩm vừa phải.",
        "Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, tro trấu và perlite để tăng độ thông thoáng.",
        "Chậu trồng cần có lỗ thoát nước để hạn chế đọng nước gây hại cho bộ rễ.",

        // 5. Nhiệt độ & độ ẩm
        "Nhiệt độ lý tưởng cho Ngọc Ngân dao động từ 20–30°C.",
        "Cây phát triển tốt trong môi trường có độ ẩm trung bình đến cao.",
        "Nên tránh đặt cây gần máy lạnh hoặc nơi có gió mạnh vì dễ làm lá khô và mất màu đẹp tự nhiên.",

        // 6. Phân bón
        "Ngọc Ngân cần được bổ sung dinh dưỡng định kỳ để duy trì màu lá đẹp và tăng trưởng ổn định.",
        "Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1–2 tháng một lần.",
        "Bón quá nhiều phân có thể gây cháy rễ hoặc làm cây phát triển mất cân đối.",

        // 7. Cắt tỉa & vệ sinh
        "Nên cắt bỏ lá vàng, lá úa hoặc phần cây hư hỏng để cây phát triển khỏe mạnh hơn.",
        "Dùng khăn ẩm lau lá định kỳ giúp lá sạch bụi và tăng khả năng quang hợp.",
        "Thay đất mới khoảng 1–2 năm một lần giúp bổ sung dinh dưỡng và cải thiện môi trường phát triển cho cây.",

        // 8. Sâu bệnh
        "Ngọc Ngân có thể gặp tình trạng rệp sáp, nhện đỏ hoặc nấm lá nếu môi trường quá ẩm và thiếu thông thoáng.",
        "Các dấu hiệu thường gặp gồm lá vàng, đốm nâu hoặc thân cây mềm yếu.",
        "Khi phát hiện sâu bệnh cần cách ly cây và sử dụng thuốc sinh học phù hợp để xử lý.",

        // 9. Lưu ý quan trọng
        "Không nên để cây dưới ánh nắng trực tiếp trong thời gian dài.",
        "Tránh tưới quá nhiều nước hoặc để đất luôn sũng nước.",
        "Nên đặt cây ở nơi thông thoáng để hạn chế sâu bệnh và giúp cây phát triển tốt hơn.",

        // 10. Vấn đề thường gặp
        "Lá vàng, mép lá khô hoặc cây phát triển chậm là những vấn đề phổ biến khi chăm sóc Ngọc Ngân.",
        "Điều chỉnh lượng nước tưới, ánh sáng và độ ẩm sẽ giúp cây phục hồi hiệu quả.",

        // 11. Mẹo chăm sóc nâng cao
        "Xoay chậu định kỳ giúp cây phát triển cân đối và đẹp hơn.",
        "Phun sương nhẹ vào những ngày hanh khô giúp duy trì độ ẩm cho lá.",
        "Bón phân vào đầu mùa xuân giúp kích thích cây ra lá mới và giữ màu lá đẹp.",
        "Có thể nhân giống Ngọc Ngân bằng phương pháp tách bụi hoặc giâm thân.",

        // 12. Không gian sống & phong cách
        "Ngọc Ngân phù hợp với bàn làm việc, phòng khách, phòng ngủ hoặc văn phòng hiện đại.",
        "Màu lá xanh trắng nổi bật giúp không gian trở nên sang trọng và tươi mới hơn.",
        "Theo phong thủy, cây tượng trưng cho tài lộc, sự hòa hợp và nguồn năng lượng tích cực.",
        "Đây là lựa chọn lý tưởng cho phong cách hiện đại, tối giản hoặc decor thiên nhiên.",

        "Admin",
        "2026-05-22"
            )
        );
        blogManager.addBlog(
    new Blog(

        10,
        "Cách chăm sóc cây Hạnh Phúc xanh tốt và tràn đầy sức sống",
        "Trong nhà",
        "assets/images/hanhphuc.jpg",
        "Cây Hạnh Phúc là loại cây cảnh nội thất được yêu thích nhờ tán lá xanh mềm mại và ý nghĩa mang lại niềm vui, sự gắn kết trong gia đình. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và phát triển bền đẹp.",

        // 1. Giới thiệu chung
        "Cây Hạnh Phúc",
        "Radermachera sinica",
        "Cây Hạnh Phúc là loại cây thân gỗ nhỏ với nhiều cành lá xanh mướt, tạo cảm giác tươi mát và gần gũi thiên nhiên. Cây thường được sử dụng để trang trí phòng khách, văn phòng hoặc không gian sống hiện đại.",
        "Theo phong thủy, cây Hạnh Phúc tượng trưng cho sự hòa thuận, vui vẻ và hạnh phúc viên mãn trong gia đình. Cây còn mang ý nghĩa về sự bình an và may mắn.",
        "Khá dễ",

        // 2. Ánh sáng
        "Cây Hạnh Phúc phát triển tốt trong môi trường có ánh sáng tự nhiên gián tiếp và ổn định.",
        "Nên đặt cây gần cửa sổ, ban công có rèm che hoặc nơi có ánh sáng dịu nhẹ khoảng 4–6 giờ mỗi ngày.",
        "Ánh nắng gắt trực tiếp có thể làm lá cháy hoặc khô mép lá.",

        // 3. Tưới nước
        "Cây Hạnh Phúc có nhu cầu nước ở mức trung bình và thích đất hơi ẩm.",
        "Nên tưới khoảng 2–3 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
        "Cần đảm bảo đất có khả năng thoát nước tốt để hạn chế úng rễ.",
        "Tưới quá nhiều nước có thể khiến lá vàng, rụng lá và thối rễ.",

        // 4. Đất & chậu
        "Cây Hạnh Phúc thích hợp với loại đất tơi xốp, giàu dinh dưỡng và giữ ẩm vừa phải.",
        "Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, tro trấu và perlite để tăng độ thông thoáng.",
        "Chậu trồng cần có lỗ thoát nước để tránh tình trạng đọng nước gây hại cho bộ rễ.",

        // 5. Nhiệt độ & độ ẩm
        "Nhiệt độ lý tưởng cho cây Hạnh Phúc dao động từ 20–30°C.",
        "Cây phát triển tốt trong môi trường có độ ẩm trung bình đến cao và không khí thông thoáng.",
        "Nên tránh đặt cây gần máy lạnh hoặc nơi có gió nóng mạnh vì dễ làm cây mất nước.",

        // 6. Phân bón
        "Cây Hạnh Phúc cần được bổ sung dinh dưỡng định kỳ để duy trì màu lá xanh đẹp và phát triển ổn định.",
        "Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1–2 tháng một lần.",
        "Bón quá nhiều phân có thể làm cháy rễ hoặc khiến cây phát triển mất cân đối.",

        // 7. Cắt tỉa & vệ sinh
        "Nên cắt bỏ lá vàng, lá già hoặc cành yếu để cây phát triển khỏe mạnh hơn.",
        "Dùng khăn ẩm lau lá định kỳ giúp cây sạch bụi và tăng khả năng quang hợp.",
        "Thay đất mới khoảng 1–2 năm một lần giúp bổ sung dinh dưỡng và cải thiện môi trường sống cho cây.",

        // 8. Sâu bệnh
        "Cây Hạnh Phúc có thể gặp tình trạng rệp sáp, nhện đỏ hoặc nấm lá nếu môi trường quá ẩm và thiếu thông thoáng.",
        "Các dấu hiệu thường gặp gồm lá vàng, lá rụng hoặc xuất hiện đốm nâu trên lá.",
        "Khi phát hiện sâu bệnh cần cách ly cây và sử dụng thuốc sinh học phù hợp để xử lý.",

        // 9. Lưu ý quan trọng
        "Không nên để cây dưới ánh nắng gắt trong thời gian dài.",
        "Tránh tưới quá nhiều nước hoặc để đất luôn sũng nước.",
        "Nên đặt cây ở nơi thông thoáng để hạn chế sâu bệnh và giúp cây phát triển tốt hơn.",

        // 10. Vấn đề thường gặp
        "Lá vàng, rụng lá hoặc cây phát triển chậm là những vấn đề phổ biến khi chăm sóc cây Hạnh Phúc.",
        "Điều chỉnh lượng nước tưới, ánh sáng và độ ẩm sẽ giúp cây phục hồi hiệu quả.",

        // 11. Mẹo chăm sóc nâng cao
        "Xoay chậu định kỳ giúp cây phát triển cân đối và đẹp hơn.",
        "Phun sương nhẹ vào những ngày hanh khô giúp duy trì độ ẩm cho lá.",
        "Bón phân vào đầu mùa xuân giúp kích thích cây ra lá mới và phát triển mạnh hơn.",
        "Có thể nhân giống cây bằng phương pháp giâm cành khá đơn giản.",

        // 12. Không gian sống & phong cách
        "Cây Hạnh Phúc phù hợp với phòng khách, văn phòng, quán cà phê hoặc không gian sống hiện đại.",
        "Tán lá xanh mềm mại giúp không gian trở nên thư giãn, dễ chịu và gần gũi thiên nhiên hơn.",
        "Theo phong thủy, cây tượng trưng cho niềm vui, sự hòa thuận và hạnh phúc bền lâu.",
        "Đây là lựa chọn lý tưởng cho phong cách hiện đại, tối giản hoặc decor thiên nhiên.",

        "Admin",
        "2026-05-22"
            )
        );
        blogManager.addBlog(
    new Blog(

        11,
"Cách chăm sóc cây Trúc Nhật xanh đẹp và thanh tao",
"Trong nhà",
"assets/images/trucnhat.jpg",
"Cây Trúc Nhật là loại cây cảnh được yêu thích nhờ dáng vẻ thanh mảnh, lá xanh bóng và ý nghĩa phong thủy tốt đẹp. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và phát triển xanh tốt quanh năm.",

// 1. Giới thiệu chung
"Cây Trúc Nhật",
"Dracaena surculosa",
"Trúc Nhật là loại cây cảnh thân bụi với những chiếc lá xanh bóng mọc thanh thoát, tạo cảm giác nhẹ nhàng và sang trọng cho không gian sống. Cây thường được sử dụng để trang trí phòng khách, hành lang, văn phòng hoặc sân vườn nhỏ.",
"Theo phong thủy, cây Trúc Nhật tượng trưng cho sự may mắn, bình an và thịnh vượng. Cây còn mang ý nghĩa về sự thanh cao và phát triển bền vững.",
"Rất dễ",

// 2. Ánh sáng
"Trúc Nhật là cây ưa ánh sáng nhẹ và phát triển tốt trong môi trường bán râm.",
"Nên đặt cây ở nơi có ánh sáng tự nhiên gián tiếp như gần cửa sổ hoặc ban công có mái che.",
"Ánh nắng gắt trực tiếp có thể làm lá bị cháy hoặc xuất hiện các đốm vàng trên lá.",

// 3. Tưới nước
"Trúc Nhật có nhu cầu nước ở mức trung bình và thích đất hơi ẩm.",
"Nên tưới khoảng 2–3 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
"Cần đảm bảo đất có khả năng thoát nước tốt để tránh tình trạng úng rễ.",
"Tưới quá nhiều nước có thể khiến lá vàng và bộ rễ bị hư hại.",

// 4. Đất & chậu
"Trúc Nhật thích hợp với loại đất tơi xốp, giàu dinh dưỡng và có khả năng giữ ẩm vừa phải.",
"Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với tro trấu, xơ dừa và perlite để tăng độ thông thoáng.",
"Chậu trồng cần có lỗ thoát nước để hạn chế đọng nước gây úng rễ.",

// 5. Nhiệt độ & độ ẩm
"Nhiệt độ lý tưởng cho Trúc Nhật dao động từ 20–32°C.",
"Cây phát triển tốt trong môi trường có độ ẩm trung bình và không khí thông thoáng.",
"Nên tránh đặt cây ở nơi có gió lạnh mạnh hoặc nhiệt độ quá thấp trong thời gian dài.",

// 6. Phân bón
"Trúc Nhật không cần quá nhiều dinh dưỡng nhưng vẫn nên được bổ sung phân định kỳ để cây xanh tốt.",
"Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1–2 tháng một lần.",
"Bón quá nhiều phân có thể làm cháy rễ hoặc khiến lá bị vàng.",

// 7. Cắt tỉa & vệ sinh
"Nên cắt bỏ lá vàng, lá khô hoặc cành yếu để cây phát triển khỏe mạnh hơn.",
"Dùng khăn ẩm lau lá định kỳ giúp lá sạch bụi và tăng khả năng quang hợp.",
"Thay đất mới khoảng 1–2 năm một lần giúp bổ sung dinh dưỡng và cải thiện môi trường phát triển cho cây.",

// 8. Sâu bệnh
"Trúc Nhật có thể gặp tình trạng rệp sáp, nhện đỏ hoặc nấm lá nếu môi trường quá ẩm và thiếu thông thoáng.",
"Các dấu hiệu thường gặp gồm lá vàng, xuất hiện đốm nâu hoặc cây phát triển chậm.",
"Khi phát hiện sâu bệnh cần cắt bỏ phần hư hại và sử dụng thuốc sinh học phù hợp để xử lý.",

// 9. Lưu ý quan trọng
"Không nên để cây dưới ánh nắng trực tiếp trong thời gian dài.",
"Tránh tưới quá nhiều nước hoặc để đất luôn sũng nước.",
"Nên đặt cây ở nơi thông thoáng để hạn chế sâu bệnh và giúp cây phát triển tốt hơn.",

// 10. Vấn đề thường gặp
"Lá vàng, mép lá khô hoặc cây chậm phát triển là những vấn đề phổ biến khi chăm sóc Trúc Nhật.",
"Điều chỉnh lượng nước tưới, ánh sáng và thay đất mới sẽ giúp cây phục hồi hiệu quả.",

// 11. Mẹo chăm sóc nâng cao
"Xoay chậu định kỳ giúp cây phát triển cân đối và đẹp hơn.",
"Phun sương nhẹ vào những ngày hanh khô giúp duy trì độ ẩm cho lá.",
"Bón phân vào đầu mùa xuân giúp kích thích cây ra lá mới và phát triển mạnh hơn.",
"Có thể nhân giống Trúc Nhật bằng phương pháp tách bụi khá đơn giản và hiệu quả.",

// 12. Không gian sống & phong cách
"Trúc Nhật phù hợp với phòng khách, văn phòng, ban công hoặc không gian sống hiện đại.",
"Dáng cây thanh mảnh và màu xanh dịu nhẹ giúp không gian trở nên thư giãn và gần gũi thiên nhiên hơn.",
"Theo phong thủy, cây tượng trưng cho sự bình an, tài lộc và phát triển bền vững.",
"Đây là lựa chọn lý tưởng cho phong cách tối giản, hiện đại hoặc decor thiên nhiên.",

"Admin",
"2026-05-22"
    )
);

blogManager.addBlog(
    new Blog(

        12,
"Cách chăm sóc cây Thiết Mộc Lan xanh tốt và mang lại tài lộc",
"Trong nhà",
"assets/images/thietmoclan.jpg",
"Cây Thiết Mộc Lan là loại cây cảnh phong thủy được yêu thích nhờ dáng thân mạnh mẽ, lá xanh bóng và ý nghĩa mang lại may mắn, tài lộc. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và phát triển bền đẹp.",

// 1. Giới thiệu chung
"Cây Thiết Mộc Lan",
"Dracaena fragrans",
"Thiết Mộc Lan là loại cây thân gỗ có lá dài xanh bóng với sọc vàng nổi bật ở giữa lá. Cây thường được sử dụng để trang trí phòng khách, văn phòng hoặc sảnh lớn nhờ vẻ đẹp sang trọng và dễ chăm sóc.",
"Theo phong thủy, Thiết Mộc Lan tượng trưng cho tài lộc, may mắn và sự phát triển bền vững. Khi cây ra hoa còn được xem là dấu hiệu của điều tốt lành.",
"Rất dễ",

// 2. Ánh sáng
"Thiết Mộc Lan phát triển tốt trong môi trường có ánh sáng tự nhiên gián tiếp hoặc bán râm.",
"Nên đặt cây gần cửa sổ, ban công hoặc nơi có ánh sáng dịu nhẹ khoảng vài giờ mỗi ngày.",
"Ánh nắng gắt trực tiếp có thể làm cháy lá và khiến mép lá bị khô.",

// 3. Tưới nước
"Thiết Mộc Lan có nhu cầu nước ở mức trung bình và không thích đất quá ẩm.",
"Nên tưới khoảng 1–2 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
"Cần đảm bảo đất thoát nước tốt để tránh tình trạng úng rễ.",
"Tưới quá nhiều nước có thể khiến cây bị vàng lá, mềm thân và thối rễ.",

// 4. Đất & chậu
"Thiết Mộc Lan thích hợp với loại đất tơi xốp, giàu dinh dưỡng và có khả năng thoát nước tốt.",
"Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, tro trấu và perlite để tăng độ thông thoáng.",
"Chậu trồng cần có lỗ thoát nước để hạn chế đọng nước gây hại cho bộ rễ.",

// 5. Nhiệt độ & độ ẩm
"Nhiệt độ lý tưởng cho Thiết Mộc Lan dao động từ 20–32°C.",
"Cây phát triển tốt trong môi trường có độ ẩm trung bình và không khí thông thoáng.",
"Nên tránh đặt cây ở nơi có gió lạnh mạnh hoặc gần máy lạnh trong thời gian dài.",

// 6. Phân bón
"Thiết Mộc Lan cần được bổ sung dinh dưỡng định kỳ để duy trì màu lá đẹp và tăng trưởng ổn định.",
"Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1–2 tháng một lần.",
"Bón quá nhiều phân có thể gây cháy rễ hoặc làm lá bị vàng.",

// 7. Cắt tỉa & vệ sinh
"Nên cắt bỏ lá vàng, lá khô hoặc phần thân hư hỏng để cây phát triển khỏe mạnh hơn.",
"Dùng khăn ẩm lau lá định kỳ giúp lá sạch bụi và bóng đẹp hơn.",
"Thay đất mới khoảng 1–2 năm một lần giúp cải thiện dinh dưỡng và môi trường phát triển cho cây.",

// 8. Sâu bệnh
"Thiết Mộc Lan có thể gặp tình trạng rệp sáp, nhện đỏ hoặc nấm lá nếu môi trường quá ẩm và thiếu thông thoáng.",
"Các dấu hiệu thường gặp gồm lá vàng, xuất hiện đốm nâu hoặc thân cây mềm yếu.",
"Khi phát hiện sâu bệnh cần cách ly cây và sử dụng thuốc sinh học phù hợp để xử lý.",

// 9. Lưu ý quan trọng
"Không nên để cây dưới ánh nắng gắt trực tiếp trong thời gian dài.",
"Tránh tưới quá nhiều nước hoặc để đất luôn sũng nước.",
"Nên đặt cây ở nơi thông thoáng để hạn chế nấm bệnh và giúp cây phát triển tốt hơn.",

// 10. Vấn đề thường gặp
"Lá vàng, mép lá khô hoặc cây phát triển chậm là những vấn đề phổ biến khi chăm sóc Thiết Mộc Lan.",
"Điều chỉnh lượng nước tưới, ánh sáng và thay đất mới sẽ giúp cây phục hồi hiệu quả.",

// 11. Mẹo chăm sóc nâng cao
"Xoay chậu định kỳ giúp cây phát triển cân đối và đẹp hơn.",
"Phun sương nhẹ vào những ngày hanh khô giúp duy trì độ ẩm cho lá.",
"Bón phân vào đầu mùa xuân giúp kích thích cây ra lá mới và phát triển mạnh hơn.",
"Có thể nhân giống Thiết Mộc Lan bằng phương pháp giâm cành hoặc cắt thân khá đơn giản.",

// 12. Không gian sống & phong cách
"Thiết Mộc Lan phù hợp với phòng khách, văn phòng, sảnh lớn hoặc cửa hàng kinh doanh.",
"Dáng cây mạnh mẽ cùng màu lá xanh sọc vàng giúp không gian trở nên sang trọng và hiện đại hơn.",
"Theo phong thủy, cây tượng trưng cho tài lộc, may mắn và sự phát triển bền vững.",
"Đây là lựa chọn lý tưởng cho phong cách hiện đại, tối giản hoặc decor thiên nhiên.",

"Admin",
"2026-05-22"
    )
);
blogManager.addBlog(
    new Blog(

        13,
"Cách chăm sóc cây Lan Ý xanh tốt và ra hoa đẹp",
"Trong nhà",
"assets/images/lan_y.jpg",
"Cây Lan Ý là loại cây cảnh nội thất được yêu thích nhờ vẻ đẹp thanh lịch, hoa trắng tinh tế và khả năng thanh lọc không khí hiệu quả. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và ra hoa bền đẹp.",

// 1. Giới thiệu chung
"Cây Lan Ý",
"Spathiphyllum wallisii",
"Lan Ý là loại cây cảnh thuộc họ ráy với lá xanh bóng cùng hoa trắng nổi bật mang vẻ đẹp nhẹ nhàng và sang trọng. Cây thường được sử dụng để trang trí phòng khách, văn phòng hoặc phòng ngủ.",
"Theo phong thủy, Lan Ý tượng trưng cho sự bình an, hài hòa và may mắn. Cây còn mang ý nghĩa giúp cân bằng nguồn năng lượng tích cực trong không gian sống.",
"Rất dễ",

// 2. Ánh sáng
"Lan Ý phát triển tốt trong môi trường có ánh sáng gián tiếp và bóng râm nhẹ.",
"Nên đặt cây gần cửa sổ hoặc nơi có ánh sáng tự nhiên dịu nhẹ để cây giữ màu lá đẹp và dễ ra hoa.",
"Ánh nắng gắt trực tiếp có thể làm cháy lá hoặc khiến hoa nhanh tàn.",

// 3. Tưới nước
"Lan Ý có nhu cầu nước ở mức trung bình và thích đất luôn hơi ẩm.",
"Nên tưới khoảng 2–3 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
"Cần đảm bảo đất có khả năng thoát nước tốt để tránh úng rễ.",
"Tưới quá nhiều nước có thể khiến lá vàng và bộ rễ bị thối.",

// 4. Đất & chậu
"Lan Ý thích hợp với loại đất tơi xốp, giàu dinh dưỡng và giữ ẩm vừa phải.",
"Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, tro trấu và perlite để tăng độ thông thoáng.",
"Chậu trồng cần có lỗ thoát nước để hạn chế tình trạng đọng nước gây hại cho cây.",

// 5. Nhiệt độ & độ ẩm
"Nhiệt độ lý tưởng cho Lan Ý dao động từ 18–30°C.",
"Cây phát triển tốt trong môi trường có độ ẩm trung bình đến cao.",
"Nên tránh đặt cây gần máy lạnh hoặc nơi có gió nóng mạnh vì dễ làm lá bị khô.",

// 6. Phân bón
"Lan Ý cần được bổ sung dinh dưỡng định kỳ để duy trì màu lá đẹp và hỗ trợ ra hoa.",
"Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1–2 tháng một lần.",
"Bón quá nhiều phân có thể làm cháy rễ hoặc ảnh hưởng đến khả năng ra hoa.",

// 7. Cắt tỉa & vệ sinh
"Nên cắt bỏ lá vàng, hoa tàn hoặc phần cây hư hỏng để cây phát triển khỏe mạnh hơn.",
"Dùng khăn ẩm lau lá định kỳ giúp lá sạch bụi và tăng khả năng quang hợp.",
"Thay đất mới khoảng 1–2 năm một lần giúp bổ sung dinh dưỡng và cải thiện môi trường phát triển cho cây.",

// 8. Sâu bệnh
"Lan Ý có thể gặp tình trạng rệp sáp, nhện đỏ hoặc nấm lá nếu môi trường quá ẩm và thiếu thông thoáng.",
"Các dấu hiệu thường gặp gồm lá vàng, đốm nâu hoặc cây bị héo rũ.",
"Khi phát hiện sâu bệnh cần cách ly cây và sử dụng thuốc sinh học phù hợp để xử lý.",

// 9. Lưu ý quan trọng
"Không nên để cây dưới ánh nắng trực tiếp trong thời gian dài.",
"Tránh để đất quá khô hoặc quá ẩm trong thời gian dài.",
"Nên đặt cây ở nơi thông thoáng để hạn chế nấm bệnh và giúp cây phát triển tốt hơn.",

// 10. Vấn đề thường gặp
"Lá vàng, cháy mép lá hoặc cây khó ra hoa là những vấn đề phổ biến khi chăm sóc Lan Ý.",
"Điều chỉnh lượng nước tưới, ánh sáng và bổ sung dinh dưỡng hợp lý sẽ giúp cây phục hồi hiệu quả.",

// 11. Mẹo chăm sóc nâng cao
"Phun sương nhẹ vào những ngày hanh khô giúp duy trì độ ẩm cho cây.",
"Xoay chậu định kỳ giúp cây phát triển cân đối và đẹp hơn.",
"Bón phân vào đầu mùa xuân giúp kích thích cây ra hoa nhiều hơn.",
"Có thể nhân giống Lan Ý bằng phương pháp tách bụi khá đơn giản và hiệu quả.",

// 12. Không gian sống & phong cách
"Lan Ý phù hợp với phòng khách, phòng ngủ, văn phòng hoặc quán cà phê hiện đại.",
"Hoa trắng cùng lá xanh bóng giúp không gian trở nên thanh lịch, nhẹ nhàng và thư giãn hơn.",
"Theo phong thủy, cây tượng trưng cho sự bình an, hòa hợp và nguồn năng lượng tích cực.",
"Đây là lựa chọn lý tưởng cho phong cách hiện đại, tối giản hoặc decor thiên nhiên.",

"Admin",
"2026-05-22"
    )
);
blogManager.addBlog(
    new Blog(

        14,
"Cách chăm sóc cây Dương Xỉ xanh mướt và phát triển khỏe mạnh",
"Trong nhà",
"assets/images/duongxi.jpg",
"Cây Dương Xỉ là loại cây cảnh được yêu thích nhờ tán lá mềm mại, khả năng thanh lọc không khí và vẻ đẹp gần gũi thiên nhiên. Bài viết hướng dẫn cách chăm sóc giúp cây luôn xanh tốt và phát triển bền đẹp.",

// 1. Giới thiệu chung
"Cây Dương Xỉ",
"Nephrolepis exaltata",
"Dương Xỉ là loại cây thân thảo với những tán lá xanh mềm mại, mọc xòe tự nhiên tạo cảm giác mát mẻ và thư giãn cho không gian sống. Cây thường được sử dụng để trang trí bàn làm việc, ban công, phòng khách hoặc quán cà phê.",
"Theo phong thủy, Dương Xỉ tượng trưng cho sự sinh sôi, phát triển và nguồn năng lượng tích cực. Cây còn mang ý nghĩa giúp cân bằng và thanh lọc không gian sống.",
"Khá dễ",

// 2. Ánh sáng
"Dương Xỉ phát triển tốt trong môi trường có ánh sáng gián tiếp và bóng râm nhẹ.",
"Nên đặt cây gần cửa sổ, ban công có mái che hoặc nơi có ánh sáng tự nhiên dịu nhẹ.",
"Ánh nắng gắt trực tiếp có thể làm lá cháy, khô và mất màu xanh tự nhiên.",

// 3. Tưới nước
"Dương Xỉ có nhu cầu nước khá cao và thích môi trường đất luôn hơi ẩm.",
"Nên tưới khoảng 3–4 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
"Không nên để đất khô hoàn toàn trong thời gian dài vì cây dễ bị héo.",
"Tưới quá nhiều nước hoặc để đất úng lâu ngày có thể gây thối rễ.",

// 4. Đất & chậu
"Dương Xỉ thích hợp với loại đất tơi xốp, giàu hữu cơ và giữ ẩm tốt.",
"Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, rêu peat moss và perlite để tăng độ thông thoáng.",
"Chậu trồng cần có lỗ thoát nước để hạn chế đọng nước gây hại cho bộ rễ.",

// 5. Nhiệt độ & độ ẩm
"Nhiệt độ lý tưởng cho Dương Xỉ dao động từ 18–28°C.",
"Cây phát triển tốt trong môi trường có độ ẩm cao và không khí thông thoáng.",
"Nên phun sương nhẹ thường xuyên để giữ độ ẩm cho lá, đặc biệt trong thời tiết hanh khô.",

// 6. Phân bón
"Dương Xỉ không cần quá nhiều phân bón nhưng vẫn nên được bổ sung dinh dưỡng định kỳ để giữ lá xanh đẹp.",
"Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1–2 tháng một lần.",
"Bón quá nhiều phân có thể làm cháy rễ hoặc khiến lá bị vàng.",

// 7. Cắt tỉa & vệ sinh
"Nên cắt bỏ lá già, lá vàng hoặc lá khô để cây phát triển khỏe mạnh hơn.",
"Dùng bình xịt hoặc khăn mềm làm sạch lá định kỳ giúp cây quang hợp tốt hơn.",
"Thay đất mới khoảng 1–2 năm một lần giúp cải thiện dinh dưỡng và môi trường phát triển cho cây.",

// 8. Sâu bệnh
"Dương Xỉ có thể gặp tình trạng nấm, rệp sáp hoặc nhện đỏ nếu môi trường quá bí và thiếu thông thoáng.",
"Các dấu hiệu thường gặp gồm lá vàng, lá khô hoặc xuất hiện đốm nâu trên lá.",
"Khi phát hiện sâu bệnh cần giảm độ ẩm quá mức và sử dụng thuốc sinh học phù hợp để xử lý.",

// 9. Lưu ý quan trọng
"Không nên để cây dưới ánh nắng trực tiếp trong thời gian dài.",
"Tránh để đất quá khô vì cây rất dễ mất nước và héo lá.",
"Nên duy trì độ ẩm ổn định để cây phát triển xanh tốt và đẹp tự nhiên.",

// 10. Vấn đề thường gặp
"Lá vàng, cháy mép lá hoặc cây phát triển chậm là những vấn đề phổ biến khi chăm sóc Dương Xỉ.",
"Điều chỉnh lượng nước tưới, độ ẩm và ánh sáng phù hợp sẽ giúp cây phục hồi hiệu quả.",

// 11. Mẹo chăm sóc nâng cao
"Trồng cây trong chậu treo giúp tán lá phát triển tự nhiên và đẹp mắt hơn.",
"Phun sương nhẹ vào buổi sáng giúp lá giữ độ tươi và hạn chế khô đầu lá.",
"Bón phân vào đầu mùa xuân giúp cây ra nhiều lá mới và phát triển mạnh hơn.",
"Có thể nhân giống Dương Xỉ bằng phương pháp tách bụi khá đơn giản và hiệu quả.",

// 12. Không gian sống & phong cách
"Dương Xỉ phù hợp với ban công, phòng khách, quán cà phê hoặc không gian decor thiên nhiên.",
"Tán lá xanh mềm mại giúp không gian trở nên thư giãn, mát mẻ và gần gũi hơn.",
"Theo phong thủy, cây tượng trưng cho sự sinh sôi, bình an và nguồn năng lượng tích cực.",
"Đây là lựa chọn lý tưởng cho phong cách tropical, vintage hoặc decor thiên nhiên.",

"Admin",
"2026-05-22"
    )
);
blogManager.addBlog(
    new Blog(

        15,
"Cách chăm sóc cây Ngọc Bích xanh tốt và thu hút tài lộc",
"Trong nhà",
"assets/images/ngocbich.jpg",
"Cây Ngọc Bích là loại cây mọng nước được yêu thích nhờ những chiếc lá xanh mập mạp, dễ chăm sóc và mang ý nghĩa phong thủy may mắn. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và phát triển bền đẹp.",

// 1. Giới thiệu chung
"Cây Ngọc Bích",
"Crassula ovata",
"Ngọc Bích là loại cây mọng nước có thân gỗ nhỏ và lá dày màu xanh ngọc đặc trưng. Cây có tuổi thọ cao, sinh trưởng chậm nhưng bền bỉ, thường được dùng để trang trí bàn làm việc, phòng khách hoặc quầy thu ngân.",
"Theo phong thủy, Ngọc Bích tượng trưng cho tài lộc, thịnh vượng và sự phát triển bền vững. Hình dáng lá tròn giống đồng xu mang ý nghĩa thu hút tiền tài và may mắn.",
"Rất dễ",

// 2. Ánh sáng
"Ngọc Bích là cây ưa sáng và cần nhiều ánh sáng để phát triển khỏe mạnh.",
"Nên đặt cây gần cửa sổ, ban công hoặc nơi nhận được ánh sáng tự nhiên từ 4–6 giờ mỗi ngày.",
"Thiếu ánh sáng có thể khiến cây vươn dài, lá thưa và mất dáng đẹp tự nhiên.",

// 3. Tưới nước
"Ngọc Bích có nhu cầu nước thấp nhờ khả năng tích trữ nước trong lá và thân.",
"Nên tưới khoảng 1 lần mỗi tuần hoặc khi đất đã khô hoàn toàn.",
"Cần đảm bảo đất khô giữa các lần tưới để bộ rễ phát triển khỏe mạnh.",
"Tưới quá nhiều nước là nguyên nhân phổ biến gây vàng lá, rụng lá và thối rễ.",

// 4. Đất & chậu
"Ngọc Bích cần loại đất tơi xốp và có khả năng thoát nước tốt.",
"Có thể sử dụng hỗn hợp đất chuyên dụng cho sen đá, xương rồng kết hợp với cát hoặc perlite.",
"Chậu trồng cần có lỗ thoát nước và nên ưu tiên chậu đất nung để hạn chế đọng ẩm.",

// 5. Nhiệt độ & độ ẩm
"Nhiệt độ lý tưởng cho Ngọc Bích dao động từ 18–30°C.",
"Cây phát triển tốt trong môi trường khô ráo và độ ẩm thấp đến trung bình.",
"Không cần phun sương thường xuyên vì độ ẩm quá cao có thể làm tăng nguy cơ nấm bệnh.",

// 6. Phân bón
"Ngọc Bích không cần quá nhiều dinh dưỡng nhưng vẫn nên được bổ sung phân định kỳ để phát triển tốt hơn.",
"Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 2–3 tháng một lần trong mùa sinh trưởng.",
"Bón quá nhiều phân có thể làm cây phát triển yếu hoặc mất dáng tự nhiên.",

// 7. Cắt tỉa & vệ sinh
"Nên cắt bỏ lá vàng, cành khô hoặc phần cây hư hỏng để duy trì vẻ đẹp và sức khỏe của cây.",
"Dùng khăn khô lau lá định kỳ giúp cây sạch bụi và tăng khả năng quang hợp.",
"Thay đất mới khoảng 2–3 năm một lần giúp cải thiện dinh dưỡng và môi trường sống cho cây.",

// 8. Sâu bệnh
"Ngọc Bích có thể gặp tình trạng rệp sáp hoặc nấm nếu môi trường quá ẩm và thiếu thông thoáng.",
"Các dấu hiệu thường gặp gồm lá mềm, xuất hiện đốm đen hoặc lớp bột trắng trên lá.",
"Khi phát hiện sâu bệnh cần cách ly cây và sử dụng thuốc sinh học phù hợp để xử lý.",

// 9. Lưu ý quan trọng
"Không nên tưới nước theo lịch cố định mà cần kiểm tra độ khô của đất.",
"Tránh đặt cây ở nơi thiếu ánh sáng trong thời gian dài.",
"Không để nước đọng trong chậu hoặc đĩa lót vì dễ gây thối rễ.",

// 10. Vấn đề thường gặp
"Lá vàng, lá rụng hoặc cây phát triển dài bất thường là những vấn đề phổ biến khi chăm sóc Ngọc Bích.",
"Điều chỉnh lượng nước tưới, tăng cường ánh sáng và thay đất mới nếu cần sẽ giúp cây phục hồi hiệu quả.",

// 11. Mẹo chăm sóc nâng cao
"Xoay chậu định kỳ giúp cây phát triển cân đối và nhận ánh sáng đồng đều từ các phía.",
"Sử dụng chậu đất nung giúp tăng khả năng thoát hơi nước và hạn chế úng rễ.",
"Bón phân vào đầu mùa xuân giúp kích thích cây phát triển mạnh và giữ màu lá đẹp.",
"Ngọc Bích có thể nhân giống rất dễ dàng bằng lá hoặc cành giâm.",

// 12. Không gian sống & phong cách
"Ngọc Bích phù hợp với bàn làm việc, quầy thu ngân, kệ sách hoặc không gian nhỏ trong nhà.",
"Hình dáng nhỏ gọn cùng màu xanh ngọc đặc trưng giúp không gian trở nên tươi mới và sang trọng hơn.",
"Theo phong thủy, cây tượng trưng cho tài lộc, sự thịnh vượng và nguồn năng lượng tích cực.",
"Đây là lựa chọn lý tưởng cho phong cách tối giản, hiện đại hoặc decor thiên nhiên.",

"Admin",
"2026-05-22"
    )
);
blogManager.addBlog(
    new Blog(

        16,
"Cách chăm sóc cây Hồng Môn xanh tốt và ra hoa rực rỡ",
"Trong nhà",
"assets/images/hongmon.jpg",
"Cây Hồng Môn là loại cây cảnh được yêu thích nhờ hoa màu đỏ nổi bật, lá xanh bóng và ý nghĩa phong thủy may mắn. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và ra hoa đẹp quanh năm.",

// 1. Giới thiệu chung
"Cây Hồng Môn",
"Anthurium andraeanum",
"Hồng Môn là loại cây cảnh thuộc họ ráy với đặc điểm nổi bật là lá xanh bóng hình tim cùng hoa màu đỏ, hồng hoặc trắng rực rỡ. Cây thường được dùng để trang trí phòng khách, bàn làm việc hoặc quầy lễ tân.",
"Theo phong thủy, Hồng Môn tượng trưng cho sự may mắn, tài lộc và tình cảm bền chặt. Màu đỏ của hoa còn mang ý nghĩa về nhiệt huyết và năng lượng tích cực.",
"Khá dễ",

// 2. Ánh sáng
"Hồng Môn phát triển tốt trong môi trường có ánh sáng gián tiếp và dịu nhẹ.",
"Nên đặt cây gần cửa sổ hoặc nơi có ánh sáng tự nhiên khoảng 4–5 giờ mỗi ngày.",
"Ánh nắng gắt trực tiếp có thể làm cháy lá và khiến hoa nhanh tàn.",

// 3. Tưới nước
"Hồng Môn có nhu cầu nước ở mức trung bình và thích đất hơi ẩm.",
"Nên tưới khoảng 2–3 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
"Cần đảm bảo đất thoát nước tốt để tránh tình trạng úng rễ.",
"Tưới quá nhiều nước có thể khiến cây bị vàng lá, mềm thân và thối rễ.",

// 4. Đất & chậu
"Hồng Môn thích hợp với loại đất tơi xốp, giàu hữu cơ và giữ ẩm vừa phải.",
"Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, vỏ thông và perlite để tăng độ thông thoáng.",
"Chậu trồng cần có lỗ thoát nước để hạn chế đọng nước gây hại cho bộ rễ.",

// 5. Nhiệt độ & độ ẩm
"Nhiệt độ lý tưởng cho Hồng Môn dao động từ 20–30°C.",
"Cây phát triển tốt trong môi trường có độ ẩm trung bình đến cao.",
"Nên phun sương nhẹ định kỳ để giữ độ ẩm cho lá và hỗ trợ cây ra hoa đẹp hơn.",

// 6. Phân bón
"Hồng Môn cần được bổ sung dinh dưỡng định kỳ để duy trì màu lá đẹp và kích thích ra hoa.",
"Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1 tháng một lần trong mùa sinh trưởng.",
"Bón quá nhiều phân có thể làm cháy rễ hoặc giảm khả năng ra hoa.",

// 7. Cắt tỉa & vệ sinh
"Nên cắt bỏ lá vàng, hoa tàn hoặc phần cây hư hỏng để cây phát triển khỏe mạnh hơn.",
"Dùng khăn ẩm lau lá định kỳ giúp lá sạch bụi và tăng khả năng quang hợp.",
"Thay đất mới khoảng 1–2 năm một lần giúp cải thiện dinh dưỡng và môi trường sống cho cây.",

// 8. Sâu bệnh
"Hồng Môn có thể gặp tình trạng rệp sáp, nấm lá hoặc thối rễ nếu môi trường quá ẩm và thiếu thông thoáng.",
"Các dấu hiệu thường gặp gồm lá vàng, xuất hiện đốm nâu hoặc hoa nhanh tàn.",
"Khi phát hiện sâu bệnh cần cắt bỏ phần hư hại và sử dụng thuốc sinh học phù hợp để xử lý.",

// 9. Lưu ý quan trọng
"Không nên để cây dưới ánh nắng trực tiếp trong thời gian dài.",
"Tránh để đất quá khô hoặc quá úng vì đều ảnh hưởng đến sự phát triển của cây.",
"Nên đặt cây ở nơi thông thoáng để giúp cây khỏe mạnh và ra hoa ổn định.",

// 10. Vấn đề thường gặp
"Lá vàng, cây chậm ra hoa hoặc hoa nhanh tàn là những vấn đề phổ biến khi chăm sóc Hồng Môn.",
"Điều chỉnh ánh sáng, lượng nước tưới và bổ sung dinh dưỡng hợp lý sẽ giúp cây phục hồi hiệu quả.",

// 11. Mẹo chăm sóc nâng cao
"Phun sương nhẹ vào buổi sáng giúp duy trì độ ẩm và giữ lá xanh đẹp hơn.",
"Xoay chậu định kỳ giúp cây phát triển cân đối và nhận ánh sáng đồng đều.",
"Bón phân vào đầu mùa xuân giúp kích thích cây ra nhiều hoa hơn.",
"Có thể nhân giống Hồng Môn bằng phương pháp tách bụi khá đơn giản và hiệu quả.",

// 12. Không gian sống & phong cách
"Hồng Môn phù hợp với bàn làm việc, phòng khách, quầy lễ tân hoặc quán cà phê hiện đại.",
"Hoa đỏ nổi bật cùng lá xanh bóng giúp không gian trở nên sang trọng và có điểm nhấn hơn.",
"Theo phong thủy, cây tượng trưng cho tài lộc, tình yêu và nguồn năng lượng tích cực.",
"Đây là lựa chọn lý tưởng cho phong cách hiện đại, tropical hoặc decor thiên nhiên.",

"Admin",
"2026-05-22"
    )
);
blogManager.addBlog(
    new Blog(

        17,
"Cách chăm sóc cây Lan Chi xanh tốt và phát triển khỏe mạnh",
"Trong nhà",
"assets/images/lanchi.jpg",
"Cây Lan Chi là loại cây cảnh nội thất được yêu thích nhờ những chiếc lá dài xanh trắng đẹp mắt, khả năng thanh lọc không khí và dễ chăm sóc. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và xanh tốt quanh năm.",

// 1. Giới thiệu chung
"Cây Lan Chi",
"Chlorophytum comosum",
"Lan Chi là loại cây thân thảo có lá dài mềm mại với các sọc xanh trắng đặc trưng. Cây thường mọc thành bụi nhỏ gọn và được sử dụng để trang trí bàn làm việc, kệ sách, ban công hoặc chậu treo.",
"Theo phong thủy, Lan Chi tượng trưng cho sự sinh sôi, may mắn và nguồn năng lượng tích cực. Cây còn được biết đến với khả năng hấp thụ các chất độc hại trong không khí.",
"Rất dễ",

// 2. Ánh sáng
"Lan Chi phát triển tốt trong môi trường có ánh sáng gián tiếp và bán râm.",
"Nên đặt cây gần cửa sổ hoặc nơi có ánh sáng tự nhiên dịu nhẹ khoảng vài giờ mỗi ngày.",
"Ánh nắng gắt trực tiếp có thể làm cháy lá hoặc khiến đầu lá bị khô.",

// 3. Tưới nước
"Lan Chi có nhu cầu nước ở mức trung bình và thích đất hơi ẩm.",
"Nên tưới khoảng 2–3 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
"Không nên để đất khô hoàn toàn trong thời gian dài vì cây có thể bị héo.",
"Tưới quá nhiều nước có thể gây úng rễ và làm lá chuyển vàng.",

// 4. Đất & chậu
"Lan Chi thích hợp với loại đất tơi xốp, giàu dinh dưỡng và có khả năng thoát nước tốt.",
"Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, tro trấu và perlite để tăng độ thông thoáng.",
"Chậu trồng cần có lỗ thoát nước để hạn chế tình trạng đọng nước gây hại cho bộ rễ.",

// 5. Nhiệt độ & độ ẩm
"Nhiệt độ lý tưởng cho Lan Chi dao động từ 18–30°C.",
"Cây phát triển tốt trong môi trường có độ ẩm trung bình đến cao.",
"Nên tránh đặt cây gần nguồn nhiệt lớn hoặc nơi có gió lạnh mạnh trong thời gian dài.",

// 6. Phân bón
"Lan Chi không cần quá nhiều dinh dưỡng nhưng vẫn nên được bổ sung phân định kỳ để cây xanh tốt.",
"Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1–2 tháng một lần.",
"Bón quá nhiều phân có thể làm cháy rễ hoặc khiến đầu lá bị khô.",

// 7. Cắt tỉa & vệ sinh
"Nên cắt bỏ lá vàng, lá khô hoặc phần cây hư hỏng để cây phát triển khỏe mạnh hơn.",
"Dùng khăn ẩm hoặc bình xịt để làm sạch bụi trên lá định kỳ.",
"Thay đất mới khoảng 1–2 năm một lần giúp cải thiện dinh dưỡng và môi trường sống cho cây.",

// 8. Sâu bệnh
"Lan Chi có thể gặp tình trạng rệp sáp, nhện đỏ hoặc nấm lá nếu môi trường quá ẩm và thiếu thông thoáng.",
"Các dấu hiệu thường gặp gồm lá vàng, đầu lá khô hoặc xuất hiện đốm nâu trên lá.",
"Khi phát hiện sâu bệnh cần cắt bỏ phần bị ảnh hưởng và sử dụng thuốc sinh học phù hợp để xử lý.",

// 9. Lưu ý quan trọng
"Không nên để cây dưới ánh nắng trực tiếp trong thời gian dài.",
"Tránh để đất quá khô hoặc quá úng vì đều ảnh hưởng đến sự phát triển của cây.",
"Nên đặt cây ở nơi thông thoáng để hạn chế sâu bệnh và giúp cây phát triển tốt hơn.",

// 10. Vấn đề thường gặp
"Đầu lá khô, lá vàng hoặc cây phát triển chậm là những vấn đề phổ biến khi chăm sóc Lan Chi.",
"Điều chỉnh lượng nước tưới, ánh sáng và độ ẩm phù hợp sẽ giúp cây phục hồi hiệu quả.",

// 11. Mẹo chăm sóc nâng cao
"Xoay chậu định kỳ giúp cây phát triển cân đối và đẹp hơn.",
"Phun sương nhẹ vào những ngày hanh khô giúp duy trì độ ẩm cho lá.",
"Bón phân vào đầu mùa xuân giúp kích thích cây ra nhiều lá mới và phát triển mạnh hơn.",
"Lan Chi có thể nhân giống rất dễ dàng bằng cách tách cây con mọc trên các nhánh dài.",

// 12. Không gian sống & phong cách
"Lan Chi phù hợp với bàn làm việc, phòng khách, ban công, chậu treo hoặc văn phòng.",
"Lá xanh trắng mềm mại giúp không gian trở nên tươi mát, nhẹ nhàng và gần gũi thiên nhiên hơn.",
"Theo phong thủy, cây tượng trưng cho sự sinh sôi, may mắn và nguồn năng lượng tích cực.",
"Đây là lựa chọn lý tưởng cho phong cách tối giản, hiện đại hoặc decor thiên nhiên.",

"Admin",
"2026-05-22"
    )
);
blogManager.addBlog(
    new Blog(

        18,
"Cách chăm sóc cây Xương Rồng khỏe mạnh quanh năm",
"Trong nhà",
"assets/images/xuongrong.jpg",
"Cây Xương Rồng là biểu tượng của sức sống mãnh liệt và khả năng thích nghi tuyệt vời trong môi trường khắc nghiệt. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và phát triển tốt.",

// 1. Giới thiệu chung
"Cây Xương Rồng",
"Cactaceae",
"Xương Rồng là nhóm thực vật mọng nước nổi tiếng với khả năng lưu trữ nước trong thân để thích nghi với điều kiện khô hạn. Hình dáng đa dạng từ hình cầu nhỏ gọn đến dạng cột cao độc đáo giúp cây trở thành lựa chọn yêu thích của nhiều người yêu cây cảnh.",
"Theo phong thủy, Xương Rồng tượng trưng cho sức mạnh, ý chí kiên cường và khả năng vượt qua khó khăn. Nhiều người trồng cây như một biểu tượng của sự bền bỉ và nghị lực trong cuộc sống.",
"Rất dễ",

// 2. Ánh sáng
"Xương Rồng là loài cây ưa sáng mạnh và cần nhiều ánh nắng để phát triển khỏe mạnh. Ánh sáng đầy đủ giúp cây giữ được hình dáng đẹp và màu sắc tự nhiên.",
"Nên đặt cây ở ban công, cửa sổ nhiều nắng hoặc những nơi nhận được ánh sáng trực tiếp từ 4–6 giờ mỗi ngày.",
"Thiếu ánh sáng có thể khiến thân cây vươn dài bất thường, mất dáng và giảm sức sống.",

// 3. Tưới nước
"Xương Rồng có nhu cầu nước rất thấp nhờ khả năng tích trữ nước trong thân. Thông thường chỉ cần tưới khoảng 1 lần mỗi tuần hoặc ít hơn tùy điều kiện thời tiết.",
"Trước khi tưới cần đảm bảo đất đã khô hoàn toàn. Có thể kiểm tra bằng cách dùng tay hoặc que gỗ cắm xuống đất.",
"Việc để đất khô giữa các lần tưới giúp bộ rễ khỏe mạnh và hạn chế bệnh hại.",
"Tưới quá nhiều nước là nguyên nhân phổ biến gây thối rễ, mềm thân và chết cây.",

// 4. Đất & chậu
"Xương Rồng cần loại đất có khả năng thoát nước cực tốt để tránh tình trạng úng rễ.",
"Có thể sử dụng hỗn hợp đất chuyên dụng cho sen đá và xương rồng kết hợp với cát, đá pumice hoặc perlite.",
"Chậu trồng bắt buộc phải có lỗ thoát nước và nên sử dụng chậu đất nung để tăng khả năng thoáng khí.",

// 5. Nhiệt độ & độ ẩm
"Nhiệt độ lý tưởng cho Xương Rồng dao động từ 18–35°C. Cây có khả năng chịu nóng tốt và thích nghi với môi trường khô.",
"Độ ẩm thấp đến trung bình là điều kiện phù hợp nhất cho sự phát triển của cây.",
"Không cần phun sương thường xuyên vì môi trường quá ẩm có thể làm tăng nguy cơ nấm bệnh.",

// 6. Phân bón
"Xương Rồng không cần quá nhiều dinh dưỡng nhưng vẫn nên được bổ sung phân định kỳ để phát triển tốt hơn.",
"Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 2–3 tháng một lần trong mùa sinh trưởng.",
"Bón quá nhiều phân có thể làm cây phát triển mất cân đối hoặc gây cháy rễ.",

// 7. Cắt tỉa & vệ sinh
"Loại bỏ các phần thân bị hư hỏng hoặc khô để hạn chế sâu bệnh và giữ hình dáng đẹp cho cây.",
"Dùng cọ mềm hoặc khăn khô để làm sạch bụi bám trên thân cây định kỳ.",
"Thay đất mới sau khoảng 2–3 năm giúp bổ sung dinh dưỡng và cải thiện môi trường phát triển cho bộ rễ.",

// 8. Sâu bệnh
"Xương Rồng có thể bị rệp sáp, nhện đỏ hoặc nấm nếu môi trường quá ẩm và thiếu thông thoáng.",
"Các dấu hiệu thường gặp gồm thân mềm, xuất hiện đốm đen, đổi màu hoặc có lớp bột trắng bám trên thân.",
"Khi phát hiện sâu bệnh cần cách ly cây, cắt bỏ phần hư hại và sử dụng thuốc sinh học phù hợp để xử lý.",

// 9. Lưu ý quan trọng
"Không tưới nước theo lịch cố định mà cần dựa vào độ khô của đất.",
"Tránh để cây ở nơi thiếu ánh sáng trong thời gian dài.",
"Không để nước đọng trong chậu hoặc đĩa lót vì dễ gây thối rễ.",

// 10. Vấn đề thường gặp
"Thân mềm, vàng úa hoặc phát triển dài bất thường là những vấn đề phổ biến khi chăm sóc Xương Rồng.",
"Điều chỉnh lượng nước tưới, tăng cường ánh sáng và thay đất mới nếu cần sẽ giúp cây phục hồi hiệu quả.",

// 11. Mẹo chăm sóc nâng cao
"Xoay chậu định kỳ giúp cây phát triển cân đối và nhận ánh sáng đồng đều từ các phía.",
"Sử dụng chậu đất nung giúp tăng khả năng thoát hơi nước và hạn chế úng rễ.",
"Bón phân vào đầu mùa xuân để kích thích tăng trưởng và ra hoa ở một số giống xương rồng.",
"Nhiều loại xương rồng có thể nhân giống dễ dàng bằng cách tách nhánh hoặc giâm thân.",

// 12. Không gian sống & phong cách
"Xương Rồng phù hợp với bàn làm việc, kệ sách, ban công, quán cà phê hoặc các không gian nhỏ cần điểm nhấn xanh.",
"Hình dáng độc đáo và kích thước đa dạng giúp cây dễ dàng kết hợp với nhiều loại chậu trang trí khác nhau.",
"Theo phong thủy, cây tượng trưng cho ý chí mạnh mẽ, khả năng vượt qua thử thách và bảo vệ nguồn năng lượng tích cực.",
"Đây là lựa chọn lý tưởng cho phong cách tối giản, hiện đại, Scandinavian hoặc decor thiên nhiên.",

"Admin",
"2026-05-22"
    )
);
blogManager.addBlog(
    new Blog(

        19,
"Cách chăm sóc cây Vạn Lộc xanh tốt và giữ màu lá rực rỡ",
"Trong nhà",
"assets/images/vanloc.jpg",
"Cây Vạn Lộc là loại cây cảnh phong thủy được yêu thích nhờ màu sắc nổi bật cùng ý nghĩa mang lại tài lộc, may mắn và thịnh vượng. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và giữ được vẻ đẹp tự nhiên quanh năm.",

// 1. Giới thiệu chung
"Cây Vạn Lộc",
"Aglaonema rotundum hybrid",
"Vạn Lộc là loại cây cảnh thuộc họ ráy với lá có màu hồng đỏ pha xanh vô cùng nổi bật. Dáng cây nhỏ gọn cùng màu sắc rực rỡ giúp cây trở thành lựa chọn phổ biến để trang trí nhà ở, văn phòng hoặc quầy lễ tân.",
"Theo phong thủy, Vạn Lộc tượng trưng cho tài lộc, may mắn và sự thịnh vượng. Màu đỏ hồng đặc trưng còn mang ý nghĩa thu hút năng lượng tích cực và thành công trong cuộc sống.",
"Rất dễ",

// 2. Ánh sáng
"Vạn Lộc phát triển tốt trong môi trường có ánh sáng gián tiếp và dịu nhẹ.",
"Nên đặt cây gần cửa sổ hoặc nơi có ánh sáng tự nhiên để duy trì màu sắc đẹp của lá.",
"Thiếu ánh sáng có thể làm lá nhạt màu và cây phát triển chậm.",

// 3. Tưới nước
"Vạn Lộc có nhu cầu nước ở mức trung bình và thích đất hơi ẩm.",
"Nên tưới khoảng 2–3 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
"Cần đảm bảo đất thoát nước tốt để tránh tình trạng úng rễ.",
"Tưới quá nhiều nước có thể làm cây vàng lá, mềm thân và thối rễ.",

// 4. Đất & chậu
"Vạn Lộc thích hợp với loại đất tơi xốp, giàu dinh dưỡng và giữ ẩm vừa phải.",
"Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, tro trấu và perlite để tăng độ thông thoáng.",
"Chậu trồng cần có lỗ thoát nước để hạn chế nước đọng gây hại cho bộ rễ.",

// 5. Nhiệt độ & độ ẩm
"Nhiệt độ lý tưởng cho Vạn Lộc dao động từ 20–30°C.",
"Cây phát triển tốt trong môi trường có độ ẩm trung bình đến cao.",
"Nên tránh đặt cây gần máy lạnh hoặc nơi có gió mạnh làm lá bị khô.",

// 6. Phân bón
"Vạn Lộc cần được bổ sung dinh dưỡng định kỳ để duy trì màu lá đẹp và phát triển ổn định.",
"Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1–2 tháng một lần.",
"Bón quá nhiều phân có thể gây cháy rễ hoặc làm cây mất màu sắc tự nhiên.",

// 7. Cắt tỉa & vệ sinh
"Nên cắt bỏ lá vàng, lá úa hoặc phần cây hư hỏng để cây phát triển khỏe mạnh hơn.",
"Dùng khăn ẩm lau lá định kỳ giúp lá sạch bụi và giữ độ bóng đẹp.",
"Thay đất mới khoảng 1–2 năm một lần giúp cải thiện dinh dưỡng và môi trường sống cho cây.",

// 8. Sâu bệnh
"Vạn Lộc có thể gặp tình trạng rệp sáp, nhện đỏ hoặc nấm lá nếu môi trường quá ẩm và thiếu thông thoáng.",
"Các dấu hiệu thường gặp gồm lá vàng, đốm nâu hoặc thân cây mềm yếu.",
"Khi phát hiện sâu bệnh cần cách ly cây và sử dụng thuốc sinh học phù hợp để xử lý.",

// 9. Lưu ý quan trọng
"Không nên để cây dưới ánh nắng trực tiếp trong thời gian dài.",
"Tránh tưới quá nhiều nước hoặc để đất luôn trong tình trạng sũng nước.",
"Nên đặt cây ở nơi thông thoáng để hạn chế sâu bệnh và giúp cây phát triển tốt hơn.",

// 10. Vấn đề thường gặp
"Lá vàng, nhạt màu hoặc cây phát triển chậm là những vấn đề phổ biến khi chăm sóc Vạn Lộc.",
"Điều chỉnh lượng nước tưới, ánh sáng và độ ẩm phù hợp sẽ giúp cây phục hồi hiệu quả.",

// 11. Mẹo chăm sóc nâng cao
"Xoay chậu định kỳ giúp cây phát triển cân đối và nhận ánh sáng đồng đều hơn.",
"Phun sương nhẹ vào những ngày hanh khô giúp duy trì độ ẩm cho lá.",
"Bón phân vào đầu mùa xuân giúp cây ra nhiều lá mới với màu sắc đẹp hơn.",
"Có thể nhân giống Vạn Lộc bằng phương pháp tách bụi khá đơn giản và hiệu quả.",

// 12. Không gian sống & phong cách
"Vạn Lộc phù hợp với bàn làm việc, phòng khách, quầy lễ tân hoặc văn phòng hiện đại.",
"Màu sắc đỏ hồng nổi bật giúp không gian trở nên sinh động, sang trọng và thu hút hơn.",
"Theo phong thủy, cây tượng trưng cho tài lộc, may mắn và sự phát triển thịnh vượng.",
"Đây là lựa chọn lý tưởng cho phong cách hiện đại, tối giản hoặc decor thiên nhiên.",

"Admin",
"2026-05-22"
    )
);
blogManager.addBlog(
    new Blog(

        20,
"Cách chăm sóc cây Sen Đá khỏe mạnh và luôn căng mọng",
"Trong nhà",
"assets/images/senda.jpg",
"Sen Đá là loại cây cảnh mini được yêu thích nhờ vẻ ngoài nhỏ gọn, đa dạng hình dáng và khả năng thích nghi tốt. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh, giữ được màu sắc đẹp và phát triển bền lâu.",

// 1. Giới thiệu chung
"Cây Sen Đá",
"Echeveria spp.",
"Sen Đá là nhóm thực vật mọng nước có lá dày xếp thành hình hoa rất đẹp mắt. Với hàng trăm giống khác nhau về màu sắc và hình dáng, Sen Đá trở thành một trong những loại cây cảnh để bàn phổ biến nhất hiện nay.",
"Theo phong thủy, Sen Đá tượng trưng cho sự bền vững, may mắn và tình cảm lâu dài. Hình dáng như bông hoa nở còn mang ý nghĩa về sự phát triển và thịnh vượng.",
"Rất dễ",

// 2. Ánh sáng
"Sen Đá là loài cây ưa sáng và cần nhiều ánh nắng để duy trì hình dáng đẹp cũng như màu sắc đặc trưng.",
"Nên đặt cây ở ban công, cửa sổ hoặc nơi nhận được ánh sáng tự nhiên từ 4–6 giờ mỗi ngày.",
"Thiếu ánh sáng có thể khiến cây vươn dài, lá thưa và mất dáng hoa đặc trưng.",

// 3. Tưới nước
"Sen Đá có nhu cầu nước thấp nhờ khả năng tích trữ nước trong lá.",
"Nên tưới khoảng 1 lần mỗi tuần hoặc khi đất đã khô hoàn toàn.",
"Cần tưới trực tiếp vào đất và hạn chế để nước đọng trên lá.",
"Tưới quá nhiều nước là nguyên nhân phổ biến gây úng rễ, rụng lá và thối cây.",

// 4. Đất & chậu
"Sen Đá cần loại đất tơi xốp và có khả năng thoát nước rất tốt.",
"Có thể sử dụng đất chuyên dụng cho sen đá kết hợp với đá pumice, perlite hoặc cát thô.",
"Chậu trồng cần có lỗ thoát nước và nên ưu tiên chậu đất nung để hạn chế tích nước.",

// 5. Nhiệt độ & độ ẩm
"Nhiệt độ lý tưởng cho Sen Đá dao động từ 18–32°C.",
"Cây phát triển tốt trong môi trường khô ráo với độ ẩm thấp đến trung bình.",
"Không cần phun sương thường xuyên vì độ ẩm quá cao có thể gây nấm bệnh.",

// 6. Phân bón
"Sen Đá không cần nhiều dinh dưỡng nhưng vẫn nên được bổ sung phân định kỳ để phát triển tốt hơn.",
"Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 2–3 tháng một lần trong mùa sinh trưởng.",
"Bón quá nhiều phân có thể khiến cây phát triển yếu và mất màu sắc tự nhiên.",

// 7. Cắt tỉa & vệ sinh
"Nên loại bỏ lá già, lá khô ở phần gốc để hạn chế nấm bệnh và giữ vẻ đẹp cho cây.",
"Dùng cọ mềm làm sạch bụi trên lá định kỳ giúp cây quang hợp tốt hơn.",
"Thay đất mới khoảng 2 năm một lần giúp bổ sung dinh dưỡng và cải thiện môi trường sống cho cây.",

// 8. Sâu bệnh
"Sen Đá có thể gặp tình trạng rệp sáp, nấm hoặc thối rễ nếu môi trường quá ẩm.",
"Các dấu hiệu thường gặp gồm lá mềm, đổi màu, xuất hiện đốm đen hoặc lớp bột trắng trên lá.",
"Khi phát hiện sâu bệnh cần cách ly cây và xử lý bằng thuốc sinh học phù hợp.",

// 9. Lưu ý quan trọng
"Không tưới nước theo lịch cố định mà cần dựa vào độ khô của đất.",
"Tránh để cây ở nơi thiếu ánh sáng trong thời gian dài.",
"Không để nước đọng trong lá hoặc dưới đáy chậu vì dễ gây thối cây.",

// 10. Vấn đề thường gặp
"Lá mềm, rụng lá hoặc cây phát triển dài bất thường là những vấn đề phổ biến khi chăm sóc Sen Đá.",
"Điều chỉnh lượng nước tưới, tăng cường ánh sáng và thay đất mới nếu cần sẽ giúp cây phục hồi hiệu quả.",

// 11. Mẹo chăm sóc nâng cao
"Xoay chậu định kỳ giúp cây nhận ánh sáng đồng đều và phát triển cân đối.",
"Sử dụng chậu đất nung giúp tăng khả năng thoát hơi nước và hạn chế úng rễ.",
"Bón phân vào đầu mùa xuân giúp kích thích cây phát triển mạnh và giữ màu sắc đẹp.",
"Sen Đá có thể nhân giống rất dễ dàng bằng lá, cành hoặc tách cây con.",

// 12. Không gian sống & phong cách
"Sen Đá phù hợp với bàn làm việc, kệ sách, quầy thu ngân hoặc các không gian nhỏ trong nhà.",
"Kích thước nhỏ gọn cùng hình dáng độc đáo giúp cây trở thành điểm nhấn trang trí tinh tế.",
"Theo phong thủy, cây tượng trưng cho sự bền vững, may mắn và nguồn năng lượng tích cực.",
"Đây là lựa chọn lý tưởng cho phong cách tối giản, hiện đại, Scandinavian hoặc decor thiên nhiên.",

"Admin",
"2026-05-22"
    )
);

    blogManager.saveToLocalStorage();
}

// ================= FILTER =================
const categoryFilter = document.querySelector("#categoryFilter");
const sortFilter = document.querySelector("#sortFilter");
const searchInput = document.querySelector("#searchInput");
function getFilteredBlogs() {

    let blogs = [...blogManager.blogs];

    if (categoryFilter) {
        const category = categoryFilter.value;

        if (category !== "all") {
            blogs = blogs.filter(
                blog => blog.category === category
            );
        }
    }

    if (searchInput) {
        const keyword = searchInput.value.trim();

        if (keyword) {
            blogs = blogManager.searchBlogs(
                keyword,
                blogs
            );
        }
    }

    if (sortFilter) {

        const sortValue = sortFilter.value;

        if (sortValue === "newest") {
            blogs.sort(
                (a,b) =>
                new Date(b.createdAt) -
                new Date(a.createdAt)
            );
        }

        if (sortValue === "oldest") {
            blogs.sort(
                (a,b) =>
                new Date(a.createdAt) -
                new Date(b.createdAt)
            );
        }

        if (sortValue === "a-z") {
            blogs.sort(
                (a,b) =>
                a.title.localeCompare(b.title)
            );
        }

        if (sortValue === "z-a") {
            blogs.sort(
                (a,b) =>
                b.title.localeCompare(a.title)
            );
        }
    }

    return blogs;
}






const blogPagination = new Pagination({

    perPage: 6,

    container: ".blog-list",

    paginationBox: ".pagination",

    getData: () => getFilteredBlogs(),

    renderData: (blogs) => {
        BlogRender.renderBlogList(
            blogs,
            ".blog-list"
        );
    }
});
function refreshBlog() {

    blogPagination.currentPage = 1;

    blogPagination.update();
}

categoryFilter?.addEventListener(
    "change",
    refreshBlog
);

sortFilter?.addEventListener(
    "change",
    refreshBlog
);

searchInput?.addEventListener(
    "input",
    refreshBlog
);

blogPagination.update();
