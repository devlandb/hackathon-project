const userData = {
  income: {
    amount: 0,
    currency: "USD",
    frequency: "monthly",
    description: "Net salary after taxes"
  },
  housing: {
    rentOrMortgage: 0,
    propertyTaxes: 0,
    insurance: 0,
    currency: "USD",
    frequency: "monthly"
  },
  utilities: {
    electricity: 90,
    water: 40,
    gas: 30,
    internet: 50,
    currency: "USD",
    frequency: "monthly"
  },
  insurance: {
    health: 300,
    auto: 150,
    life: 50,
    currency: "USD",
    frequency: "monthly"
  },
  subscriptions: [
    {
      service: "Streaming",
      amount: 15,
      currency: "USD",
      frequency: "monthly"
    },
    {
      service: "Gym",
      amount: 40,
      currency: "USD",
      frequency: "monthly"
    }
  ],
  variableExpenses: {
    groceries: {
      amount: 400,
      currency: "USD",
      frequency: "monthly"
    },
    transportation: {
      fuel: 150,
      maintenance: 50,
      currency: "USD",
      frequency: "monthly"
    },
    entertainment: {
      diningOut: 200,
      leisure: 100,
      currency: "USD",
      frequency: "monthly"
    },
    miscellaneous: {
      amount: 100,
      currency: "USD",
      frequency: "monthly"
    }
  },
  debts: {
    loanPayments: [
      {
        type: "Student Loan",
        monthlyPayment: 250,
        currency: "USD",
        remainingBalance: 15000,
        interestRate: 4.5
      },
      {
        type: "Credit Card",
        monthlyPayment: 100,
        currency: "USD",
        remainingBalance: 5000,
        interestRate: 18.0
      }
    ]
  },
  savingsAndInvestments: {
    emergencyFund: {
      currentBalance: 3000,
      targetAmount: 10000,
      currency: "USD"
    },
    shortTermGoals: [
      {
        goal: "Vacation",
        targetAmount: 2000,
        currency: "USD",
        timeFrame: "1 year"
      }
    ],
    longTermGoals: [
      {
        goal: "Retirement",
        targetAmount: 500000,
        currency: "USD",
        timeFrame: "30 years"
      }
    ]
  },
  irregularExpenses: {
    annualCosts: {
      taxes: 1200,
      insurancePremiums: 600,
      currency: "USD"
    },
    largePurchases: [
      {
        item: "New Car",
        estimatedCost: 25000,
        currency: "USD",
        plannedPurchaseDate: "2026-05-01"
      },
      {
        item: "Home Renovation",
        estimatedCost: 15000,
        currency: "USD",
        plannedPurchaseDate: "2025-12-15"
      }
    ]
  },
  financialGoals: {
    shortTerm: "Increase emergency fund and reduce credit card debt",
    longTerm: "Save for retirement and future home purchase"
  }
};
const selectedUserData = {
  income: userData.income,
  rent: userData.housing.rentOrMortgage,
  gas: userData.utilities.gas,
  groceries: userData.variableExpenses.groceries
};
module.exports = selectedUserData;
