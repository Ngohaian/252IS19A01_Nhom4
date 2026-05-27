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
