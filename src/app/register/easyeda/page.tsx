'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, User, Mail, Phone, CreditCard, FileText, Hash, MessageCircle } from 'lucide-react'

export default function EasyEDARegistrationPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    srn: '',
    semester: '',
    section: '',
    phone: '',
    email: '',
    paymentProofLink: '',
    transactionId: '',
    joinWhatsapp: false,
    pcbLevel: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [joinedAnswer, setJoinedAnswer] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbzmRLS9WwTK_ljXy_BU8T0ilP4j-7B5g98RMcJd6Eljm-jhLtQlZm0-KAogChgSicZjng/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          name: form.name,
          srn: form.srn,
          semester: form.semester,
          section: form.section,
          phone: form.phone,
          email: form.email,
          paymentProofLink: form.paymentProofLink,
          transactionId: form.transactionId,
          pcbLevel: form.pcbLevel,
          joinedWhatsapp: joinedAnswer === 'yes',
        }),
      })
      // Proceed regardless of response shape; Apps Script returns JSON normally
      // If you want strict check: await res.json()
    } catch (err) {
      // Swallow network errors but still show thank-you so users are not blocked
      console.error('Submit failed', err)
    }
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }

  const isFormValid =
    form.name.trim().length > 0 &&
    form.srn.trim().length > 0 &&
    form.semester.trim().length > 0 &&
    form.section.trim().length > 0 &&
    /^[0-9]{10}$/.test(form.phone) &&
    form.email.trim().length > 0 &&
    form.paymentProofLink.trim().length > 0 &&
    form.transactionId.trim().length > 0 &&
    form.pcbLevel.trim().length > 0 &&
    joinedAnswer === 'yes'

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2024/05/31/06/48/ai-generated-8799924_1280.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Dark overlay for readability */
      }
      <div className="fixed inset-0 z-0 bg-black/70" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10 xs:py-14">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-black/60 backdrop-blur-lg border border-white/10 rounded-3xl p-6 xs:p-8">
            <h1 className="text-2xl xs:text-3xl font-extrabold mb-2">
              EasyEDA Workshop Registration
            </h1>
            <div className="text-gray-300 mb-6">
              <p className="mb-3">PCB Design Workshop using EasyEDA Pro</p>
              <div className="space-y-1 text-sm">
                <div>• Time: 9am - 4pm</div>
                <div>• Venue: CV Raman Block (102/103)</div>
                <div>• Fee: ₹100 per head</div>
                <div>• Laptops are compulsory</div>
                <div>• Registration closes on Sep 19</div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-400 mb-1">Conducted by:</p>
                <p className="text-lg font-bold text-cyan-400 mb-1">School Of Electronics & Communication Engineering</p>
                <p className="text-base font-semibold text-purple-400">IEEE RAS REVA UNIVERSITY X &lt;/DevBraze&gt;</p>
              </div>
            </div>

            {submitted && (
              <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-white text-sm">Thank you for registering.</div>
                <div className="text-gray-300 text-sm mt-1">You will be let into the WhatsApp group soon.</div>
                <div className="text-xs text-gray-400 mt-2">Redirecting to home...</div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">SRN</label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
                    <input
                      name="srn"
                      type="text"
                      required
                      pattern="^[Rr][0-9]{2}[A-Za-z]{2}[0-9]{3}$"
                      title="Format: R22EN217 (R or r, two-digit year, two letters, three digits)"
                      value={form.srn}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="e.g., R22EN217"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Semester</label>
                  <select
                    name="semester"
                    required
                    value={form.semester}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-black/50 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  >
                    <option value="" disabled>Select</option>
                    {Array.from({ length: 8 }).map((_, i) => (
                      <option key={i+1} value={String(i+1)}>Semester {i+1}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Section</label>
                  <input
                    name="section"
                    type="text"
                    required
                    value={form.section}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="e.g., A"
                  />
                </div>
                
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
                    <input
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="10-digit number"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Use the same number you will join the WhatsApp group with.</p>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* PCB Knowledge Level */}
              <div>
                <label className="block text-sm text-gray-300 mb-1">Your knowledge level in PCB Design</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Beginner', value: 'beginner' },
                    { label: 'Intermediate', value: 'intermediate' },
                    { label: 'Expert', value: 'expert' },
                  ].map((opt) => (
                    <label key={opt.value} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/50 px-3 py-2 cursor-pointer hover:border-cyan-500/40 transition-colors">
                      <input
                        type="radio"
                        name="pcbLevel"
                        value={opt.value}
                        checked={form.pcbLevel === opt.value}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-cyan-500/50 bg-black/50 text-cyan-400 focus:ring-cyan-400/30"
                        required
                      />
                      <span className="text-sm text-gray-300">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Scan & Pay QR - Always fully visible */}
              <div className="mt-2">
                <label className="block text-sm text-gray-300 mb-2">Scan & Pay (UPI) — ₹100</label>
                <div className="w-full flex justify-center items-center">
                  <div className="rounded-2xl border border-white/10 bg-black/50 p-3">
                    <img
                      src="/images/qr/chqr.jpg"
                      alt="Scan to Pay QR"
                      className="block object-contain w-[320px] max-w-[90vw] h-auto"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">Scan the QR to pay, then paste the Drive link below.</p>
              </div>

              {/* Transaction ID (moved below QR) */}
              <div className="mt-4">
                <label className="block text-sm text-gray-300 mb-1">Transaction ID</label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
                  <input
                    name="transactionId"
                    type="text"
                    required
                    value={form.transactionId}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2.5 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="UPI/Transaction ID"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Payment Confirmation Screenshot (Drive Link)</label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
                  <input
                    name="paymentProofLink"
                    type="url"
                    required
                    value={form.paymentProofLink}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2.5 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="https://drive.google.com/..."
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">Ensure the link is accessible (Anyone with the link can view).</p>
              </div>

              <div className="mt-4 flex flex-col items-center gap-3">
                <a
                  href="https://chat.whatsapp.com/GyfNQslMaWm0z8PyrwKjpQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold transition-all duration-300 shadow transform hover:scale-105 hover:shadow-xl hover:brightness-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Join WhatsApp Group
                </a>
                <label className="inline-flex items-center gap-2 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    name="joinedGroup"
                    checked={joinedAnswer === 'yes'}
                    onChange={(e) => setJoinedAnswer(e.target.checked ? 'yes' : '')}
                    className="h-4 w-4 rounded border-cyan-500/50 bg-black/50 text-cyan-400 focus:ring-cyan-400/30"
                  />
                  I have joined the WhatsApp group
                </label>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isFormValid
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400'
                      : 'bg-white/10 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Submit Registration
                </button>
              </div>

              {submitted && (
                <></>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  )
}


