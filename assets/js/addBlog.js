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
        5,
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

blogManager.addBlog(
    new Blog(

        7,
        "Cách chăm sóc cây Bàng Singapore xanh tốt và sang trọng",
        "Trong nhà",
        "assets/images/bangsingapo.jpg",
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

        8,
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

        9,
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

        10,
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

        11,
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

        12,
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

        13,
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

        14,
"Cách chăm sóc cây Lan Ý xanh tốt và ra hoa đẹp",
"Trong nhà",
"assets/images/lany.jpg",
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

        15,
"Cách chăm sóc cây Đa Búp Đỏ xanh tốt và bền đẹp",
"Trong nhà",
"assets/images/dabupdo.jpg",
"Cây Đa Búp Đỏ là loại cây cảnh nội thất được yêu thích nhờ lá xanh đậm bóng đẹp cùng những búp non đỏ nổi bật. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và phát triển xanh tốt quanh năm.",

// 1. Giới thiệu chung
"Cây Đa Búp Đỏ",
"Ficus elastica",
"Đa Búp Đỏ là loại cây thân gỗ thuộc họ dâu tằm với lá to, dày và bóng đẹp. Những búp non màu đỏ đặc trưng tạo nên vẻ sang trọng và hiện đại cho không gian sống.",
"Theo phong thủy, Đa Búp Đỏ tượng trưng cho sự sung túc, tài lộc và khả năng bảo vệ nguồn năng lượng tích cực trong nhà.",
"Rất dễ",

// 2. Ánh sáng
"Đa Búp Đỏ phát triển tốt trong môi trường có ánh sáng tự nhiên gián tiếp hoặc bán râm.",
"Nên đặt cây gần cửa sổ, ban công hoặc nơi có ánh sáng nhẹ khoảng vài giờ mỗi ngày.",
"Thiếu ánh sáng có thể khiến cây phát triển chậm, lá nhỏ và màu sắc kém tươi.",

// 3. Tưới nước
"Đa Búp Đỏ có nhu cầu nước ở mức trung bình và không thích đất quá ẩm.",
"Nên tưới khoảng 1–2 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
"Cần kiểm tra đất trước khi tưới để tránh tình trạng úng nước.",
"Tưới quá nhiều nước có thể làm vàng lá, rụng lá và thối rễ.",

// 4. Đất & chậu
"Đa Búp Đỏ thích hợp với loại đất tơi xốp, giàu dinh dưỡng và có khả năng thoát nước tốt.",
"Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, tro trấu và perlite để tăng độ thông thoáng.",
"Chậu trồng cần có lỗ thoát nước để hạn chế đọng nước gây hại cho bộ rễ.",

// 5. Nhiệt độ & độ ẩm
"Nhiệt độ lý tưởng cho Đa Búp Đỏ dao động từ 20–32°C.",
"Cây phát triển tốt trong môi trường có độ ẩm trung bình và không khí thông thoáng.",
"Nên tránh đặt cây gần máy lạnh hoặc nơi có gió lạnh mạnh vì có thể làm cây rụng lá.",

// 6. Phân bón
"Đa Búp Đỏ cần được bổ sung dinh dưỡng định kỳ để duy trì màu lá đẹp và phát triển ổn định.",
"Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1–2 tháng một lần.",
"Bón quá nhiều phân có thể gây cháy rễ hoặc làm cây phát triển mất cân đối.",

// 7. Cắt tỉa & vệ sinh
"Nên cắt bỏ lá già, lá vàng hoặc cành yếu để cây phát triển khỏe mạnh hơn.",
"Dùng khăn ẩm lau lá định kỳ giúp lá bóng đẹp và tăng khả năng quang hợp.",
"Thay đất mới khoảng 1–2 năm một lần giúp cải thiện dinh dưỡng và môi trường phát triển cho cây.",

// 8. Sâu bệnh
"Đa Búp Đỏ có thể gặp tình trạng rệp sáp, nhện đỏ hoặc nấm lá nếu môi trường quá ẩm và thiếu thông thoáng.",
"Các dấu hiệu thường gặp gồm lá vàng, xuất hiện đốm nâu hoặc lá rụng bất thường.",
"Khi phát hiện sâu bệnh cần cách ly cây và sử dụng thuốc sinh học phù hợp để xử lý.",

// 9. Lưu ý quan trọng
"Không nên thay đổi vị trí cây liên tục vì cây cần thời gian thích nghi với môi trường mới.",
"Tránh tưới quá nhiều nước hoặc để nước đọng trong chậu.",
"Nên đặt cây ở nơi thông thoáng để giúp cây phát triển khỏe mạnh hơn.",

// 10. Vấn đề thường gặp
"Lá vàng, rụng lá hoặc cây phát triển chậm là những vấn đề phổ biến khi chăm sóc Đa Búp Đỏ.",
"Điều chỉnh lượng nước tưới, ánh sáng và thay đất mới sẽ giúp cây phục hồi hiệu quả.",

// 11. Mẹo chăm sóc nâng cao
"Xoay chậu định kỳ giúp cây phát triển cân đối và đẹp hơn.",
"Phun sương nhẹ vào những ngày hanh khô giúp duy trì độ ẩm cho lá.",
"Bón phân vào đầu mùa xuân giúp kích thích cây ra lá mới và phát triển mạnh hơn.",
"Có thể nhân giống Đa Búp Đỏ bằng phương pháp giâm cành hoặc chiết cành khá đơn giản.",

// 12. Không gian sống & phong cách
"Đa Búp Đỏ phù hợp với phòng khách, văn phòng, quán cà phê hoặc không gian sống hiện đại.",
"Lá xanh bóng cùng búp đỏ nổi bật giúp không gian trở nên sang trọng và có điểm nhấn hơn.",
"Theo phong thủy, cây tượng trưng cho tài lộc, sự sung túc và nguồn năng lượng tích cực.",
"Đây là lựa chọn lý tưởng cho phong cách hiện đại, tối giản hoặc tropical decor.",

"Admin",
"2026-05-22"
    )
);
blogManager.addBlog(
    new Blog(

        16,
"Cách chăm sóc cây Cẩm Nhung luôn xanh đẹp và nổi bật",
"Trong nhà",
"assets/images/camnhung.jpg",
"Cây Cẩm Nhung là loại cây cảnh mini được yêu thích nhờ những đường gân lá nổi bật cùng màu sắc độc đáo. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và giữ được vẻ đẹp tươi tắn quanh năm.",

// 1. Giới thiệu chung
"Cây Cẩm Nhung",
"Fittonia albivenis",
"Cẩm Nhung là loại cây cảnh thân thảo nhỏ với lá mềm có các đường gân màu trắng, hồng hoặc đỏ nổi bật trên nền lá xanh. Kích thước nhỏ gọn giúp cây trở thành lựa chọn phổ biến để trang trí bàn làm việc, terrarium hoặc không gian nhỏ.",
"Theo phong thủy, Cẩm Nhung tượng trưng cho tình bạn, sự gắn kết và nguồn năng lượng tích cực. Cây còn mang ý nghĩa về sự nhẹ nhàng và hài hòa trong cuộc sống.",
"Khá dễ",

// 2. Ánh sáng
"Cẩm Nhung phát triển tốt trong môi trường có ánh sáng nhẹ và gián tiếp.",
"Nên đặt cây ở nơi có ánh sáng tự nhiên dịu nhẹ như gần cửa sổ hoặc dưới ánh đèn trong nhà.",
"Ánh nắng gắt trực tiếp có thể làm lá cháy, khô mép và mất màu đẹp tự nhiên.",

// 3. Tưới nước
"Cẩm Nhung thích đất hơi ẩm và có nhu cầu nước cao hơn nhiều loại cây nội thất khác.",
"Nên tưới khoảng 2–4 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
"Không nên để đất khô hoàn toàn trong thời gian dài vì cây dễ bị héo rũ.",
"Tưới quá nhiều nước hoặc để đất úng lâu ngày có thể gây thối rễ.",

// 4. Đất & chậu
"Cẩm Nhung thích hợp với loại đất tơi xốp, giàu dinh dưỡng và giữ ẩm tốt.",
"Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, rêu peat moss và perlite để tăng độ thông thoáng.",
"Chậu trồng cần có lỗ thoát nước để hạn chế đọng nước gây hại cho bộ rễ.",

// 5. Nhiệt độ & độ ẩm
"Nhiệt độ lý tưởng cho Cẩm Nhung dao động từ 18–28°C.",
"Cây phát triển tốt trong môi trường có độ ẩm cao và không khí thông thoáng.",
"Nên phun sương nhẹ thường xuyên để giữ độ ẩm cho lá, đặc biệt trong thời tiết hanh khô.",

// 6. Phân bón
"Cẩm Nhung không cần quá nhiều phân bón nhưng vẫn nên bổ sung dinh dưỡng định kỳ để lá giữ màu đẹp.",
"Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1–2 tháng một lần.",
"Bón quá nhiều phân có thể làm cây yếu hoặc cháy rễ.",

// 7. Cắt tỉa & vệ sinh
"Nên cắt bỏ lá vàng, lá úa hoặc phần cây hư hỏng để cây phát triển khỏe mạnh hơn.",
"Ngắt ngọn định kỳ giúp cây mọc dày và có dáng đẹp hơn.",
"Thay đất mới khoảng 1 năm một lần giúp bổ sung dinh dưỡng và cải thiện môi trường sống cho cây.",

// 8. Sâu bệnh
"Cẩm Nhung có thể gặp tình trạng nấm, rệp sáp hoặc thối rễ nếu môi trường quá ẩm và thiếu thông thoáng.",
"Các dấu hiệu thường gặp gồm lá vàng, thân mềm hoặc xuất hiện đốm nâu trên lá.",
"Khi phát hiện sâu bệnh cần giảm lượng nước tưới và sử dụng thuốc sinh học phù hợp để xử lý.",

// 9. Lưu ý quan trọng
"Không nên để cây dưới ánh nắng trực tiếp trong thời gian dài.",
"Tránh để đất khô hoàn toàn vì cây rất dễ héo.",
"Nên duy trì độ ẩm ổn định để cây phát triển khỏe mạnh và giữ màu lá đẹp.",

// 10. Vấn đề thường gặp
"Lá héo rũ, mép lá khô hoặc cây phát triển chậm là những vấn đề phổ biến khi chăm sóc Cẩm Nhung.",
"Điều chỉnh độ ẩm, lượng nước tưới và ánh sáng phù hợp sẽ giúp cây phục hồi hiệu quả.",

// 11. Mẹo chăm sóc nâng cao
"Trồng cây trong terrarium giúp duy trì độ ẩm ổn định và tăng tính thẩm mỹ.",
"Xoay chậu định kỳ giúp cây phát triển đều và đẹp hơn.",
"Bón phân vào đầu mùa xuân giúp kích thích cây ra lá mới với màu sắc nổi bật hơn.",
"Có thể nhân giống Cẩm Nhung bằng phương pháp giâm cành rất đơn giản.",

// 12. Không gian sống & phong cách
"Cẩm Nhung phù hợp với bàn làm việc, kệ sách, terrarium hoặc không gian nhỏ trong nhà.",
"Màu sắc nổi bật của lá giúp không gian trở nên sinh động và tươi mới hơn.",
"Theo phong thủy, cây tượng trưng cho sự gắn kết, niềm vui và nguồn năng lượng tích cực.",
"Đây là lựa chọn lý tưởng cho phong cách tối giản, hiện đại hoặc decor thiên nhiên.",

"Admin",
"2026-05-22"
    )
);
blogManager.addBlog(
    new Blog(

    17,
"Cách chăm sóc cây Chuối Cảnh xanh tốt và nổi bật không gian sống",
"Trong nhà",
"assets/images/chuoicanh.jpg",
"Cây Chuối Cảnh là loại cây trang trí được yêu thích nhờ lá lớn xanh mướt và vẻ đẹp nhiệt đới hiện đại. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và phát triển xanh tốt quanh năm.",

// 1. Giới thiệu chung
"Cây Chuối Cảnh",
"Musa ornata",
"Chuối Cảnh là loại cây có lá lớn, dáng cao thanh thoát và mang vẻ đẹp đậm chất nhiệt đới. Cây thường được sử dụng để trang trí phòng khách, ban công, sân vườn hoặc quán cà phê hiện đại.",
"Theo phong thủy, Chuối Cảnh tượng trưng cho sự sum vầy, phát triển và nguồn năng lượng tích cực. Tán lá rộng còn mang ý nghĩa che chở và thu hút tài lộc.",
"Khá dễ",

// 2. Ánh sáng
"Chuối Cảnh là cây ưa sáng và phát triển tốt trong môi trường có nhiều ánh sáng tự nhiên.",
"Nên đặt cây gần cửa sổ lớn, ban công hoặc nơi có ánh sáng gián tiếp mạnh khoảng 5–6 giờ mỗi ngày.",
"Thiếu ánh sáng có thể khiến lá nhỏ, cây phát triển chậm và màu lá kém tươi.",

// 3. Tưới nước
"Chuối Cảnh có nhu cầu nước khá cao do sở hữu bộ lá lớn và tốc độ sinh trưởng nhanh.",
"Nên tưới khoảng 3–4 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
"Cần giữ đất hơi ẩm nhưng không để úng nước kéo dài.",
"Tưới quá nhiều nước có thể khiến rễ bị thối và lá chuyển vàng.",

// 4. Đất & chậu
"Chuối Cảnh thích hợp với loại đất tơi xốp, giàu dinh dưỡng và giữ ẩm tốt.",
"Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, phân trùn quế và perlite để tăng độ thông thoáng.",
"Chậu trồng cần có kích thước phù hợp và lỗ thoát nước để hỗ trợ bộ rễ phát triển khỏe mạnh.",

// 5. Nhiệt độ & độ ẩm
"Nhiệt độ lý tưởng cho Chuối Cảnh dao động từ 22–32°C.",
"Cây phát triển tốt trong môi trường có độ ẩm cao và không khí thông thoáng.",
"Nên phun sương nhẹ vào những ngày hanh khô để giúp lá giữ độ tươi và hạn chế khô mép lá.",

// 6. Phân bón
"Chuối Cảnh cần được bổ sung dinh dưỡng định kỳ để duy trì màu lá đẹp và phát triển nhanh.",
"Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1 tháng một lần trong mùa sinh trưởng.",
"Bón quá nhiều phân có thể gây cháy rễ hoặc làm cây mất cân đối.",

// 7. Cắt tỉa & vệ sinh
"Nên cắt bỏ lá già, lá rách hoặc lá vàng để cây tập trung dinh dưỡng cho lá mới.",
"Dùng khăn ẩm lau lá định kỳ giúp lá sạch bụi và tăng khả năng quang hợp.",
"Thay đất mới khoảng 1–2 năm một lần giúp bổ sung dinh dưỡng và cải thiện môi trường phát triển cho cây.",

// 8. Sâu bệnh
"Chuối Cảnh có thể gặp tình trạng nhện đỏ, rệp sáp hoặc nấm lá nếu môi trường quá bí và độ ẩm không phù hợp.",
"Các dấu hiệu thường gặp gồm lá vàng, xuất hiện đốm nâu hoặc mép lá khô.",
"Khi phát hiện sâu bệnh cần cắt bỏ phần hư hại và sử dụng thuốc sinh học phù hợp để xử lý.",

// 9. Lưu ý quan trọng
"Không nên để cây ở nơi thiếu sáng trong thời gian dài.",
"Tránh để đất quá khô hoặc quá úng vì đều ảnh hưởng đến sự phát triển của cây.",
"Nên đặt cây ở nơi thông thoáng để lá phát triển đẹp và hạn chế sâu bệnh.",

// 10. Vấn đề thường gặp
"Lá vàng, rách lá hoặc cây phát triển chậm là những vấn đề phổ biến khi chăm sóc Chuối Cảnh.",
"Điều chỉnh ánh sáng, lượng nước tưới và độ ẩm phù hợp sẽ giúp cây phục hồi hiệu quả.",

// 11. Mẹo chăm sóc nâng cao
"Xoay chậu định kỳ giúp cây phát triển cân đối và đẹp hơn.",
"Phun sương nhẹ vào buổi sáng giúp lá giữ được độ tươi và hạn chế khô mép.",
"Bón phân vào đầu mùa xuân giúp kích thích cây ra lá mới nhanh hơn.",
"Có thể nhân giống Chuối Cảnh bằng phương pháp tách cây con khá đơn giản và hiệu quả.",

// 12. Không gian sống & phong cách
"Chuối Cảnh phù hợp với phòng khách rộng, ban công, sân vườn hoặc quán cà phê phong cách tropical.",
"Lá lớn xanh mướt giúp không gian trở nên nổi bật, thư giãn và gần gũi thiên nhiên hơn.",
"Theo phong thủy, cây tượng trưng cho sự phát triển, sung túc và nguồn năng lượng tích cực.",
"Đây là lựa chọn lý tưởng cho phong cách tropical, hiện đại hoặc decor thiên nhiên.",

"Admin",
"2026-05-22"
    )
);
blogManager.addBlog(
    new Blog(

        18,
        "Cách chăm sóc cây Vạn Niên Thanh luôn xanh tốt và mang lại tài lộc",
        "Trong nhà",
        "assets/images/vannienthanh.jpg",
        "Cây Vạn Niên Thanh là lựa chọn hoàn hảo cho không gian nội thất nhờ khả năng thanh lọc không khí vượt trội và sức sống bền bỉ. Bài viết này sẽ hướng dẫn chi tiết cách chăm sóc giúp cây luôn xanh tốt.",

// 1. Giới thiệu chung
        "Cây Vạn Niên Thanh",
        "Dieffenbachia amoena",
        "Vạn Niên Thanh là loài cây thân thảo, lá to bản, mượt mà với những đốm trắng hoặc vàng nổi bật trên nền xanh. Cây có sức sống mãnh liệt, tuổi thọ cao và khả năng thanh lọc không khí, hấp thụ bức xạ điện từ rất tốt.",
        "Trong phong thủy, Vạn Niên Thanh tượng trưng cho sự cát tường, trường thọ và tài lộc sung túc. Trồng cây này trong nhà giúp mang lại bình an và may mắn cho gia chủ.",
        "Dễ",

// 2. Ánh sáng
        "Cây Vạn Niên Thanh ưa bóng râm mát và phát triển tốt nhất trong điều kiện ánh sáng gián tiếp.",
        "Nên đặt cây ở phòng khách, hành lang, văn phòng làm việc hoặc gần cửa sổ có rèm che.",
        "Tuyệt đối tránh để cây dưới ánh nắng gắt trực tiếp vì sẽ làm lá bị cháy, nhạt màu và khô héo.",

// 3. Tưới nước
        "Cây ưa ẩm nhưng cũng có khả năng chịu hạn tương đối tốt, không cần tưới quá thường xuyên.",
        "Nên tưới 1–2 lần mỗi tuần, chỉ tưới khi thấy lớp đất trên mặt chậu đã khô lại.",
        "Thiếu nước lâu ngày sẽ làm lá cây rủ xuống, mép lá khô và mất đi độ bóng bẩy tự nhiên.",
        "Tưới quá đẫm hoặc chậu không thoát nước tốt sẽ dẫn đến tình trạng úng rễ, thối thân và vàng lá.",

// 4. Đất & chậu
        "Vạn Niên Thanh không kén đất nhưng phát triển tốt nhất trên nền đất tơi xốp, thoát nước nhanh.",
        "Có thể sử dụng hỗn hợp đất thịt trộn chung với trấu hun, mụn dừa và phân trùn quế để tăng dinh dưỡng.",
        "Chậu trồng cần có lỗ thoát nước tốt để hạn chế tình trạng đọng nước gây thối rễ.",

// 5. Nhiệt độ & độ ẩm
        "Nhiệt độ sinh trưởng lý tưởng cho cây dao động từ 18–25°C, rất phù hợp với môi trường điều hòa.",
        "Cây ưa độ ẩm không khí trung bình đến cao, thích không gian thoáng mát.",
        "Nên thường xuyên dùng khăn ẩm lau sạch bụi trên mặt lá hoặc phun sương nhẹ để giúp lá cây luôn tươi tắn.",

// 6. Phân bón
        "Cây có nhu cầu dinh dưỡng vừa phải, cần được bổ sung định kỳ để bộ lá luôn to và bóng đẹp.",
        "Nên bón phân NPK pha loãng hoặc bổ sung phân hữu cơ định kỳ 1–2 tháng một lần.",
        "Tránh bón phân quá đặc hoặc bón trực tiếp sát gốc vì có thể gây xót rễ, làm chết cây.",

// 7. Cắt tỉa & vệ sinh
        "Thường xuyên cắt bỏ những lá già, lá úa vàng ở phần gốc để tạo độ thông thoáng.",
        "Việc tỉa lá giúp cây tập trung dinh dưỡng nuôi chồi non và hạn chế mầm bệnh phát sinh.",
        "Thay đất mới và đổi chậu lớn hơn sau khoảng 1-2 năm khi rễ cây đã phát triển kín chậu.",

// 8. Sâu bệnh
        "Cây ít khi bị sâu bệnh nhưng thỉnh thoảng có thể gặp rệp sáp, nhện đỏ hoặc bệnh thối gốc do úng nước.",
        "Biểu hiện thường thấy là lá xuất hiện các đốm trắng li ti, có màng nhện nhỏ hoặc phần gốc bị nhũn.",
        "Khi phát hiện cần cách ly cây, dùng khăn lau sạch hoặc sử dụng các loại thuốc sinh học để phun trừ.",

// 9. Lưu ý quan trọng
        "Nhựa cây Vạn Niên Thanh có thể gây ngứa rát và kích ứng da nếu vô tình chạm phải.",
        "Cần đeo găng tay khi cắt tỉa và đặt cây xa tầm tay của trẻ nhỏ cũng như thú cưng.",
        "Luôn kiểm tra độ ẩm của đất trước khi tưới để tránh tình trạng thừa nước làm cây chết úng.",

// 10. Vấn đề thường gặp
        "Tình trạng phổ biến nhất là lá bị vàng và rụng dần do tưới quá nhiều nước, hoặc cháy mép lá do nắng gắt.",
        "Điều chỉnh lại lượng nước tưới, di chuyển cây vào nơi mát mẻ hơn và cắt bỏ phần lá hỏng để cây dần phục hồi.",

// 11. Mẹo chăm sóc nâng cao
        "Dùng khăn mềm thấm bia pha loãng để lau lá sẽ giúp mặt lá sáng bóng, sạch bụi và màu xanh đậm hơn.",
        "Xoay chậu cây 180 độ mỗi 2-3 tuần để các mặt đều nhận được ánh sáng, giúp cây mọc thẳng, không bị nghiêng.",
        "Vào mùa lạnh, cây sinh trưởng chậm lại nên cần giảm bớt lượng nước tưới và tần suất bón phân.",
        "Nhân giống Vạn Niên Thanh rất dễ bằng cách cắt đoạn thân có mắt mầm và giâm trực tiếp vào đất ẩm.",

// 12. Không gian sống & phong cách
        "Vạn Niên Thanh là điểm nhấn xanh mát tuyệt vời cho phòng khách, sảnh chờ, hoặc góc làm việc.",
        "Sự hiện diện của cây giúp làm dịu mắt, giảm căng thẳng và tạo cảm giác gần gũi với thiên nhiên.",
        "Với ý nghĩa phong thủy tốt đẹp, cây thường được ưa chuộng làm quà tặng tân gia, khai trương.",
        "Rất phù hợp để trang trí cho các không gian mang phong cách hiện đại, tối giản hoặc nhiệt đới (Tropical).",

        "Admin",
        "2026-05-29"
    )
);
blogManager.addBlog(
    new Blog(

        19,
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

        20,
"Cách chăm sóc cây Cọ Nhật xanh đẹp và sang trọng",
"Trong nhà",
"assets/images/conhat.jpg",
"Cây Cọ Nhật là loại cây cảnh nội thất được yêu thích nhờ dáng lá xòe đẹp mắt, vẻ ngoài sang trọng và khả năng thích nghi tốt với nhiều không gian sống. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và phát triển xanh tốt.",

// 1. Giới thiệu chung
"Cây Cọ Nhật",
"Livistona rotundifolia",
"Cọ Nhật là loại cây cảnh thuộc họ cau với đặc điểm nổi bật là những chiếc lá xòe tròn đẹp mắt cùng thân cây thanh thoát. Cây thường được sử dụng để trang trí phòng khách, văn phòng, sảnh lớn hoặc quán cà phê hiện đại.",
"Theo phong thủy, Cọ Nhật tượng trưng cho sự giàu sang, tài lộc và khả năng bảo vệ nguồn năng lượng tích cực trong không gian sống.",
"Khá dễ",

// 2. Ánh sáng
"Cọ Nhật phát triển tốt trong môi trường có ánh sáng tự nhiên gián tiếp hoặc bán râm.",
"Nên đặt cây gần cửa sổ, ban công hoặc nơi có ánh sáng nhẹ khoảng vài giờ mỗi ngày.",
"Thiếu ánh sáng có thể khiến cây phát triển chậm và lá kém xanh đẹp.",

// 3. Tưới nước
"Cọ Nhật có nhu cầu nước ở mức trung bình và thích đất hơi ẩm.",
"Nên tưới khoảng 2–3 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
"Cần đảm bảo đất thoát nước tốt để hạn chế tình trạng úng rễ.",
"Tưới quá nhiều nước có thể khiến lá vàng và bộ rễ bị hư hại.",

// 4. Đất & chậu
"Cọ Nhật thích hợp với loại đất tơi xốp, giàu dinh dưỡng và có khả năng thoát nước tốt.",
"Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, tro trấu và perlite để tăng độ thông thoáng.",
"Chậu trồng cần có lỗ thoát nước và kích thước phù hợp với bộ rễ của cây.",

// 5. Nhiệt độ & độ ẩm
"Nhiệt độ lý tưởng cho Cọ Nhật dao động từ 20–32°C.",
"Cây phát triển tốt trong môi trường có độ ẩm trung bình đến cao và không khí thông thoáng.",
"Nên tránh đặt cây ở nơi có gió lạnh mạnh hoặc gần máy lạnh trong thời gian dài.",

// 6. Phân bón
"Cọ Nhật cần được bổ sung dinh dưỡng định kỳ để duy trì màu lá đẹp và phát triển ổn định.",
"Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1–2 tháng một lần.",
"Bón quá nhiều phân có thể gây cháy rễ hoặc làm lá bị khô mép.",

// 7. Cắt tỉa & vệ sinh
"Nên cắt bỏ lá già, lá vàng hoặc lá khô để cây phát triển khỏe mạnh hơn.",
"Dùng khăn ẩm lau lá định kỳ giúp lá sạch bụi và tăng khả năng quang hợp.",
"Thay đất mới khoảng 1–2 năm một lần giúp cải thiện dinh dưỡng và môi trường phát triển cho cây.",

// 8. Sâu bệnh
"Cọ Nhật có thể gặp tình trạng rệp sáp, nhện đỏ hoặc nấm lá nếu môi trường quá ẩm và thiếu thông thoáng.",
"Các dấu hiệu thường gặp gồm lá vàng, đốm nâu hoặc lá khô đầu.",
"Khi phát hiện sâu bệnh cần cắt bỏ phần hư hại và sử dụng thuốc sinh học phù hợp để xử lý.",

// 9. Lưu ý quan trọng
"Không nên để cây dưới ánh nắng gắt trực tiếp trong thời gian dài.",
"Tránh tưới quá nhiều nước hoặc để nước đọng trong chậu.",
"Nên đặt cây ở nơi thông thoáng để giúp cây phát triển khỏe mạnh hơn.",

// 10. Vấn đề thường gặp
"Lá vàng, khô mép lá hoặc cây phát triển chậm là những vấn đề phổ biến khi chăm sóc Cọ Nhật.",
"Điều chỉnh lượng nước tưới, ánh sáng và độ ẩm phù hợp sẽ giúp cây phục hồi hiệu quả.",

// 11. Mẹo chăm sóc nâng cao
"Xoay chậu định kỳ giúp cây phát triển cân đối và đẹp hơn.",
"Phun sương nhẹ vào những ngày hanh khô giúp duy trì độ ẩm cho lá.",
"Bón phân vào đầu mùa xuân giúp kích thích cây ra lá mới và phát triển mạnh hơn.",
"Có thể kết hợp chậu xi măng hoặc chậu sứ tối màu để tăng vẻ sang trọng cho cây.",

// 12. Không gian sống & phong cách
"Cọ Nhật phù hợp với phòng khách, văn phòng, sảnh lớn hoặc quán cà phê hiện đại.",
"Tán lá xòe rộng giúp không gian trở nên sang trọng, xanh mát và gần gũi thiên nhiên hơn.",
"Theo phong thủy, cây tượng trưng cho tài lộc, sự bảo vệ và nguồn năng lượng tích cực.",
"Đây là lựa chọn lý tưởng cho phong cách hiện đại, tropical hoặc decor thiên nhiên.",

"Admin",
"2026-05-22"
    )
);
blogManager.addBlog(
    new Blog(

        21,
        "Cách chăm sóc cây Kim Ngân mang lại may mắn và tài lộc",
        "Trong nhà",
        "assets/images/kimngan.jpg",
        "Cây Kim Ngân (Money Tree) nổi bật với phần gốc phình to, thân thắt bím độc đáo và tán lá xanh mướt. Đây là biểu tượng của sự thịnh vượng, rất thích hợp để trang trí không gian sống và nơi làm việc.",

// 1. Giới thiệu chung
        "Cây Kim Ngân",
        "Pachira aquatica",
        "Cây Kim Ngân là loài cây thân gỗ, lá kép chân vịt với 5-7 nhánh xòe rộng. Điểm đặc biệt nhất là phần thân thường được tết lại với nhau như bím tóc, tạo vẻ đẹp vô cùng độc đáo, vững chãi và lạ mắt.",
        "Trong phong thủy, Kim Ngân có nghĩa là tiền vàng. Lá cây thường có 5 nhánh đại diện cho 5 yếu tố Kim - Mộc - Thủy - Hỏa - Thổ, giúp cân bằng năng lượng, thu hút sự giàu có, thịnh vượng và may mắn cho gia chủ.",
        "Khá dễ",

// 2. Ánh sáng
        "Cây Kim Ngân ưa ánh sáng râm mát, có thể phát triển ổn định dưới ánh đèn điện hoặc ánh sáng tự nhiên hắt qua cửa sổ.",
        "Nên đặt cây ở những nơi thoáng đãng trong nhà như phòng khách, sảnh văn phòng, quầy lễ tân hoặc gần ban công râm mát.",
        "Tuyệt đối tránh để cây tiếp xúc trực tiếp với ánh nắng mặt trời buổi trưa vì sẽ làm lá bị cháy đen, cuộn tròn và mất đi sức sống.",

// 3. Tưới nước
        "Kim Ngân có khả năng tích trữ nước ở phần thân phình to nên chịu hạn rất tốt, nhu cầu nước không cao.",
        "Đối với cây trồng trong nhà, chỉ cần tưới 1-2 tuần/lần, mỗi lần tưới lượng nước vừa đủ để ẩm đất.",
        "Dấu hiệu cây thiếu nước thường là mép lá rủ xuống, hơi nhăn nheo và mất đi độ bóng bẩy tự nhiên.",
        "Tưới quá nhiều hoặc chậu không thoát nước sẽ khiến phần gốc cây rất dễ bị mềm nhũn, thối rễ và chết dần.",

// 4. Đất & chậu
        "Loại đất tốt nhất cho cây Kim Ngân là đất tơi xốp, thông thoáng, giữ ẩm vừa phải và thoát nước cực kỳ tốt.",
        "Hỗn hợp lý tưởng nên bao gồm đất thịt trộn cùng tro trấu, xơ dừa, đá perlite và một ít phân hữu cơ.",
        "Chậu trồng bắt buộc phải có lỗ thoát nước lớn ở đáy để đảm bảo bộ rễ không bao giờ bị ngâm trong nước.",

// 5. Nhiệt độ & độ ẩm
        "Nhiệt độ sinh trưởng lý tưởng của cây là từ 18–26°C, hoàn toàn phù hợp với môi trường sử dụng máy điều hòa.",
        "Cây có thể chịu được nhiệt độ cao nhưng sẽ sinh trưởng kém hoặc rụng lá nếu nhiệt độ xuống quá thấp (dưới 15°C).",
        "Nên duy trì độ ẩm không khí ở mức trung bình, thỉnh thoảng có thể phun sương nhẹ quanh không gian đặt cây để làm mát lá.",

// 6. Phân bón
        "Để cây giữ được tán lá xanh mướt và thân mập mạp, cần bổ sung dinh dưỡng định kỳ nhưng với lượng vừa phải.",
        "Sử dụng phân NPK (tỷ lệ 20-20-15) pha loãng với nước để tưới vào gốc khoảng 1-2 tháng một lần.",
        "Tránh bón phân hạt sát trực tiếp vào gốc hoặc bón quá liều lượng khiến rễ bị xót, làm cây vàng và rụng lá hàng loạt.",

// 7. Cắt tỉa & vệ sinh
        "Thường xuyên kiểm tra và cắt bỏ những lá vàng, úa hoặc những cành mọc vươn quá dài để giữ form dáng gọn gàng cho cây.",
        "Dùng khăn mềm ẩm lau nhẹ bụi bẩn trên mặt lá hàng tuần giúp cây quang hợp tốt hơn và luôn có vẻ ngoài sạch sẽ, sang trọng.",
        "Tùy vào tốc độ phát triển của bộ rễ, có thể cân nhắc thay đất và chậu to hơn sau khoảng 1-2 năm trồng.",

// 8. Sâu bệnh
        "Cây Kim Ngân thỉnh thoảng có thể gặp vấn đề về rệp sáp bám ở các nách lá hoặc bệnh nấm thối gốc do tưới dư nước.",
        "Dấu hiệu dễ nhận biết là xuất hiện các đốm trắng mốc bám trên lá/cuống, hoặc phần gốc chuyển màu nâu đen, sờ vào thấy mềm nhũn.",
        "Khi phát hiện, cần cắt bỏ ngay phần hư hỏng, ngưng tưới nước để đất khô hẳn và dùng dung dịch cồn lau rệp hoặc thuốc xịt sinh học.",

// 9. Lưu ý quan trọng
        "Kẻ thù lớn nhất của cây Kim Ngân là úng nước, do đó nguyên tắc vàng là 'thà để hơi khô còn hơn tưới thừa'.",
        "Tránh di chuyển cây liên tục giữa các môi trường có sự chênh lệch nhiệt độ và ánh sáng quá đột ngột.",
        "Nếu trồng chậu ghép bím tóc nhiều thân, chú ý quan sát phần gốc, nếu có một thân bị thối cần tách bỏ ngay để không lây sang các thân còn lại.",

// 10. Vấn đề thường gặp
        "Lá cây bị vàng và rụng hàng loạt thường là do vị trí đặt cây quá tối hoặc do đất bị đọng nước, úng rễ lâu ngày.",
        "Cây bị vươn cao lêu nghêu, thân nhỏ lại, khoảng cách giữa các tầng lá thưa thớt là do thiếu ánh sáng trầm trọng, cần chuyển cây ra nơi sáng sủa hơn.",

// 11. Mẹo chăm sóc nâng cao
        "Khoảng 1-2 tuần một lần, nên cho cây ra ngoài ban công đón nắng nhẹ buổi sáng (từ 7h-9h) để cây quang hợp mạnh và lá xanh đậm màu hơn.",
        "Xoay chậu cây một góc 90 độ mỗi tháng để tán lá nhận đều ánh sáng và phát triển tròn trịa về mọi phía.",
        "Khi cành lá quá rậm rạp, việc cắt tỉa mạnh tay ở các nhánh phụ sẽ kích thích chồi non mới mọc ra khỏe mạnh và mập mạp hơn.",
        "Có thể nhân giống Kim Ngân bằng cách giâm cành, nhưng lưu ý cây giâm cành sẽ mọc thẳng và không có phần gốc phình to tự nhiên như cây gieo từ hạt.",

// 12. Không gian sống & phong cách
        "Cây Kim Ngân là lựa chọn hàng đầu cho không gian văn phòng, bàn làm việc, phòng khách hoặc quầy thu ngân.",
        "Vẻ đẹp thanh lịch và dáng đứng thẳng tắp của cây mang lại cảm giác chuyên nghiệp, gọn gàng và tràn đầy sinh khí cho không gian.",
        "Nhờ ý nghĩa thu hút tiền tài danh vọng, cây luôn là món quà tặng tân gia, khai trương hay thăng chức vô cùng thiết thực.",
        "Cây có thể dễ dàng hòa hợp với nhiều phong cách nội thất khác nhau, từ hiện đại, tối giản (Minimalism) cho đến Á Đông truyền thống.",

        "Admin",
        "2026-05-29"
    )
);
blogManager.addBlog(
    new Blog(

        22,
"Cách chăm sóc cây Cỏ Đồng Tiền xanh tốt và tràn đầy sức sống",
"Trong nhà",
"assets/images/codongtien.jpg",
"Cây Cỏ Đồng Tiền là loại cây cảnh mini được yêu thích nhờ những chiếc lá tròn nhỏ xinh cùng ý nghĩa phong thủy may mắn, tài lộc. Bài viết hướng dẫn cách chăm sóc giúp cây luôn xanh mướt và phát triển khỏe mạnh.",

// 1. Giới thiệu chung
"Cây Cỏ Đồng Tiền",
"Hydrocotyle vulgaris",
"Cỏ Đồng Tiền là loại cây thân thảo nhỏ với lá tròn xanh mọc thành cụm mềm mại và tươi mát. Kích thước nhỏ gọn giúp cây phù hợp để trang trí bàn làm việc, kệ sách hoặc terrarium.",
"Theo phong thủy, Cỏ Đồng Tiền tượng trưng cho tài lộc, sự may mắn và cuộc sống sung túc. Hình dáng lá tròn giống đồng xu mang ý nghĩa thu hút tiền tài và năng lượng tích cực.",
"Rất dễ",

// 2. Ánh sáng
"Cỏ Đồng Tiền phát triển tốt trong môi trường có ánh sáng nhẹ và gián tiếp.",
"Nên đặt cây gần cửa sổ hoặc nơi có ánh sáng tự nhiên dịu nhẹ khoảng vài giờ mỗi ngày.",
"Ánh nắng gắt trực tiếp có thể làm lá cháy hoặc mất màu xanh đẹp tự nhiên.",

// 3. Tưới nước
"Cỏ Đồng Tiền có nhu cầu nước khá cao và thích môi trường đất luôn hơi ẩm.",
"Nên tưới khoảng 3–4 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
"Không nên để đất khô hoàn toàn vì cây dễ bị héo và chậm phát triển.",
"Tưới quá nhiều nước hoặc để đất úng lâu ngày có thể gây thối rễ.",

// 4. Đất & chậu
"Cỏ Đồng Tiền thích hợp với loại đất tơi xốp, giàu dinh dưỡng và giữ ẩm tốt.",
"Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, tro trấu và peat moss để tăng độ thông thoáng.",
"Chậu trồng cần có lỗ thoát nước để hạn chế đọng nước gây hại cho bộ rễ.",

// 5. Nhiệt độ & độ ẩm
"Nhiệt độ lý tưởng cho Cỏ Đồng Tiền dao động từ 18–28°C.",
"Cây phát triển tốt trong môi trường có độ ẩm trung bình đến cao.",
"Nên phun sương nhẹ định kỳ để duy trì độ ẩm cho lá, đặc biệt trong thời tiết hanh khô.",

// 6. Phân bón
"Cỏ Đồng Tiền không cần quá nhiều phân bón nhưng vẫn nên bổ sung dinh dưỡng định kỳ để lá xanh đẹp.",
"Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1–2 tháng một lần.",
"Bón quá nhiều phân có thể khiến cây phát triển yếu hoặc cháy rễ.",

// 7. Cắt tỉa & vệ sinh
"Nên cắt bỏ lá vàng, lá úa hoặc phần thân hư hỏng để cây phát triển khỏe mạnh hơn.",
"Ngắt ngọn định kỳ giúp cây mọc dày và đẹp hơn.",
"Thay đất mới khoảng 1 năm một lần giúp bổ sung dinh dưỡng và cải thiện môi trường sống cho cây.",

// 8. Sâu bệnh
"Cỏ Đồng Tiền có thể gặp tình trạng nấm, rệp sáp hoặc thối rễ nếu môi trường quá ẩm và thiếu thông thoáng.",
"Các dấu hiệu thường gặp gồm lá vàng, thân mềm hoặc xuất hiện đốm nâu trên lá.",
"Khi phát hiện sâu bệnh cần giảm lượng nước tưới và sử dụng thuốc sinh học phù hợp để xử lý.",

// 9. Lưu ý quan trọng
"Không nên để cây dưới ánh nắng trực tiếp trong thời gian dài.",
"Tránh để đất khô hoàn toàn vì cây rất dễ héo.",
"Nên duy trì độ ẩm ổn định để cây phát triển xanh tốt và giữ dáng đẹp.",

// 10. Vấn đề thường gặp
"Lá vàng, cây héo hoặc phát triển chậm là những vấn đề phổ biến khi chăm sóc Cỏ Đồng Tiền.",
"Điều chỉnh lượng nước tưới, độ ẩm và ánh sáng phù hợp sẽ giúp cây phục hồi hiệu quả.",

// 11. Mẹo chăm sóc nâng cao
"Trồng cây trong chậu nhỏ hoặc terrarium giúp tăng tính thẩm mỹ và duy trì độ ẩm ổn định.",
"Xoay chậu định kỳ giúp cây phát triển đều và đẹp hơn.",
"Bón phân vào đầu mùa xuân giúp kích thích cây ra nhiều lá mới.",
"Có thể nhân giống Cỏ Đồng Tiền bằng phương pháp tách bụi hoặc giâm thân rất đơn giản.",

// 12. Không gian sống & phong cách
"Cỏ Đồng Tiền phù hợp với bàn làm việc, kệ sách, terrarium hoặc không gian nhỏ trong nhà.",
"Lá tròn xanh mướt giúp không gian trở nên tươi mới và gần gũi thiên nhiên hơn.",
"Theo phong thủy, cây tượng trưng cho tài lộc, sự sung túc và nguồn năng lượng tích cực.",
"Đây là lựa chọn lý tưởng cho phong cách tối giản, hiện đại hoặc decor thiên nhiên.",

"Admin",
"2026-05-22"
    )
);
blogManager.addBlog(
    new Blog(

        23,
        "Cách chăm sóc cây Trầu Bà Sữa lá đốm tuyệt đẹp cho không gian nội thất",
        "Trong nhà",
        "assets/images/traubasua.jpg",
        "Cây Trầu Bà Sữa (Marble Queen Pothos) thu hút ánh nhìn với những chiếc lá loang lổ xen lẫn sắc xanh và trắng sữa vô cùng nghệ thuật. Đây là một trong những loại cây cảnh dễ trồng nhất, mang lại vẻ đẹp tươi mới và khả năng lọc không khí tuyệt vời.",

// 1. Giới thiệu chung
        "Cây Trầu Bà Sữa",
        "Epipremnum aureum 'Marble Queen'",
        "Trầu Bà Sữa là dạng cây thân leo, nổi bật với phiến lá hình trái tim có những vệt đốm màu trắng sữa, kem và xanh lục hòa quyện. Cây phát triển nhanh, rễ phụ mọc ở các đốt thân giúp cây dễ dàng leo bám hoặc rủ xuống mềm mại.",
        "Trong phong thủy, Trầu Bà Sữa mang ý nghĩa mang lại may mắn, bình an và sự hanh thông trong công việc. Sự sinh sôi nảy nở nhanh chóng của cây tượng trưng cho tài lộc dồi dào, phát triển không ngừng.",
        "Rất dễ",

// 2. Ánh sáng
        "Để duy trì những mảng màu trắng sữa đẹp mắt trên lá, cây cần nguồn ánh sáng gián tiếp dồi dào nhưng không quá gay gắt.",
        "Vị trí lý tưởng là gần cửa sổ hướng Đông hoặc hướng Tây, hoặc những nơi có ánh sáng khuếch tán trong nhà.",
        "Nếu để ở nơi quá tối, lá cây sẽ dần chuyển sang màu xanh lục hoàn toàn để tăng cường quang hợp. Ngược lại, nắng gắt trực tiếp sẽ làm cháy phần lá màu trắng.",

// 3. Tưới nước
        "Trầu Bà Sữa thích môi trường ẩm nhưng không chịu được ngập úng. Chỉ nên tưới khi khoảng 2-3cm bề mặt đất đã khô hoàn toàn.",
        "Thường tưới 1-2 lần/tuần vào mùa hè và giảm tần suất vào mùa đông.",
        "Cây có thể biểu hiện thiếu nước bằng cách hơi rủ mép lá xuống, nhưng sẽ nhanh chóng căng mọng trở lại sau khi được tưới đẫm.",
        "Tưới quá nhiều là nguyên nhân chính gây thối rễ, làm lá chuyển sang màu vàng nhạt và rụng dần.",

// 4. Đất & chậu
        "Cây phát triển tốt nhất trong hỗn hợp đất tơi xốp, thoát nước nhanh và giàu mùn.",
        "Có thể trộn đất thịt với xơ dừa, trấu hun, đá perlite và một ít phân hữu cơ để tạo môi trường lý tưởng.",
        "Nên chọn chậu có lỗ thoát nước tốt. Có thể trồng trong chậu treo để nhánh rủ xuống hoặc chậu có cọc rêu để cây leo lên.",

// 5. Nhiệt độ & độ ẩm
        "Cây ưa khí hậu ấm áp, sinh trưởng mạnh mẽ nhất trong khoảng nhiệt độ từ 18-30°C.",
        "Trầu Bà Sữa rất thích độ ẩm cao. Trong môi trường điều hòa khô hanh, nên thường xuyên phun sương lên mặt lá để giúp cây luôn tươi tắn.",
        "Tránh đặt cây ngay trước luồng gió thổi trực tiếp của máy lạnh hoặc gần thiết bị tỏa nhiệt mạnh.",

// 6. Phân bón
        "Cây không đòi hỏi quá nhiều dinh dưỡng, nhưng bón phân định kỳ giúp lá to và màu sắc vân sữa phân bổ rõ nét hơn.",
        "Sử dụng phân bón dạng lỏng pha loãng (NPK hoặc phân hữu cơ) bón 1 tháng/lần trong giai đoạn sinh trưởng (mùa xuân, hè).",
        "Tạm ngưng bón phân vào mùa đông hoặc khi thời tiết quá lạnh khiến cây phát triển chậm lại.",

// 7. Cắt tỉa & vệ sinh
        "Thường xuyên bấm ngọn hoặc cắt tỉa các nhánh mọc quá dài để kích thích cây đâm chồi mới từ gốc, giúp chậu cây xum xuê hơn.",
        "Cắt bỏ ngay các lá già, lá úa sát phần gốc để giữ độ thông thoáng và ngăn ngừa nấm bệnh.",
        "Dùng khăn ẩm lau nhẹ mặt lá giúp loại bỏ bụi bẩn, tăng cường khả năng quang hợp và phát huy tối đa công dụng thanh lọc không khí.",

// 8. Sâu bệnh
        "Trầu Bà Sữa rất khỏe, ít sâu bệnh nhưng thỉnh thoảng có thể bị rệp sáp hoặc nhện đỏ tấn công nếu không gian quá khô nóng.",
        "Bệnh thối rễ do nấm phát sinh khi đất bị úng nước lâu ngày, biểu hiện là phần gốc nhũn đen và bốc mùi.",
        "Cần cách ly cây bệnh ngay lập tức, cắt bỏ phần rễ hư hại, thay đất mới và dùng dầu neem hoặc dung dịch tỏi ớt để xịt trị rệp.",

// 9. Lưu ý quan trọng
        "Phần lớn các loại Trầu Bà đều chứa tinh thể canxi oxalat mọc ẩn trong lá và thân, có thể gây ngứa hoặc kích ứng niêm mạc miệng nếu ăn phải.",
        "Nên đặt chậu cây trên kệ cao hoặc treo trên trần, ngoài tầm với của trẻ em và thú cưng (chó, mèo).",
        "Đừng để đất lúc nào cũng ướt sũng, nguyên tắc tưới 'khô rồi mới tưới đẫm' là cách an toàn nhất cho dòng cây này.",

// 10. Vấn đề thường gặp
        "Lá mất dần vân trắng sữa, chuyển sang màu xanh toàn bộ: Do thiếu ánh sáng trầm trọng, cần di chuyển cây ra nơi có ánh sáng tự nhiên nhiều hơn.",
        "Lá bị cháy mép hoặc xuất hiện các mảng nâu khô: Do để dưới nắng gắt trực tiếp hoặc do môi trường thiếu ẩm, cần chuyển cây vào mát và phun sương bổ sung.",

// 11. Mẹo chăm sóc nâng cao
        "Trầu Bà Sữa cực kỳ dễ nhân giống. Bạn chỉ cần cắt một đoạn thân có rễ phụ (khoảng 1-2 đốt lá) và cắm vào nước hoặc giâm vào đất ẩm là cây sẽ tự đâm rễ mới.",
        "Trồng cây thủy sinh trong bình thủy tinh trong suốt cũng là một cách decor tuyệt đẹp, chỉ cần nhớ thay nước 1 tuần/lần và nhỏ thêm vài giọt dung dịch thủy canh.",
        "Khi cho cây leo lên cọc rêu ẩm, rễ phụ có chỗ bám sẽ giúp kích thước lá của Trầu Bà phát triển to dần lên gấp nhiều lần theo thời gian.",
        "Bổ sung một chút phân vi lượng sẽ giúp các đốm trắng trên lá rực rỡ và tương phản mạnh hơn với nền xanh.",

// 12. Không gian sống & phong cách
        "Dáng rủ mềm mại của nhánh Trầu Bà Sữa vô cùng lý tưởng để đặt trên kệ sách, tủ kệ tivi cao, hoặc treo giỏ bên cửa sổ phòng ngủ.",
        "Sự kết hợp giữa hai mảng màu xanh - trắng mang đến vẻ đẹp thanh tao, tinh tế và giúp làm sáng bừng những góc phòng buồn tẻ.",
        "Cây là một 'cỗ máy' lọc không khí tự nhiên xuất sắc, có thể hấp thu formaldehyde và carbon monoxide, rất tốt cho môi trường làm việc.",
        "Cực kỳ dễ dàng phối hợp với các phong cách decor như Scandinavian (Bắc Âu), Bohemian (Boho) hay phong cách Minimalist (Tối giản).",

        "Admin",
        "2026-05-29"
    )
);
blogManager.addBlog(
    new Blog(

        24,
"Cách chăm sóc cây Phú Quý luôn xanh đẹp và rực rỡ",
"Trong nhà",
"assets/images/phuquy.jpg",
"Cây Phú Quý là loại cây cảnh phong thủy được yêu thích nhờ màu lá xanh pha đỏ nổi bật cùng ý nghĩa mang lại tài lộc và may mắn. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và giữ được màu sắc đẹp tự nhiên.",

// 1. Giới thiệu chung
"Cây Phú Quý",
"Aglaonema hybrid",
"Phú Quý là loại cây cảnh thuộc họ ráy với đặc điểm nổi bật là viền lá màu đỏ hồng kết hợp cùng màu xanh đậm bắt mắt. Dáng cây nhỏ gọn và sang trọng giúp cây phù hợp với nhiều không gian sống hiện đại.",
"Theo phong thủy, cây Phú Quý tượng trưng cho tài lộc, giàu sang và sự may mắn. Cây còn mang ý nghĩa thu hút nguồn năng lượng tích cực và thuận lợi trong công việc.",
"Rất dễ",

// 2. Ánh sáng
"Phú Quý phát triển tốt trong môi trường có ánh sáng gián tiếp và bóng râm nhẹ.",
"Nên đặt cây gần cửa sổ hoặc nơi có ánh sáng tự nhiên dịu nhẹ để giữ màu lá đẹp hơn.",
"Ánh nắng gắt trực tiếp có thể làm cháy lá và khiến màu đỏ trên lá bị nhạt đi.",

// 3. Tưới nước
"Phú Quý có nhu cầu nước ở mức trung bình và thích đất hơi ẩm.",
"Nên tưới khoảng 2–3 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
"Cần đảm bảo đất thoát nước tốt để tránh tình trạng úng rễ.",
"Tưới quá nhiều nước có thể khiến cây bị vàng lá, mềm thân và thối rễ.",

// 4. Đất & chậu
"Phú Quý thích hợp với loại đất tơi xốp, giàu dinh dưỡng và giữ ẩm vừa phải.",
"Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, tro trấu và perlite để tăng độ thông thoáng.",
"Chậu trồng cần có lỗ thoát nước để hạn chế đọng nước gây hại cho bộ rễ.",

// 5. Nhiệt độ & độ ẩm
"Nhiệt độ lý tưởng cho Phú Quý dao động từ 20–30°C.",
"Cây phát triển tốt trong môi trường có độ ẩm trung bình đến cao.",
"Nên tránh đặt cây gần máy lạnh hoặc nơi có gió mạnh vì dễ làm lá bị khô.",

// 6. Phân bón
"Phú Quý cần được bổ sung dinh dưỡng định kỳ để duy trì màu lá đẹp và phát triển ổn định.",
"Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1–2 tháng một lần.",
"Bón quá nhiều phân có thể gây cháy rễ hoặc làm cây phát triển mất cân đối.",

// 7. Cắt tỉa & vệ sinh
"Nên cắt bỏ lá vàng, lá úa hoặc phần cây hư hỏng để cây phát triển khỏe mạnh hơn.",
"Dùng khăn ẩm lau lá định kỳ giúp lá sạch bụi và bóng đẹp hơn.",
"Thay đất mới khoảng 1–2 năm một lần giúp cải thiện dinh dưỡng và môi trường sống cho cây.",

// 8. Sâu bệnh
"Phú Quý có thể gặp tình trạng rệp sáp, nhện đỏ hoặc nấm lá nếu môi trường quá ẩm và thiếu thông thoáng.",
"Các dấu hiệu thường gặp gồm lá vàng, đốm nâu hoặc thân cây mềm yếu.",
"Khi phát hiện sâu bệnh cần cách ly cây và sử dụng thuốc sinh học phù hợp để xử lý.",

// 9. Lưu ý quan trọng
"Không nên để cây dưới ánh nắng trực tiếp trong thời gian dài.",
"Tránh tưới quá nhiều nước hoặc để đất luôn sũng nước.",
"Nên đặt cây ở nơi thông thoáng để hạn chế sâu bệnh và giúp cây phát triển tốt hơn.",

// 10. Vấn đề thường gặp
"Lá vàng, nhạt màu hoặc cây phát triển chậm là những vấn đề phổ biến khi chăm sóc Phú Quý.",
"Điều chỉnh lượng nước tưới, ánh sáng và độ ẩm phù hợp sẽ giúp cây phục hồi hiệu quả.",

// 11. Mẹo chăm sóc nâng cao
"Xoay chậu định kỳ giúp cây phát triển cân đối và đẹp hơn.",
"Phun sương nhẹ vào những ngày hanh khô giúp duy trì độ ẩm cho lá.",
"Bón phân vào đầu mùa xuân giúp kích thích cây ra lá mới với màu sắc đẹp hơn.",
"Có thể nhân giống Phú Quý bằng phương pháp tách bụi hoặc giâm thân khá đơn giản.",

// 12. Không gian sống & phong cách
"Phú Quý phù hợp với bàn làm việc, phòng khách, văn phòng hoặc quán cà phê hiện đại.",
"Màu lá xanh đỏ nổi bật giúp không gian trở nên sang trọng và có điểm nhấn hơn.",
"Theo phong thủy, cây tượng trưng cho tài lộc, may mắn và sự thịnh vượng.",
"Đây là lựa chọn lý tưởng cho phong cách hiện đại, tối giản hoặc decor thiên nhiên.",

"Admin",
"2026-05-22"
    )
);
blogManager.addBlog(
    new Blog(

        25,
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

        26,
        "Cách chăm sóc cây Tùng Thơm tỏa hương dịu nhẹ, xua đuổi côn trùng",
        "Trong nhà",
        "assets/images/tungthom.jpg",
        "Cây Tùng Thơm mang hình dáng tháp xinh xắn, màu xanh vàng chanh tươi mát và đặc biệt tỏa ra mùi hương thoang thoảng giúp thư giãn tinh thần, xua đuổi muỗi rất hiệu quả. Đây là món quà tuyệt vời cho không gian sống của bạn.",

// 1. Giới thiệu chung
        "Cây Tùng Thơm",
        "Cupressus macrocarpa 'Goldcrest'",
        "Cây thuộc họ lá kim, có dáng mọc hình tháp tự nhiên rất đẹp mắt. Điểm đặc biệt nhất của cây là toàn thân tỏa ra mùi tinh dầu thoang thoảng giống hương chanh tự nhiên, mang lại cảm giác thư giãn tuyệt vời.",
        "Trong phong thủy, Tùng Thơm đại diện cho sự kiên cường, trường thọ và khí tiết thanh cao. Mùi hương của cây còn được cho là giúp trừ tà, xua đuổi điềm xấu và thu hút may mắn vào nhà.",
        "Trung bình",

// 2. Ánh sáng
        "Tùng Thơm là cây ưa sáng nhưng thích ánh sáng dịu nhẹ, không chịu được ánh nắng gay gắt trực tiếp của mùa hè.",
        "Nên đặt cây ở khu vực gần cửa sổ, ban công có mái che hoặc những nơi có ánh sáng khuếch tán tốt trong nhà.",
        "Nếu để cây trong môi trường quá tối lâu ngày, lá cây sẽ bị rụng, mất đi màu xanh vàng chanh đặc trưng và thân trở nên yếu ớt.",

// 3. Tưới nước
        "Cây ưa ẩm nhưng lại cực kỳ sợ ngập úng. Nhu cầu nước của cây phụ thuộc rất lớn vào vị trí đặt và thời tiết.",
        "Nên tưới nước dạng phun sương lên toàn bộ thân lá và tưới vào gốc khi thấy bề mặt đất đã khô (khoảng 2-3 lần/tuần).",
        "Dấu hiệu cây thiếu nước là ngọn non bị rủ gập xuống. Tuy nhiên, nếu tưới bù kịp thời cây sẽ nhanh chóng tươi căng trở lại.",
        "Tránh tưới đẫm vào buổi tối vì nước đọng trên kẽ lá có thể tạo điều kiện cho nấm bệnh phát triển làm đen lá.",

// 4. Đất & chậu
        "Đất trồng Tùng Thơm bắt buộc phải tơi xốp, giữ ẩm tốt nhưng phải thoát nước cực kỳ nhanh.",
        "Hỗn hợp tối ưu nên bao gồm đất thịt nhẹ trộn cùng xơ dừa, trấu hun, đá perlite và một ít phân hữu cơ hoai mục.",
        "Chậu trồng cần có lỗ thoát nước lớn ở đáy. Tránh dùng chậu quá to so với bầu rễ vì dễ gây đọng nước đầm lầy làm thối rễ.",

// 5. Nhiệt độ & độ ẩm
        "Cây phát triển tốt nhất trong môi trường mát mẻ, nhiệt độ lý tưởng dao động từ 15–25°C.",
        "Mặc dù ưa mát, cây vẫn cần sự thông thoáng gió. Không nên đặt cây ở phòng kín, bí bách trong thời gian dài.",
        "Vào những ngày thời tiết hanh khô hoặc phòng bật máy lạnh liên tục, nên thường xuyên phun sương xung quanh để tăng độ ẩm không khí.",

// 6. Phân bón
        "Tùng Thơm có nhu cầu dinh dưỡng không cao, lớn chậm nên không cần bón phân quá thường xuyên.",
        "Chỉ cần pha loãng phân NPK tưới vào gốc hoặc dùng phân trùn quế, phân tan chậm bón định kỳ 2-3 tháng/lần.",
        "Tuyệt đối không bón phân hóa học sát gốc hoặc với liều lượng cao vì rễ Tùng rất nhạy cảm, dễ bị xót rễ và chết héo.",

// 7. Cắt tỉa & vệ sinh
        "Cây có hình dáng tháp tự nhiên nên không cần cắt tỉa nhiều, chỉ cần bấm ngọn nếu muốn cây mọc tròn trịa và xum xuê hơn.",
        "Thường xuyên vạch phần bên trong tán lá ra để kiểm tra và tỉa bỏ những cành tăm, lá khô héo ở sát thân gốc để tạo độ thông thoáng.",
        "Việc làm sạch các lá khô bên trong giúp ngăn ngừa rệp sáp và nấm bệnh trú ngụ, đồng thời giúp cây phát triển khỏe mạnh.",

// 8. Sâu bệnh
        "Kẻ thù nguy hiểm nhất của Tùng Thơm là nấm rễ do đất bị úng nước hoặc môi trường thiếu độ thông thoáng gió.",
        "Ngoài ra, cây cũng có thể bị rệp sáp trắng bám ở kẽ lá hoặc gốc cây hút nhựa làm cây suy yếu, bạc màu.",
        "Khi phát hiện bệnh, cần ngưng tưới nước ngay, đem cây ra nơi thoáng gió và phun các loại thuốc đặc trị nấm hoặc rệp sinh học.",

// 9. Lưu ý quan trọng
        "Cây Tùng Thơm rất nhạy cảm với sự thay đổi môi trường đột ngột, không nên di chuyển cây liên tục giữa phơi nắng ngoài trời gắt và phòng điều hòa lạnh.",
        "Mùi tinh dầu của cây có tác dụng xua đuổi muỗi và côn trùng nhỏ rất hiệu quả, đặc biệt là khi tán lá bị rung động hoặc có gió thổi qua.",
        "Dù là cây cảnh nội thất, nhưng Tùng Thơm vẫn cần được 'thở', hãy luôn đảm bảo không gian xung quanh có sự lưu thông không khí tự nhiên.",

// 10. Vấn đề thường gặp
        "Lá cây bị khô héo từ trong ra ngoài hoặc đen đầu lá: Nguyên nhân thường do nấm thối rễ vì úng nước, hoặc do môi trường quá bí bách, thiếu gió trầm trọng.",
        "Ngọn non rủ xuống mềm nhũn: Đây là dấu hiệu cây đang kêu khát vì thiếu nước, hãy phun sương đẫm lá và tưới gốc, cây sẽ hồi sinh sau vài giờ.",

// 11. Mẹo chăm sóc nâng cao
        "Nên cho cây ra tắm nắng nhẹ vào sáng sớm (từ 7h-9h) khoảng 2-3 lần/tuần để cây quang hợp tốt và giữ được màu lá vàng chanh rực rỡ nhất.",
        "Nếu để trong phòng máy lạnh, tuyệt đối tránh đặt chậu cây trực tiếp dưới luồng gió phả ra từ điều hòa để lá không bị mất nước gây khô héo.",
        "Mỗi khi tưới nước dạng phun sương lên bề mặt lá, cây sẽ tỏa ra mùi hương chanh sảng khoái và đậm đà hơn bình thường.",
        "Không nên tự ý chiết hoặc giâm cành Tùng Thơm tại nhà vì tỷ lệ ra rễ rất thấp, nên mua cây giống ươm khỏe mạnh sẵn từ vườn.",

// 12. Không gian sống & phong cách
        "Với dáng tháp thanh lịch, Tùng Thơm cực kỳ thích hợp để trang trí trên bàn làm việc, kệ sách, bậu cửa sổ hoặc tủ đầu giường.",
        "Mùi hương dịu nhẹ giúp giảm căng thẳng, mang lại cảm giác thư thái và tỉnh táo, rất tốt cho môi trường văn phòng hoặc phòng ngủ.",
        "Vào dịp cuối năm, Tùng Thơm thường được tận dụng để trang trí thành những cây thông Noel mini vô cùng sinh động, ấm cúng và thơm ngát.",
        "Cây hòa hợp hoàn hảo với các phong cách decor hiện đại, mộc mạc, hoặc phong cách Bắc Âu (Scandinavian).",

        "Admin",
        "2026-05-29"
    )
);
blogManager.addBlog(
    new Blog(

        27,
"Cách chăm sóc cây Ngũ Gia Bì xanh tốt và mang lại may mắn",
"Trong nhà",
"assets/images/ngugiabi.jpg",
"Cây Ngũ Gia Bì là loại cây cảnh phong thủy được yêu thích nhờ tán lá xanh đẹp, dễ chăm sóc và ý nghĩa thu hút tài lộc, xua đuổi côn trùng. Bài viết hướng dẫn cách chăm sóc giúp cây luôn khỏe mạnh và phát triển bền đẹp.",

// 1. Giới thiệu chung
"Cây Ngũ Gia Bì",
"Schefflera arboricola",
"Ngũ Gia Bì là loại cây thân gỗ nhỏ với lá mọc thành cụm xòe như bàn tay, tạo cảm giác xanh mát và hài hòa cho không gian sống. Cây thường được dùng để trang trí phòng khách, bàn làm việc hoặc văn phòng.",
"Theo phong thủy, Ngũ Gia Bì tượng trưng cho sự ổn định, may mắn và giữ vững tài lộc. Cây còn được cho là có khả năng xua đuổi muỗi và thanh lọc không khí.",
"Rất dễ",

// 2. Ánh sáng
"Ngũ Gia Bì phát triển tốt trong môi trường có ánh sáng gián tiếp hoặc bán râm.",
"Nên đặt cây gần cửa sổ, ban công hoặc nơi có ánh sáng tự nhiên dịu nhẹ.",
"Thiếu ánh sáng có thể khiến cây phát triển chậm và lá thưa hơn.",

// 3. Tưới nước
"Ngũ Gia Bì có nhu cầu nước ở mức trung bình và không thích đất quá ẩm.",
"Nên tưới khoảng 2–3 lần mỗi tuần tùy điều kiện thời tiết và độ khô của đất.",
"Cần kiểm tra đất trước khi tưới để tránh tình trạng úng nước.",
"Tưới quá nhiều nước có thể làm cây vàng lá và thối rễ.",

// 4. Đất & chậu
"Ngũ Gia Bì thích hợp với loại đất tơi xốp, giàu dinh dưỡng và có khả năng thoát nước tốt.",
"Có thể sử dụng hỗn hợp đất hữu cơ kết hợp với xơ dừa, tro trấu và perlite để tăng độ thông thoáng.",
"Chậu trồng cần có lỗ thoát nước để hạn chế đọng nước gây hại cho bộ rễ.",

// 5. Nhiệt độ & độ ẩm
"Nhiệt độ lý tưởng cho Ngũ Gia Bì dao động từ 18–30°C.",
"Cây phát triển tốt trong môi trường có độ ẩm trung bình và không khí thông thoáng.",
"Nên tránh đặt cây gần máy lạnh hoặc nơi có gió lạnh mạnh trong thời gian dài.",

// 6. Phân bón
"Ngũ Gia Bì cần được bổ sung dinh dưỡng định kỳ để duy trì màu lá đẹp và phát triển ổn định.",
"Có thể sử dụng phân hữu cơ hoặc phân NPK loãng khoảng 1–2 tháng một lần.",
"Bón quá nhiều phân có thể làm cháy rễ hoặc khiến lá bị vàng.",

// 7. Cắt tỉa & vệ sinh
"Nên cắt bỏ lá già, lá vàng hoặc cành yếu để cây phát triển khỏe mạnh hơn.",
"Dùng khăn ẩm lau lá định kỳ giúp lá sạch bụi và tăng khả năng quang hợp.",
"Thay đất mới khoảng 1–2 năm một lần giúp cải thiện dinh dưỡng và môi trường phát triển cho cây.",

// 8. Sâu bệnh
"Ngũ Gia Bì có thể gặp tình trạng rệp sáp, nhện đỏ hoặc nấm lá nếu môi trường quá ẩm và thiếu thông thoáng.",
"Các dấu hiệu thường gặp gồm lá vàng, xuất hiện đốm nâu hoặc cây phát triển chậm.",
"Khi phát hiện sâu bệnh cần cách ly cây và sử dụng thuốc sinh học phù hợp để xử lý.",

// 9. Lưu ý quan trọng
"Không nên để cây dưới ánh nắng gắt trực tiếp trong thời gian dài.",
"Tránh tưới quá nhiều nước hoặc để nước đọng trong chậu.",
"Nên đặt cây ở nơi thông thoáng để giúp cây phát triển khỏe mạnh hơn.",

// 10. Vấn đề thường gặp
"Lá vàng, rụng lá hoặc cây phát triển chậm là những vấn đề phổ biến khi chăm sóc Ngũ Gia Bì.",
"Điều chỉnh lượng nước tưới, ánh sáng và thay đất mới sẽ giúp cây phục hồi hiệu quả.",

// 11. Mẹo chăm sóc nâng cao
"Xoay chậu định kỳ giúp cây phát triển cân đối và đẹp hơn.",
"Phun sương nhẹ vào những ngày hanh khô giúp duy trì độ ẩm cho lá.",
"Bón phân vào đầu mùa xuân giúp kích thích cây ra lá mới và phát triển mạnh hơn.",
"Có thể nhân giống Ngũ Gia Bì bằng phương pháp giâm cành khá đơn giản và hiệu quả.",

// 12. Không gian sống & phong cách
"Ngũ Gia Bì phù hợp với phòng khách, bàn làm việc, văn phòng hoặc quán cà phê hiện đại.",
"Tán lá xanh mát giúp không gian trở nên thư giãn và gần gũi thiên nhiên hơn.",
"Theo phong thủy, cây tượng trưng cho tài lộc, sự ổn định và nguồn năng lượng tích cực.",
"Đây là lựa chọn lý tưởng cho phong cách hiện đại, tối giản hoặc decor thiên nhiên.",

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

    const keyword = searchInput.value.trim();

    if (keyword) {

        blogs = blogManager.searchBlogs(keyword, blogs);
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
