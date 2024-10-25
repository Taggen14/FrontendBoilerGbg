import { useState } from 'react'
import { ArrowLeft, Save, Clock, Trash2, Send, X, Plus, Download } from 'lucide-react'

export function GeneratedEmail() {
  const [recipients, setRecipients] = useState(['jane.doe@example.com', 'bob.smith@example.com'])
  const [newRecipient, setNewRecipient] = useState('')

  const addRecipient = () => {
    if (newRecipient && !recipients.includes(newRecipient)) {
      setRecipients([...recipients, newRecipient])
      setNewRecipient('')
    }
  }

  const removeRecipient = (email: string) => {
    setRecipients(recipients.filter(r => r !== email))
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Email Preview</h1>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Campaign
          </button>
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 flex items-center">
            <Save className="w-4 h-4 mr-1" />
            Save Draft
          </button>
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            Schedule
          </button>
          <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center">
            <Trash2 className="w-4 h-4 mr-1" />
            Delete
          </button>
          <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center">
            <Send className="w-4 h-4 mr-1" />
            Send Email
          </button>
        </div>
      </header>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Exciting New Product Launch</h2>
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
          <div>
            <p className="font-medium">John Doe <span className="text-gray-500">john.doe@example.com</span></p>
            <p className="text-sm text-gray-500">To: team@ourcompany.com</p>
          </div>
        </div>
        <div className="border-t border-b py-4 my-4 text-gray-600 min-h-[200px]">
          Email content goes here...
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Recipients</h3>
        <div className="flex mb-4">
          <input
            type="email"
            value={newRecipient}
            onChange={(e) => setNewRecipient(e.target.value)}
            placeholder="Enter email address"
            className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addRecipient}
            className="px-3 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Plus className="w-5 h-5" />
          </button>
          <button className="ml-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Download className="w-5 h-5" />
          </button>
        </div>
        <ul className="space-y-2">
          {recipients.map((email, index) => (
            <li key={index} className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-md">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                <span>{email}</span>
              </div>
              <button
                onClick={() => removeRecipient(email)}
                className="text-gray-500 hover:text-red-500 focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}