import React, { useState } from "react";
import { NavLink } from "react-router";
import "./openAccount.scss";
import Logo from "../../assets/logo/logo.svg";

const steps = [
  { number: "01", title: "Personal Details", desc: "Your basic information" },
  { number: "02", title: "Account Type", desc: "Choose your trading account" },
  { number: "03", title: "Verification", desc: "Identity verification" },
];

export default function OpenAccountPage() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
    accountType: "standard",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const accountTypes = [
    {
      id: "standard",
      title: "Standard",
      spread: "From 1.0 pips",
      leverage: "1:500",
      minDeposit: "$100",
      badge: null,
    },
    {
      id: "pro",
      title: "Pro",
      spread: "From 0.5 pips",
      leverage: "1:500",
      minDeposit: "$1,000",
      badge: "Popular",
    },
    {
      id: "vip",
      title: "VIP",
      spread: "From 0.0 pips",
      leverage: "1:500",
      minDeposit: "$10,000",
      badge: "Premium",
    },
  ];

  return (
    <div className="open-account-page">
      <div className="oa-bg-blur"></div>

      <div className="oa-card">
        {/* Logo */}
        <div className="oa-logo">
          <NavLink to="/">
            <img src={Logo} alt="Sea Global FX" />
          </NavLink>
        </div>

        {/* Progress Steps */}
        <div className="oa-steps">
          {steps.map((s, i) => (
            <div key={i} className={`oa-step ${step > i + 1 ? "done" : ""} ${step === i + 1 ? "active" : ""}`}>
              <div className="step-circle">
                {step > i + 1 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span>{s.number}</span>
                )}
              </div>
              <div className="step-info">
                <p className="step-title">{s.title}</p>
                <p className="step-desc">{s.desc}</p>
              </div>
              {i < steps.length - 1 && <div className="step-line"></div>}
            </div>
          ))}
        </div>

        {/* Step 1 — Personal Details */}
        {step === 1 && (
          <div className="oa-form-section">
            <div className="oa-section-title">
              <h2>Personal Details</h2>
              <p>Tell us a little about yourself</p>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" />
              </div>
              <div className="form-group full">
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" />
              </div>
              <div className="form-group">
                <label>Country</label>
                <select name="country" value={formData.country} onChange={handleChange}>
                  <option value="">Select Country</option>
                  <option value="IN">India</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AE">UAE</option>
                  <option value="SG">Singapore</option>
                  <option value="AU">Australia</option>
                </select>
              </div>
              <div className="form-group full">
                <label>Password</label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a strong password"
                  />
                  <button type="button" className="toggle-eye" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="form-group full">
                <label>Confirm Password</label>
                <div className="input-wrapper">
                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                  />
                  <button type="button" className="toggle-eye" onClick={() => setShowConfirm(!showConfirm)}>
                    {showConfirm ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <button className="oa-next-btn" onClick={() => setStep(2)}>Continue →</button>
          </div>
        )}

        {/* Step 2 — Account Type */}
        {step === 2 && (
          <div className="oa-form-section">
            <div className="oa-section-title">
              <h2>Choose Account Type</h2>
              <p>Select the account that suits your trading style</p>
            </div>
            <div className="account-type-grid">
              {accountTypes.map((acc) => (
                <label key={acc.id} className={`account-type-card ${formData.accountType === acc.id ? "selected" : ""}`}>
                  <input type="radio" name="accountType" value={acc.id} checked={formData.accountType === acc.id} onChange={handleChange} />
                  {acc.badge && <span className="acc-badge">{acc.badge}</span>}
                  <h3>{acc.title}</h3>
                  <div className="acc-details">
                    <div className="acc-detail-item"><span>Spread</span><strong>{acc.spread}</strong></div>
                    <div className="acc-detail-item"><span>Leverage</span><strong>{acc.leverage}</strong></div>
                    <div className="acc-detail-item"><span>Min. Deposit</span><strong>{acc.minDeposit}</strong></div>
                  </div>
                </label>
              ))}
            </div>
            <div className="oa-btn-row">
              <button className="oa-back-btn" onClick={() => setStep(1)}>← Back</button>
              <button className="oa-next-btn" onClick={() => setStep(3)}>Continue →</button>
            </div>
          </div>
        )}

        {/* Step 3 — Verification */}
        {step === 3 && (
          <div className="oa-form-section">
            <div className="oa-section-title">
              <h2>Identity Verification</h2>
              <p>We need to verify your identity to comply with regulations</p>
            </div>
            <div className="verification-info">
              <div className="verify-item">
                <div className="verify-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2" /></svg>
                </div>
                <div>
                  <h4>Government ID</h4>
                  <p>Passport, National ID, or Driver's License</p>
                </div>
              </div>
              <div className="verify-item">
                <div className="verify-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </div>
                <div>
                  <h4>Proof of Address</h4>
                  <p>Bank statement or utility bill (last 3 months)</p>
                </div>
              </div>
            </div>
            <label className="oa-terms">
              <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
              <span>I agree to the <a href="#terms">Terms & Conditions</a> and <a href="#privacy">Privacy Policy</a></span>
            </label>
            <div className="oa-btn-row">
              <button className="oa-back-btn" onClick={() => setStep(2)}>← Back</button>
              <button className={`oa-submit-btn ${formData.agreeTerms ? "active" : ""}`} disabled={!formData.agreeTerms}>
                Open My Account 🚀
              </button>
            </div>
          </div>
        )}

        <div className="oa-login-link">
          <p>Already have an account? <NavLink to="/login">Login here</NavLink></p>
        </div>
      </div>
    </div>
  );
}
