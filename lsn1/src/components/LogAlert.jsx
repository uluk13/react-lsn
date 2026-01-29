 import "./style.css"
 
 const LogAlert = () => {
    const log_alertt = () => {
        alert("alert")
    }
    return <div>
        <button onClick={log_alertt} className="alert-btn">alert</button>
    </div>
  }

  export default LogAlert;