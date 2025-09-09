"use client";
import { useState } from "react";

export default function AdmissionForm() {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        
    };

    const inputClass =
        "w-full p-2 border border-primary rounded-lg focus:outline-none focus:ring-1 focus:ring-primary";

    const labelClass = "block text-[16px] font-bold text-darkblue mb-1";

    return (
        <div className=" flex items-center justify-center md:p-7 p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-7xl md:p-6 p-0 rounded-2xl  space-y-5"
            >
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
                    <div>
                        <label htmlFor="studentName" className={labelClass}>
                            Student Name <span className="text-red-500 text-[20px]">*</span>
                        </label>
                        <input
                            id="studentName"
                            type="text"
                            name="studentName"
                            placeholder="Enter Student Name"
                            className={inputClass}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="dob" className={labelClass}>
                            Date of Birth <span className="text-red-500 text-[20px]">*</span>
                        </label>
                        <input
                            id="dob"
                            type="date"
                            name="dob"
                            className={inputClass}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="date" className={labelClass}>
                            Date <span className="text-red-500 text-[20px]">*</span>
                        </label>
                        <input
                            id="date"
                            type="date"
                            name="date"
                            className={inputClass}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
                    <div>
                        <label htmlFor="admissionShouting" className={labelClass}>
                            Admission Shouting <span className="text-red-500 text-[20px]">*</span>
                        </label>
                        <input
                            id="admissionShouting"
                            type="text"
                            name="admissionShouting"
                            placeholder="Enter Admission Shouting"
                            className={inputClass}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="admissionSession" className={labelClass}>
                            Admission Session <span className="text-red-500 text-[20px]">*</span>
                        </label>
                        <input
                            id="admissionSession"
                            type="text"
                            name="admissionSession"
                            placeholder="Enter Admission Session"
                            className={inputClass}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="fatherName" className={labelClass}>
                            Father Name <span className="text-red-500 text-[20px]">*</span>
                        </label>
                        <input
                            id="fatherName"
                            type="text"
                            name="fatherName"
                            placeholder="Enter Father Name"
                            className={inputClass}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
                    <div>
                        <label htmlFor="fatherMobile" className={labelClass}>
                            Father Mobile No. <span className="text-red-500 text-[20px]">*</span>
                        </label>
                        <input
                            id="fatherMobile"
                            type="text"
                            name="fatherMobile"
                            placeholder="Enter Father Mobile"
                            className={inputClass}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="motherName" className={labelClass}>
                            Mother Name <span className="text-red-500 text-[20px]">*</span>
                        </label>
                        <input
                            id="motherName"
                            type="text"
                            name="motherName"
                            placeholder="Enter Mother Name"
                            className={inputClass}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="motherMobile" className={labelClass}>
                            Mother Mobile No. <span className="text-red-500 text-[20px]">*</span>
                        </label>
                        <input
                            id="motherMobile"
                            type="text"
                            name="motherMobile"
                            placeholder="Enter Mother Mobile"
                            className={inputClass}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
                    <div>
                        <label htmlFor="previousSchool" className={labelClass}>
                            Previous School <span className="text-red-500 text-[20px]">*</span>
                        </label>
                        <input
                            id="previousSchool"
                            type="text"
                            name="previousSchool"
                            placeholder="Enter Previous School"
                            className={inputClass}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="previousClass" className={labelClass}>
                            Previous Class <span className="text-red-500 text-[20px]">*</span>
                        </label>
                        <input
                            id="previousClass"
                            type="text"
                            name="previousClass"
                            placeholder="Enter Previous Class"
                            className={inputClass}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Address */}
                <div>
                    <label htmlFor="address" className={labelClass}>
                        Address <span className="text-red-500 text-[20px]">*</span>
                    </label>
                    <textarea
                        id="address"
                        name="address"
                        placeholder="Enter Address"
                        rows="3"
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>

                {/* Row 5 */}
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
                    <div>
                        <label htmlFor="referredBy" className={labelClass}>
                            Referred By
                        </label>
                        <input
                            id="referredBy"
                            type="text"
                            name="referredBy"
                            placeholder="Enter Referred By"
                            className={inputClass}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="remark" className={labelClass}>
                            Remark
                        </label>
                        <input
                            id="remark"
                            type="text"
                            name="remark"
                            placeholder="Enter Remark"
                            className={inputClass}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                    <button
                        type="submit"
                        className="bg-primary text-white px-6 py-3 rounded-lg w-full font-semibold hover:primary cursor-pointer transition"
                    >
                        ADD ADMISSION ENQUIRY
                    </button>
                </div>
            </form>
        </div>
    );
}
