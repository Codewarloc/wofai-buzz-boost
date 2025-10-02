const PlatinumPackage = () => {
  return (
    <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Platinum Package
      </h2>

      {/* List */}
      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
        <li>For a week - ₦25,000</li>
        <li>5 Days - ₦20,000</li>
        <li>2 Weeks - ₦48,000</li>
        <li>3 Weeks - ₦73,000</li>
        <li>1 Month - ₦95,000</li>
      </ul>
    </div>
  );
};

export default PlatinumPackage;
