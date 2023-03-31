import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">SAVE TIME!</h1>
        <span className="mailDesc">Sign up and get updated</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList