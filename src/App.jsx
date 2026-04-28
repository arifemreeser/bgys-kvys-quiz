import { useState } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import { questions } from "./data/question";
import logo from "./assets/logo.png";

function App() {
  const [screen, setScreen] = useState("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userInfo, setUserInfo] = useState({

    fullName: "",
  
    title: "",
  
    educationDate: "",
  
  });

  return (
    <main
    style={{
      minHeight: "100vh",
      background: "#070025",
      color: "white",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Arial, sans-serif",
    }}
  >
    
      {/* 🔥 ANİMASYONLU ARKA PLAN */}
      <AnimatedBackground screen={screen} />

      {/* 🔥 TÜM İÇERİK */}
      <div style={{ position: "relative", zIndex: 1 }}>
        
        {screen === "start" && (
          <section
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: "250px",
                marginBottom: "20px",
                opacity: 0.9,
              }}
            />
            <h1 style={{ fontSize: "28px", marginBottom: "16px" }}>
              BGYS & KVYS
              <br />
              Farkındalık Eğitimi Sınavı
            </h1>

            <p style={{ maxWidth: "300px", marginBottom: "24px", opacity: 0.8 }}>
              Bu sınav, çalışanların bilgi güvenliği ve kişisel veri koruma
              konularındaki farkındalığını ölçmek amacıyla hazırlanmıştır.
            </p>

            <button
              onClick={() => setScreen("info")}
              style={buttonStyle}
            >
              Sınava Giriş
            </button>
          </section>
        )}

{screen === "info" && (

<section

  style={{

    minHeight: "100vh",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    padding: "24px",

  }}

>

  <div style={infoCardStyle}>

    <h2 style={infoTitleStyle}>Kişisel Bilgiler</h2>

    <label style={labelStyle}>Ad Soyad</label>
<input
  style={glassInputStyle}
  value={userInfo.fullName}
  onChange={(e) =>
    setUserInfo({ ...userInfo, fullName: e.target.value })
  }
/>

<label style={labelStyle}>Ünvan</label>
<input
  style={glassInputStyle}
  value={userInfo.title}
  onChange={(e) =>
    setUserInfo({ ...userInfo, title: e.target.value })
  }
/>

<label style={labelStyle}>Eğitim Tarihi</label>
<input
  style={glassInputStyle}
  value={userInfo.educationDate}
  onChange={(e) =>
    setUserInfo({ ...userInfo, educationDate: e.target.value })
  }
/>

    <button

      onClick={() => setScreen("quiz")}

      style={formButtonStyle}

    >

      Sınavı Başlat

    </button>

  </div>

</section>

)}

{screen === "quiz" && (
  <section
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {/* 🔵 SORU TEXT */}
    <div style={{ width: "600px", maxWidth: "90%" }}>
      
      <p style={{ marginBottom: "8px", opacity: 0.8 }}>
        Soru {currentQuestion + 1} / {questions.length}
      </p>

      {/* 🔵 PROGRESS BAR */}
      <div
        style={{
          height: "6px",
          width: "100%",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            background: "linear-gradient(90deg, #3b82f6, #1d4ed8)",
            transition: "0.4s",
          }}
        />
      </div>
    </div>

    {/* 🔥 CARD */}
    <div
      style={{
        width: "600px",
        maxWidth: "90%",
        padding: "40px",
        borderRadius: "24px",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.1)",
        textAlign: "center",
      }}
    >
      {/* SORU */}
      <h2 style={{ marginBottom: "30px", lineHeight: "1.4" }}>
        {questions[currentQuestion].question}
      </h2>

      {/* ŞIKLAR */}
      {questions[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          onClick={() => {
            const newAnswers = [...answers];
            newAnswers[currentQuestion] = index;
            setAnswers(newAnswers);
          }}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "12px",
            borderRadius: "14px",
            border: "1px solid rgba(255,255,255,0.2)",
            background:
              answers[currentQuestion] === index
                ? "rgba(255,255,255,0.25)"
                : "rgba(255,255,255,0.1)",
            color: "white",
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          {String.fromCharCode(65 + index)}) {option}
        </button>
      ))}
    </div>

    {/* 🔘 BUTONLAR */}
    <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
      
      {currentQuestion > 0 && (
        <button
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
          style={buttonStyle}
        >
          Önceki Soru
        </button>
      )}

      {currentQuestion < questions.length - 1 ? (
        <button
          onClick={() => setCurrentQuestion(currentQuestion + 1)}
          style={buttonStyle}
        >
          Sonraki Soru
        </button>
      ) : (
        <button
          onClick={() => setScreen("result")}
          style={{
            ...buttonStyle,
            background: "green",
          }}
        >
          Bitir
        </button>
      )}
    </div>
  </section>
)}

{screen === "result" && (

<section

  style={{

    minHeight: "100vh",

    display: "flex",

    flexDirection: "column",

    justifyContent: "center",

    alignItems: "center",

    gap: "28px",

  }}

>

  <h2>Sınav Sonucu</h2>

  <div style={resultCardStyle}>

    <p><strong>Ad Soyad:</strong> {userInfo.fullName}</p>

    <p><strong>Ünvan:</strong> {userInfo.title}</p>

    <p><strong>Eğitim Tarihi:</strong> {userInfo.educationDate}</p>

    <div style={{ marginTop: "36px" }}>

      <h3>Sınav Sonuçları</h3>

      <div style={resultGridStyle}>

      {questions.map((question, index) => {
  const userAnswer = answers[index];

  let resultText = "";
  let resultColor = "";

  if (userAnswer === undefined) {
    resultText = "Boş";
    resultColor = "#9ca3af";
  } else if (userAnswer === question.correctAnswer) {
    resultText = "Doğru";
    resultColor = "#02A82C";
  } else {
    resultText = "Yanlış";
    resultColor = "#ef4444";
  }

  return (
    <div key={index} style={resultRowStyle}>
      <span>Soru {index + 1}</span>

      <span
        style={{
          color: resultColor,
          fontWeight: "700",
        }}
      >
        {resultText}
      </span>
    </div>
  );
})}

      </div>

    </div>

    <div style={{ marginTop: "28px", fontSize: "18px", fontWeight: "700" }}>

      {answers.filter((answer, index) => answer === questions[index].correctAnswer).length}

      /{questions.length}

    </div>

    <div style={{ fontSize: "16px", fontWeight: "700" }}>

      %

      {Math.round(

        (answers.filter((answer, index) => answer === questions[index].correctAnswer).length /

          questions.length) *

          100

      )}{" "}

      Başarı Yüzdesi

    </div>

  </div>

  <button style={pdfButtonStyle}>PDF İndir</button>

</section>

)}

      </div>
    </main>
  );
}

export default App;

/* 🔧 STILLER */
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.1)",
  outline: "none",
  background: "rgba(255,255,255,0.1)",
  color: "white",
};

const buttonStyle = {
  padding: "12px 24px",
  borderRadius: "20px",
  border: "none",
  background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
  boxShadow: "0px 8px 20px rgba(37, 99, 235, 0.4)",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};
const infoCardStyle = {
  width: "420px",
  padding: "32px 28px",
  borderRadius: "24px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.18)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "0px 10px 30px rgba(0,0,0,0.25)",
  color: "white",
  boxSizing: "border-box",
};

const infoTitleStyle = {
  textAlign: "center",
  fontSize: "26px",
  fontWeight: "700",
  marginBottom: "28px",
};

const labelStyle = {
  display: "block",
  fontSize: "16px",
  fontWeight: "600",
  marginBottom: "8px",
  marginTop: "18px",
};

const glassInputStyle = {
  display: "block",
  width: "100%",
  height: "42px",
  borderRadius: "21px",
  border: "1px solid rgba(255,255,255,0.35)",
  outline: "none",
  background: "rgba(165,167,169,0.20)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  color: "white",
  fontSize: "14px",
  padding: "0 16px",
  boxSizing: "border-box",
};

const formButtonStyle = {
  display: "block",
  width: "220px",
  height: "48px",
  margin: "34px auto 0",
  borderRadius: "24px",
  border: "none",
  background: "#0D4CE0",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  boxShadow: "0px 6px 18px rgba(13,76,224,0.4)",
  cursor: "pointer",
};

const resultCardStyle = {
  width: "min(420px, 90vw)",
  padding: "36px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  color: "white",
};

const resultGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px 36px",
  marginTop: "16px",
};

const resultRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "14px",
};

const pdfButtonStyle = {
  width: "180px",
  height: "50px",
  borderRadius: "25px",
  border: "none",
  background: "#02A82C",
  color: "white",
  fontSize: "18px",
  fontWeight: "700",
  cursor: "pointer",
};