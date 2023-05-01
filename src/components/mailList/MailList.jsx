import './Maillist.css'

export const MailList = () => {
  return (
   <div className="mail">
    <h1 className="mailTitle">Save time, Save Money!</h1>
    <span className="mailDesc">Sign Up and we' ll send the best deals to you </span>
    <div className="mailInputContainer">
        <input type='text' placeHolder='Your Email'/>
        <button>Subscribe</button>
    </div>

   </div>
  )
}
