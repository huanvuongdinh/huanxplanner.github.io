/* global React, window */
const { useState, useEffect } = React;
const useLang = window.useLang;
const t = window.t;

/* ============ LANG TOGGLE ============ */
function LangToggle() {
  const lang = useLang();
  return (
    <div className="hxp-lang" role="group" aria-label="Language">
      <button
        className={'hxp-lang__btn' + (lang === 'en' ? ' is-active' : '')}
        onClick={() => window.HXPLang.set('en')}
        aria-pressed={lang === 'en'}
      >EN</button>
      <span className="hxp-lang__sep">/</span>
      <button
        className={'hxp-lang__btn' + (lang === 'vi' ? ' is-active' : '')}
        onClick={() => window.HXPLang.set('vi')}
        aria-pressed={lang === 'vi'}
      >VI</button>
    </div>
  );
}

/* ============ HEADER ============ */
function Header({ active, base = '', logo = '../../assets/logo.svg' }) {
  useLang();
  const [open, setOpen] = useState(false);
  const links = [
    { id: 'home', en: 'Home', vi: 'Trang chủ', href: base + 'index.html' },
    { id: 'projects', en: 'Projects', vi: 'Dự án', href: base + 'projects.html' },
    { id: 'cv', en: 'CV', vi: 'Hồ sơ', href: base + 'cv.html' },
    { id: 'blog', en: 'Blog', vi: 'Bài viết', href: base + 'blog.html' },
    { id: 'contact', en: 'Contact', vi: 'Liên hệ', href: base + 'contact.html' },
  ];
  return (
    <header className="hxp-header">
      <div className="hxp-header__top">
        <a href={base + 'index.html'} className="hxp-header__brand">
          <img src={logo} alt="Huan Planner" />
        </a>
        <div className="hxp-header__util">
          <LangToggle />
          <a href="mailto:huan.vuong.planner@gmail.com" className="hxp-util-cta">{t('Contact me','Liên hệ')}</a>
          <button className="hxp-burger" aria-label="Open menu" onClick={() => setOpen(true)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <nav className="hxp-header__nav">
        {links.map(l => (
          <a key={l.id} href={l.href} className={active === l.id ? 'is-active' : ''}>{t(l.en, l.vi)}</a>
        ))}
      </nav>

      {open && (
        <div className="hxp-mobnav" onClick={(e)=>{ if (e.target === e.currentTarget) setOpen(false); }}>
          <div className="hxp-mobnav__panel">
            <button className="hxp-mobnav__close" aria-label="Close" onClick={()=>setOpen(false)}>×</button>
            <nav className="hxp-mobnav__links">
              {links.map(l => (
                <a key={l.id} href={l.href} className={active === l.id ? 'is-active' : ''}>{t(l.en, l.vi)}</a>
              ))}
            </nav>
            <div className="hxp-mobnav__foot">
              <LangToggle />
              <a href="mailto:huan.vuong.planner@gmail.com" className="hxp-util-cta">{t('Contact me','Liên hệ')}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ============ HOME — INTRO HERO ============ */
function IntroHero() {
  useLang();
  return (
    <section className="hxp-intro">
      <div className="hxp-intro__inner">
        <div className="hxp-intro__eyebrow">{t('URBAN PLANNER · RESEARCHER','NHÀ QUY HOẠCH ĐÔ THỊ · NGHIÊN CỨU')}</div>
        <h1 className="hxp-intro__title">
          {t(
            'Huan Vuong is a planner working at the intersection of urban policy, public space, and community-led design.',
            'Huân Vương là nhà quy hoạch làm việc tại giao điểm của chính sách đô thị, không gian công cộng và thiết kế dẫn dắt bởi cộng đồng.'
          )}
        </h1>
        <div className="hxp-intro__meta">
          <span>{t('Based in Ho Chi Minh City · Available for collaboration','Tại TP. Hồ Chí Minh · Sẵn sàng hợp tác')}</span>
        </div>
        <div className="hxp-intro__links">
          <a href="projects.html" className="hxp-link-arrow">{t('View projects →','Xem dự án →')}</a>
          <a href="cv.html" className="hxp-link-arrow">{t('Read CV →','Xem hồ sơ →')}</a>
        </div>
      </div>
    </section>
  );
}

/* ============ HOME — FEATURED PROJECT ============ */
function FeaturedProject() {
  useLang();
  return (
    <a href="projects/surfacing.html" className="hxp-feature">
      <div className="hxp-feature__image" style={{backgroundImage:"url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2000&q=85')"}} />
      <div className="hxp-feature__body">
        <div className="hxp-feature__eyebrow">{t('FEATURED PROJECT','DỰ ÁN NỔI BẬT')}</div>
        <h1 className="hxp-feature__title">Innovation District</h1>
        <div className="hxp-feature__date">{t('Research on Innovation model and framework for Ho Chi Minh city East · 2019 – 2020','Nghiên cứu mô hình đô thị sáng tạo và hướng áp dụng cho khu vực phía Đông - TP.HCM · 2019 – 2020')}</div>
        <div className="hxp-feature__tags">
          <span className="hxp-tag">{t('Research','Nghiên cứu')}</span>
          <span className="hxp-tag">{t('Framework','Khung áp dụng')}</span>
        </div>
      </div>
    </a>
  );
}

/* ============ HOME — RECENT WRITING ============ */
function RecentWriting() {
  useLang();
  const items = [
    {en:'Research on Innovation district model and framework for Ho Chi Minh city East · 2019 – 2020', date:'Nov 30, 2019', img:'https://images.unsplash.com/photo-1603852452516-972df21fccac?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {en:'Bird & Land', vi:'Chim & Đất', date:'Mar 17, 2026', img: '../../assets/img/DSCF0208.JPG'},
    {en:'Thu Thiem Central Plaza in Political and Climate Change Contexts – Ho Chi Minh City, Vietnam', vi:'Quảng trường trung tâm Thủ Thiêm trong bối cảnh chính trị & biến đổi khí hậu', date:'Apr 16, 2026', img:'../../assets/img/COVER-PLAZA.jpg'},
    {en:'Emergent Practices in South Asia', vi:'Những thực hành mới ở Nam Á', date:'Apr 14, 2026', img:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900'},
  ];
  return (
    <section className="hxp-rowblock">
      <h2 className="hxp-section-head">{t('RECENT WRITING','BÀI VIẾT GẦN ĐÂY')}</h2>
      <div className="hxp-row4">
        {items.map((it,i)=>(
          <a className="hxp-news" key={i} href="blog.html">
            <div className="hxp-news__img" style={{backgroundImage:`url('${it.img}')`}} />
            <h3 className="hxp-news__title">{t(it.en, it.vi)}</h3>
            <div className="hxp-news__meta">{it.date}<span className="dot">·</span><span className="hxp-news__more">{t('Read More','Đọc thêm')}</span></div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ============ PROJECTS PAGE ============ */
function ProjectsIndex() {
  useLang();
  const items = [
    {slug:'surfacing', en:'Surfacing', vi:'Nổi lên', loc:'Boston · Cambridge', dates:'2024 – 2026', tagEn:'Research', tagVi:'Nghiên cứu', img:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400'},
    {slug:'walking-festival', en:'Walking Festival of Sound', vi:'Lễ hội đi bộ âm thanh', loc:'Boston-Cambridge', dates:'2025', tagEn:'Public Program', tagVi:'Chương trình công cộng', img:'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1400'},
    {slug:'sunclipse', en:'Sunclipse Installation', vi:'Sắp đặt Sunclipse', loc:'Austin', dates:'2024', tagEn:'Installation', tagVi:'Sắp đặt', img:'https://images.unsplash.com/photo-1496564203457-11bb12075d90?w=1400'},
    {slug:'shinagawa', en:'Shinagawa Studio Fund', vi:'Quỹ Studio Shinagawa', loc:'Tokyo', dates:'2023 – 2024', tagEn:'Studio', tagVi:'Studio', img:'https://images.unsplash.com/photo-1542223616-9de9adb5e3e8?w=1400'},
    {slug:'emergent-practices', en:'Emergent Practices in South Asia', vi:'Những thực hành mới ở Nam Á', loc:'Mumbai · Dhaka', dates:'2022 – 2023', tagEn:'Exhibition', tagVi:'Triển lãm', img:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400'},
    {slug:'resourceful-urbanism', en:'Resourceful Urbanism', vi:'Đô thị giàu tài nguyên', loc:'Berlin', dates:'2022', tagEn:'Research', tagVi:'Nghiên cứu', img:'https://images.unsplash.com/photo-1577985259257-7c81c80c0fb3?w=1400'},
  ];
  return (
    <section className="hxp-rowblock">
      <div className="hxp-page-head">
        <div className="hxp-page-eyebrow">{t('SELECTED WORK · 2022 – 2026','TUYỂN CHỌN · 2022 – 2026')}</div>
        <h1 className="hxp-page-title">{t('Projects','Dự án')}</h1>
        <p className="hxp-page-lead">{t(
          'Field studies, public programs, and design research at the intersection of policy, infrastructure, and the everyday life of cities.',
          'Nghiên cứu thực địa, chương trình công cộng, và nghiên cứu thiết kế tại giao điểm của chính sách, hạ tầng và đời sống thường nhật của các đô thị.'
        )}</p>
      </div>
      <div className="hxp-row2">
        {items.map((it,i)=>(
          <a className="hxp-exh" key={i} href={`projects/${it.slug}.html`}>
            <div className="hxp-exh__img" style={{backgroundImage:`url('${it.img}')`}} />
            <h3 className="hxp-exh__title">{t(it.en, it.vi)}</h3>
            <div className="hxp-exh__meta">
              <div>{it.loc}</div>
              <div>{it.dates}</div>
            </div>
            <span className="hxp-tag">{t(it.tagEn, it.tagVi)}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ============ CV PAGE ============ */
function CV() {
  useLang();
  const sections = [
    {
      head: t('EDUCATION','HỌC VẤN'),
      rows: [
    
        { left: '2015 – 2020', title: t('B.A. Regional and Urban Planning','Kiến trúc sư Quy Hoạch vùng và đô thị'), org: t('University of Architecture, Ho Chi Minh City','Đại học Kiến Trúc TP. Hồ Chí Minh') },
      ],
    },
    {
      head: t('EXPERIENCE','KINH NGHIỆM'),
      rows: [
        { left: t('2024 – Now','2024 – Nay'), title: t('Senior Urban planner & Independent Planner','Kiến trúc sư quy hoạch cao cấp & Nhà quy hoạch độc lập'), org: 'DE-SO Asia', note: t('Research, public programs, and design strategy for community-led projects.','Nghiên cứu, chương trình công cộng và chiến lược thiết kế cho các dự án cộng đồng.') },
        { left: '2023 – 2024', title: t('Urban Planner','Nhà thiết Quy hoạch đô thị'), org: 'E-Water and Royal Haskoning HDV - subcontractor',note: t('Research, Mapping and Integrated Presentation – Ho Chi Minh City Master Plan 2021–2030, Vision to 2050','Nghiên cứu, bản đồ hóa và tổng hợp trang trình chiếu báo cáo cho Quy hoạch Thành phố Hồ Chính Minh thời kỳ 2021-2030, tầm nhìn đến 2050.') },
        { left: '2023 – 2024', title: t('Urban Planner','Nhà thiết Quy hoạch đô thị'), org: 'NDA Viet Nam', },
        { left: '2022 – 2023', title: t('Urban planner','Nhà Quy hoạch đô thị'), org: t('Hung Thinh Land — Department of Design management - Urban planning','Hưng Thịnh Land — Phòng Quản lý thiết kế quy hoạch'),},
        { left: '2021 – 2022', title: t('Urban Planner','Nhà thiết Quy hoạch đô thị'), org: 'DE-SO Asia', },
      ],
    },
    {
      head: t('WRITING & RESEARCH','BÀI VIẾT & NGHIÊN CỨU'),
      rows: [
        { left: '2026', title: t('Thu Thiem Central Plaza in Political and Climate Change Contexts – Ho Chi Minh City, Vietnam','Quảng trường trung tâm Thủ Thiêm trong bối cảnh chính trị & biến đổi khí hậu'), org: 'Blog' },
        { left: '2026', title: t('Bird & Land','Chim & Đất'), org: t('Blog') },
        { left: '2019 – 2020', title: t('Research on Innovation model and framework for Ho Chi Minh city East · ','Nghiên cứu mô hình đô thị sáng tạo và hướng áp dụng cho khu vực phía Đông - TP.HCM · 2019 – 2020'), org: 'UAH - University of Architecture, Ho Chi Minh city' },
      ],
    },
    
    {
      head: t('LANGUAGES','NGÔN NGỮ'),
      rows: [
        { left: t('Vietnamese','Tiếng Việt'), title: t('Native','Bản ngữ') },
        { left: t('English','Tiếng Anh'), title: t('Fluent','Thành thạo') },
    
      ],
    },
  ];
  return (
    <section className="hxp-rowblock">
      <div className="hxp-page-head">
        <div className="hxp-page-eyebrow">{t('CURRICULUM VITAE','HỒ SƠ NĂNG LỰC')}</div>
        <h1 className="hxp-page-title">{t('Dinh Huan Vuong','Vương Đình Huấn')}</h1>
        <p className="hxp-page-lead">{t('Urban planner and design researcher. Available for collaboration, research fellowships, and teaching.','Nhà quy hoạch đô thị và nghiên cứu thiết kế. Sẵn sàng hợp tác, học bổng nghiên cứu và giảng dạy.')}</p>
        <div className="hxp-cv-actions">
          <a href="mailto:huan.vuong.planner@gmail.com" className="hxp-link-arrow">huan.vuong.planner@gmail.com →</a>
          <a href="tel:+84916244909" className="hxp-link-arrow">(+84) 0916 244 909 →</a>
          <a href="#" className="hxp-link-arrow">{t('Download PDF →','Tải PDF →')}</a>
        </div>
      </div>
      <div className="hxp-cv">
        {sections.map((s,si)=>(
          <div className="hxp-cv__section" key={si}>
            <h2 className="hxp-cv__head">{s.head}</h2>
            <div className="hxp-cv__rows">
              {s.rows.map((r,ri)=>(
                <div className="hxp-cv__row" key={ri}>
                  <div className="hxp-cv__date">{r.left}</div>
                  <div className="hxp-cv__body">
                    <div className="hxp-cv__title">{r.title}</div>
                    {r.org && <div className="hxp-cv__org">{r.org}</div>}
                    {r.note && <div className="hxp-cv__note">{r.note}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ BLOG POST (article) ============ */
function BlogPost({ slug }) {
  useLang();
  const lang = window.HXPLang.get();
  const post = (window.HXP_BLOG || []).find(p => p.slug === slug);
  if (!post) return <section style={{padding: 80}}>Post not found.</section>;
  const tx = (v) => typeof v === 'string' ? v : (v ? (lang === 'vi' ? v.vi : v.en) : '');
  return (
    <article className="hxp-article">
      <div className="hxp-article__head">
        <div className="hxp-article__eyebrow">{tx(post.tag)} · {post.date} · {tx(post.readTime)}</div>
        <h1 className="hxp-article__title">{tx(post.title)}</h1>
        <p className="hxp-article__dek">{tx(post.dek)}</p>
        <div className="hxp-article__byline">{tx(post.byline)}</div>
      </div>
      <figure className="hxp-article__hero">
        <img src={post.hero} alt="" />
        {post.heroCaption ? <figcaption>{tx(post.heroCaption)}</figcaption> : null}
      </figure>
      <div className="hxp-article__body">
        {post.body.map((blk, i) => {
          if (blk.type === 'h2') return <h2 key={i} className="hxp-article__h2">{tx({en: blk.en, vi: blk.vi})}</h2>;
          if (blk.type === 'pull') return <blockquote key={i} className="hxp-article__pull">{tx({en: blk.en, vi: blk.vi})}</blockquote>;
          if (blk.type === 'figure') return (
            <figure key={i} className="hxp-article__fig">
              <img src={blk.src} alt="" />
              {blk.caption ? <figcaption>{tx(blk.caption)}</figcaption> : null}
            </figure>
          );
          return <p key={i} className="hxp-article__p">{tx({en: blk.en, vi: blk.vi})}</p>;
        })}
      </div>
      <div className="hxp-article__foot">
        <a href="../blog.html" className="hxp-link-arrow">← {t('Back to all posts','Tất cả bài viết')}</a>
      </div>
    </article>
  );
}

/* ============ BLOG PAGE ============ */
function BlogIndex() {
  useLang();
  const featured = {
    en:{title:'Walking the Edge: Notes from the Red River', body:'A year of walks along the Red River dyke became a study of how a city negotiates with its largest piece of public infrastructure — and the people who occupy its margins.', tag:'ESSAY', meta:'12 min read'},
    vi:{title:'Đi dọc bờ rìa: Ghi chép từ sông Hồng', body:'Một năm đi bộ dọc đê sông Hồng trở thành nghiên cứu về cách một thành phố thương lượng với mảng hạ tầng công cộng lớn nhất của nó — và những con người chiếm giữ các bờ rìa.', tag:'BÀI LUẬN', meta:'12 phút đọc'},
    date:'Apr 15, 2026',
    img:'https://images.unsplash.com/photo-1577985259257-7c81c80c0fb3?w=1800'
  };
  const items = [
    {en:{title:'On Provisional Infrastructure', body:'What the bamboo scaffolds, plastic awnings, and folding chairs of a Ho Chi Minh City alley taught me about urban resilience.', tag:'NOTES'}, vi:{title:'Về hạ tầng tạm thời', body:'Những gì giàn tre, mái bạt và ghế gấp của một con ngõ Sài Gòn dạy tôi về sức bền đô thị.', tag:'GHI CHÉP'}, date:'Mar 25, 2026', img:'https://images.unsplash.com/photo-1448630360428-65456885c650?w=900'},
    {en:{title:'Housing, By and For the Public', body:'Bounded by the river, a vital artery for industry since the late eighteenth century, Central Falls has a long history of public housing.', tag:'ESSAY'}, vi:{title:'Nhà ở, do và vì công chúng', body:'Bao quanh bởi dòng sông — huyết mạch công nghiệp từ cuối thế kỷ mười tám — Central Falls có lịch sử lâu dài về nhà ở công cộng.', tag:'BÀI LUẬN'}, date:'Feb 19, 2026', img:'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=900'},
    {en:{title:'What Might Become of Detroit\'s Vacant Schools?', body:'Notes from a research trip into the politics of disinvestment, and the slow work of reuse.', tag:'FIELD NOTES'}, vi:{title:'Tương lai nào cho những ngôi trường bỏ hoang ở Detroit?', body:'Ghi chép từ một chuyến nghiên cứu về chính trị của việc rút đầu tư và công việc chậm rãi của tái sử dụng.', tag:'GHI CHÉP THỰC ĐỊA'}, date:'Jan 12, 2026', img:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900'},
    {en:{title:'Arrival Is an Infrastructure', body:'Conversations with Daniel D\'Oca on how communities of arrival reshape post-industrial cities.', tag:'INTERVIEW'}, vi:{title:'Sự đến là một hạ tầng', body:'Trò chuyện với Daniel D\'Oca về cách những cộng đồng nhập cư định hình lại các đô thị hậu công nghiệp.', tag:'PHỎNG VẤN'}, date:'Dec 4, 2025', img:'https://images.unsplash.com/photo-1496564203457-11bb12075d90?w=900'},
    {en:{title:'Shinagawa, Reimagined', body:'A studio visit, a long lunch, and a conversation about how Tokyo trains its urbanists.', tag:'NOTES'}, vi:{title:'Shinagawa, được hình dung lại', body:'Một chuyến thăm studio, một bữa trưa dài và cuộc trò chuyện về cách Tokyo đào tạo các nhà đô thị học.', tag:'GHI CHÉP'}, date:'Nov 8, 2025', img:'https://images.unsplash.com/photo-1542223616-9de9adb5e3e8?w=900'},
    {en:{title:'Emergent Practices in South Asia', body:'Field notes from Mumbai and Dhaka on the small studios doing big work outside the institutional spotlight.', tag:'ESSAY'}, vi:{title:'Những thực hành mới ở Nam Á', body:'Ghi chép thực địa từ Mumbai và Dhaka về các studio nhỏ đang làm việc lớn ngoài tầm chú ý của thể chế.', tag:'BÀI LUẬN'}, date:'Oct 1, 2025', img:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900'},
  ];
  const lang = window.HXPLang.get();
  const f = lang === 'vi' ? featured.vi : featured.en;
  return (
    <section className="hxp-rowblock">
      <div className="hxp-page-head">
        <div className="hxp-page-eyebrow">{t('JOURNAL','TẠP CHÍ')}</div>
        <h1 className="hxp-page-title">{t('Blog','Bài viết')}</h1>
        <p className="hxp-page-lead">{t('Essays, field notes, and conversations on cities, public space, and the practice of planning.','Bài luận, ghi chép thực địa và các cuộc trò chuyện về đô thị, không gian công cộng và thực hành quy hoạch.')}</p>
      </div>

      <a href="#" className="hxp-blog-feature">
        <div className="hxp-blog-feature__img" style={{backgroundImage:`url('${featured.img}')`}} />
        <div className="hxp-blog-feature__body">
          <div className="hxp-blog-feature__tag">{f.tag}</div>
          <h2 className="hxp-blog-feature__title">{f.title}</h2>
          <p className="hxp-blog-feature__body-text">{f.body}</p>
          <div className="hxp-blog-feature__meta">{featured.date} · {f.meta}</div>
        </div>
      </a>

      <div className="hxp-row3" style={{marginTop: 56}}>
        {items.map((it,i)=>{
          const c = lang === 'vi' ? it.vi : it.en;
          return (
            <a className="hxp-disc" key={i} href="#">
              <div className="hxp-disc__img" style={{backgroundImage:`url('${it.img}')`}} />
              <div className="hxp-disc__tag">{c.tag}</div>
              <h3 className="hxp-disc__title">{c.title}</h3>
              <p className="hxp-disc__body">{c.body}</p>
              <div className="hxp-disc__meta">{it.date}</div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

/* ============ CONTACT PAGE ============ */
function Contact() {
  useLang();
  return (
    <section className="hxp-contact">
      <div className="hxp-contact__inner">
        <div className="hxp-page-eyebrow" style={{color:'#fff', borderColor:'#fff'}}>{t('GET IN TOUCH','LIÊN HỆ')}</div>
        <h1 className="hxp-contact__title">{t("Let's work together.",'Cùng hợp tác nhé.')}</h1>
        <p className="hxp-contact__lead">{t(
          "I'm available for collaborations, research fellowships, public programs, and writing commissions. The fastest way to reach me is email.",
          "Tôi sẵn sàng cho các dự án hợp tác, học bổng nghiên cứu, chương trình công cộng và bài viết theo yêu cầu. Cách nhanh nhất để liên lạc là qua email."
        )}</p>
        <a href="mailto:huan.vuong.planner@gmail.com" className="hxp-contact__email">huan.vuong.planner@gmail.com</a>
        <a href="tel:+84916244909" className="hxp-contact__email" style={{marginLeft: 24}}>(+84) 0916 244 909</a>

        <div className="hxp-contact__grid">
          <div className="hxp-contact__col">
            <div className="hxp-contact__label">{t('BASED IN','TRỤ SỞ TẠI')}</div>
            <div className="hxp-contact__value">{t('Ho Chi Minh City, Vietnam','TP. Hồ Chí Minh, Việt Nam')}<br/>Cambridge, MA</div>
          </div>
          <div className="hxp-contact__col">
            <div className="hxp-contact__label">{t('CURRENTLY','HIỆN TẠI')}</div>
            <div className="hxp-contact__value">{t('Independent practice','Hành nghề độc lập')}<br/>{t('Open to collaboration','Sẵn sàng hợp tác')}</div>
          </div>
          <div className="hxp-contact__col">
            <div className="hxp-contact__label">{t('RESPONSE TIME','THỜI GIAN PHẢN HỒI')}</div>
            <div className="hxp-contact__value">{t('Within 3 business days','Trong vòng 3 ngày làm việc')}<br/>{t('Mon – Fri','Thứ Hai – Thứ Sáu')}</div>
          </div>
        </div>

        <div className="hxp-contact__social">
          <a href="https://www.linkedin.com/in/hu%E1%BA%A5n-v%C6%B0%C6%A1ng-%C4%91%C3%ACnh-121ba5184/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="https://www.instagram.com/huanxplanner" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
        </div>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
function Footer({ base = '' }) {
  useLang();
  return (
    <footer className="hxp-footer">
      <div className="hxp-footer__social">
        <a href="https://www.linkedin.com/in/hu%E1%BA%A5n-v%C6%B0%C6%A1ng-%C4%91%C3%ACnh-121ba5184/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/huanxplanner" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <div className="hxp-footer__util">
        <a href="mailto:huan.vuong.planner@gmail.com">huan.vuong.planner@gmail.com</a>
      </div>
      <div className="hxp-footer__mission">
        {t(
          'Huan Vuong — independent planner working on urban policy, public space, and community-led design.',
          'Huân Vương — nhà quy hoạch độc lập làm việc về chính sách đô thị, không gian công cộng và thiết kế dẫn dắt bởi cộng đồng.'
        )}
      </div>
      <div className="hxp-footer__legal">
        <a href={base + 'index.html'}>{t('Home','Trang chủ')}</a>
        <a href={base + 'projects.html'}>{t('Projects','Dự án')}</a>
        <a href={base + 'cv.html'}>{t('CV','Hồ sơ')}</a>
        <a href={base + 'blog.html'}>{t('Blog','Bài viết')}</a>
        <a href={base + 'contact.html'}>{t('Contact','Liên hệ')}</a>
      </div>
      <div className="hxp-footer__copy">© 2026 Huan Vuong</div>
    </footer>
  );
}

/* ============ PROJECT DETAIL ============ */
function ProjectDetail({ data, prev, next }) {
  useLang();
  const lang = window.HXPLang.get();
  const pick = (en, vi) => (lang === 'vi' && vi) ? vi : en;
  const d = {
    title: pick(data.title, data.titleVi),
    tag: pick(data.tag, data.tagVi),
    subtitle: pick(data.subtitle, data.subtitleVi),
    cover: data.cover,
    meta: data.meta.map(m => ({ label: pick(m.label, m.labelVi), value: pick(m.value, m.valueVi) })),
    overview: pick(data.overview, data.overviewVi),
    gallery: data.gallery,
    body: data.body && data.body.map(s => ({
      head: pick(s.head, s.headVi),
      paragraphs: pick(s.paragraphs, s.paragraphsVi)
    })),
  };
  return (
    <article>
      <section className="hxp-pd-hero">
        <div className="hxp-pd-hero__img" style={{backgroundImage:`url('${d.cover}')`}} />
        <div className="hxp-pd-hero__body">
          <div className="hxp-pd-hero__eyebrow">{d.tag}</div>
          <h1 className="hxp-pd-hero__title">{d.title}</h1>
          <p className="hxp-pd-hero__sub">{d.subtitle}</p>
        </div>
      </section>

      <section className="hxp-pd-meta">
        <div className="hxp-pd-meta__row">
          {d.meta.map((m,i)=>(
            <div className="hxp-pd-meta__col" key={i}>
              <div className="hxp-pd-meta__label">{m.label}</div>
              <div className="hxp-pd-meta__value">{m.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="hxp-pd-overview">
        <div className="hxp-pd-overview__head">
          <div className="hxp-page-eyebrow">{t('OVERVIEW','TỔNG QUAN')}</div>
        </div>
        <div className="hxp-pd-overview__body">
          {d.overview.map((p,i)=><p key={i}>{p}</p>)}
        </div>
      </section>

      {d.gallery && d.gallery.length > 0 && (
        <section className="hxp-pd-gallery">
          {d.gallery.map((g,i)=>(
            <figure className="hxp-pd-fig" key={i} style={g.wide ? {gridColumn:'1 / -1'} : null}>
              <div className="hxp-pd-fig__img" style={{backgroundImage:`url('${g.img}')`, aspectRatio: g.ratio || '16/10'}} />
              {g.caption && <figcaption className="hxp-pd-fig__cap">{pick(g.caption, g.captionVi)}</figcaption>}
            </figure>
          ))}
        </section>
      )}

      {d.body && d.body.length > 0 && (
        <section className="hxp-pd-body">
          {d.body.map((s,i)=>(
            <div className="hxp-pd-body__section" key={i}>
              <h2 className="hxp-pd-body__head">{s.head}</h2>
              <div className="hxp-pd-body__copy">
                {s.paragraphs.map((p,j)=><p key={j}>{p}</p>)}
              </div>
            </div>
          ))}
        </section>
      )}

      <section className="hxp-pd-nav">
        {prev && (
          <a className="hxp-pd-nav__link hxp-pd-nav__link--prev" href={`${prev.slug}.html`}>
            <div className="hxp-pd-nav__dir">{t('← Previous Project','← Dự án trước')}</div>
            <div className="hxp-pd-nav__title">{pick(prev.title, prev.titleVi)}</div>
          </a>
        )}
        {next && (
          <a className="hxp-pd-nav__link hxp-pd-nav__link--next" href={`${next.slug}.html`}>
            <div className="hxp-pd-nav__dir">{t('Next Project →','Dự án tiếp →')}</div>
            <div className="hxp-pd-nav__title">{pick(next.title, next.titleVi)}</div>
          </a>
        )}
      </section>
    </article>
  );
}

Object.assign(window, {
  Header, IntroHero, FeaturedProject, RecentWriting,
  ProjectsIndex, CV, BlogIndex, Contact, Footer, ProjectDetail, LangToggle
});
