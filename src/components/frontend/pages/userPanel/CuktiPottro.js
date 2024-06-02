import React, {useState} from 'react';
import Select from 'react-select';

export default function CuktiPottro() {
    const publicUrl = process.env.PUBLIC_URL;
    const [howToPay, setHowToPay] = useState(2);

    const togglehowToPay = (side) => {
        setHowToPay(side);
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
                                    <button className="nav-link active" id="nav-application-tab" data-bs-toggle="tab" data-bs-target="#nav-application" type="button" role="tab" aria-controls="nav-application" aria-selected="true">চুক্তিপত্রের জন্য আবেদন করুন</button>
                                </div>
                            </nav>
                            <div className="tab-content p-3 border bg-light" id="nav-tabContent">
                                <div className="tab-pane fade active show" id="nav-application" role="tabpanel" aria-labelledby="nav-application-tab">
                                    <div className='applicationForm'>
                                        <div className='applicationForm-header text-center'>
                                            <h2 className='fw-bold'>মেধাস্বত্ব হস্তান্তর সংক্রান্ত চুক্তিপত্র রেজিস্ট্রেশন ফরম</h2>
                                        </div>
                                        <div className='applicationForm-body'>
                                            <div className='applicationForm-body-top'>
                                                <p>বরাবর</p>
                                                <p>রেজিস্ট্রার অব কপিরাইট <br/>
                                                    কপিরাইট অফিস, ঢাকা । 
                                                </p>
                                                <p>জনাব ,</p>
                                                <p className=''>
                                                    কপিরাইট আইন (২০০০ সালের ২৮ নং আইন এবং সংশোধিত- ২০০৫) এর ৫৭ ধারা অনুযায়ী আমি মেধাস্বত্ব হস্তান্তর সংক্রান্ত চুক্তিপত্র নিবন্ধনের জন্য আবেদন করছি এবং চুক্তিপত্র নিবন্ধন বহিতে হস্তান্তরিত কর্ম সংক্রান্ত তথ্যসমূহ লিপিবদ্ধ করার জন্য দুইকপি সংশ্লিষ্ট কর্ম ও বিবরণী সংযুক্ত করছি। 
                                                </p>
                                                <br/>
                                               
                                                <div className='d-flex mt-4'>
                                                    <span className='fw-bold'>১. কিভাবে ফি পরিশোধ করা হবে ।</span> <span className='text-danger'>*</span> 
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
                                            
                                                <p>২. সংযুক্তি :</p>
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <div className='attachment my-4'>
                                                            <div className='row'>
                                                                <div className='col-md-3 mb-3'>
                                                                    <div className='form-group'>
                                                                        <label>আবেদনকারীর ছবি <br/>( আবশ্যিক )</label> <br/>
                                                                        <label>
                                                                            <div className='imagePreview'>
                                                                                <img src='' id="PreviewUserImage" alt="Preview" />
                                                                            </div>
                                                                            <input type="file" className="d-none" onChange={handleFileChange("PreviewUserImage")} />
                                                                            <span className='custombtn5'>পরিবর্তন</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-3 mb-3'>
                                                                    <div className='form-group'>
                                                                        <label>জাতীয় পরিচয় পত্র/জন্ম নিবন্ধন/পাসপোর্টের স্ক্যান কপি ( আবশ্যিক )</label> <br/>
                                                                        <label>
                                                                            <div className='imagePreview'>
                                                                                <img src='' id='NationalIdCard' alt="Preview"/>
                                                                            </div>
                                                                            <input type="file" className="d-none" onChange={handleFileChange("NationalIdCard")} />
                                                                             <span className='custombtn5'>নির্বাচন করুন</span>
                                                                        </label>
                                                                        
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-3 mb-3'>
                                                                    <div className='form-group'>
                                                                        <label>চুক্তিনামার মূলকপি ও নোটারি পাবলিক দ্বারা সত্যায়িত ফটোকপি ( আবশ্যিক )</label> <br/>
                                                                        <label>
                                                                            <div className='imagePreview'>
                                                                                <img src='' id='agreementMainCopy' alt="Preview"/>
                                                                            </div>
                                                                            <input type="file" className="d-none" onChange={handleFileChange("agreementMainCopy")} />
                                                                            <span className='custombtn5'>নির্বাচন করুন</span>
                                                                        </label>
                                                                        
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-3 mb-3'>
                                                                    <div className='form-group'>
                                                                        <label>প্রতিষ্ঠানের ট্রেড লাইসেন্সের স্ক্যান কপি ( ব্যবসায়িক প্রতিষ্ঠানের ক্ষেত্রে প্রযোজ্য )</label> <br/>
                                                                        <label>
                                                                            <div className='imagePreview'>
                                                                                <img src='' id='TradeLicence' alt="Preview"/>
                                                                            </div>
                                                                            <input type="file" className="d-none" onChange={handleFileChange("TradeLicence")} /> 
                                                                            <span className='custombtn5'>নির্বাচন করুন</span>
                                                                        </label>
                                                                        
                                                                    </div>
                                                                </div>
                                                                <div className='col-md-3 mb-3'>
                                                                    <div className='form-group'>
                                                                        <label>প্রতিষ্ঠানের টিন সার্টিফিকেটের স্ক্যান কপি( প্রযোজ্য ক্ষেত্রে )</label> <br/>
                                                                        <label>
                                                                            <div className='imagePreview'>
                                                                                <img src='' id='tinSertificate' alt="Preview"/>
                                                                            </div>
                                                                            <input type="file" className="d-none"  onChange={handleFileChange("tinSertificate")}/> 
                                                                            <span className='custombtn5'>নির্বাচন করুন</span>
                                                                        </label>
                                                                        
                                                                    </div>
                                                                </div>
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
                                                                    <input type="file" className="d-none" onChange={handleFileChange("Signature")} /> নির্বাচন করুন
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
