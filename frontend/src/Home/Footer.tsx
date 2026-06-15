import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function Footer() {
    const [email, setEmail] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [result, setResult] = useState('')

    const handleNewsletterSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()

        if (submitting || !email) return

        setSubmitting(true)
        setResult('Subscribing...')

        const formData = new FormData()
        formData.append('email', email)
        formData.append('subject', 'Newsletter Subscription')
        formData.append('access_key', '2fb1f827-8b1b-4e33-ac36-06b55f706894')

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            })

            const data = await response.json()

            if (data.success) {
                setResult('Subscribed successfully!')
                setEmail('')
                setTimeout(() => setResult(''), 3000)
            } else {
                setResult('Something went wrong. Please try again.')
                setTimeout(() => setResult(''), 3000)
            }
        } catch (error) {
            setResult('Unable to subscribe. Please try again.')
            setTimeout(() => setResult(''), 3000)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <footer className="bg-slate-900 text-slate-300 py-8" id="contact">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-6">

                    <div className="col-span-2 lg:col-span-1 space-y-3">
                        {/* <img alt="SmartStudent.ai Logo"
                 className="h-8 w-auto brightness-0 invert"
                 src={logoImage}
            /> */}

                        <p className="text-sm leading-relaxed">
                            Revolutionizing education through artificial intelligence.
                            Empowering institutes, supporting teachers, and inspiring students.
                        </p>

                        <div className="flex gap-3">
                            <a
                                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors"
                                href="https://www.facebook.com/people/Smartstudentai/61571398211813/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                {/* <Facebook className="w-4 h-4" /> */}
                            </a>

                            <a
                                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors"
                                href="https://www.instagram.com/smart.student.ai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                {/* <Instagram className="w-4 h-4" /> */}
                            </a>
                        </div>
                    </div>

                    <div>
                        <h5 className="text-white font-bold mb-4 text-base">
                            Quick Links
                        </h5>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    className="hover:text-emerald-400 transition-colors"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="hover:text-emerald-400 transition-colors"
                                    to="/features"
                                >
                                    Features
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="hover:text-emerald-400 transition-colors"
                                    to="/about"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="hover:text-emerald-400 transition-colors"
                                    to="/blogs"
                                >
                                    Blog
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="hover:text-emerald-400 transition-colors"
                                    to="/faq"
                                >
                                    FAQ
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="hover:text-emerald-400 transition-colors"
                                    to="/contact"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white font-bold mb-4 text-base">
                            Solutions
                        </h5>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    className="hover:text-emerald-400 transition-colors"
                                    to="/solutions/institutes"
                                >
                                    For Institutes
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="hover:text-emerald-400 transition-colors"
                                    to="/solutions/teachers"
                                >
                                    For Teachers
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="hover:text-emerald-400 transition-colors"
                                    to="/solutions/students"
                                >
                                    For Students
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <h5 className="text-white font-bold mb-4 text-base">
                            Newsletter
                        </h5>

                        <p className="text-sm mb-3">
                            Stay updated with the latest in AI edtech.
                        </p>

                        <form
                            className="flex flex-col gap-2"
                            onSubmit={handleNewsletterSubmit}
                        >
                            <div className="flex gap-2">
                                <input
                                    className="bg-slate-800 border-none rounded-lg px-3 py-2 w-full focus:ring-1 focus:ring-emerald-600 text-sm text-white placeholder-slate-400"
                                    placeholder="Your email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={submitting}
                                />

                                <button
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    type="submit"
                                    disabled={submitting}
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>

                            {result && (
                                <p
                                    className={`text-xs ${result.includes('successfully')
                                        ? 'text-emerald-400'
                                        : 'text-red-400'
                                        }`}
                                >
                                    {result}
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                    <p>© 2026 SmartStudent.ai. All rights reserved.</p>

                    <div className="flex gap-6">
                        <Link
                            className="hover:text-white transition-colors"
                            to="/privacy"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            className="hover:text-white transition-colors"
                            to="/terms"
                        >
                            Terms of Service
                        </Link>

                        <Link
                            className="hover:text-white transition-colors"
                            to="/cookies"
                        >
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}