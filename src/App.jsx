import { Button } from './assets/components/Button';
import { Metrics } from './assets/components/Metrics';
import { NavBar } from './assets/components/NavBar';
import style from './Styles/App.module.css'
import './Styles/global.css'



export function App() {
  return (
    <div>
    <div className={style.mainContent}>
      <div className={style.tittleMain}>
        <h1>Your coffee</h1>
          <h1>Your vibe</h1>
          <h1>Your energy
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget. </p>
        <Button />
      </div>
      <div className={style.imageMain}>
        <img src="../public/img/Hero_images.png" alt="" />
      </div>
    </div>
    <div className='navBar-content'>
      <NavBar />
    </div>
    <Metrics />
    </div>
  );
}
