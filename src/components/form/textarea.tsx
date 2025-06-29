

export default function TextArea() {
    return (
        <div className="pt-6">
            <label htmlFor="Notes" className="block text-md font-medium text-gray-600">پاسخ بلند</label>
            <textarea
                id="Notes"
                className="w-full resize-none mt-2 border-2 border-gray-200 px-3 py-2 rounded-lg focus:outline-none focus:border-primary-100 focus:ring-1 focus:ring-primary-100"
            rows={4}
            ></textarea>
        </div>
    )
}