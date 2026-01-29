 import "./style.css"

 function Color() {
  const changeColor = () => {
  document.body.style.background =
  document.body.style.background === "lightblue"
    ? "lightgreen"
    : "lightblue";

  };

  return (
    <button onClick={changeColor } className="color-btn">
      Change background
    </button>
  );
}

export default Color;
