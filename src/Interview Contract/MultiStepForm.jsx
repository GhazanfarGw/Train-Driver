// components/MultiStepForm.jsx

import { useState } from "react";
import StepUserInfo from "./steps/StepUserInfo";
import StepDate from "./steps/StepDate";
import StepCourse from "./steps/StepCourse";
import StepReview from "./steps/StepReview";

export default function MultiStepForm(){

const [step,setStep] = useState(1)

const [formData,setFormData] = useState({
name:"",
email:"",
phone:"",
date:"",
course:""
})

return(

<>

{step===1 && (
<StepUserInfo
formData={formData}
setFormData={setFormData}
next={()=>setStep(2)}
/>
)}

{step===2 && (
<StepDate
formData={formData}
setFormData={setFormData}
next={()=>setStep(3)}
back={()=>setStep(1)}
/>
)}

{step===3 && (
<StepCourse
formData={formData}
setFormData={setFormData}
next={()=>setStep(4)}
back={()=>setStep(2)}
/>
)}

{step===4 && (
<StepReview
formData={formData}
back={()=>setStep(3)}
/>
)}

</>

)

}