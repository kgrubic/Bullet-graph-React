import React from 'react';

import BulletGraph from './BulletGraphComponent.js';
import BulletGraphObj from './BulletGraphObj.js';



export function App() {
  
  const aLabel = { label : 'Revenue', valueLabel : 'U.S. $ (1,000s)' };
  const bLabel = { label : 'Profit', valueLabel : '%' };
  const cLabel = { label : 'Avg Orfer Size', valueLabel : 'U.S. $' };
  const dLabel = { label : 'New Customers', valueLabel : 'Count' };
  const eLabel = { label : 'Cust Satisfaction', valueLabel : 'TopRating of 5' };

/**arguments order ranges, poor, average, target, actual, cordinates, label, position, unit **/
  const a = new BulletGraphObj(300,150,220,250,270,6,aLabel,'v','');
  const b = new BulletGraphObj(30,15,20,20,25,6,bLabel,'v','%');
  const c = new BulletGraphObj(600,280,500,550,350,6,cLabel,'v','%');
  const d = new BulletGraphObj(2500,1400,1900,1700,2100,5,dLabel,'v','');
  const e = new BulletGraphObj(5,2,4,4.2,2.5,5,eLabel,'v','');

  const f = new BulletGraphObj(600,350,500,250,200,6,aLabel,'h',''); 
  const g = new BulletGraphObj(30,15,20,20,25,6,bLabel,'h','');
  const h= new BulletGraphObj(600,280,500,550,350,6,cLabel,'h','');
  const i = new BulletGraphObj(2500,1400,1900,1700,2100,5,dLabel,'h','');
  const j = new BulletGraphObj(5,2,4,4.2,2.5,5,eLabel,'h','');

         return (
            <div>
            <BulletGraph buletgraph={a} />
            <BulletGraph buletgraph={b} />
            <BulletGraph buletgraph={c} />
            <BulletGraph buletgraph={d} />
            <BulletGraph buletgraph={e} />


            <BulletGraph buletgraph={f} className="horizontal-bg"/>
            <BulletGraph buletgraph={g} />
            <BulletGraph buletgraph={h} />
            <BulletGraph buletgraph={i} />
            <BulletGraph buletgraph={j} />

            </div>
         );
  }

export default App;