import "./style.css"


  const Namee = "Ulukbek"
  
  const logText = () => {
    prompt("Введите имя");
    
  }

const LogText = () => {
    return <button onClick={logText} className="text-btn">prompt</button>
}

export default LogText;