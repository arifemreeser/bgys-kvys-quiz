function AnimatedBackground({ screen }) {

  const activeScreen =

    screen === "quiz" || screen === "result" ? "quiz" : screen;

  // 🔥 SENİN ESKİ KONUMlarının transform karşılığı

  const positions = {

    start: {

      blue: { x: "-50vw", y: "10vh" },     // sol alt

      red: { x: "50vw", y: "-10vh" },      // sağ üst

    },

    info: {

      blue: { x: "-50vw", y: "-10vh" },    // sol üst

      red: { x: "50vw", y: "10vh" },       // sağ alt

    },

    quiz: {

      blue: { x: "-45vw", y: "-40vh" },    // yukarı sol

      red: { x: "45vw", y: "40vh" },       // aşağı sağ

    },

  };

  const current = positions[activeScreen];

  const circleBase = {

    position: "absolute",

    top: "50%",

    left: "50%",

    width: "clamp(500px, 40vw, 800px)",

    height: "clamp(500px, 40vw, 800px)",

    borderRadius: "50%",

    transform: "translate(-50%, -50%)",

    transition: "all 0.9s ease-in-out",

    pointerEvents: "none",

  };

  return (

    <>

      {/* 🔵 MAVİ */}

      <div

        style={{

          ...circleBase,

          transform: `translate(-50%, -50%) translate(${current.blue.x}, ${current.blue.y})`,

          background: "#1502C1",

          boxShadow: `

            0 0 120px rgba(21,2,193,0.45),

            0 0 220px rgba(21,2,193,0.35),

            inset 0 0 40px rgba(255,255,255,0.08)

          `,

        }}

      />

      {/* 🔴 KIRMIZI */}

      <div

        style={{

          ...circleBase,

          transform: `translate(-50%, -50%) translate(${current.red.x}, ${current.red.y})`,

          background: "#A80202",

          boxShadow: `

            0 0 120px rgba(168,2,2,0.45),

            0 0 220px rgba(168,2,2,0.35),

            inset 0 0 40px rgba(255,255,255,0.08)

          `,

        }}

      />

    </>

  );

}

export default AnimatedBackground;