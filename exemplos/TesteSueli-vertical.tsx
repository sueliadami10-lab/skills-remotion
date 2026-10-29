import {
  AbsoluteFill,
  Composition,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const ROXO = "#A329CC";
const ROXO_ESCURO = "#7A1F99";
const ROXO_CLARO = "#F6EAFB";

export const MyComposition = () => {
  return (
    <Composition
      id="TesteSueli"
      component={TesteSueli}
      durationInFrames={150}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};

export const TesteSueli: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entradaLogo = spring({ frame, fps, config: { damping: 200 } });
  const entradaFrase = spring({ frame: frame - 30, fps, config: { damping: 200 } });
  const entradaAssinatura = spring({ frame: frame - 70, fps, config: { damping: 200 } });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${ROXO_CLARO} 0%, #ffffff 100%)`,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Georgia, serif",
        padding: 90,
      }}
    >
      <div
        style={{
          background: ROXO,
          color: "white",
          borderRadius: 48,
          padding: "50px 80px",
          textAlign: "center",
          opacity: entradaLogo,
          transform: `scale(${interpolate(entradaLogo, [0, 1], [0.8, 1])})`,
        }}
      >
        <div style={{ fontSize: 110, fontWeight: 700, letterSpacing: -2 }}>sueliadami</div>
        <div style={{ fontSize: 42, marginTop: 6 }}>contabilidade de precisão</div>
      </div>

      <div
        style={{
          marginTop: 140,
          fontSize: 76,
          lineHeight: 1.25,
          color: ROXO_ESCURO,
          textAlign: "center",
          opacity: entradaFrase,
          transform: `translateY(${interpolate(entradaFrase, [0, 1], [60, 0])}px)`,
        }}
      >
        Planejar hoje é proteger o amanhã.
      </div>

      <div
        style={{
          marginTop: 120,
          fontSize: 44,
          color: "#444",
          textAlign: "center",
          opacity: entradaAssinatura,
        }}
      >
        Teste de funcionamento · Remotion
      </div>
    </AbsoluteFill>
  );
};
