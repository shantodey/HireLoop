'use client';

import { Label, Select, ListBox, Header } from '@heroui/react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { createJob } from '@/lib/actions/jobs';
import { Bounce, toast } from 'react-toastify';
import { redirect } from 'next/navigation';

const inputClass = 'w-full h-11 rounded-xl border border-zinc-800 bg-zinc-900 px-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-all focus:border-zinc-600 focus:ring-2 focus:ring-zinc-700';
const textareaClass = 'w-full min-h-36 rounded-xl border border-zinc-800 bg-zinc-900 p-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-all focus:border-zinc-600 focus:ring-2 focus:ring-zinc-700 resize-y';
const sectionClass = 'rounded-2xl border border-zinc-800 bg-zinc-950 p-6';


export default function PostJobPage() {
    const defaultJobMeta = {
        companyId: "company_123",
        companyName: "Demo Company",
        createdBy: "user_123",
        status: "pending",
        isApproved: false,
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const destination = Object.fromEntries(formData.entries());

        const jobData = {
            ...destination,
            ...defaultJobMeta,
            createdAt: new Date().toISOString(),
        };

        console.log(jobData);

        const res = await createJob(jobData);

        if (res?.insertedId) {
            toast.success('Created new jobs successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });

            e.target.reset();
            redirect('/dashboard/recruiter/jobs');
        } else if (res?.error) {
            toast.warn('Something went wrong!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    };
    return (
        <div className="min-h-screen bg-zinc-950 p-6">
            <div className="mx-auto max-w-6xl">

                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white"> Post a Job</h1>
                    <p className="mt-2 text-sm text-zinc-400"> Create a new job listing and publish it to your company profile. </p>
                </div>

                <form className="space-y-6" onSubmit={onSubmit}>
                    <section className={sectionClass}>
                        <h2 className="mb-6 text-lg font-semibold text-white"> Job Information </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <Label className="mb-2 block text-zinc-200"> Job Title </Label>
                                <input name="jobTitle" type="text" placeholder="Frontend Developer" className={inputClass} />
                            </div>
                            <div>

                                <Select name="jobCategory" className="w-full" placeholder="Select category" isRequired>
                                    <Label>Job Category</Label>
                                    <Select.Trigger className={inputClass}>
                                        <Select.Value />
                                        <Select.Indicator>
                                            <IoIosArrowDown />
                                        </Select.Indicator>
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Section>
                                                <Header>Categories</Header>
                                                <ListBox.Item id="software" textValue="Software Development">Software Development</ListBox.Item>
                                                <ListBox.Item id="design" textValue="Design">Design</ListBox.Item>
                                                <ListBox.Item id="marketing" textValue="Marketing">Marketing</ListBox.Item>
                                                <ListBox.Item id="sales" textValue="Sales">Sales</ListBox.Item>
                                            </ListBox.Section>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            <div>
                                {/* Select এর জন্য name প্রয়োজন */}
                                <Select name="jobType" className="w-full" placeholder="Select type" isRequired>
                                    <Label>Job Type</Label>
                                    <Select.Trigger className={inputClass} >
                                        <Select.Value />
                                        <Select.Indicator>
                                            <IoIosArrowDown />
                                        </Select.Indicator>
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="fulltime" textValue="Full Time"> Full Time </ListBox.Item>
                                            <ListBox.Item id="parttime" textValue="Part Time"> Part Time </ListBox.Item>
                                            <ListBox.Item id="contract" textValue="Contract"> Contract </ListBox.Item>
                                            <ListBox.Item id="internship" textValue="Internship"> Internship </ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            <div>
                                <Label className="mb-2 block text-zinc-200"> Application Deadline </Label>
                                <input name="deadline" type="date" className={inputClass} />
                            </div>
                        </div>
                    </section>

                    <section className={sectionClass}>
                        <h2 className="mb-6 text-lg font-semibold text-white"> Compensation</h2>
                        <div className="grid gap-6 md:grid-cols-3">
                            <div>
                                <Label className="mb-2 block text-zinc-200"> Minimum Salary</Label>
                                <input name="minSalary" type="number" placeholder="500" className={inputClass} />
                            </div>
                            <div>
                                <Label className="mb-2 block text-zinc-200"> Maximum Salary</Label>
                                <input name="maxSalary" type="number" placeholder="1500" className={inputClass} />
                            </div>

                            <div>
                                <Select name="currency" className="w-full" placeholder="Currency" is>
                                    <Label>Currency</Label>
                                    <Select.Trigger className={inputClass}>
                                        <Select.Value />
                                        <Select.Indicator><IoIosArrowDown /></Select.Indicator>
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="usd" textValue="USD"> USD </ListBox.Item>
                                            <ListBox.Item id="eur" textValue="EUR"> EUR </ListBox.Item>
                                            <ListBox.Item id="gbp" textValue="GBP"> GBP </ListBox.Item>
                                            <ListBox.Item id="bdt" textValue="BDT"> BDT </ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>
                        </div>
                    </section>

                    <section className={sectionClass}>
                        <h2 className="mb-6 text-lg font-semibold text-white"> Location </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <Label className="mb-2 block text-zinc-200"> City </Label>
                                <div className="relative">
                                    <IoLocationOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                                    <input name="city" type="text" placeholder="Dhaka" className={`${inputClass} pl-10`} />
                                </div>
                            </div>
                            <div>
                                <Label className="mb-2 block text-zinc-200"> Country</Label>
                                <input name="country" type="text" placeholder="Bangladesh" className={inputClass} />
                            </div>
                        </div>

                        <div className="mt-6 flex items-center gap-3">
                            <input name="isRemote" type="checkbox" id="remote" className="h-4 w-4" value="true" />
                            <label htmlFor="remote" className="text-sm text-zinc-300"> This is a remote position </label>
                        </div>
                    </section>

                    <section className={sectionClass}>
                        <h2 className="mb-6 text-lg font-semibold text-white"> Job Description </h2>
                        <div className="space-y-6">
                            <div>
                                <Label className="mb-2 block text-zinc-200"> Responsibilities</Label>
                                <textarea name="responsibilities" className={textareaClass} placeholder="Describe the responsibilities..." />
                            </div>
                            <div>
                                <Label className="mb-2 block text-zinc-200"> Requirements</Label>
                                <textarea name="requirements" className={textareaClass} placeholder="Required skills..." />
                            </div>
                            <div>
                                <Label className="mb-2 block text-zinc-200"> Benefits (Optional)</Label>
                                <textarea name="benefits" className={textareaClass} placeholder="Health insurance, etc..." />
                            </div>
                        </div>
                    </section>

                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                        <button type="button" className="h-11 rounded-xl border border-zinc-800 px-5 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900">
                            Save Draft
                        </button>
                        <button type="submit" className="h-11 rounded-xl bg-white px-5 text-sm font-semibold text-black transition hover:bg-zinc-200">
                            Publish Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}