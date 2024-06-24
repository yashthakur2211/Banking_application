import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';


const Home = () => {
  const loggedIn = { firstName: 'Yash', lastname: 'Thakur' , email:'yashofficial2211@gmail.com' };
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transaction efficiently."/>
          
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1500.00}/>
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSideBar
      user={loggedIn}
      transactions={[]}
      banks={[{ currentBalance: 500.00}, {currentBalance:125.00}]}/>
    </section>
  )
}

export default Home
