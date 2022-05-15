function Map() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div className="space" style={{ width: "100%", height: "100px" }}></div>
      <canvas
        style={{
          width: "1373",
          height: "937",
          touchAction: "none",
          cursor: "inherit",
        }}
      >
        맵 구현
      </canvas>
    </div>
  );
}

export default Map;
