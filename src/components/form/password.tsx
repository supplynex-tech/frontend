export default function PasswordInput() {
    return (
        <div className="pt-6">
            <label htmlFor="password" className="block text-md font-medium text-gray-600">رمز عبور</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required className="w-full mt-2 border-2 border-gray-200 px-3 py-2 rounded-lg focus:outline-none focus:border-primary-100 focus:ring-1 focus:ring-primary-100" />
        </div>
    )
}