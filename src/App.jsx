import { useState } from 'react'
import Plan from './components/Plan';
import './App.css'

function App() {
  const [budget, setBudget] = useState(2000);
  const [remaining, setRemaining] = useState(2000);
  const [plans, setPlans] = useState([]);
  const [spent, setSpent] = useState(0);
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);

  function updateExpense(cst, n) {
    let temp = [...plans];
    temp.push({
      name : n,
      cost : cst
    });
    setPlans(temp);
    
    setRemaining(remaining - cst);
    setSpent(spent + cst);
    setName("");
    setCost(0);
  }
  
  function deletePlan(index) {
    setRemaining(remaining + plans[index].cost);
    setSpent(spent - plans[index].cost);

    let temp = [...plans];
    temp.splice(index, 1);
    setPlans(temp);
  }

  return(
    <div className='w-5/6 mx-auto flex flex-col gap-4'>
      <p className='text-4xl font-semibold'>My Budget Planner</p>
      <div className='flex justify-between text-2xl font-semibold'>
        <p className='text-slate-600 bg-slate-100 border-[0.1rem] border-slate-200 py-3 px-5 rounded-lg'>Budget: {budget}</p>
        <p className='text-green-600 bg-green-100 border-[0.1rem] border-green-200 py-3 px-5 rounded-lg'>Remaining: {remaining}</p>
        <p className='text-blue-600 bg-blue-100 border-[0.1rem] border-blue-200 py-3 px-5 rounded-lg'>Spent so far: {spent}</p>
      </div>
      <p className='text-3xl font-semibold'>Expenses</p>
      {
        (plans.length > 0) ? 
        <div className='flex flex-col gap-4'>
          {
            plans.map((plan, index) => {
              return <Plan name={plan.name} price={plan.cost} del={deletePlan} idx={index} key={index} />
            })
          }
        </div> : <p className='text-3xl font-semibold text-green-500'>Add data to list.....</p>
      }
      <p className='text-4xl font-semibold'>Add Expenses</p>
      <div className='flex justify-between gap-10'>
        <div className='w-full'>
          <p>Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-[0.1rem] border-slate-200 p-2 rounded-lg w-full' 
            type="text" 
          />
        </div>
        <div className='w-full'>
          <p>Cost</p>
          <input
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            className='border-[0.1rem] border-slate-200 p-2 rounded-lg w-full' 
            type="number" 
          />
        </div>
      </div>
      <button 
        onClick={() => updateExpense(cost, name)}
        className='bg-blue-500 text-white p-2 rounded-lg w-1/6 mx-auto mt-5'
      >
        Save
      </button>
    </div>
  )
}

export default App
