import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import Header from '../Header/Header';
import Footer from '../Footer/Footer';
//import BackgroundImage from '../BackgroundImage/BackGroundImage';
//import Header01 from '../Header01/Header01';
import Header03 from '../Header03/Header03';
//import Header02 from '../Headero2/Header02';
import './expense.css'

export default function ExpensePage() {
  const expenseCategories = [
    { category: 'Housing', items: ['Rent', 'Mortgage', 'Utilities (Electricity, Water, Internet)'] },
    { category: 'Transportation', items: ['Fuel', 'Vehicle Maintenance', 'Public Transit', 'Parking'] },
    { category: 'Groceries', items: ['Food', 'Beverages', 'Household Supplies'] },
    { category: 'Dining Out', items: ['Restaurants', 'Coffee Shops', 'Takeout'] },
    { category: 'Health', items: ['Medical Bills', 'Insurance', 'Fitness Memberships'] },
    { category: 'Entertainment', items: ['Movies', 'Subscriptions (Netflix, Spotify)', 'Events'] },
    { category: 'Education', items: ['Tuition Fees', 'Books', 'Courses'] },
    { category: 'Personal Care', items: ['Clothing', 'Beauty Products', 'Salon Visits'] },
    { category: 'Debt Payments', items: ['Loan Repayments', 'Credit Card Bills'] },
    { category: 'Savings & Investments', items: ['Emergency Fund', 'Stocks', 'Retirement'] },
    { category: 'Gifts & Donations', items: ['Charity', 'Birthday Presents'] },
    { category: 'Miscellaneous', items: ['Unplanned or Uncategorized Expenses'] },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate(); // Use navigate hook for programmatic navigation

  const handleCategoryChange = (e) => {
    const category = expenseCategories.find((cat) => cat.category === e.target.value);
    setSelectedCategory(category);
  };

  return (
    <div>
      <Header03/>
      <div className="expense-container">
  <div className="content-box">
    <h2>Expense Categories</h2>

    {/* Dropdown for Main Categories */}
    <div className="dropdown-container">
      <label htmlFor="category-select">Select a Category:</label>
      <select id="category-select" onChange={handleCategoryChange}>
        <option value="" disabled selected>-- Choose a Category --</option>
        {expenseCategories.map((category, index) => (
          <option key={index} value={category.category}>{category.category}</option>
        ))}
      </select>
    </div>

    {/* Buttons for Subcategories */}
    {selectedCategory && (
      <div className="subcategory-container">
        <h3>{selectedCategory.category}</h3>
        <div className="button-group">
          {selectedCategory.items.map((item, idx) => (
            <button key={idx} className="subcategory-button" 
              onClick={() => navigate('/expense/save', { state: { category: item } })}>
              {item}
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
</div>

      <Footer />
    </div>
  );
}
