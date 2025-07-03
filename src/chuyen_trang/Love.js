// Love.js
import React, { useEffect, useState, useMemo } from "react";

const Love = () => {
  const [dateDiff, setDateDiff] = useState({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    totalDays: 0,
  });

  const startDate = useMemo(() => new Date("2024-04-25"), []);

  useEffect(() => {
    const updateDateDiff = () => {
      const today = new Date();
      const start = new Date(startDate);

      // Reset giờ phút giây để đếm ngày chính xác
      today.setHours(0, 0, 0, 0);
      start.setHours(0, 0, 0, 0);

      const diffTime = today - start;
      const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      let remainingDays = totalDays;

      const years = Math.floor(remainingDays / 365);
      remainingDays -= years * 365;

      const months = Math.floor(remainingDays / 30);
      remainingDays -= months * 30;

      const weeks = Math.floor(remainingDays / 7);
      remainingDays -= weeks * 7;

      const days = remainingDays;

      setDateDiff({
        years,
        months,
        weeks,
        days,
        totalDays,
      });
    };

    updateDateDiff(); // Gọi ngay khi load

    const interval = setInterval(() => {
      updateDateDiff(); // Cập nhật mỗi phút
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  const heartBeat = {
    animation: "jump 1s infinite",
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#fff0f5",
        color: "#d63384",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <style>
        {`
          @keyframes jump {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>

      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
        💑 Ngày bắt đầu yêu: 25/04/2024
      </h1>

      <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>
        🥰 Ta đã yêu nhau được:
      </h2>

      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          fontSize: "1.5rem",
          lineHeight: "2.2rem",
        }}
      >
        <li><strong>{dateDiff.years}</strong> năm</li>
        <li><strong>{dateDiff.months}</strong> tháng</li>
        <li><strong>{dateDiff.weeks}</strong> tuần</li>
        <li><strong>{dateDiff.days}</strong> ngày</li>
      </ul>

      <div
        style={{
          fontSize: "5rem",
          marginTop: "50px",
          color: "#ff3366",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "2rem", marginTop: "10px", ...heartBeat }}>
          <strong>❤️ {dateDiff.totalDays}</strong> ngày yêu nhau 💖
        </div>
      </div>
    </div>
  );
};

export default Love;
