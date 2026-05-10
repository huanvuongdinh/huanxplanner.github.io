/* global window */
/* Blog post data — bilingual EN/VI, under 500 words each.
   Each post has: slug, tag, date, readTime, hero, byline, title, dek, body[], related[]
   body[] entries: { type: 'p'|'h2'|'pull'|'figure', text?, src?, caption? }
*/
window.HXP_BLOG = [
  {
    slug: 'walking-the-edge',
    featured: true,
    date: 'Apr 15, 2026',
    readTime: { en: '12 min read', vi: '12 phút đọc' },
    tag: { en: 'ESSAY', vi: 'BÀI LUẬN' },
    hero: 'https://images.unsplash.com/photo-1577985259257-7c81c80c0fb3?w=1800',
    heroCaption: { en: 'A pedestrian path runs the length of the dyke at sunrise. Photograph by the author.', vi: 'Lối đi bộ chạy dọc thân đê lúc bình minh. Ảnh: tác giả.' },
    byline: { en: 'By Huan Vuong', vi: 'Tác giả: Huan Vuong' },
    title: { en: 'Walking the Edge: Notes from the Red River', vi: 'Đi dọc bờ rìa: Ghi chép từ sông Hồng' },
    dek: { en: 'A year of walks along the Red River dyke became a study of how a city negotiates with its largest piece of public infrastructure.', vi: 'Một năm đi bộ dọc đê sông Hồng trở thành nghiên cứu về cách một thành phố thương lượng với hạ tầng công cộng lớn nhất của nó.' },
    body: [
      { type: 'p', en: "I started walking the dyke in the spring, when the river was still low and the gardens on its inside slope were full of mustard greens and chrysanthemum. By autumn the river had crept up to the edge of those plots, and the gardeners — most of them in their seventies — had begun the patient work of moving everything to higher ground.", vi: "Tôi bắt đầu đi bộ trên đê vào mùa xuân, khi sông còn thấp và những mảnh vườn ở triền trong còn đầy cải canh và cúc. Đến mùa thu, nước sông đã dâng đến mép các mảnh vườn, và những người làm vườn — hầu hết đã ngoài bảy mươi — bắt đầu công việc kiên nhẫn dời mọi thứ lên cao." },
      { type: 'p', en: "The dyke is a piece of infrastructure that does not feel like infrastructure. It is the city's largest continuous public space, and almost no one calls it that. It hosts joggers at dawn, fishermen at dusk, lovers at midnight, weddings on Sundays, and a quiet population of people who have been priced out of the city behind it.", vi: "Đê là một hạ tầng không có cảm giác là hạ tầng. Đây là không gian công cộng liên tục lớn nhất của thành phố, và gần như không ai gọi nó bằng tên đó. Nó tiếp đón người chạy bộ lúc bình minh, người câu cá lúc hoàng hôn, các đôi tình nhân lúc nửa đêm, đám cưới các sáng Chủ nhật, và một dân số thầm lặng của những người bị đẩy ra khỏi thành phố phía sau nó." },
      { type: 'figure', src: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=1400', caption: { en: 'A market day takes shape on the inside slope of the dyke.', vi: 'Một phiên chợ hình thành trên triền trong của đê.' } },
      { type: 'h2', en: 'A negotiated edge', vi: 'Một bờ rìa được thương lượng' },
      { type: 'p', en: "Most of the maps I had seen treated the dyke as a line. Walking it taught me that it is a thick band of negotiations: between flood control and urban farming, between road and river, between the planning office and the people who maintain the small benches and the swept paths and the bougainvillea trellises that the planning office never drew.", vi: "Hầu hết các bản đồ tôi từng thấy coi con đê là một đường thẳng. Việc đi bộ trên nó dạy tôi rằng nó là một dải dày của những thương lượng: giữa chống lũ và canh tác đô thị, giữa đường và sông, giữa văn phòng quy hoạch và những con người duy trì các băng ghế nhỏ, lối đi được quét sạch, và các giàn hoa giấy mà văn phòng quy hoạch chưa bao giờ vẽ." },
      { type: 'pull', en: '"The dyke is a line on the master plan and a thick band of negotiations on the ground."', vi: '"Đê là một đường trên quy hoạch tổng thể và là một dải dày của những thương lượng trên thực địa."' },
      { type: 'p', en: "What I want to argue, in the longer essay this is a sketch of, is that the most important public spaces in Vietnamese cities are usually classified as something else. They are dykes, road shoulders, alleys, transformer yards, the slivers between buildings. They are publicly maintained, intensely used, and almost never funded as public space. The work, then, is partly a work of reclassification.", vi: "Điều tôi muốn lập luận, trong bài luận dài hơn mà đây là phác thảo, là những không gian công cộng quan trọng nhất ở các đô thị Việt Nam thường được phân loại là một thứ khác. Chúng là đê, lề đường, ngõ hẻm, sân máy biến áp, những khe hẹp giữa các tòa nhà. Chúng được duy trì công cộng, được dùng dày đặc, và gần như không bao giờ được cấp ngân sách như không gian công cộng. Công việc, do đó, một phần là công việc của việc phân loại lại." },
      { type: 'figure', src: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1400', caption: { en: 'A flood marker, recently repainted, sits beside a folding-chair café.', vi: 'Một cột mốc lũ vừa được sơn lại, đứng cạnh một quán cà phê ghế gấp.' } },
      { type: 'p', en: "In the meantime, I keep walking. The gardeners moved their mustard greens, the river receded, and someone hung a new string of lights along a stretch I'd assumed nobody owned. The edge is still there, still being thickened, every day.", vi: "Trong lúc chờ đợi, tôi vẫn tiếp tục đi. Những người làm vườn đã dời cải canh, sông đã rút, và ai đó đã treo một dây đèn mới dọc một đoạn mà tôi từng cho là không ai sở hữu. Bờ rìa vẫn ở đó, vẫn đang được làm dày lên, mỗi ngày." }
    ]
  },
  {
    slug: 'provisional-infrastructure',
    date: 'Mar 25, 2026',
    readTime: { en: '7 min read', vi: '7 phút đọc' },
    tag: { en: 'NOTES', vi: 'GHI CHÉP' },
    hero: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1800',
    heroCaption: { en: 'A bamboo scaffold doubles as an awning, a clothesline, and a bird perch.', vi: 'Giàn tre kiêm mái che, dây phơi và chỗ đậu cho chim.' },
    byline: { en: 'By Huan Vuong', vi: 'Tác giả: Huan Vuong' },
    title: { en: 'On Provisional Infrastructure', vi: 'Về hạ tầng tạm thời' },
    dek: { en: 'What the bamboo scaffolds, plastic awnings, and folding chairs of a Ho Chi Minh City alley taught me about urban resilience.', vi: 'Những gì giàn tre, mái bạt và ghế gấp của một con ngõ Sài Gòn dạy tôi về sức bền đô thị.' },
    body: [
      { type: 'p', en: "The alley I lived on was eight feet wide and contained a fruit seller, a barber, a motorbike repair stall, two cafés, a key cutter, and an unlicensed kindergarten. None of them owned the space they occupied. All of them maintained it.", vi: "Con ngõ tôi sống rộng hai mét rưỡi và chứa một người bán trái cây, một thợ cắt tóc, một quầy sửa xe máy, hai quán cà phê, một thợ làm chìa khóa, và một nhà trẻ không phép. Không ai sở hữu không gian họ chiếm. Tất cả đều duy trì nó." },
      { type: 'p', en: "Every morning the barber dragged out his mirror; every evening he dragged it back in. The fruit seller watered the small ficus the kindergarten teacher had planted. The repair stall lent stools to the cafés on Saturdays. None of this was on a plan.", vi: "Mỗi sáng người thợ cắt tóc kéo gương ra; mỗi tối anh kéo nó vào. Người bán trái cây tưới cây sung nhỏ mà cô giáo nhà trẻ đã trồng. Quầy sửa xe cho các quán cà phê mượn ghế đẩu vào thứ Bảy. Không gì trong đó nằm trên bản vẽ." },
      { type: 'figure', src: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1400', caption: { en: 'Folding chairs are stored vertically against the wall during business hours.', vi: 'Ghế gấp được dựng đứng vào tường trong giờ kinh doanh.' } },
      { type: 'h2', en: 'Soft systems', vi: 'Hệ thống mềm' },
      { type: 'p', en: "I think of these arrangements as soft systems. They have rules — who sets up where, who closes first when it rains, whose responsibility it is to call the city when the drain backs up — but the rules are unwritten and they update faster than any code.", vi: "Tôi gọi những sắp xếp này là hệ thống mềm. Chúng có quy tắc — ai dựng ở đâu, ai đóng cửa trước khi mưa đến, trách nhiệm của ai khi gọi cho thành phố lúc cống tắc — nhưng các quy tắc không được viết ra và chúng cập nhật nhanh hơn mọi quy chế." },
      { type: 'p', en: "Planners tend to encounter soft systems only when they break, or when an upgrade is proposed. Both moments produce the same instinct: harden, formalize, install something durable. But durability and resilience are not the same. The bamboo scaffold survives the typhoon because it is light enough to be taken down in an afternoon.", vi: "Các nhà quy hoạch thường chỉ gặp hệ thống mềm khi chúng hỏng, hoặc khi có đề xuất nâng cấp. Cả hai khoảnh khắc đều tạo cùng một bản năng: làm cứng, chính thức hóa, lắp đặt một thứ gì bền. Nhưng sự bền và sức chống chịu không giống nhau. Giàn tre sống sót qua bão vì nó đủ nhẹ để được tháo xuống trong một buổi chiều." },
      { type: 'p', en: "I left that alley three years ago. The barber is still there, and so is the kindergarten. The mirror still goes in and out every day.", vi: "Tôi rời con ngõ đó ba năm trước. Người thợ cắt tóc vẫn còn, và nhà trẻ cũng vậy. Cái gương vẫn được mang ra mang vào mỗi ngày." }
    ]
  },
  {
    slug: 'housing-by-and-for-the-public',
    date: 'Feb 19, 2026',
    readTime: { en: '9 min read', vi: '9 phút đọc' },
    tag: { en: 'ESSAY', vi: 'BÀI LUẬN' },
    hero: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1800',
    heroCaption: { en: 'A 1973 housing block in Central Falls, Rhode Island.', vi: 'Một khu nhà ở năm 1973 tại Central Falls, Rhode Island.' },
    byline: { en: 'By Huan Vuong', vi: 'Tác giả: Huan Vuong' },
    title: { en: 'Housing, By and For the Public', vi: 'Nhà ở, do và vì công chúng' },
    dek: { en: 'Bounded by the river, Central Falls has a long and unfinished history of public housing.', vi: 'Bao quanh bởi dòng sông, Central Falls có lịch sử lâu dài và còn dở dang về nhà ở công cộng.' },
    body: [
      { type: 'p', en: "Central Falls is the smallest, densest city in the smallest state. It is bounded by the Blackstone River on the east and a granite ridge on the west. Between them, twenty thousand people live on a square mile of land that has been industrial for two and a half centuries.", vi: "Central Falls là thành phố nhỏ nhất và đông đúc nhất ở bang nhỏ nhất. Nó giáp sông Blackstone ở phía đông và một dãy đá granit ở phía tây. Giữa hai bên, hai mươi nghìn người sống trên một dặm vuông đất từng là công nghiệp suốt hai thế kỷ rưỡi." },
      { type: 'p', en: "The first public housing here was built in 1939 by a federal program nobody quite remembers anymore. The most recent was built in 2018 by a community land trust nobody has heard of yet. Between those two dates the city went bankrupt twice and rebuilt itself, quietly, through a series of small experiments that never got their own name.", vi: "Khu nhà ở công cộng đầu tiên ở đây được xây năm 1939 bởi một chương trình liên bang mà không mấy ai còn nhớ. Khu gần nhất được xây năm 2018 bởi một quỹ đất cộng đồng mà chưa nhiều người biết đến. Giữa hai mốc này, thành phố hai lần phá sản và tự xây lại — lặng lẽ, qua một chuỗi thử nghiệm nhỏ chưa bao giờ có tên riêng." },
      { type: 'figure', src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400', caption: { en: 'A residents\' association meeting at the community center, 2025.', vi: 'Một cuộc họp của hội cư dân tại trung tâm cộng đồng, 2025.' } },
      { type: 'h2', en: 'Public, in two senses', vi: 'Công cộng, theo hai nghĩa' },
      { type: 'p', en: "I am interested in housing that is public in two senses: built with public money, and accountable to a public. Most of the housing called \"public\" in the United States meets the first criterion and not the second. The most interesting projects in Central Falls reverse that order.", vi: "Tôi quan tâm đến nhà ở công cộng theo hai nghĩa: được xây bằng tiền công, và chịu trách nhiệm trước một công chúng. Hầu hết nhà ở được gọi là \"công cộng\" ở Mỹ đáp ứng tiêu chí thứ nhất chứ không phải thứ hai. Những dự án thú vị nhất ở Central Falls đảo ngược thứ tự đó." },
      { type: 'pull', en: '"Built with public money, and accountable to a public — most projects meet the first criterion, not the second."', vi: '"Xây bằng tiền công, và chịu trách nhiệm trước một công chúng — hầu hết các dự án chỉ đáp ứng tiêu chí thứ nhất."' },
      { type: 'p', en: "The work that follows, then, is a question about ownership: who decides how the building is repaired, who has standing to object, who answers the door at the residents' association. The architecture is almost incidental. What matters is the legal scaffolding underneath.", vi: "Công việc tiếp theo, vì vậy, là một câu hỏi về quyền sở hữu: ai quyết định cách sửa tòa nhà, ai có quyền phản đối, ai mở cửa khi đến hội cư dân. Kiến trúc gần như là chuyện phụ. Điều quan trọng là khung pháp lý bên dưới." }
    ]
  },
  {
    slug: 'detroit-vacant-schools',
    date: 'Jan 12, 2026',
    readTime: { en: '8 min read', vi: '8 phút đọc' },
    tag: { en: 'FIELD NOTES', vi: 'GHI CHÉP THỰC ĐỊA' },
    hero: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800',
    heroCaption: { en: 'A 1924 elementary school awaits a second life on Detroit\'s east side.', vi: 'Một trường tiểu học năm 1924 chờ đời sống mới ở phía đông Detroit.' },
    byline: { en: 'By Huan Vuong', vi: 'Tác giả: Huan Vuong' },
    title: { en: "What Might Become of Detroit's Vacant Schools?", vi: 'Tương lai nào cho những ngôi trường bỏ hoang ở Detroit?' },
    dek: { en: 'Notes from a research trip into the politics of disinvestment, and the slow work of reuse.', vi: 'Ghi chép từ một chuyến nghiên cứu về chính trị của việc rút đầu tư và công việc chậm rãi của tái sử dụng.' },
    body: [
      { type: 'p', en: "Detroit closed a hundred and ninety-five public schools between 2000 and 2020. Most are still standing. A few have been demolished. A handful have been reborn as charter schools, churches, supportive housing, or — in one memorable case — an indoor farm.", vi: "Detroit đã đóng cửa một trăm chín mươi lăm trường công giữa năm 2000 và 2020. Hầu hết vẫn còn đứng. Một số đã bị phá. Một ít được tái sinh thành trường charter, nhà thờ, nhà ở hỗ trợ, hoặc — trong một trường hợp đáng nhớ — một nông trại trong nhà." },
      { type: 'p', en: "The buildings themselves are extraordinary. Most were built between 1910 and 1930, when the school was understood as the most civic building on the block. They have auditoriums, gymnasiums, libraries, kitchens. They have light. They are also, by every contemporary measure, expensive to bring back.", vi: "Bản thân các tòa nhà phi thường. Hầu hết được xây giữa năm 1910 và 1930, khi trường học được hiểu là công trình công dân quan trọng nhất trong khu phố. Chúng có khán phòng, phòng thể dục, thư viện, bếp. Chúng có ánh sáng. Chúng cũng, theo mọi thước đo hiện đại, tốn kém để hồi sinh." },
      { type: 'figure', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400', caption: { en: 'A repurposed gymnasium hosts a Friday-night community supper.', vi: 'Một phòng thể dục được chuyển đổi tổ chức bữa tối cộng đồng tối thứ Sáu.' } },
      { type: 'h2', en: 'The patient money problem', vi: 'Vấn đề tiền kiên nhẫn' },
      { type: 'p', en: "The hardest part of school reuse is not the asbestos, the boilers, or the roof. It is finding the kind of money that is willing to wait — five to seven years, in most cases — for the deal to close, the rezoning to clear, and the neighborhood to agree.", vi: "Phần khó nhất của việc tái sử dụng trường không phải là amiăng, nồi hơi hay mái. Đó là việc tìm loại tiền sẵn sàng chờ — năm đến bảy năm, trong hầu hết trường hợp — để giao dịch hoàn tất, việc phân vùng được duyệt, và khu phố đồng thuận." },
      { type: 'p', en: "What I saw in Detroit is that the money is starting to arrive. Not from the usual real-estate channels. From neighborhood land trusts, faith-based development corporations, and a few small foundations that are willing to be wrong slowly.", vi: "Điều tôi thấy ở Detroit là dòng tiền đó đang bắt đầu xuất hiện. Không phải từ các kênh bất động sản thông thường. Mà từ các quỹ đất khu phố, các tổng công ty phát triển dựa trên tôn giáo, và một vài quỹ nhỏ sẵn sàng sai một cách chậm rãi." }
    ]
  },
  {
    slug: 'arrival-is-infrastructure',
    date: 'Dec 4, 2025',
    readTime: { en: '11 min read', vi: '11 phút đọc' },
    tag: { en: 'INTERVIEW', vi: 'PHỎNG VẤN' },
    hero: 'https://images.unsplash.com/photo-1496564203457-11bb12075d90?w=1800',
    heroCaption: { en: 'Arrival cities, in their first hour: a bus stop in Lawrence, Massachusetts.', vi: 'Các đô thị nhập cư, giờ đầu tiên: bến xe buýt ở Lawrence, Massachusetts.' },
    byline: { en: 'By Huan Vuong', vi: 'Tác giả: Huan Vuong' },
    title: { en: 'Arrival Is an Infrastructure', vi: 'Sự đến là một hạ tầng' },
    dek: { en: 'A conversation with Daniel D\'Oca on how communities of arrival reshape post-industrial cities.', vi: 'Cuộc trò chuyện với Daniel D\'Oca về cách những cộng đồng nhập cư định hình lại các đô thị hậu công nghiệp.' },
    body: [
      { type: 'p', en: "I sat down with Daniel D'Oca on a cold morning in Cambridge, in the long room above the bookstore where he often takes meetings. We talked for two hours. The transcript is being edited; what follows is a sketch of the parts that have stayed with me.", vi: "Tôi gặp Daniel D'Oca vào một sáng lạnh ở Cambridge, trong căn phòng dài trên hiệu sách nơi anh thường họp. Chúng tôi nói chuyện hai tiếng. Bản ghi đang được biên tập; những gì theo sau là phác thảo những phần ở lại với tôi." },
      { type: 'h2', en: 'On the work of arrival', vi: 'Về công việc của sự đến' },
      { type: 'p', en: "D'Oca's argument, simplified, is that arrival is a piece of infrastructure that cities maintain badly. The first apartment, the first cousin to call, the first bus that gets you to a job — these are the rails along which a newcomer becomes a citizen, and they are almost never planned.", vi: "Lập luận của D'Oca, được đơn giản hóa, là sự đến là một mảnh hạ tầng mà các thành phố duy trì kém. Căn hộ đầu tiên, người họ hàng đầu tiên để gọi, chuyến xe buýt đầu tiên đưa bạn đến việc làm — đó là những đường ray mà một người mới trở thành công dân, và chúng gần như không bao giờ được quy hoạch." },
      { type: 'figure', src: 'https://images.unsplash.com/photo-1517398741578-2c5852032d44?w=1400', caption: { en: 'A weekend remittance line forms outside a corner store.', vi: 'Hàng người gửi kiều hối cuối tuần xếp ngoài một cửa hàng góc phố.' } },
      { type: 'p', en: "We talked about Lawrence, Hamtramck, Worcester. Cities that are smaller than the metros around them, that have been written off and are not. Cities where the planning office is, in many cases, the last institution to notice that a neighborhood has changed.", vi: "Chúng tôi nói về Lawrence, Hamtramck, Worcester. Những thành phố nhỏ hơn các vùng đô thị quanh chúng, từng bị coi là hết thời mà không phải vậy. Những thành phố nơi văn phòng quy hoạch, trong nhiều trường hợp, là thể chế cuối cùng nhận ra một khu phố đã thay đổi." },
      { type: 'pull', en: '"The planning office is, in many cases, the last institution to notice that a neighborhood has changed."', vi: '"Văn phòng quy hoạch, trong nhiều trường hợp, là thể chế cuối cùng nhận ra một khu phố đã thay đổi."' },
      { type: 'p', en: "I left the conversation with a question I'm still chewing on: what does it mean to plan for a city you do not yet know? D'Oca's answer, phrased gently, was that you build the rails and let the city teach you what they're for.", vi: "Tôi rời cuộc trò chuyện với một câu hỏi vẫn đang nhai: quy hoạch cho một thành phố mà bạn chưa biết đến nghĩa là gì? Câu trả lời của D'Oca, nói một cách nhẹ nhàng, là bạn xây các đường ray và để thành phố dạy bạn chúng để làm gì." }
    ]
  },
  {
    slug: 'shinagawa-reimagined',
    date: 'Nov 8, 2025',
    readTime: { en: '6 min read', vi: '6 phút đọc' },
    tag: { en: 'NOTES', vi: 'GHI CHÉP' },
    hero: 'https://images.unsplash.com/photo-1542223616-9de9adb5e3e8?w=1800',
    heroCaption: { en: 'The pedestrian deck at Shinagawa Station, after the morning rush.', vi: 'Sàn dành cho người đi bộ ở ga Shinagawa, sau giờ cao điểm sáng.' },
    byline: { en: 'By Huan Vuong', vi: 'Tác giả: Huan Vuong' },
    title: { en: 'Shinagawa, Reimagined', vi: 'Shinagawa, được hình dung lại' },
    dek: { en: 'A studio visit, a long lunch, and a conversation about how Tokyo trains its urbanists.', vi: 'Một chuyến thăm studio, một bữa trưa dài và cuộc trò chuyện về cách Tokyo đào tạo các nhà đô thị học.' },
    body: [
      { type: 'p', en: "I went to Shinagawa to see a redevelopment, and ended up spending most of my time at a small studio four train stops away. The studio is run by a woman who has been working on the same neighborhood, on and off, for thirty-one years.", vi: "Tôi đến Shinagawa để xem một dự án tái phát triển, và rốt cuộc dành phần lớn thời gian ở một studio nhỏ cách bốn ga tàu. Studio do một phụ nữ điều hành, người đã làm việc trên cùng một khu phố, lúc liên tục lúc ngắt quãng, suốt ba mươi mốt năm." },
      { type: 'figure', src: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1400', caption: { en: 'A wall of decades-old plan revisions, color-coded by neighborhood association.', vi: 'Bức tường các bản chỉnh sửa quy hoạch hàng chục năm, đánh màu theo hội phố.' } },
      { type: 'h2', en: 'Slow practice', vi: 'Thực hành chậm' },
      { type: 'p', en: "What struck me was the patience the practice has built into it. The studio's deliverable, on most projects, is not a master plan. It is a list of small interventions — a bench moved, a curb cut added, a setback negotiated — that accumulate over a decade into something resembling change.", vi: "Điều khiến tôi ấn tượng là sự kiên nhẫn được dệt vào thực hành đó. Sản phẩm bàn giao của studio, trong hầu hết các dự án, không phải là quy hoạch tổng thể. Đó là một danh sách các can thiệp nhỏ — một băng ghế được dời, một đoạn vỉa hè được hạ, một khoảng lùi được thương lượng — tích lũy trong một thập kỷ thành thứ gì đó tựa như thay đổi." },
      { type: 'p', en: "I came home with two notebooks of sketches and one question: what would it take to set up a practice like that in Vietnam? The answer, I think, is patient money and a willingness to be invisible for a long time. Both are harder to find than they should be.", vi: "Tôi mang về hai cuốn sổ phác thảo và một câu hỏi: cần gì để lập một thực hành như vậy ở Việt Nam? Câu trả lời, tôi nghĩ, là tiền kiên nhẫn và sự sẵn lòng vô hình trong một thời gian dài. Cả hai đều khó tìm hơn so với lẽ ra." }
    ]
  }
];
