"use client"
import React, { useState } from "react";
import { IoIosArrowDown, IoMdCloudUpload } from "react-icons/io";
import { IoLocationOutline, IoGlobeOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { createCompany } from "@/lib/actions/companies";
import { Bounce, toast } from "react-toastify";

const inputClass = "w-full h-11 bg-zinc-900 border border-zinc-800 rounded-xl px-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition";
const textareaClass = "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition resize-none h-32";
const sectionClass = "rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-xl backdrop-blur-md";

const CompanyProfile = () => {
    const [company, setCompany] = useState(null); // Null means not registered
    const [isEditing, setIsEditing] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [logoUrl, setLogoUrl] = useState("");

    const handleLogoUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setIsUploading(true);
        const formData = new FormData();
        formData.append("image", file);

        try {
            // Replace with your actual ImgBB API key
            const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMG_UPLOAD_API;
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            if (data.success) {
                setLogoUrl(data.data.url);
            } else {
                alert("Upload failed!");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
        } finally {
            setIsUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const companyData = {
            name: formData.get("companyName"),
            industry: formData.get("industry"),
            website: formData.get("websiteUrl"),
            location: formData.get("location"),
            employeeCount: formData.get("employeeCount"),
            description: formData.get("description"),
            logo: logoUrl || (company ? company.logo : ""),
            status: company ? company.status : "Pending",
        };
        const payLoad = await createCompany(companyData);
        if (payLoad.insertedId) {
            toast.success(' Your data is successfully Submited!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
        else {
            toast.error('Sumting want wrong!', {
                position: "top-center",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }


        setCompany(companyData);
        setIsEditing(false);
    };

    // Status Badge Color Helper
    const getStatusColor = (status) => {
        switch (status) {
            case "Approved": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
            case "Rejected": return "bg-rose-500/10 text-rose-400 border-rose-500/20";
            default: return "bg-amber-500/10 text-amber-400 border-amber-500/20";
        }
    };

    return (
        <div className="min-h-screen bg-zinc-950 p-6 text-zinc-100">
            <div className="mx-auto max-w-4xl">
                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Company Profile</h1>
                        <p className="mt-2 text-sm text-zinc-400">
                            Manage your business profile details and hiring status.
                        </p>
                    </div>
                    {company && !isEditing && (
                        <button
                            onClick={() => {
                                setLogoUrl(company.logo);
                                setIsEditing(true);
                            }}
                            className="flex h-10 items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800"
                        >
                            <FiEdit2 size={16} /> Edit Profile
                        </button>
                    )}
                </div>

                {/* 1. NO COMPANY REGISTERED PROMPT */}
                {!company && !isEditing && (
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/20 p-12 text-center">
                        <div className="mb-4 rounded-full bg-zinc-900 p-4 text-zinc-500">
                            <IoGlobeOutline size={40} />
                        </div>
                        <h2 className="text-xl font-semibold text-white">No Company Registered</h2>
                        <p className="mt-2 max-w-md text-sm text-zinc-400">
                            To start posting jobs and hiring top talent on HireLoop, you need to set up your business profile first.
                        </p>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="mt-6 h-11 rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-zinc-200"
                        >
                            Register Company
                        </button>
                    </div>
                )}

                {/* 2. REGISTRATION / EDIT FORM */}
                {isEditing && (
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl backdrop-blur-md">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-white">
                                {company ? "Update Company Details" : "Register New Company"}
                            </h2>
                            <p className="text-xs text-zinc-500">Enter your business details to start hiring.</p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Company Name */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-zinc-300">Company Name</label>
                                    <input
                                        name="companyName"
                                        type="text"
                                        required
                                        defaultValue={company?.name || ""}
                                        placeholder="e.g. Acme Corp"
                                        className={inputClass}
                                    />
                                </div>

                                {/* Industry Dropdown */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-zinc-300">Industry / Category</label>
                                    <div className="relative">
                                        <select
                                            name="industry"
                                            defaultValue={company?.industry || "Technology"}
                                            className={`${inputClass} appearance-none pr-10`}
                                        >
                                            <option value="Technology">Technology</option>
                                            <option value="Design">Design</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Healthcare">Healthcare</option>
                                        </select>
                                        <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" />
                                    </div>
                                </div>

                                {/* Website URL */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-zinc-300">Website URL</label>
                                    <div className="flex rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden focus-within:border-zinc-700 transition">
                                        <span className="flex items-center bg-zinc-950 px-4 text-sm text-zinc-500 border-r border-zinc-800">https://</span>
                                        <input
                                            name="websiteUrl"
                                            type="text"
                                            defaultValue={company?.website || ""}
                                            placeholder="www.company.com"
                                            className="w-full h-11 bg-transparent px-4 text-sm text-white focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-zinc-300">Location</label>
                                    <div className="relative">
                                        <IoLocationOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                                        <input
                                            name="location"
                                            type="text"
                                            defaultValue={company?.location || ""}
                                            placeholder="City, Country"
                                            className={`${inputClass} pl-11`}
                                        />
                                    </div>
                                </div>

                                {/* Employee Count Dropdown */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-zinc-300">Employee Count Range</label>
                                    <div className="relative">
                                        <select
                                            name="employeeCount"
                                            defaultValue={company?.employeeCount || "1-10 employees"}
                                            className={`${inputClass} appearance-none pr-10`}
                                        >
                                            <option value="1-10 employees">1-10 employees</option>
                                            <option value="11-50 employees">11-50 employees</option>
                                            <option value="51-200 employees">51-200 employees</option>
                                            <option value="201+ employees">201+ employees</option>
                                        </select>
                                        <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" />
                                    </div>
                                </div>

                                {/* Image Upload Component */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-zinc-300">Company Logo</label>
                                    <div className="flex items-center gap-4">
                                        <label className="flex h-16 w-16 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-zinc-700 bg-zinc-900 text-zinc-400 transition hover:bg-zinc-800">
                                            {logoUrl ? (
                                                <img src={logoUrl} alt="Preview" className="h-full w-full rounded-xl object-cover" />
                                            ) : (
                                                <IoMdCloudUpload size={22} />
                                            )}
                                            <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                                        </label>
                                        <div className="text-xs text-zinc-500">
                                            <p className="font-medium text-zinc-300">{isUploading ? "Uploading..." : "Upload image"}</p>
                                            <p>PNG, JPG up to 5MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-zinc-300">Brief Description</label>
                                <textarea
                                    name="description"
                                    defaultValue={company?.description || ""}
                                    placeholder="Tell us about your company's mission and culture..."
                                    className={textareaClass}
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-end gap-3 pt-4 border-t border-zinc-900">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="h-11 rounded-xl border border-zinc-800 px-5 text-sm font-medium text-zinc-400 transition hover:bg-zinc-900"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isUploading}
                                    className="h-11 rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-zinc-200 disabled:opacity-50"
                                >
                                    {company ? "Save Changes" : "Register Company"}
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* 3. REGISTERED COMPANY DETAILS VIEW */}
                {company && !isEditing && (
                    <div className="space-y-6">
                        <div className={sectionClass}>
                            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    {/* Logo Display */}
                                    <div className="h-20 w-20 flex-shrink-0 rounded-2xl bg-zinc-950 p-2 border border-zinc-800 flex items-center justify-center overflow-hidden">
                                        {company.logo ? (
                                            <img src={company.logo} alt={company.name} className="h-full w-full object-contain rounded-xl" />
                                        ) : (
                                            <span className="text-xl font-bold text-zinc-700">{company.name[0]}</span>
                                        )}
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <h2 className="text-2xl font-bold text-white">{company.name}</h2>
                                            {/* Admin Status Badge */}
                                            <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${getStatusColor(company.status)}`}>
                                                {company.status}
                                            </span>
                                        </div>
                                        <p className="mt-1 text-sm text-zinc-400">{company.industry}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Company Meta Info */}
                            <div className="mt-8 grid gap-4 border-t border-zinc-900 pt-6 text-sm text-zinc-400 sm:grid-cols-3">
                                <div className="flex items-center gap-2.5">
                                    <IoLocationOutline className="text-zinc-500" size={18} />
                                    <span>{company.location || "Not Specified"}</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <IoGlobeOutline className="text-zinc-500" size={18} />
                                    <a href={`https://${company.website}`} target="_blank" rel="noreferrer" className="text-zinc-300 hover:underline">
                                        {company.website || "No Website"}
                                    </a>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <span className="h-2 w-2 rounded-full bg-zinc-600"></span>
                                    <span>{company.employeeCount}</span>
                                </div>
                            </div>
                        </div>

                        {/* Description Section */}
                        {company.description && (
                            <div className={sectionClass}>
                                <h3 className="mb-3 text-lg font-semibold text-white">About Company</h3>
                                <p className="text-sm leading-relaxed text-zinc-400 whitespace-pre-line">
                                    {company.description}
                                </p>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
};

export default CompanyProfile;