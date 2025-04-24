import React from "react";

const Modal = () => {
 return(
  <>
  
  <form class="space-y-6">

  <div class="space-y-1">
    <label class="block text-start text-sm font-medium text-white/60">Your Name <span class="text-red-400">*</span></label>
    <div class="relative">
      <input 
      required
        placeholder="Name" 
        name="name" 
        class="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 hover:border-white/20"
      />
      <svg class="absolute right-4 top-4 text-gray-400/60" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  </div>


  <div class="space-y-1">
    <label class="block text-start text-sm font-medium text-white/60">Your Email <span class="text-red-400">*</span></label>
    <div class="relative">
      <input 
      required
        type="email" 
        name="email" 
        placeholder="Email" 
        class="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 hover:border-white/20"
      />
      <svg class="absolute right-4 top-4 text-gray-400/60" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6" />
      </svg>
    </div>
  </div>


  <div class="space-y-1">
    <label class="block text-start text-sm font-medium text-white/60">Subject <span class="text-red-400">*</span></label>
    <div class="relative">
      <input 
      required
        name="subject" 
        placeholder="Subject" 
        class="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 hover:border-white/20"
        value="Hire Shariar for a project"
      />
      <svg class="absolute right-4 top-4 text-gray-400/60" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z" />
      </svg>
    </div>
  </div>


  <div class="space-y-1">
    <label class="block text-start  text-sm font-medium text-white/60">Project Details <span class="text-red-400">*</span></label>
    <div class="relative">
      <textarea 
      required
        name="message" 
        rows="5" 
        placeholder="Describe your project..." 
        class="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 hover:border-white/20"
      ></textarea>
      <svg class="absolute right-4 top-4 text-gray-400/60" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    </div>
  </div>


  <button 
    type="submit" 
    class="w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
  >
    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
    <span>Send Proposal</span>
  </button>
</form>

  </>
 )
};

export default Modal;
