import React, { useState } from 'react';

function MembershipForm({ onClose }) {
  const [formStep, setFormStep] = useState(1);
  const [membershipType, setMembershipType] = useState('');
  const [formData, setFormData] = useState({
    name: '', fatherName: '', cell: '', dob: '', address: '', district: '', city: '', email: '',
    pmdc: '', graduationYear: '', medicalCollege: '', pgDegrees: '', currentPosting: '', designation: '', scale: '', clinicAddress: '',
    collegeName: '', currentClass: '', expectedGraduation: '', specialtiesInterest: '', extraCurricular: '', medicalRelativeAssociate: '',
    basicProfession: '', profQualification: '', expertiseArea: '', howCanHelpFriends: '', medicalRelativeFriends: '',
    basicDisease: '', diseaseDuration: '', familyHistory: '', howGCDAHelpPatient: '', medicalRelativePatient: '',
    agreedToRules: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleContinue = (e) => {
    e.preventDefault();
    
    // بنیادی خالی فیلڈز کی پڑتال
    if (!formData.name || !formData.cell || !formData.district || !formData.city || !formData.email) {
      alert("براہ کرم تمام لازمی معلومات (نام، موبائل، ای میل، ضلع، شہر) پُر کریں۔");
      return;
    }

    // سخت ای میل ویلیڈیشن
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("براہ کرم درست ای میل ایڈریس درج کریں! (مثال: name@example.com)");
      return;
    }

    // سخت موبائل نمبر ویلیڈیشن (پاکستان فارمیٹ: 03 سے شروع ہو اور کل 11 ہندسے ہوں)
    const cellRegex = /^03\d{9}$/;
    if (!cellRegex.test(formData.cell)) {
      alert("براہ کرم درست اور مکمل موبائل نمبر درج کریں! (11 ہندسے - مثال: 03331234567)");
      return;
    }

    setFormStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (membershipType === 'Full' && !formData.pmdc) return alert("PMDC # لازمی ہے!");
    if (membershipType === 'Associate' && (!formData.collegeName || !formData.currentClass)) return alert("کالج اور کلاس لازمی ہے!");
    if (membershipType === 'Friends' && !formData.howCanHelpFriends) return alert("مدد کا طریقہ منتخب کرنا لازمی ہے!");
    if (membershipType === 'Patient' && (!formData.howGCDAHelpPatient || !formData.agreedToRules)) return alert("ضروری فیلڈز اور اقرار نامہ لازمی ہے!");

    alert("🎉 فارم کامیابی کے ساتھ سبمٹ ہو گیا ہے!");
    console.log("Data: ", formData);
    if (onClose) onClose(); 
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden font-sans relative max-h-[90vh] overflow-y-auto">
      
      {/* بند کرنے کا کراس بٹن (Close Button) */}
      {onClose && (
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full z-50 transition-all cursor-pointer"
          title="Close Form"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {/* ہیڈر */}
      <div className="bg-[#1A7963] text-white p-6 md:p-8 text-center relative">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide">GCDA Online Membership Portal</h2>
        <div className="flex justify-center items-center gap-4 mt-6 text-xs font-semibold">
          <span className={`px-3 py-1.5 rounded-full ${formStep === 1 ? 'bg-[#E9967A] text-white' : 'bg-white/20 text-white'}`}>1. Basic Details</span>
          <div className="w-8 h-0.5 bg-white/30"></div>
          <span className={`px-3 py-1.5 rounded-full ${formStep === 2 ? 'bg-[#E9967A] text-white' : 'bg-white/20 text-white'}`}>2. Select & Complete Type</span>
        </div>
      </div>

      <div className="p-6 md:p-10">
        {formStep === 1 && (
          <form onSubmit={handleContinue} className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
              <span className="w-2 h-5 bg-[#1A7963] inline-block rounded-sm"></span> Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#1A7963]" placeholder="Enter Full Name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Father Name</label>
                <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#1A7963]" placeholder="Enter Father's Name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Cell # (11 Digits) <span className="text-red-500">*</span></label>
                <input type="tel" name="cell" value={formData.cell} onChange={handleChange} maxLength="11" required className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#1A7963]" placeholder="e.g. 03331234567" />
              </div>
              
              {/* Date of Birth Field with Calendar Icon */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth <span className="text-red-500">*</span></label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-gray-400 pointer-events-none">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input 
                    type="date" 
                    name="dob" 
                    value={formData.dob} 
                    onChange={handleChange} 
                    required
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2.5 text-sm outline-none focus:border-[#1A7963] text-gray-700 cursor-pointer" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">District <span className="text-red-500">*</span></label>
                <input type="text" name="district" value={formData.district} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#1A7963]" placeholder="Your District" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#1A7963]" placeholder="Your City" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#1A7963]" placeholder="name@example.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#1A7963]" placeholder="Current or Permanent Address" />
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <button type="submit" className="bg-[#E9967A] hover:bg-[#d68569] text-white font-bold px-8 py-3 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer">
                <span>Continue</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </form>
        )}

        {formStep === 2 && (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-8">Choose Your Membership Category</h3>
              
              {/* Premium, Large, and Beautiful Membership Category Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Full Membership Card */}
                <div 
                  onClick={() => setMembershipType('Full')} 
                  className={`cursor-pointer border-2 rounded-2xl p-6 text-center transition-all duration-300 min-h-[220px] flex flex-col items-center justify-start relative hover:-translate-y-1 ${
                    membershipType === 'Full' 
                      ? 'border-[#1A7963] bg-[#1A7963]/5 shadow-lg ring-1 ring-[#1A7963]' 
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="text-4xl mb-4 p-3 bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center">🩺</div>
                  <h4 className="font-bold text-base text-gray-800 mb-2">Full Membership</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">For registered medical doctors and general cadre practitioners.</p>
                  {membershipType === 'Full' && <div className="absolute top-3 right-3 text-[#1A7963] text-lg">✔</div>}
                </div>

                {/* Associate Membership Card */}
                <div 
                  onClick={() => setMembershipType('Associate')} 
                  className={`cursor-pointer border-2 rounded-2xl p-6 text-center transition-all duration-300 min-h-[220px] flex flex-col items-center justify-start relative hover:-translate-y-1 ${
                    membershipType === 'Associate' 
                      ? 'border-[#1A7963] bg-[#1A7963]/5 shadow-lg ring-1 ring-[#1A7963]' 
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="text-4xl mb-4 p-3 bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center">🎓</div>
                  <h4 className="font-bold text-base text-gray-800 mb-2">Associate Membership</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">For ongoing medical college students and fresh graduates.</p>
                  {membershipType === 'Associate' && <div className="absolute top-3 right-3 text-[#1A7963] text-lg">✔</div>}
                </div>

                {/* Friends of GCDA Card */}
                <div 
                  onClick={() => setMembershipType('Friends')} 
                  className={`cursor-pointer border-2 rounded-2xl p-6 text-center transition-all duration-300 min-h-[220px] flex flex-col items-center justify-start relative hover:-translate-y-1 ${
                    membershipType === 'Friends' 
                      ? 'border-[#1A7963] bg-[#1A7963]/5 shadow-lg ring-1 ring-[#1A7963]' 
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="text-4xl mb-4 p-3 bg-amber-50 rounded-full w-16 h-16 flex items-center justify-center">🤝</div>
                  <h4 className="font-bold text-base text-gray-800 mb-2">Friends of GCDA</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">For non-medical experts, advisors, media, or tech supports.</p>
                  {membershipType === 'Friends' && <div className="absolute top-3 right-3 text-[#1A7963] text-lg">✔</div>}
                </div>

                {/* Members as Patient Card */}
                <div 
                  onClick={() => setMembershipType('Patient')} 
                  className={`cursor-pointer border-2 rounded-2xl p-6 text-center transition-all duration-300 min-h-[220px] flex flex-col items-center justify-start relative hover:-translate-y-1 ${
                    membershipType === 'Patient' 
                      ? 'border-[#1A7963] bg-[#1A7963]/5 shadow-lg ring-1 ring-[#1A7963]' 
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="text-4xl mb-4 p-3 bg-red-50 rounded-full w-16 h-16 flex items-center justify-center">❤️</div>
                  <h4 className="font-bold text-base text-gray-800 mb-2">Members as Patient</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">For public citizens seeking medical advisory and updates.</p>
                  {membershipType === 'Patient' && <div className="absolute top-3 right-3 text-[#1A7963] text-lg">✔</div>}
                </div>

              </div>
            </div>

            {membershipType && (
              <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-6">
                {membershipType === 'Full' && (
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-[#1A7963] border-b pb-2">Full Membership Specifications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">PMDC / PMC # <span className="text-red-500">*</span></label>
                        <input type="text" name="pmdc" value={formData.pmdc} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" placeholder="e.g. 12345-P" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Year of Graduation</label>
                        <input type="number" name="graduationYear" value={formData.graduationYear} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Medical College Attended</label>
                        <input type="text" name="medicalCollege" value={formData.medicalCollege} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Post-Graduation Degrees</label>
                        <input type="text" name="pgDegrees" value={formData.pgDegrees} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" placeholder="FCPS, MRCP etc." />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Current Posting Place</label>
                        <input type="text" name="currentPosting" value={formData.currentPosting} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Designation</label>
                        <input type="text" name="designation" value={formData.designation} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Basic Pay Scale (BPS)</label>
                        <select name="scale" value={formData.scale} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]">
                          <option value="">Select Scale</option>
                          <option value="17">BS-17</option>
                          <option value="18">BS-18</option>
                          <option value="19">BS-19</option>
                          <option value="20">BS-20</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Clinic Address (If any)</label>
                        <input type="text" name="clinicAddress" value={formData.clinicAddress} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" />
                      </div>
                    </div>
                  </div>
                )}

                {membershipType === 'Associate' && (
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-[#1A7963] border-b pb-2">Associate Membership Specifications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Name of Medical College <span className="text-red-500">*</span></label>
                        <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Current Class / Year <span className="text-red-500">*</span></label>
                        <input type="text" name="currentClass" value={formData.currentClass} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Expected Year of Graduation</label>
                        <input type="number" name="expectedGraduation" value={formData.expectedGraduation} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Interest in Specialties</label>
                        <input type="text" name="specialtiesInterest" value={formData.specialtiesInterest} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Extra-Curricular Activities</label>
                        <input type="text" name="extraCurricular" value={formData.extraCurricular} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Any Relative in Medical Profession?</label>
                        <input type="text" name="medicalRelativeAssociate" value={formData.medicalRelativeAssociate} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" />
                      </div>
                    </div>
                  </div>
                )}

                {membershipType === 'Friends' && (
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-[#1A7963] border-b pb-2">Friends of GCDA Specifications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Basic Profession</label>
                        <input type="text" name="basicProfession" value={formData.basicProfession} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Professional Qualification</label>
                        <input type="text" name="profQualification" value={formData.profQualification} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Area of Expertise</label>
                        <input type="text" name="expertiseArea" value={formData.expertiseArea} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">How can you help GCDA? <span className="text-red-500">*</span></label>
                        <select name="howCanHelpFriends" value={formData.howCanHelpFriends} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]">
                          <option value="">Select Support Area</option>
                          <option value="Advisory">Advisory Support</option>
                          <option value="Technical Skill">Technical Skill (IT/Web)</option>
                          <option value="Media Support">Media Support</option>
                          <option value="Legal Support">Legal Support</option>
                          <option value="Financial/Audit">Financial / Audit Support</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Any Relative in Medical Profession?</label>
                        <input type="text" name="medicalRelativeFriends" value={formData.medicalRelativeFriends} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" />
                      </div>
                    </div>
                  </div>
                )}

                {membershipType === 'Patient' && (
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-[#1A7963] border-b pb-2">Patient Membership Specifications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Basic Disease Category</label>
                        <select name="basicDisease" value={formData.basicDisease} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]">
                          <option value="">Select Disease</option>
                          <option value="Diabetics">Diabetics (شوگر)</option>
                          <option value="Blood pressure">Blood Pressure (بلڈ پریشر)</option>
                          <option value="Heart attack">Heart Attack (دل کا عارضہ)</option>
                          <option value="Asthma">Asthma (دمہ)</option>
                          <option value="Tuberculosis">Tuberculosis (ٹی بی)</option>
                          <option value="Chronic diarrhea">Chronic Diarrhea</option>
                          <option value="Other">Other (دیگر)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Duration of the Disease</label>
                        <select name="diseaseDuration" value={formData.diseaseDuration} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]">
                          <option value="">Select Duration</option>
                          <option value="3 Months">3 Months</option>
                          <option value="6 Months">6 Months</option>
                          <option value="9 Months">9 Months</option>
                          <option value="12 Months">12 Months</option>
                          <option value="More">More Than a Year</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Family History of Disease?</label>
                        <select name="familyHistory" value={formData.familyHistory} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]">
                          <option value="">Select Option</option>
                          <option value="Yes">Yes (ہاں)</option>
                          <option value="No">No (نہیں)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">How can GCDA help you? <span className="text-red-500">*</span></label>
                        <select name="howGCDAHelpPatient" value={formData.howGCDAHelpPatient} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]">
                          <option value="">Select Help Type</option>
                          <option value="Medical Advisory">Medical Advisory</option>
                          <option value="Disease Update">Disease Update</option>
                          <option value="Video Learning">Video Learning</option>
                          <option value="Video Consultation">Video Consultation</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Any Relative in Medical Profession?</label>
                        <input type="text" name="medicalRelativePatient" value={formData.medicalRelativePatient} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white outline-none focus:border-[#1A7963]" placeholder="Details" />
                      </div>
                    </div>
                    <div className="mt-4 bg-[#1A7963]/5 p-3 rounded-lg border border-[#1A7963]/20 flex items-start gap-2.5">
                      <input type="checkbox" name="agreedToRules" checked={formData.agreedToRules} onChange={handleChange} id="rulesBox" className="mt-1 accent-[#1A7963]" />
                      <label htmlFor="rulesBox" className="text-xs text-gray-700 cursor-pointer select-none leading-relaxed">
                        I solemnly declare to follow the rules and regulations laid down by the GCDA.
                      </label>
                    </div>
                  </div>
                )}

                <div className="pt-4 flex justify-between items-center border-t border-gray-200">
                  <button type="button" onClick={() => setFormStep(1)} className="text-sm font-semibold text-gray-600 hover:text-black flex items-center gap-1 cursor-pointer">
                    <span>Back</span>
                  </button>
                  <button type="submit" className="bg-[#1A7963] hover:bg-[#145d4c] transition-all text-white font-bold px-8 py-2.5 rounded-lg shadow-md cursor-pointer">
                    <span>Submit Form</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MembershipForm;