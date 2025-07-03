function Home() {
    return (
        <div>
            {/* Nhúng style cho hiệu ứng hover, nền gradient và các custom class */}
            <style>
                {`
          /* Reset cơ bản */
          body {
            margin: 0;
            background: linear-gradient(to right, #ffe0e9, #f5e6ff);
            font-family: 'Segoe UI', sans-serif;
          }

          /* Thanh Navbar */
          .navbar-custom {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          /* Hero section */
          .hero {
            background: url('./images/anhbu.png') center/cover no-repeat;
            color: #fff;
            position: relative;
          }
          .hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.4);
          }
          .hero .hero-content {
            position: relative;
            z-index: 1;
          }

          /* Card custom */
          .card-custom {
            border: none;
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .card-custom:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
          }

          /* Circular image trong card */
          .card-custom .card-img-top {
            border-radius: 50%;
            width: 150px;
            height: 150px;
            object-fit: cover;
            margin: 1rem auto 0;
            display: block;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          /* Section nối tiếp nhau */
          .section-spacing {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }

          /* Button custom */
          .btn-custom {
            background: linear-gradient(45deg, #ff9a9e, #fad0c4);
            border: none;
            color: #fff;
            transition: background 0.3s ease;
          }
          .btn-custom:hover {
            background: linear-gradient(45deg, #fad0c4, #ff9a9e);
          }

          /* Footer */
          footer {
            background: linear-gradient(to right, #ffecf5, #f5ecff);
            color: #333;
          }
          footer a {
            color: #8a2be2;
            transition: color 0.2s ease;
          }
          footer a:hover {
            color: #5e0080;
          }
        `}
            </style>

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="/">
                        <span style={{ color: '#e91e63' }}>❤️</span> Love House
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item mx-2">
                                {/* Absolute URLs (đường dẫn tuyệt đối) */}
                               <a className="nav-link active" href="https://www.google.com/" target="_blank" rel="noreferrer">Google</a>
                            </li>
                            <li className="nav-item mx-2">
                                {/* Relative URLs (đường dẫn tương đối) */}
                                <a className="nav-link active" href="/">Trang chủ</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/Vy" >Tuyết Vy</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/Tran">Ngọc Trân</a>
                            </li>
                            <li className="nav-item mx-2">
                                {/* <button className="btn btn-custom">LOVE</button> */}
                                <a href="/love" target="_blank" className="btn btn-custom">LOVE</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero text-center text-white py-5">
                <div className="container hero-content">
                    <h1 className="display-4 fw-bold">Love House</h1>
                    <p className="lead mb-4">Ngày đẹp trời là ngày anh được gặp em</p>
                    <a href="#chuyen-tinh" className="btn btn-lg btn-custom">Khám phá</a>
                </div>
            </header>

            {/* Section: Chuyện Tình */}
            <section id="chuyen-tinh" className="container section-spacing">
                <div className="row text-center">
                    <div className="col-12">
                        <h2 className="mb-4 fw-semibold" style={{ color: '#8a2be2' }}>Chuyện Tình Bắt Đầu</h2>
                        <p className="mx-auto mb-5" style={{ maxWidth: '600px', color: '#555' }}>
                            Mỗi câu chuyện tình yêu đều bắt đầu từ những khoảnh khắc giản dị.<br />
                            Chúng mình gặp nhau vào một ngày rất đỗi bình thường,<br />
                            nhưng ... hóa ra lại là khởi đầu của một hành trình đầy ngọt ngào.
                        </p>
                    </div>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-12 col-md-4">
                        <div className="card card-custom h-100">
                            <img
                                src="./images/tieude1.png"
                                alt="Chuyện Tình"
                                className="card-img-top"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold" style={{ color: '#e91e63' }}>Gặp Nhau Tình Cờ</h5>
                                <p className="card-text" style={{ color: '#555' }}>
                                    Một buổi tối mát mẻ, ở băng ghế đá vô tình hay định mệnh đã để ta gặp nhau giữa ngàn người xa lạ.
                                </p>
                                <button className="btn btn-custom">Xem thêm</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card card-custom h-100">
                            <img
                                src="./images/tieude2.png"
                                alt="Lời Chào Đầu"
                                className="card-img-top"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold" style={{ color: '#e91e63' }}>Lời Chào Đầu</h5>
                                <p className="card-text" style={{ color: '#555' }}>
                                    Em nở một nụ cười, anh đáp lại bằng ánh mắt ngại ngùng, lẫn tránh. Khoảnh khắc thanh xuân!
                                </p>
                                <button className="btn btn-custom">Xem thêm</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card card-custom h-100">
                            <img
                                src="./images/tieude3.png"
                                alt="Bắt Đầu Hành Trình"
                                className="card-img-top"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold" style={{ color: '#e91e63' }}>Bắt Đầu Hành Trình</h5>
                                <p className="card-text" style={{ color: '#555' }}>
                                    Từng câu chuyện, từng nụ cười, chúng mình cùng nhau ghi dấu những kỷ niệm không thể nào quên.
                                </p>
                                <button className="btn btn-custom">Xem thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Những Khoảnh Khắc */}
            <section className="bg-white section-spacing">
                <div className="container">
                    <div className="row text-center mb-4">
                        <div className="col-12">
                            <h2 className="fw-semibold" style={{ color: '#8a2be2' }}>Những Khoảnh Khắc</h2>
                            <p className="mx-auto" style={{ maxWidth: '600px', color: '#555' }}>
                                Đi qua những cung bậc cảm xúc, mỗi khoảnh khắc đều trở thành một kỷ niệm đẹp mà ta không thể quên.
                            </p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-12 col-md-6">
                            <div className="d-flex align-items-center gap-3 p-3 shadow-sm rounded">
                                <img
                                    src="./images/moment1.jpg"
                                    alt="Moment 1"
                                    className="rounded-circle"
                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                />
                                <div>
                                    <h5 className="mb-1" style={{ color: '#e91e63' }}>Những lần Đầu Đi Chơi</h5>
                                    <p className="mb-0" style={{ color: '#555' }}>Nhớ những lần đầu tiên cùng nhau dạo phố, tay trong tay dưới ánh đèn ở bến Ninh Kiều...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex align-items-center gap-3 p-3 shadow-sm rounded">
                                <img
                                    src="./images/moment2.jpg"
                                    alt="Moment 2"
                                    className="rounded-circle"
                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                />
                                <div>
                                    <h5 className="mb-1" style={{ color: '#e91e63' }}>Những buổi đi ăn</h5>
                                    <p className="mb-0" style={{ color: '#555' }}>Những lần đi ăn cùng nhau, chúng mình đã trải qua thật nhiều điều vui...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex align-items-center gap-3 p-3 shadow-sm rounded">
                                <img
                                    src="./images/moment3.jpg"
                                    alt="Moment 3"
                                    className="rounded-circle"
                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                />
                                <div>
                                    <h5 className="mb-1" style={{ color: '#e91e63' }}>Những chuyến đi chơi</h5>
                                    <p className="mb-0" style={{ color: '#555' }}>Ghé thăm vùng biển xanh, tận hưởng gió mát và tiếng sóng vỗ...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex align-items-center gap-3 p-3 shadow-sm rounded">
                                <img
                                    src="./images/moment4.jpg"
                                    alt="Moment 4"
                                    className="rounded-circle"
                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                />
                                <div>
                                    <h5 className="mb-1" style={{ color: '#e91e63' }}>Khoảnh Khắc Hòa Mình</h5>
                                    <p className="mb-0" style={{ color: '#555' }}>Đêm ấm áp, chúng mình cùng tận hưởng những cảm giác tuyệt vời...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Tương Lai Phía Trước */}
            <section className="section-spacing">
                <div className="container">
                    <div className="row text-center mb-4">
                        <div className="col-12">
                            <h2 className="fw-semibold" style={{ color: '#8a2be2' }}>Tương Lai Phía Trước</h2>
                            <p className="mx-auto" style={{ maxWidth: '600px', color: '#555' }}>
                                Anh tin rằng yêu thương, lắng nghe và đồng hành là chìa khóa để xây dựng một tương lai bền lâu.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex flex-column align-items-center mb-4 mb-md-0">
                            <img
                                src="./images/future1.jpg"
                                alt="Future 1"
                                className="img-fluid rounded shadow-lg lift-on-hover"
                                style={{ maxWidth: '300px' }}
                            />
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                            <p style={{ color: '#555', lineHeight: '1.6' }}>
                                Tình yêu không chỉ là những khoảnh khắc đẹp, mà còn là sự cố gắng mỗi ngày để hiểu và chia sẻ. Chúng ta sẽ luôn cùng nhau học hỏi, cùng nhau vượt qua khó khăn, và cùng nhau viết nên những chương mới trong hành trình dài phía trước.
                            </p>
                            <button className="btn btn-custom mt-3 align-self-center">Cùng nhau tiến bước</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-5 py-5">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-12 col-md-3 text-center text-md-start">
                            <img
                                src="./images/logoduoi.png"
                                alt="Logo dưới"
                                style={{ maxWidth: '120px' }}
                            />
                        </div>
                        <div className="col-12 col-md-3">
                            <h6 className="fw-bold">Liên kết</h6>
                            <ul className="list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Love</a></li>
                                <li><a href="/">Link</a></li>
                                <li><a href="/">Introduction</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3">
                            <h6 className="fw-bold">Liên hệ</h6>
                            <address style={{ fontStyle: 'normal', color: '#555' }}>
                                Đường Tình Yêu<br />
                                TP.Màu Hồng<br />
                                <i className="fa fa-phone me-2"></i>0123 456 789<br />
                                <i className="fa fa-envelope me-2"></i>mylove@gmail.com.vn
                            </address>
                        </div>
                        <div className="col-12 col-md-3 text-center text-md-end">
                            <h6 className="fw-bold">Kết nối với chúng tôi</h6>
                            <div className="d-flex justify-content-center justify-content-md-end gap-3 mt-2">
                                <a href="/" className="fs-4"><i className="fa fa-facebook"></i></a>
                                <a href="/" className="fs-4"><i className="fa fa-twitter"></i></a>
                                <a href="/" className="fs-4"><i className="fa fa-instagram"></i></a>
                                <a href="/" className="fs-4"><i className="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <p className="mb-0 text-muted">© 2025 Trương Ngọc Trân & Nguyễn Tuyết Vy.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
