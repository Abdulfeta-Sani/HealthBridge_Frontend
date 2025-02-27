const Profile = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
        <p className="text-gray-600 mt-2">Update your personal information and preferences.</p>
  
        {/* Profile Form */}
        <form className="mt-6 space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Full Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="John Doe" />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded-lg" placeholder="john.doe@example.com" />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Phone Number</label>
            <input type="tel" className="w-full p-2 border rounded-lg" placeholder="+251 912 345678" />
          </div>
          <button type="submit" className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700">
            Save Changes
          </button>
        </form>
      </div>
    );
  };
  
  export default Profile;
  