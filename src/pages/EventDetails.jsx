// src/pages/EventDetails.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { eventsData } from '../data/eventsData';

const EventDetails = ({ onOpenMembership }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [isOpen, setIsOpen] = useState(false);
  const [isMember, setIsMember] = useState(null); // null, 'yes', 'no'
  const [memberCode, setMemberCode] = useState('');

  const event = eventsData.find(e => e.id === parseInt(id));

  if (!event) {
    return <div className="text-center py-20 text-xl font-semibold">Event not found!</div>;
  }

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! Your membership code "${memberCode}" has been submitted for enrollment.`);
    setIsOpen(false);
    setMemberCode('');
    setIsMember(null);
  };

  const handleOpenRegistrationForm = () => {
    setIsOpen(false);
    setIsMember(null);
    if (onOpenMembership) {
      onOpenMembership();
    }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans py-8">
      {/* 📦 مین کنٹینر (جو گیلری پیج جتنا چوڑا ہوگا) */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* بیک بٹن */}
        <button 
          onClick={() => navigate(-1)} 
          className="mb-6 flex items-center text-[#0f5132] font-medium hover:underline transition-colors"
        >
          ← Back to Events
        </button>

        {/* 🔀 گریڈ سسٹم: بڑی اسکرین پر 3 کالمز ہوں گے (2 کالم لیفٹ کے لیے، 1 کالم رائٹ کے لیے) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* ==================== LEFT SIDE (کالم 1 اور 2) ==================== */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 md:p-8 space-y-6">
            
            {/* 1. سب سے اوپر تصویر */}
            <div className="w-full h-64 md:h-[400px] rounded-xl overflow-hidden shadow-inner relative">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-[#0f5132] text-white text-xs font-bold px-3 py-1 rounded shadow">
                Upcoming Event
              </div>
            </div>

            {/* 2. ٹائٹل اور کونے میں تاریخ */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-[#0f5132] leading-tight">
                {event.title}
              </h1>
              <div className="text-[#e67e22] font-semibold text-sm md:text-base whitespace-nowrap bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200 shadow-sm self-start sm:self-center flex items-center gap-1">
                📅 {event.date}
              </div>
            </div>

            {/* 3. مین ڈسکرپشن */}
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Overview</h3>
              <p className="text-gray-600 text-lg font-medium italic mb-4">
                {event.description}
              </p>
              <p className="text-gray-800 text-base">
                {event.longDescription}
              </p>
            </div>

            {/* 4. انرولمنٹ کا بٹن */}
            <div className="pt-4 border-t">
              <button 
                onClick={() => setIsOpen(true)}
                className="bg-[#e67e22] text-white px-8 py-3 rounded-xl font-bold text-base hover:bg-[#d35400] transition-all transform active:scale-95 shadow-md flex items-center gap-2"
              >
                Enroll Now
              </button>
            </div>
          </div>


          {/* ==================== RIGHT SIDE (کالم 3) ==================== */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 space-y-6 sticky top-6">
            
            {/* رائٹ سائیڈ کا پہلا بلاک: ایونٹ انفارمیشن کارڈ */}
            <div>
              <h3 className="text-lg font-bold text-[#0f5132] border-b pb-2 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#e67e22] rounded-full inline-block"></span>
                Program Highlights
              </h3>
              
              {/* عارضی ٹیکسٹ (یہاں آپ بعد میں اصل ڈیٹا ڈال سکتے ہیں) */}
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <strong>Eligibility:</strong> Open to all medical graduates and GCDA members.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <strong>Certification:</strong> PMDC certified credit hours will be awarded.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <strong>Venue:</strong> Will be shared via email exclusively with registered members.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <strong>Seats:</strong> Limited slots available on a first-come, first-served basis.
                </li>
              </ul>
            </div>

            {/* رائٹ سائیڈ کا دوسرا بلاک: ہیلپ ڈیسک یا ضروری نوٹ */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <h4 className="font-bold text-gray-800 text-sm mb-1">Need Assistance?</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                If you are facing any issues regarding membership verification or event enrollment, feel free to contact us.
              </p>
              <div className="text-xs font-semibold text-[#0f5132]">
                📧 Email: info@gcda.org.pk <br/>
                📞 Help: +92-333-7074846
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ------------------ ENROLL NOW MODAL (پاپ اپ فارم) ------------------ */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-100">
            
            <div className="bg-[#0f5132] text-white p-4 flex justify-between items-center">
              <h3 className="font-bold text-lg">Event Enrollment</h3>
              <button 
                onClick={() => { setIsOpen(false); setIsMember(null); }}
                className="text-white hover:text-gray-200 font-bold text-xl"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              {isMember === null && (
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-800 mb-6">Are you already a member?</p>
                  <div className="flex gap-4 justify-center">
                    <button 
                      onClick={() => setIsMember('yes')}
                      className="bg-[#0f5132] text-white px-6 py-2 rounded-md font-medium hover:bg-emerald-800 transition-colors w-28"
                    >
                      Yes
                    </button>
                    <button 
                      onClick={() => setIsMember('no')}
                      className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md font-medium hover:bg-gray-300 transition-colors w-28"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* اگر ممبر ہے تو کوڈ درج کرے */}
              {isMember === 'yes' && (
                <form onSubmit={handleEnrollSubmit} className="space-y-4">
                  <p className="text-gray-700 font-medium">Enter your membership code:</p>
                  <input 
                    type="text" 
                    required
                    placeholder="Membership Code (e.g. GCDA-123)" 
                    value={memberCode}
                    onChange={(e) => setMemberCode(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#0f5132] uppercase"
                  />
                  <div className="flex gap-2 justify-end pt-2">
                    <button 
                      type="button" 
                      onClick={() => setIsMember(null)}
                      className="text-gray-500 hover:underline text-sm mr-auto"
                    >
                      ← Go Back
                    </button>
                    <button 
                      type="submit"
                      className="bg-[#e67e22] text-white px-5 py-2 rounded hover:bg-[#d35400]"
                    >
                      Submit & Enroll
                    </button>
                  </div>
                </form>
              )}

              {/* اگر ممبر نہیں ہے تو اصلی فارم کھولنے والا بٹن */}
              {isMember === 'no' && (
                <div className="text-center space-y-4">
                  <p className="text-red-600 font-medium">Please become a member first to access this event.</p>
                  <p className="text-gray-600 text-sm">Click the button below to fill out the online membership form.</p>
                  
                  <button 
                    onClick={handleOpenRegistrationForm}
                    className="w-full bg-[#e67e22] text-white text-center py-2.5 rounded font-bold hover:bg-[#d35400] transition-colors"
                  >
                    Open Membership Registration Form
                  </button>
                  
                  <button 
                    onClick={() => setIsMember(null)}
                    className="text-sm text-gray-500 block mx-auto hover:underline pt-2"
                  >
                    ← Go Back
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;