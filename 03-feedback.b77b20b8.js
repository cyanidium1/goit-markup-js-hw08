const e=document.querySelector(".feedback-form"),a=document.querySelector('[name="email"]'),l=document.querySelector('[name="message"]'),t={},m=JSON.parse(localStorage.getItem("feedback-form-state"));a.value=null==m?"":m.email,l.value=null==m?"":m.message,e.addEventListener("input",(()=>{t.email=a.value,t.message=l.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))})),e.addEventListener("submit",(e=>{e.preventDefault(),t.email=a.value,t.message=l.value,a.value="",l.value="",console.log(t),localStorage.clear("feedback-form-state")}));
//# sourceMappingURL=03-feedback.b77b20b8.js.map
