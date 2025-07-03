import React from 'react';

const Vy = () => {
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

          /* Nút love */
          .btn-custom {
            background: linear-gradient(45deg, #ff9a9e, #fad0c4);
            border: none;
            color: #fff;
            transition: background 0.3s ease;
          }
          .btn-custom:hover {
            background: linear-gradient(45deg, #fad0c4, #ff9a9e);
          }
            
          /* Circular image trong card */
          .card-img-top {
            border-radius: 50%;
            width: 150px;
            height: 150px;
            object-fit: cover;
            margin: 1rem auto 0;
            display: block;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

        `}
            </style>

            <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
                <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
                    <div className="container">
                        <a className="navbar-brand fw-bold" href="/">
                            <span style={{ color: '#e91e63' }}>❤️</span> Trang Của Vy
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
                                    <a className="nav-link active" href="/">Trang chủ</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="/Vy">Tuyết Vy</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="/Tran">Ngọc Trân</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a href="/love" className="btn btn-custom">LOVE</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xl w-full text-center">
                    <img
                        src="./images/Vy.png"
                        alt="Vy cute"
                        className="rounded-full object-cover mb-4"
                        style={{ width: '250px', height: '250px', borderRadius: '50%' }}
                    />

                    <h2 className="text-2xl font-semibold mb-2 text-blue-500">Tuyết Vy - Người con gái anh thương nhất 🥺</h2>
                    <p className="text-gray-600">
                        Vy là một người dịu dàng, dễ thương và luôn mang lại cảm giác ấm áp. Mỗi lần bên Vy, thế giới như thu bé lại còn anh và em thôi 💌                    </p>
                </div>
            </div>

        </div>
    );
};

export default Vy;
