import "./helpContact.css"
import { IoSearch } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import Header from './../../default/Header';
import Footer from './../../default/Footer';
function HelpContact() {
    return (
        <>
            <div className="mb">
                <div className="title">Help & Contact</div>
                <div className="main-box">
                    <div className="box1">
                        <div className="ques1">HOW CAN WE HELP YOU TODAY?</div>
                    </div>
                    <div className="box2">
                        <form action="#" target="_self" method="get" ></form>
                        <input type="text" name="search" className="field" autocomplete="off" placeholder="Search aBuy Help..." />
                        <button className="button"> <IoSearch /></button>
                    </div>
                    <div className="box3">
                        <div className="box3-frame">
                            <div className="helpacc">
                                <div className="helpacc1">
                                    <div className="text1">Get help with a hacked account</div>
                                    <div className="text22">If you think someone is trying to hack your account—or already has—we’ll work with you to secure it. For your protection, we may place a temporary hold on your account.</div>
                                </div>
                                <div className="helpacc2">
                                    <div className="text3">Quick tip</div>
                                    <div className="text2">If you can’t sign in to your account, contact us at <a href="#">0123456789</a> immediately and we'll help to secure it.</div>
                                </div>
                                <div className="helpacc2">
                                    <div className="text3">Top Takeaway</div>
                                    <div className="text2">If you believe your account has been hacked, change your password as soon as possible.
                                        If you can’t sign in, contact us immediately and we’ll help you secure your account.</div>
                                </div>
                            </div>
                            <div className="helpitem">
                                <div className="helpitem1">
                                    <div className="text1">Get help with an item that hasn't arrived</div>
                                    <div className="text2">If the estimated delivery date for your order has passed and your item hasn't arrived, you can let the seller know by reporting that you didn't receive it.</div>
                                </div>
                                <div className="helpitem2">
                                    <div className="text3">Quick Tip</div>
                                    <div className="text2">Once you report that the item has not arrived, you can check the status of your request at any time in your shopping cart or by contacting us on <a href="#">0123456789</a>.</div>
                                </div>
                                <div className="helpitem2">
                                    <div className="text3">Tip</div>
                                    <div className="text2">You won't be able to re-open the request or case once it's closed.</div>
                                </div>
                            </div>
                        </div>
                        <div className="hf">
                            <div className="que2">Was this article helpful?</div>
                            <div className="icon"><BiLike /></div>
                            <div className="icon"><BiDislike /></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default HelpContact; 