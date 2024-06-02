import React, {useState} from 'react';

export default function Profile() {
  const publicUrl = process.env.PUBLIC_URL;
  const [isEdit, setIsEdit] = useState(false);
  const makeEdit = () => {
    setIsEdit(!isEdit);
  };
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
                  <button className="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                    type="button" role="tab" aria-controls="nav-profile" aria-selected="true">প্রোফাইল</button>
                </div>
              </nav>
              <div className="tab-content p-3 border bg-light" id="nav-tabContent">
                <div className="tab-pane fade active show" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <div className='user-edit-box'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div className='user-image-edit-box'>
                          <div className='form-group'>
                            <label>
                              <div className='user-image'>
                                <img src={`${publicUrl}/assets/images/user/demo-user.png`} alt="Logo" id='EditUserImage' />
                              </div>
                              <input type="file" className='d-none' onChange={handleFileChange("EditUserImage")} />
                              <span className='custombtn1'>পরিবর্তন করুন</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-8'>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='form-group'>
                              <label>ব্যবহারকারীর নাম (বাংলা)</label>
                              {isEdit === false && (
                                <p className="mb-4 fs-4">মেহেদী হাসান</p>
                              )}
                              {isEdit === true && (
                                <input type="text" className="custom-input-field" placeholder="ব্যবহারকারীর নাম (বাংলা)" />
                              )}
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='form-group'>
                              <label>ব্যবহারকারীর নাম (ইংরেজী)</label>
                              {isEdit === false && (
                                <p className="mb-4 fs-4">Mahedi Hasan</p>
                              )}
                              {isEdit === true && (
                                 <input type="text" className="custom-input-field" placeholder="ব্যবহারকারীর নাম (ইংরেজী)" />
                              )}
                             
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='form-group'>
                              <label>ই-মেইল</label>
                              {isEdit === false && (
                                <p className="mb-3 fs-4">mahedi0450@gmail.com</p>
                              )}
                              {isEdit === true && (
                                <input type="email" className="custom-input-field" placeholder="ই-মেইল" />
                              )}
                              
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='form-group'>
                              <label>মোবাইল নম্বর</label>
                              {isEdit === false && (
                                <p className="mb-3 fs-4">01760218646</p>
                              )}
                              {isEdit === true && (
                                <input type="number" className="custom-input-field" placeholder="মোবাইল নম্বর" />
                              )}
                              
                            </div>
                          </div>
                          <div className='col-md-12 '>
                            <div className='text-center'>
                              {isEdit === false && (
                                <button className='custombtn2 mt-3' onClick={() => makeEdit()}> সম্পাদনা করুন</button>
                              )}
                              {isEdit === true && (
                                <button className='custombtn2' onClick={() => makeEdit()}> সংরক্ষণ করুন</button>
                              )}
                            </div>
                          </div>

                        </div>
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
