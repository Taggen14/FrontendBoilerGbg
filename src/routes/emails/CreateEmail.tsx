import { useState } from 'react'
import { PlusCircle } from 'lucide-react'

interface Email {
  subject: string
  content: string
}

export function CreateEmail() {
  const [emails, setEmails] = useState<Email[]>([
    { subject: "Exciting New Product Launch!", content: "Dear valued customer, we're thrilled to announce our latest product that will revolutionize your daily routine. Get ready for an exclusive first look!" },
    { subject: "Limited Time Offer Inside", content: "Don't miss out on our exclusive deal! For the next 48 hours, enjoy unprecedented discounts on our entire summer collection. Act fast before this offer expires!" }
  ])
  const [newSubject, setNewSubject] = useState('')
  const [newContent, setNewContent] = useState('')

  const handleAddEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (newSubject && newContent) {
      setEmails([...emails, { subject: newSubject, content: newContent }])
      setNewSubject('')
      setNewContent('')
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <section className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Summer Sale Campaign</h1>
        <div className="space-y-3">
          <p><strong className="text-lg">Company:</strong> Acme Inc.</p>
          <p><strong className="text-lg">Product:</strong> Summer Collection</p>
          <p><strong className="text-lg">Target Audience:</strong> Fashion enthusiasts aged 18-35</p>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Generated Emails</h2>
        <ul className="space-y-6">
          {emails.map((email, index) => (
            <li key={index} className="border p-4 rounded-md">
              <h3 className="font-semibold text-xl mb-2">{email.subject}</h3>
              <p className="text-gray-600">{email.content}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Create New Email</h2>
        <form onSubmit={handleAddEmail} className="space-y-6">
          <div>
            <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
              className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-lg font-medium text-gray-700 mb-2">
              Content
            </label>
            <textarea
              id="content"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              rows={6}
              className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusCircle className="mr-2 h-6 w-6" />
            Add Email
          </button>
        </form>
      </section>
    </div>
  )
}