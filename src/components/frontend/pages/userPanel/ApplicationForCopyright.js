import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Select from 'react-select';

export default function ApplicationForCopyright() {
    const publicUrl = process.env.PUBLIC_URL;
    const [sideHas, setSideHas] = useState(2);
    const [howToPay, setHowToPay] = useState(2);
    const [fieldSets, setFieldSets] = useState([{ id: 1 }]);

    const toggleSideHas = (side) => {
        setSideHas(side);
    };

    const togglehowToPay = (side) => {
        setHowToPay(side);
    };

    const handleAddFieldSet = () => {
        const newFieldSet = { id: fieldSets.length + 1 };
        setFieldSets([...fieldSets, newFieldSet]);
    };

    const handleRemoveFieldSet = (idToRemove) => {
        const updatedFieldSets = fieldSets.filter((fieldSet) => fieldSet.id !== idToRemove);
        setFieldSets(updatedFieldSets);
    };

    const tresuryBankName = [
        { value: '', label: '-- ব্যাংকের নাম --' },
        { value: '1', label: 'বাংলাদেশ ব্যাংক' },
        { value: '2', label: 'সোনালী ব্যাংক লিঃ' },
    ];
    const tresuryBankNameBranch = [
        { value: '', label: 'শাখা সমূহ' },
        { value: '1', label: 'শাখা' },
        { value: '2', label: 'শাখা' },
    ];
    const amountBD = [
        { value: '', label: '-- টাকার পরিমাণ --' },
        { value: '1', label: 'সম্প্রচার কর্ম - ১০' },
        { value: '2', label: 'ওয়েবসাইট কর্ম - ১' },
        { value: '2', label: 'অন্যান্য সকল কর্ম - ২' },
    ];

    const handleFileChange = (id) => (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById(id).src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <section className="section py-5 service-single">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center bg-light">
                        <div className="card p-3 shadow w-100">
                            <nav>
                                <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-application-tab" data-bs-toggle="tab" data-bs-target="#nav-application" type="button" role="tab" aria-controls="nav-application" aria-selected="true">কপিরাইটের জন্য আবেদন করুন</button>
                                </div>
                            </nav>
                            <div className="tab-content p-3 border bg-light" id="nav-tabContent">
                                <div className="tab-pane fade active show" id="nav-application" role="tabpanel" aria-labelledby="nav-application-tab">
                                    <div className='applicationForm'>
                                        <div className='applicationForm-header text-center'>
                                            <h2>ফরম - ২</h2>
                                            <b>কপিরাইট রেজিস্ট্রেশনের আবেদন পত্র</b>
                                            <h5>[ বিধি ৪ (১) দ্রষ্টব্য ]</h5>
                                        </div>
                                        <div className='applicationForm-body'>
                                            <div className='applicationForm-body-top'>
                                                <p>বরাবর</p>
                                                <p>রেজিস্ট্রার অব কপিরাইট <br/>
                                                    কপিরাইট অফিস, ঢাকা । 
                                                </p>
                                                <p>জনাব ,</p>
                                                <p className=''>
                                                    কপিরাইট আইন (২০২৩ সালের ৩৪ নং আইন) এর ৫৩ ধারা অনুযায়ী আমি/আমার মক্কেল এতদসংগে আমার/আমার মক্কেলের কর্মের কপিরাইট নিবন্ধনের জন্য আবেদন করিতেছি এবং কপিরাইট নিবন্ধন বহিতে এই কর্মের সঙ্গে সংশ্লিষ্ট ভুক্তিসমূহ লিপিবদ্ধ করিবার জন্য বিষয়াবলীর বিবরণী সংযুক্ত করিতেছি । 
                                                </p>
                                                <br/>
                                                <p className='fw-bold'>১. এই কর্মের সঙ্গে সম্পর্কযুক্ত অন্যান্য বিষয়াবলীর বিবরণী ও যথাযথভাবে পূরণ করিয়া পাঠাইলাম । </p>
                                                <br/>
                                                <div className='d-flex'>
                                                    ২. কোন পক্ষ আছে কি ? 
                                                    <span className='d-flex mx-3'> 
                                                        <div className="form-check mx-3">
                                                            <input className="form-check-input" type="radio" name="sideRadio" id="sideRadio1" onClick={() => toggleSideHas(1)} />
                                                            <label className="form-check-label" htmlFor="sideRadio1">
                                                                হ্যাঁ
                                                            </label> 
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="sideRadio" id="sideRadio2" defaultChecked={sideHas === 2} onClick={() => toggleSideHas(2)}  />
                                                            <label className="form-check-label" htmlFor="sideRadio2">
                                                                না
                                                            </label> 
                                                        </div>
                                                    </span>
                                                </div>
                                                {sideHas === 2 && (
                                                    <div>
                                                        
                                                    </div>
                                                )}
                                                {sideHas === 1 && (
                                                    <div>
                                                         {fieldSets.map((fieldSet) => (
                                                            <div key={fieldSet.id} className='isSideHas my-4'>
                                                                <div className='row'>
                                                                    <div className='col-md-4'>
                                                                        <div className='form-group'>
                                                                            <label>পক্ষের নাম</label>
                                                                            <input type="text" className="custom-input-field" placeholder="পক্ষের নাম" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-4'>
                                                                        <div className='form-group'>
                                                                            <label>পক্ষের ঠিকানা </label>
                                                                            <input type="text" className="custom-input-field" placeholder="পক্ষের ঠিকানা " />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-4'>
                                                                        <div className='form-group'>
                                                                            <label>প্রেরণের তারিখ / ডেসপাচের তারিখ </label>
                                                                            <input type="date" className="form-control" placeholder="পক্ষের ঠিকানা " />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-4'>
                                                                        <div className='form-group'>
                                                                            <label>ই-মেইল</label>
                                                                            <input type="email" className="custom-input-field" placeholder="ই-মেইল" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-4'>
                                                                        <div className='form-group'>
                                                                            <label>মোবাইল নম্বর</label>
                                                                            <input type="number" className="custom-input-field" placeholder="মোবাইল নম্বর" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-4'>
                                                                        <div className='form-group'>
                                                                            <label>আরো পক্ষ যোগ করুন</label>
                                                                            <div className='d-flex'>
                                                                                <AddIcon className="customAddButton" onClick={handleAddFieldSet} />
                                                                                {fieldSets.length > 1 && (
                                                                                   <CloseIcon className="customRemoveButton" onClick={() => handleRemoveFieldSet(fieldSet.id)}/>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                        
                                                        
                                                    </div>
                                                )}
                                                <br/>
                                                <p>কপিরাইট বিধিমালা, ২০০৬ এর বিধি-৪ এর উপ-বিধি (৩) অনুযায়ী আমি এই পত্র এবং তদসংযুক্ত বিবরণীসমূহের কপি নিম্নোক্ত পদ্ধতিতে অন্যান্য পক্ষের নিকট হাতে হাতে / অগ্রিম রেজিস্টার্ড ডাকযোগে প্রেরণ করিয়াছি । </p>
                                               
                                                <div className='d-flex mt-4'>
                                                    ৩. কিভাবে ফি পরিশোধ করা হবে । <span className='text-danger'>*</span> 
                                                    <span className='d-flex mx-3'> 
                                                        <div className="form-check mx-3">
                                                            <input className="form-check-input" type="radio" name="howToPayRadio" id="howToPayRadio1" onClick={() => togglehowToPay(1)} />
                                                            <label className="form-check-label" htmlFor="sideRadio1">
                                                                ই-চালান
                                                            </label> 
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="howToPayRadio" id="howToPayRadio2" defaultChecked={howToPay === 2} onClick={() => togglehowToPay(2)}  />
                                                            <label className="form-check-label" htmlFor="sideRadio2">
                                                                ট্রেজারি 
                                                            </label> 
                                                        </div>
                                                    </span>
                                                </div>

                                                {howToPay === 2 && (
                                                    <div>
                                                        <div className='howToPay my-4'>
                                                            <div className='row'>
                                                                <div className='col-md-4'>
                                                                    <div className='form-group'>
                                                                        <label>ক. ট্রেজারি চালান নং </label>
                                                                        <input type="text" className="custom-input-field" placeholder="ক. ট্রেজারি চালান নং" />
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-4'>
                                                                    <div className='form-group'>
                                                                        <label>খ. তারিখ </label>
                                                                        <input type="text" className="custom-input-field" placeholder="খ. তারিখ " />
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-4 mb-2'>
                                                                    <div className='form-group'>
                                                                        <label>গ. ব্যাংকের নাম </label>
                                                                        <div>
                                                                            <Select options={tresuryBankName} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-4 mb-2'>
                                                                    <div className='form-group'>
                                                                        <label>ঘ. শাখা </label>
                                                                        <div>
                                                                            <Select options={tresuryBankNameBranch} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-4 mb-2'>
                                                                    <div className='form-group'>
                                                                        <label>ঙ. টাকার পরিমাণ </label>
                                                                        <div>
                                                                            <Select options={amountBD} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-4 mb-2'>
                                                                    <div className='form-group'>
                                                                        <label> চ. ট্রেজারি চালান ( স্ক্যান কপি )</label> <br/>
                                                                        <label className='customUploadbtn1'> 
                                                                            <input type="file" className="d-none"  /> নির্বাচন করুন
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                               
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                )}
                                                {howToPay === 1 && (
                                                    <div>
                                                        <div className='howToPay my-4'>
                                                            <div className='row'>
                                                                <div className='col-md-3 mb-3'>
                                                                    <div className='form-group'>
                                                                        <label>ক. অনলাইন পেমেন্ট </label> <br/>
                                                                        <img src={`${publicUrl}/assets/images/logo-bangla.png`} alt="Logo" />
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-3 mb-2'>
                                                                    <div className='form-group'>
                                                                        <label>ক. ট্রানজেকশন নং: </label>
                                                                        <input type="text" className="custom-input-field" placeholder="ট্রানজেকশন নং: " />
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-3 mb-2'>
                                                                    <div className='form-group'>
                                                                        <label>ঙ. টাকার পরিমাণ </label>
                                                                        <div>
                                                                            <Select options={amountBD} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                               
                                                                <div className='col-md-3 mb-2'>
                                                                    <div className='form-group'>
                                                                        <div className='mt-20'>
                                                                            <button className='custombtn4'> <img src={`${publicUrl}/assets/images/paynow.png`} alt="Logo" /> পেমেন্ট করুন</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                )}
                                            
                                                <p>৪. যোগাযোগের ঠিকানা :</p>
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <div className='applicationAddress my-4'>
                                                            <div className='form-group'>
                                                                <textarea type="text"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='applicationForm-body-bottom'>
                                                <div className='row'>
                                                    <div className='col-md-4'>
                                                        <div className='applicationUserInfoPartLeft mt-10'>
                                                            <div className='form-group'>
                                                                <input type="email" defaultValue="mahedi0450@gmail.com" disabled className="custom-input-field" />
                                                            </div>
                                                            <div className='form-group'>
                                                                <input type="text" data-toggle="tooltip" data-placement="top" title="স্থান" className="custom-input-field" placeholder="স্থানের নাম ই-চালানের ক্ষেত্রে ইংরেজিতে লিখুন" />
                                                            </div>

                                                            <div className='form-group'>
                                                            <input type="date" className="custom-input-field" defaultValue="2022-06-12" disabled />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-4'></div>
                                                    <div className='col-md-4'>
                                                        <div className='applicationUserInfoPartRight'>
                                                            <div className='text-center'>
                                                                <p>আপনার বিশ্বস্ত : <span className='text-danger'>*</span> </p>
                                                                <p>ই-চালানের ক্ষেত্রে ইংরেজিতে লিখুন </p>
                                                            </div>
                                                            <div className='form-group'>
                                                                <input type="text" defaultValue="Mahedi" className="custom-input-field" />
                                                            </div>
                                                            <div className='form-group text-center'>
                                                                <label>স্বাক্ষর</label> <br/>
                                                                <div className='imagePreviewSignature'>
                                                                    <img src='' id='Signature' alt="Preview"/>
                                                                </div>
                                                                <label className='customUploadbtn1 mb-3'> 
                                                                    <input type="file" className="d-none" onChange={handleFileChange("Signature")}  /> নির্বাচন করুন
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='applicationForm-body-footer text-center mt-5'>
                                                <div className='d-flex justify-content-center'>
                                                    <p> <input type="checkbox" /> আপনি কি প্রিভিউ দেখতে ও সংরক্ষণ করতে চান ?</p>
                                                </div>
                                                <button className='custombtn5'>সংরক্ষণ করে অগ্রসর হউন</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
