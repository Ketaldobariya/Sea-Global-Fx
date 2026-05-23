import "./openaccountbtn.scss"
import User from "../../assets/images/user.svg" 
export default function Openaccountbtn(){
    return(
        <div className="open-account">
        <button>
            <img src={User} alt="User"/>
            Open Account
        </button>
        </div>
    );
}