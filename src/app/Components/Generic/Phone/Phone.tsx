'use client'
import { useEffect, useState } from "react";
import "./Phone.css";
export default function Phone({phoneNum, title}:{phoneNum:string, title:string}) {

  const [formattedNum, setFormattedNum] = useState("");

  useEffect(()=>{
    setFormattedNum(phoneNum.replace(/^\+?(\d{3})(\d{3})(\d{4})$/, '($1) $2 - $3'))
  }, [])
  return (
    <div className="phone">
        <h4>{title}</h4>
        <a href={`tel:${phoneNum}`}>
          <img src="/Auto Insurance/Auto-Insurance-V11/images/phone.svg" />
          {/* (725) 224 - 9659 */}
          
          {formattedNum}
        </a>

        
    </div>
  );
}
