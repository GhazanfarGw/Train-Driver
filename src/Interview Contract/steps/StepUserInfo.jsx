// steps/StepUserInfo.jsx

import { useForm } from "react-hook-form";

export default function StepUserInfo({formData,setFormData,next}){

const {
register,
handleSubmit,
formState:{errors}
} = useForm()

const submit=(data)=>{

setFormData({...formData,...data})

next()

}

return(

<form
onSubmit={handleSubmit(submit)}
className="space-y-6 md:py-12 py-5 bg-[#ECE9F4] p-4 px-5 md:px-10"
>
<div>
    <h2 className="text-lg font-semibold text-[#1F2D4A]">
        Check Availability
    </h2>

    <p className="text-sm text-[#1F2D4A]">
        Step 1 of 4
    </p>

    <div className="w-full bg-slate-700 h-2 rounded mt-2">
        <div className="bg-blue-500 h-2 rounded w-1/4"></div>
    </div>
</div>

<h2 className="text-xl text-[#1F2D4A]">
    Your Information
</h2>

<input
placeholder="Full Name"
{...register("name",{required:true})}
className="w-full p-3 bg-[#fff] border border-[#3D4460] rounded text-white"
/>

{errors.name && <p className="text-red-400">Name required</p>}

<input
placeholder="Email"
email type="email"
{...register("email",{required:true})}
className="w-full p-3 bg-[#fff] border border-[#3D4460] rounded text-white"
/>

{errors.email && <p className="text-red-400">Email required</p>}

<input
placeholder="Phone Number"
number type="number"
{...register("phone",{required:true})}
className="w-full p-3 bg-[#fff] border border-[#3D4460] rounded text-white"
/>

{errors.phone && <p className="text-red-400">Phone required</p>}

<button className="w-full bg-[#324E91] p-3 text-white">
Next
</button>

</form>

)
}